"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import { services } from "../components/site-data";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Partial<Record<ContactField, string>>;
};

type ContactField =
  | "name"
  | "telefon"
  | "email"
  | "ort"
  | "service"
  | "beschreibung"
  | "datenschutz";

type RateLimitEntry = { count: number; resetAt: number };

const allowedServices = new Set(services.map((service) => service.title));
const rateLimitWindowMs = 15 * 60 * 1000;
const maxRequestsPerWindow = 5;
const globalForRateLimit = globalThis as typeof globalThis & {
  hnfixContactRateLimits?: Map<string, RateLimitEntry>;
};
const rateLimits =
  globalForRateLimit.hnfixContactRateLimits ?? new Map<string, RateLimitEntry>();

globalForRateLimit.hnfixContactRateLimits = rateLimits;

function getString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function validate(formData: FormData) {
  const values = {
    name: getString(formData, "name"),
    telefon: getString(formData, "telefon"),
    email: getString(formData, "email").toLowerCase(),
    ort: getString(formData, "ort"),
    service: getString(formData, "service"),
    beschreibung: getString(formData, "beschreibung"),
    datenschutz: getString(formData, "datenschutz"),
  };
  const errors: Partial<Record<ContactField, string>> = {};

  if (values.name.length < 2 || values.name.length > 100) {
    errors.name = "Bitte geben Sie einen gültigen Namen ein.";
  }
  if (
    values.telefon &&
    (!/^[+()\d\s./-]{6,30}$/.test(values.telefon) || values.telefon.length > 30)
  ) {
    errors.telefon = "Bitte prüfen Sie die Telefonnummer.";
  }
  if (
    values.email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)
  ) {
    errors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
  }
  if (values.ort.length < 3 || values.ort.length > 100) {
    errors.ort = "Bitte geben Sie PLZ und Ort ein.";
  }
  if (!allowedServices.has(values.service)) {
    errors.service = "Bitte wählen Sie eine Leistung aus.";
  }
  if (values.beschreibung.length < 10 || values.beschreibung.length > 3000) {
    errors.beschreibung =
      "Bitte beschreiben Sie Ihr Anliegen mit 10 bis 3.000 Zeichen.";
  }
  if (values.datenschutz !== "akzeptiert") {
    errors.datenschutz = "Bitte bestätigen Sie die Datenverarbeitung.";
  }

  return { values, errors };
}

async function getClientIdentifier() {
  const requestHeaders = await headers();
  const forwardedFor = process.env.VERCEL
    ? requestHeaders.get("x-vercel-forwarded-for")
    : requestHeaders.get("x-forwarded-for");
  return forwardedFor?.split(",")[0]?.trim() || "unknown";
}

function isRateLimited(identifier: string) {
  const now = Date.now();
  const current = rateLimits.get(identifier);
  if (!current || current.resetAt <= now) {
    rateLimits.set(identifier, { count: 1, resetAt: now + rateLimitWindowMs });
    return false;
  }
  current.count += 1;
  return current.count > maxRequestsPerWindow;
}

export async function submitContactForm(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const website = getString(formData, "website");
  const startedAt = Number(getString(formData, "startedAt"));
  const elapsed = Date.now() - startedAt;

  if (website || !Number.isFinite(startedAt) || elapsed < 2000 || elapsed > 7_200_000) {
    return {
      status: "error",
      message: "Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut.",
    };
  }

  const { values, errors } = validate(formData);
  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Bitte prüfen Sie die markierten Felder.", errors };
  }

  const clientIdentifier = await getClientIdentifier();
  if (isRateLimited(clientIdentifier)) {
    return {
      status: "error",
      message: "Zu viele Anfragen in kurzer Zeit. Bitte versuchen Sie es später erneut.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_TO_EMAIL;
  const sender = process.env.CONTACT_FROM_EMAIL;
  const submittedId = getString(formData, "submissionId");
  const submissionId = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
    submittedId,
  )
    ? submittedId
    : crypto.randomUUID();
  if (!apiKey || !recipient || !sender) {
    console.error("Contact form email configuration is incomplete.");
    return {
      status: "error",
      message: "Der Versand ist momentan nicht verfügbar. Bitte versuchen Sie es später erneut.",
    };
  }

  const resend = new Resend(apiKey);
  const safe = Object.fromEntries(
    Object.entries(values).map(([key, value]) => [key, escapeHtml(value)]),
  ) as typeof values;
  const { error } = await resend.emails.send(
    {
      from: sender,
      to: recipient,
      replyTo: values.email,
      subject: `Neue HNFix-Anfrage: ${values.service}`,
      html: `
        <h1>Neue Anfrage über hnfix.de</h1>
        <p><strong>Name:</strong> ${safe.name}</p>
        <p><strong>Telefon:</strong> ${safe.telefon || "Nicht angegeben"}</p>
        <p><strong>E-Mail:</strong> ${safe.email}</p>
        <p><strong>PLZ / Ort:</strong> ${safe.ort}</p>
        <p><strong>Service:</strong> ${safe.service}</p>
        <p><strong>Beschreibung:</strong><br>${safe.beschreibung.replaceAll("\n", "<br>")}</p>
      `,
      text: [
        "Neue Anfrage über hnfix.de",
        `Name: ${values.name}`,
        `Telefon: ${values.telefon || "Nicht angegeben"}`,
        `E-Mail: ${values.email}`,
        `PLZ / Ort: ${values.ort}`,
        `Service: ${values.service}`,
        `Beschreibung: ${values.beschreibung}`,
      ].join("\n"),
    },
    { idempotencyKey: `hnfix-contact-${submissionId}` },
  );

  if (error) {
    console.error("Contact form delivery failed:", error.name);
    return {
      status: "error",
      message: "Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut.",
    };
  }

  return {
    status: "success",
    message: "Vielen Dank! Ihre Anfrage wurde erfolgreich gesendet.",
  };
}
