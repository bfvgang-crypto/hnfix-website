"use server";

import { headers } from "next/headers";
import { Resend } from "resend";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Partial<Record<ContactField, string>>;
};

type ContactField =
  | "plz"
  | "ort"
  | "objekttyp"
  | "wohnflaeche"
  | "zimmer"
  | "etage"
  | "aufzug"
  | "zustand"
  | "nebenraeume"
  | "baujahr"
  | "leistungen"
  | "beschreibung"
  | "name"
  | "email"
  | "telefon"
  | "termin"
  | "photos"
  | "datenschutz";

type RateLimitEntry = { count: number; resetAt: number };
type PhotoAttachment = { filename: string; content: string };

const allowedObjectTypes = new Set([
  "Wohnung",
  "Einfamilienhaus",
  "Mehrfamilienhaus",
  "Gewerbeobjekt",
  "Sonstiges",
]);
const allowedElevatorOptions = new Set(["Ja", "Nein"]);
const allowedConditions = new Set(["Wenig", "Normal", "Voll", "Sehr voll"]);
const allowedAdditionalSpaces = new Set(["Keller", "Dachboden", "Garage"]);
const allowedServices = new Set([
  "Entrümpelung",
  "Demontage Möbel",
  "Demontage Küche",
  "Sperrmüll",
  "Endreinigung",
  "Sonstiges",
]);
const allowedPhotoTypes = new Set(["image/jpeg", "image/png", "image/webp"]);
const maxPhotoCount = 8;
const maxPhotoSize = 2 * 1024 * 1024;
const maxTotalPhotoSize = 10 * 1024 * 1024;
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

function getStrings(formData: FormData, key: string) {
  return formData
    .getAll(key)
    .filter((value): value is string => typeof value === "string")
    .map((value) => value.trim())
    .filter(Boolean);
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
    plz: getString(formData, "plz"),
    ort: getString(formData, "ort"),
    objekttyp: getString(formData, "objekttyp"),
    wohnflaeche: getString(formData, "wohnflaeche"),
    zimmer: getString(formData, "zimmer"),
    etage: getString(formData, "etage"),
    aufzug: getString(formData, "aufzug"),
    zustand: getString(formData, "zustand"),
    nebenraeume: getStrings(formData, "nebenraeume"),
    baujahr: getString(formData, "baujahr"),
    leistungen: getStrings(formData, "leistungen"),
    beschreibung: getString(formData, "beschreibung"),
    name: getString(formData, "name"),
    email: getString(formData, "email").toLowerCase(),
    telefon: getString(formData, "telefon"),
    termin: getString(formData, "termin"),
    datenschutz: getString(formData, "datenschutz"),
  };
  const errors: Partial<Record<ContactField, string>> = {};
  const wohnflaeche = Number(values.wohnflaeche);
  const zimmer = Number(values.zimmer);
  const baujahr = Number(values.baujahr);
  const latestBuildYear = new Date().getFullYear() + 1;

  if (!/^\d{5}$/.test(values.plz)) {
    errors.plz = "Bitte geben Sie eine gültige fünfstellige PLZ ein.";
  }
  if (values.ort.length < 2 || values.ort.length > 100) {
    errors.ort = "Bitte geben Sie einen gültigen Ort ein.";
  }
  if (!allowedObjectTypes.has(values.objekttyp)) {
    errors.objekttyp = "Bitte wählen Sie einen Objekttyp aus.";
  }
  if (!Number.isFinite(wohnflaeche) || wohnflaeche < 1 || wohnflaeche > 5000) {
    errors.wohnflaeche = "Bitte geben Sie eine gültige Wohnfläche ein.";
  }
  if (!Number.isFinite(zimmer) || zimmer < 1 || zimmer > 100) {
    errors.zimmer = "Bitte geben Sie eine gültige Zimmeranzahl ein.";
  }
  if (values.etage.length < 1 || values.etage.length > 30) {
    errors.etage = "Bitte geben Sie die Etage an.";
  }
  if (!allowedElevatorOptions.has(values.aufzug)) {
    errors.aufzug = "Bitte wählen Sie Ja oder Nein aus.";
  }
  if (!allowedConditions.has(values.zustand)) {
    errors.zustand = "Bitte wählen Sie den Zustand aus.";
  }
  if (values.nebenraeume.some((value) => !allowedAdditionalSpaces.has(value))) {
    errors.nebenraeume = "Bitte prüfen Sie die ausgewählten Nebenräume.";
  }
  if (
    values.baujahr &&
    (!/^\d{4}$/.test(values.baujahr) || baujahr < 1800 || baujahr > latestBuildYear)
  ) {
    errors.baujahr = "Bitte geben Sie ein gültiges Baujahr ein.";
  }
  if (
    values.leistungen.length === 0 ||
    values.leistungen.some((value) => !allowedServices.has(value))
  ) {
    errors.leistungen = "Bitte wählen Sie mindestens eine Leistung aus.";
  }
  if (values.beschreibung.length < 10 || values.beschreibung.length > 3000) {
    errors.beschreibung =
      "Bitte beschreiben Sie Ihr Anliegen mit 10 bis 3.000 Zeichen.";
  }
  if (values.name.length < 2 || values.name.length > 100) {
    errors.name = "Bitte geben Sie einen gültigen Namen ein.";
  }
  if (
    values.email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)
  ) {
    errors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
  }
  if (!/^[+()\d\s./-]{6,30}$/.test(values.telefon)) {
    errors.telefon = "Bitte geben Sie eine gültige Telefonnummer ein.";
  }
  if (values.termin && !/^\d{4}-\d{2}-\d{2}$/.test(values.termin)) {
    errors.termin = "Bitte prüfen Sie den gewünschten Termin.";
  }
  if (values.datenschutz !== "akzeptiert") {
    errors.datenschutz = "Bitte bestätigen Sie die Datenverarbeitung.";
  }

  return { values, errors };
}

function detectPhotoType(bytes: Uint8Array) {
  if (bytes.length >= 3 && bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) {
    return "image/jpeg";
  }
  if (
    bytes.length >= 8 &&
    [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a].every(
      (byte, index) => bytes[index] === byte,
    )
  ) {
    return "image/png";
  }
  if (
    bytes.length >= 12 &&
    String.fromCharCode(...bytes.slice(0, 4)) === "RIFF" &&
    String.fromCharCode(...bytes.slice(8, 12)) === "WEBP"
  ) {
    return "image/webp";
  }
  return null;
}

function safePhotoName(originalName: string, mimeType: string, index: number) {
  const extension = mimeType === "image/jpeg" ? "jpg" : mimeType.split("/")[1];
  const baseName = originalName
    .replace(/\.[^.]+$/, "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9_-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
  return `${baseName || `foto-${index + 1}`}.${extension}`;
}

async function validatePhotos(formData: FormData): Promise<{
  error?: string;
  attachments?: PhotoAttachment[];
}> {
  const photos = formData
    .getAll("photos")
    .filter((value): value is File => value instanceof File && value.size > 0);

  if (photos.length > maxPhotoCount) {
    return { error: `Bitte laden Sie höchstens ${maxPhotoCount} Fotos hoch.` };
  }

  const totalSize = photos.reduce((sum, photo) => sum + photo.size, 0);
  if (totalSize > maxTotalPhotoSize) {
    return { error: "Die Fotos dürfen zusammen höchstens 10 MB groß sein." };
  }

  const attachments: PhotoAttachment[] = [];
  for (const [index, photo] of photos.entries()) {
    if (!allowedPhotoTypes.has(photo.type)) {
      return { error: "Erlaubt sind ausschließlich JPG-, PNG- und WebP-Dateien." };
    }
    if (photo.size > maxPhotoSize) {
      return { error: "Jedes Foto darf höchstens 2 MB groß sein." };
    }

    const bytes = new Uint8Array(await photo.arrayBuffer());
    const detectedType = detectPhotoType(bytes);
    if (!detectedType || detectedType !== photo.type) {
      return { error: "Mindestens eine Bilddatei ist ungültig oder beschädigt." };
    }

    attachments.push({
      filename: safePhotoName(photo.name, detectedType, index),
      content: Buffer.from(bytes).toString("base64"),
    });
  }

  return { attachments };
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

function displayList(values: string[]) {
  return values.length ? values.join(", ") : "Nicht angegeben";
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
  const photoResult = await validatePhotos(formData);
  if (photoResult.error) {
    errors.photos = photoResult.error;
  }
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

  const safe = {
    ...values,
    plz: escapeHtml(values.plz),
    ort: escapeHtml(values.ort),
    objekttyp: escapeHtml(values.objekttyp),
    wohnflaeche: escapeHtml(values.wohnflaeche),
    zimmer: escapeHtml(values.zimmer),
    etage: escapeHtml(values.etage),
    aufzug: escapeHtml(values.aufzug),
    zustand: escapeHtml(values.zustand),
    nebenraeume: values.nebenraeume.map(escapeHtml),
    baujahr: escapeHtml(values.baujahr),
    leistungen: values.leistungen.map(escapeHtml),
    beschreibung: escapeHtml(values.beschreibung),
    name: escapeHtml(values.name),
    email: escapeHtml(values.email),
    telefon: escapeHtml(values.telefon),
    termin: escapeHtml(values.termin),
  };
  const attachments = photoResult.attachments ?? [];
  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send(
    {
      from: sender,
      to: recipient,
      replyTo: values.email,
      subject: `Neue HNFix-Angebotsanfrage aus ${values.plz} ${values.ort}`,
      html: `
        <h1>Neue Angebotsanfrage über hnfix.de</h1>
        <h2>Angaben zum Objekt</h2>
        <p><strong>PLZ / Ort:</strong> ${safe.plz} ${safe.ort}</p>
        <p><strong>Objekttyp:</strong> ${safe.objekttyp}</p>
        <p><strong>Wohnfläche:</strong> ${safe.wohnflaeche} m²</p>
        <p><strong>Anzahl Zimmer:</strong> ${safe.zimmer}</p>
        <p><strong>Etage:</strong> ${safe.etage}</p>
        <p><strong>Aufzug vorhanden:</strong> ${safe.aufzug}</p>
        <p><strong>Zustand:</strong> ${safe.zustand}</p>
        <p><strong>Keller / Dachboden / Garage:</strong> ${displayList(safe.nebenraeume)}</p>
        <p><strong>Baujahr:</strong> ${safe.baujahr || "Nicht angegeben"}</p>
        <p><strong>Gewünschte Leistungen:</strong> ${displayList(safe.leistungen)}</p>
        <p><strong>Beschreibung / Hinweise:</strong><br>${safe.beschreibung.replaceAll("\n", "<br>")}</p>
        <h2>Kontaktdaten</h2>
        <p><strong>Name:</strong> ${safe.name}</p>
        <p><strong>E-Mail:</strong> ${safe.email}</p>
        <p><strong>Telefon:</strong> ${safe.telefon}</p>
        <p><strong>Gewünschter Termin:</strong> ${safe.termin || "Nicht angegeben"}</p>
        <p><strong>Angehängte Fotos:</strong> ${attachments.length}</p>
      `,
      text: [
        "Neue Angebotsanfrage über hnfix.de",
        "",
        "Angaben zum Objekt",
        `PLZ / Ort: ${values.plz} ${values.ort}`,
        `Objekttyp: ${values.objekttyp}`,
        `Wohnfläche: ${values.wohnflaeche} m²`,
        `Anzahl Zimmer: ${values.zimmer}`,
        `Etage: ${values.etage}`,
        `Aufzug vorhanden: ${values.aufzug}`,
        `Zustand: ${values.zustand}`,
        `Keller / Dachboden / Garage: ${displayList(values.nebenraeume)}`,
        `Baujahr: ${values.baujahr || "Nicht angegeben"}`,
        `Gewünschte Leistungen: ${displayList(values.leistungen)}`,
        `Beschreibung / Hinweise: ${values.beschreibung}`,
        "",
        "Kontaktdaten",
        `Name: ${values.name}`,
        `E-Mail: ${values.email}`,
        `Telefon: ${values.telefon}`,
        `Gewünschter Termin: ${values.termin || "Nicht angegeben"}`,
        `Angehängte Fotos: ${attachments.length}`,
      ].join("\n"),
      attachments,
    },
    { idempotencyKey: `hnfix-quote-${submissionId}` },
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
    message: "Vielen Dank! Ihre Angebotsanfrage wurde erfolgreich gesendet.",
  };
}
