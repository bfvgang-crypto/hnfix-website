"use client";

import { useActionState, useState, type ChangeEvent } from "react";
import { submitContactForm, type ContactFormState } from "./actions";

const initialState: ContactFormState = { status: "idle", message: "" };
const objectTypes = [
  "Wohnung",
  "Einfamilienhaus",
  "Mehrfamilienhaus",
  "Gewerbeobjekt",
  "Sonstiges",
] as const;
const conditionOptions = ["Wenig", "Normal", "Voll", "Sehr voll"] as const;
const additionalSpaceOptions = ["Keller", "Dachboden", "Garage"] as const;
const serviceOptions = [
  "Entrümpelung",
  "Demontage Möbel",
  "Demontage Küche",
  "Sperrmüll",
  "Endreinigung",
  "Sonstiges",
] as const;
const allowedPhotoTypes = new Set(["image/jpeg", "image/png", "image/webp"]);
const maxPhotoCount = 8;
const maxPhotoSize = 2 * 1024 * 1024;
const maxTotalPhotoSize = 10 * 1024 * 1024;

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
  const [photoError, setPhotoError] = useState("");
  const [photoSummary, setPhotoSummary] = useState("");

  function handlePhotos(event: ChangeEvent<HTMLInputElement>) {
    const files = Array.from(event.currentTarget.files ?? []);
    const totalSize = files.reduce((sum, file) => sum + file.size, 0);
    let error = "";

    if (files.length > maxPhotoCount) {
      error = `Bitte wählen Sie höchstens ${maxPhotoCount} Fotos aus.`;
    } else if (files.some((file) => !allowedPhotoTypes.has(file.type))) {
      error = "Erlaubt sind ausschließlich JPG-, PNG- und WebP-Dateien.";
    } else if (files.some((file) => file.size > maxPhotoSize)) {
      error = "Jedes Foto darf höchstens 2 MB groß sein.";
    } else if (totalSize > maxTotalPhotoSize) {
      error = "Die Fotos dürfen zusammen höchstens 10 MB groß sein.";
    }

    setPhotoError(error);
    setPhotoSummary(error || files.length === 0 ? "" : `${files.length} Foto${files.length === 1 ? "" : "s"} ausgewählt`);
    if (error) {
      event.currentTarget.value = "";
    }
  }

  if (state.status === "success") {
    return (
      <div className="contactForm quoteForm formSuccess" role="status">
        <h2>Anfrage gesendet</h2>
        <p>{state.message}</p>
        <p>Wir prüfen Ihre Angaben und melden uns so schnell wie möglich bei Ihnen.</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="contactForm quoteForm" noValidate>
      <input type="hidden" name="startedAt" value={startedAt} />
      <input type="hidden" name="submissionId" value={submissionId} />

      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <fieldset className="quoteFormSection">
        <legend><span className="sectionNumber">1</span> Angaben zum Objekt</legend>
        <div className="quoteFormGrid">
          <label className="formField" htmlFor="plz">
            <span className="labelText">PLZ <span aria-hidden="true">*</span></span>
            <input id="plz" name="plz" type="text" inputMode="numeric" autoComplete="postal-code" pattern="[0-9]{5}" maxLength={5} placeholder="74072" required aria-invalid={Boolean(state.errors?.plz)} />
            <FieldError message={state.errors?.plz} />
          </label>

          <label className="formField" htmlFor="ort">
            <span className="labelText">Ort <span aria-hidden="true">*</span></span>
            <input id="ort" name="ort" type="text" autoComplete="address-level2" minLength={2} maxLength={100} placeholder="Heilbronn" required aria-invalid={Boolean(state.errors?.ort)} />
            <FieldError message={state.errors?.ort} />
          </label>

          <label className="formField" htmlFor="objekttyp">
            <span className="labelText">Objekttyp <span aria-hidden="true">*</span></span>
            <select id="objekttyp" name="objekttyp" defaultValue="" required aria-invalid={Boolean(state.errors?.objekttyp)}>
              <option value="" disabled>Bitte auswählen</option>
              {objectTypes.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
            <FieldError message={state.errors?.objekttyp} />
          </label>

          <label className="formField" htmlFor="wohnflaeche">
            <span className="labelText">Wohnfläche in m² <span aria-hidden="true">*</span></span>
            <input id="wohnflaeche" name="wohnflaeche" type="number" inputMode="decimal" min={1} max={5000} placeholder="z. B. 85" required aria-invalid={Boolean(state.errors?.wohnflaeche)} />
            <FieldError message={state.errors?.wohnflaeche} />
          </label>

          <label className="formField" htmlFor="zimmer">
            <span className="labelText">Anzahl Zimmer <span aria-hidden="true">*</span></span>
            <input id="zimmer" name="zimmer" type="number" inputMode="decimal" min={1} max={100} step="0.5" placeholder="z. B. 3" required aria-invalid={Boolean(state.errors?.zimmer)} />
            <FieldError message={state.errors?.zimmer} />
          </label>

          <label className="formField" htmlFor="etage">
            <span className="labelText">Etage <span aria-hidden="true">*</span></span>
            <input id="etage" name="etage" type="text" maxLength={30} placeholder="z. B. EG oder 2. OG" required aria-invalid={Boolean(state.errors?.etage)} />
            <FieldError message={state.errors?.etage} />
          </label>

          <div className="optionField">
            <span className="labelText">Aufzug vorhanden <span aria-hidden="true">*</span></span>
            <div className="optionGrid radioOptionGrid">
              {(["Ja", "Nein"] as const).map((option) => (
                <label className="optionCard" key={option}>
                  <input type="radio" name="aufzug" value={option} required />
                  <span>{option}</span>
                </label>
              ))}
            </div>
            <FieldError message={state.errors?.aufzug} />
          </div>

          <label className="formField" htmlFor="zustand">
            <span className="labelText">Zustand der Wohnung <span aria-hidden="true">*</span></span>
            <select id="zustand" name="zustand" defaultValue="" required aria-invalid={Boolean(state.errors?.zustand)}>
              <option value="" disabled>Bitte auswählen</option>
              {conditionOptions.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
            <FieldError message={state.errors?.zustand} />
          </label>

          <div className="optionField formFieldFull">
            <span className="labelText">Keller / Dachboden / Garage</span>
            <div className="optionGrid">
              {additionalSpaceOptions.map((option) => (
                <label className="optionCard" key={option}>
                  <input type="checkbox" name="nebenraeume" value={option} />
                  <span>{option}</span>
                </label>
              ))}
            </div>
            <FieldError message={state.errors?.nebenraeume} />
          </div>

          <label className="formField" htmlFor="baujahr">
            <span className="labelText">Baujahr</span>
            <input id="baujahr" name="baujahr" type="number" inputMode="numeric" min={1800} max={new Date().getFullYear() + 1} placeholder="z. B. 1985" aria-invalid={Boolean(state.errors?.baujahr)} />
            <FieldError message={state.errors?.baujahr} />
          </label>

          <div className="optionField formFieldFull">
            <span className="labelText">Gewünschte Leistungen <span aria-hidden="true">*</span></span>
            <div className="optionGrid serviceOptionGrid">
              {serviceOptions.map((option) => (
                <label className="optionCard" key={option}>
                  <input type="checkbox" name="leistungen" value={option} />
                  <span>{option}</span>
                </label>
              ))}
            </div>
            <FieldError message={state.errors?.leistungen} />
          </div>

          <label className="formField formFieldFull" htmlFor="beschreibung">
            <span className="labelText">Beschreibung / Hinweise <span aria-hidden="true">*</span></span>
            <textarea id="beschreibung" name="beschreibung" rows={5} minLength={10} maxLength={3000} placeholder="Beschreiben Sie bitte kurz das Objekt, den Umfang und besondere Anforderungen." required aria-invalid={Boolean(state.errors?.beschreibung)} />
            <FieldError message={state.errors?.beschreibung} />
          </label>
        </div>
      </fieldset>

      <fieldset className="quoteFormSection">
        <legend><span className="sectionNumber">2</span> Ihre Kontaktdaten</legend>
        <div className="quoteFormGrid">
          <label className="formField" htmlFor="name">
            <span className="labelText">Name <span aria-hidden="true">*</span></span>
            <input id="name" name="name" type="text" autoComplete="name" minLength={2} maxLength={100} required aria-invalid={Boolean(state.errors?.name)} />
            <FieldError message={state.errors?.name} />
          </label>

          <label className="formField" htmlFor="email">
            <span className="labelText">E-Mail <span aria-hidden="true">*</span></span>
            <input id="email" name="email" type="email" autoComplete="email" maxLength={254} placeholder="ihre@email.de" required aria-invalid={Boolean(state.errors?.email)} />
            <FieldError message={state.errors?.email} />
          </label>

          <label className="formField" htmlFor="telefon">
            <span className="labelText">Telefon <span aria-hidden="true">*</span></span>
            <input id="telefon" name="telefon" type="tel" autoComplete="tel" maxLength={30} placeholder="Ihre Telefonnummer" required aria-invalid={Boolean(state.errors?.telefon)} />
            <FieldError message={state.errors?.telefon} />
          </label>

          <label className="formField" htmlFor="termin">
            <span className="labelText">Gewünschter Termin</span>
            <input id="termin" name="termin" type="date" aria-invalid={Boolean(state.errors?.termin)} />
            <FieldError message={state.errors?.termin} />
          </label>
        </div>
      </fieldset>

      <fieldset className="quoteFormSection">
        <legend><span className="sectionNumber">3</span> Fotos hochladen</legend>
        <div className="photoUpload">
          <label className="formField" htmlFor="photos">
            <span className="labelText">Objektfotos</span>
            <input id="photos" name="photos" type="file" accept="image/jpeg,image/png,image/webp" multiple onChange={handlePhotos} aria-invalid={Boolean(photoError || state.errors?.photos)} />
          </label>
          <p className="photoNote">Optional: bis zu 8 JPG-, PNG- oder WebP-Fotos, maximal 2 MB pro Foto und 10 MB insgesamt.</p>
          {photoSummary && <p className="fileSummary" role="status">{photoSummary}</p>}
          <FieldError message={photoError || state.errors?.photos} />
        </div>
      </fieldset>

      <label className="consentField" htmlFor="datenschutz">
        <input id="datenschutz" name="datenschutz" type="checkbox" value="akzeptiert" required aria-invalid={Boolean(state.errors?.datenschutz)} />
        <span>Ich stimme der Verarbeitung meiner Angaben und hochgeladenen Fotos zur Bearbeitung dieser Anfrage zu. <span aria-hidden="true">*</span></span>
      </label>
      <FieldError message={state.errors?.datenschutz} />

      {state.status === "error" && (
        <p className="formMessage formError" role="alert">{state.message}</p>
      )}

      <button type="submit" disabled={pending || Boolean(photoError)}>
        {pending ? "Anfrage wird gesendet …" : "Kostenloses Angebot anfragen"}
      </button>
      <p className="requiredNote">* Pflichtfeld</p>
    </form>
  );
}
