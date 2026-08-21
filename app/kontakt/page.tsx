import { PageShell } from "../components/page-shell";
import { services } from "../components/site-data";

export default function KontaktPage() {
  return (
    <PageShell>
      <section className="pageHero">
        <div className="container">
          <p className="sectionEyebrow">Kontakt</p>
          <h1>Kostenloses Angebot für Ihr Anliegen anfragen</h1>
          <p className="sectionLead">
            Senden Sie uns Ihre Daten und eine kurze Beschreibung. Wir melden
            uns zeitnah mit einem passenden Angebot.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contactLayout">
          <div className="contentPanel">
            <h2>Ihre Anfrage in wenigen Schritten</h2>
            <p className="sectionLead">
              Je genauer Ihre Angaben sind, desto schneller erhalten Sie ein
              passendes Angebot.
            </p>
          </div>

          <form className="contactForm">
            <label htmlFor="name">
              Name
              <input id="name" name="name" type="text" placeholder="Ihr Name" />
            </label>

            <label htmlFor="telefon">
              Telefon
              <input
                id="telefon"
                name="telefon"
                type="tel"
                placeholder="Ihre Telefonnummer"
              />
            </label>

            <label htmlFor="email">
              E-Mail
              <input
                id="email"
                name="email"
                type="email"
                placeholder="ihre@email.de"
              />
            </label>

            <label htmlFor="ort">
              PLZ / Ort
              <input id="ort" name="ort" type="text" placeholder="74072 Heilbronn" />
            </label>

            <label htmlFor="service">
              Service auswählen
              <select id="service" name="service" defaultValue="">
                <option value="" disabled>
                  Bitte auswählen
                </option>
                {services.map((service) => (
                  <option key={service.title} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
            </label>

            <label htmlFor="beschreibung">
              Beschreibung
              <textarea
                id="beschreibung"
                name="beschreibung"
                rows={5}
                placeholder="Was soll erledigt werden?"
              />
            </label>

            <label htmlFor="upload">
              Upload photos placeholder
              <input
                id="upload"
                name="upload"
                type="text"
                placeholder="Foto-Upload wird hier integriert"
                readOnly
              />
            </label>

            <button type="submit">Anfrage senden</button>
          </form>
        </div>
      </section>
    </PageShell>
  );
}
