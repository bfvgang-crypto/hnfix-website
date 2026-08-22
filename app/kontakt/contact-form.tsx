"use client";

import { useActionState, useState } from "react";
import { services } from "../components/site-data";
import { submitContactForm, type ContactFormState } from "./actions";

const initialState: ContactFormState = { status: "idle", message: "" };

function FieldError({ message }: { message?: string }) {
  return message ? <span className="fieldError">{message}</span> : null;
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialState,
  );
  const [startedAt] = useState(() => Date.now().toString());
  const [submissionId] = useState(() => crypto.randomUUID());

  if (state.status === "success") {
    return (
      <div className="contactForm formSuccess" role="status">
        <h2>Anfrage gesendet</h2>
        <p>{state.message}</p>
        <p>Wir melden uns so schnell wie möglich bei Ihnen.</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="contactForm" noValidate>
      <input type="hidden" name="startedAt" value={startedAt} />
      <input type="hidden" name="submissionId" value={submissionId} />

      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <label htmlFor="name">
        <span className="labelText">Name <span aria-hidden="true">*</span></span>
        <input id="name" name="name" type="text" autoComplete="name" minLength={2} maxLength={100} required aria-invalid={Boolean(state.errors?.name)} />
        <FieldError message={state.errors?.name} />
      </label>

      <label htmlFor="telefon">
        <span className="labelText">Telefon</span>
        <input id="telefon" name="telefon" type="tel" autoComplete="tel" maxLength={30} placeholder="Ihre Telefonnummer" aria-invalid={Boolean(state.errors?.telefon)} />
        <FieldError message={state.errors?.telefon} />
      </label>

      <label htmlFor="email">
        <span className="labelText">E-Mail <span aria-hidden="true">*</span></span>
        <input id="email" name="email" type="email" autoComplete="email" maxLength={254} placeholder="ihre@email.de" required aria-invalid={Boolean(state.errors?.email)} />
        <FieldError message={state.errors?.email} />
      </label>

      <label htmlFor="ort">
        <span className="labelText">PLZ / Ort <span aria-hidden="true">*</span></span>
        <input id="ort" name="ort" type="text" autoComplete="postal-code" minLength={3} maxLength={100} placeholder="74072 Heilbronn" required aria-invalid={Boolean(state.errors?.ort)} />
        <FieldError message={state.errors?.ort} />
      </label>

      <label htmlFor="service">
        <span className="labelText">Service auswählen <span aria-hidden="true">*</span></span>
        <select id="service" name="service" defaultValue="" required aria-invalid={Boolean(state.errors?.service)}>
          <option value="" disabled>Bitte auswählen</option>
          {services.map((service) => (
            <option key={service.title} value={service.title}>{service.title}</option>
          ))}
        </select>
        <FieldError message={state.errors?.service} />
      </label>

      <label htmlFor="beschreibung">
        <span className="labelText">Beschreibung <span aria-hidden="true">*</span></span>
        <textarea id="beschreibung" name="beschreibung" rows={5} minLength={10} maxLength={3000} placeholder="Was soll erledigt werden?" required aria-invalid={Boolean(state.errors?.beschreibung)} />
        <FieldError message={state.errors?.beschreibung} />
      </label>

      <p className="photoNote">Fotos können Sie uns nach unserer Antwort sicher per E-Mail zusenden.</p>

      <label className="consentField" htmlFor="datenschutz">
        <input id="datenschutz" name="datenschutz" type="checkbox" value="akzeptiert" required aria-invalid={Boolean(state.errors?.datenschutz)} />
        <span>Ich stimme der Verarbeitung meiner Angaben zur Bearbeitung dieser Anfrage zu. <span aria-hidden="true">*</span></span>
      </label>
      <FieldError message={state.errors?.datenschutz} />

      {state.status === "error" && (
        <p className="formMessage formError" role="alert">{state.message}</p>
      )}

      <button type="submit" disabled={pending}>
        {pending ? "Anfrage wird gesendet …" : "Anfrage senden"}
      </button>
      <p className="requiredNote">* Pflichtfeld</p>
    </form>
  );
}
