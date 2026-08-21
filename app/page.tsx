const services = [
  "Haus- & Wohnungsreinigung",
  "Treppenhausreinigung",
  "Keller & Garage",
  "Entrümpelung",
  "Sperrmüllbereitstellung",
  "Hof & Außenreinigung",
  "Gartenpflege",
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="heroInner">
          <p className="eyebrow">Heilbronn & Umgebung</p>
          <h1>HNFix</h1>
          <h2>Haus & Objekt Service</h2>
          <p className="lead">
            Zuverlässige Hilfe rund um Haus, Wohnung, Keller, Garage und Außenbereich.
          </p>
          <div className="actions">
            <a className="primary" href="#anfrage">Kostenlos anfragen</a>
            <a className="secondary" href="#leistungen">Leistungen ansehen</a>
          </div>
        </div>
      </section>

      <section id="leistungen" className="section">
        <div className="sectionHead">
          <p className="eyebrow">Unsere Leistungen</p>
          <h2>Praktische Hilfe aus einer Hand</h2>
        </div>
        <div className="grid">
          {services.map((service) => (
            <article className="card" key={service}>
              <h3>{service}</h3>
              <p>Schnell, sauber und flexibel nach Bedarf.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section alt">
        <div className="sectionHead">
          <p className="eyebrow">So funktioniert&apos;s</p>
          <h2>Einfach anfragen, Angebot erhalten</h2>
        </div>
        <div className="steps">
          <div><strong>1</strong><span>Anfrage senden</span></div>
          <div><strong>2</strong><span>Fotos & Details schicken</span></div>
          <div><strong>3</strong><span>Unverbindliches Angebot erhalten</span></div>
          <div><strong>4</strong><span>Termin vereinbaren</span></div>
        </div>
      </section>

      <section className="section">
        <div className="sectionHead">
          <p className="eyebrow">Einsatzgebiet</p>
          <h2>Heilbronn und Umgebung</h2>
        </div>
        <p className="areaText">
          Heilbronn, Neckarsulm, Weinsberg, Leingarten, Bad Friedrichshall und weitere Orte im Umkreis von etwa 50 km.
        </p>
      </section>

      <section id="anfrage" className="section contact">
        <div>
          <p className="eyebrow">Kostenlose Anfrage</p>
          <h2>Was können wir für Sie erledigen?</h2>
          <p>Beschreiben Sie kurz die Aufgabe. Fotos und ein Wunschtermin können später ergänzt werden.</p>
        </div>
        <form className="form">
          <label>Name<input name="name" placeholder="Ihr Name" /></label>
          <label>Telefon oder E-Mail<input name="contact" placeholder="Ihre Kontaktdaten" /></label>
          <label>PLZ / Ort<input name="location" placeholder="z. B. 74072 Heilbronn" /></label>
          <label>Leistung<select name="service" defaultValue=""><option value="" disabled>Bitte auswählen</option>{services.map((service) => <option key={service}>{service}</option>)}</select></label>
          <label>Beschreibung<textarea name="message" rows={5} placeholder="Was soll gemacht werden?" /></label>
          <button type="button">Anfrage vorbereiten</button>
          <small>Das Formular wird in der nächsten Version mit E-Mail-Versand und Foto-Upload verbunden.</small>
        </form>
      </section>

      <footer>
        <strong>HNFix</strong>
        <span>Haus & Objekt Service · Heilbronn</span>
      </footer>
    </main>
  );
}
