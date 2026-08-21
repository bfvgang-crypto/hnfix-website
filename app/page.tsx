const services = [
  {
    title: "Haus- & Wohnungsreinigung",
    icon: "✦",
    text: "Gründliche Reinigung von Wohnungen und Häusern – einmalig oder regelmäßig.",
  },
  {
    title: "Treppenhausreinigung",
    icon: "▰",
    text: "Saubere Treppenhäuser und Gemeinschaftsflächen für Eigentümer und Hausverwaltungen.",
  },
  {
    title: "Keller & Garage",
    icon: "▣",
    text: "Aufräumen, Reinigen und Freimachen von Keller, Garage und Nebenräumen.",
  },
  {
    title: "Entrümpelung",
    icon: "↗",
    text: "Wir räumen Wohnungen, Keller, Garagen und andere Bereiche zuverlässig leer.",
  },
  {
    title: "Sperrmüllbereitstellung",
    icon: "♻",
    text: "Möbel und Sperrmüll werden demontiert und zur vereinbarten Abholung bereitgestellt.",
  },
  {
    title: "Hof & Außenreinigung",
    icon: "⌂",
    text: "Reinigung von Höfen, Eingängen, Wegen und weiteren Außenflächen.",
  },
  {
    title: "Gartenpflege",
    icon: "♧",
    text: "Einfache Gartenarbeiten, Aufräumen, Laub entfernen und Pflege rund ums Grundstück.",
  },
];

const serviceNames = services.map((service) => service.title);

export default function Home() {
  return (
    <main>
      <header className="siteHeader">
        <a className="brand" href="#">
          <span className="brandMark">HN</span>
          <span>
            <strong>HNFix</strong>
            <small>Haus & Objekt Service</small>
          </span>
        </a>

        <nav>
          <a href="#leistungen">Leistungen</a>
          <a href="#ablauf">Ablauf</a>
          <a href="#gebiet">Einsatzgebiet</a>
          <a href="#anfrage" className="navCta">
            Kostenlos anfragen
          </a>
        </nav>
      </header>

      <section className="hero">
        <div className="heroInner">
          <p className="eyebrow">Heilbronn & Umgebung</p>

          <h1>HNFix</h1>

          <h2>Haus & Objekt Service in Heilbronn</h2>

          <p className="lead">
            Reinigung, Entrümpelung und praktische Hilfe rund um Haus,
            Wohnung, Keller, Garage und Außenbereich.
          </p>

          <div className="heroPoints">
            <span>✓ Zuverlässig</span>
            <span>✓ Flexibel</span>
            <span>✓ Unverbindliche Anfrage</span>
          </div>

          <div className="actions">
            <a className="primary" href="#anfrage">
              Kostenlos anfragen
            </a>

            <a className="secondary" href="#leistungen">
              Leistungen ansehen
            </a>
          </div>

          <p className="heroNote">
            Einsatzgebiet Heilbronn und ca. 50 km Umgebung
          </p>
        </div>
      </section>

      <section id="leistungen" className="section">
        <div className="sectionHead">
          <p className="eyebrow">Unsere Leistungen</p>
          <h2>Praktische Hilfe aus einer Hand</h2>
          <p>
            Ob Wohnung, Treppenhaus, Keller, Garage oder Außenbereich:
            HNFix hilft dort, wo Arbeit anfällt.
          </p>
        </div>

        <div className="grid">
          {services.map((service) => (
            <article className="card" key={service.title}>
              <div className="serviceIcon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="businessSection">
        <div className="businessInner">
          <div>
            <p className="eyebrow">Für Eigentümer & Hausverwaltungen</p>
            <h2>Zuverlässiger Service für Ihre Immobilie</h2>
          </div>

          <div className="businessText">
            <p>
              Sie suchen Unterstützung für ein Mehrfamilienhaus,
              Treppenhaus oder Gemeinschaftsflächen?
            </p>

            <p>
              Wir sind auch an regelmäßigen Aufträgen und langfristiger
              Zusammenarbeit interessiert.
            </p>

            <a href="#anfrage">Unverbindlich Kontakt aufnehmen →</a>
          </div>
        </div>
      </section>

      <section id="ablauf" className="section alt">
        <div className="sectionHead">
          <p className="eyebrow">So funktioniert&apos;s</p>
          <h2>Von der Anfrage zum Termin</h2>
        </div>

        <div className="steps">
          <div>
            <strong>1</strong>
            <span>
              <b>Anfrage senden</b>
              <small>Service auswählen und kurz beschreiben.</small>
            </span>
          </div>

          <div>
            <strong>2</strong>
            <span>
              <b>Fotos & Details</b>
              <small>Bei Bedarf Bilder und weitere Informationen senden.</small>
            </span>
          </div>

          <div>
            <strong>3</strong>
            <span>
              <b>Angebot erhalten</b>
              <small>Sie erhalten ein unverbindliches Angebot.</small>
            </span>
          </div>

          <div>
            <strong>4</strong>
            <span>
              <b>Termin vereinbaren</b>
              <small>Passenden Termin auswählen und Auftrag erledigen.</small>
            </span>
          </div>
        </div>
      </section>

      <section id="gebiet" className="section areaSection">
        <div>
          <p className="eyebrow">Einsatzgebiet</p>
          <h2>Heilbronn + ca. 50 km</h2>

          <p className="areaText">
            Wir sind in Heilbronn und vielen Orten der Umgebung verfügbar.
            Fragen Sie einfach an – wir prüfen kurzfristig, ob wir Ihren Ort
            bedienen können.
          </p>
        </div>

        <div className="locations">
          <span>Heilbronn</span>
          <span>Neckarsulm</span>
          <span>Weinsberg</span>
          <span>Leingarten</span>
          <span>Bad Friedrichshall</span>
          <span>Neuenstadt</span>
          <span>Lauffen am Neckar</span>
          <span>Abstatt</span>
        </div>
      </section>

      <section id="anfrage" className="section contact">
        <div className="contactIntro">
          <p className="eyebrow">Kostenlose Anfrage</p>

          <h2>Was können wir für Sie erledigen?</h2>

          <p>
            Beschreiben Sie kurz, was gemacht werden soll. Je genauer die
            Angaben, desto besser können wir Ihre Anfrage einschätzen.
          </p>

          <div className="contactBenefits">
            <span>✓ Unverbindliche Anfrage</span>
            <span>✓ Keine versteckten Kosten</span>
            <span>✓ Schnelle Rückmeldung</span>
          </div>
        </div>

        <form className="form">
          <label>
            Name
            <input name="name" placeholder="Ihr Name" />
          </label>

          <label>
            Telefon oder E-Mail
            <input
              name="contact"
              placeholder="Telefonnummer oder E-Mail-Adresse"
            />
          </label>

          <label>
            PLZ / Ort
            <input
              name="location"
              placeholder="z. B. 74072 Heilbronn"
            />
          </label>

          <label>
            Gewünschte Leistung
            <select name="service" defaultValue="">
              <option value="" disabled>
                Bitte auswählen
              </option>

              {serviceNames.map((service) => (
                <option key={service}>{service}</option>
              ))}
            </select>
          </label>

          <label>
            Beschreibung
            <textarea
              name="message"
              rows={6}
              placeholder="Was soll gemacht werden? Zum Beispiel: Keller entrümpeln, Möbel nach draußen tragen, Treppenhaus reinigen ..."
            />
          </label>

          <label>
            Wunschtermin
            <input name="date" type="date" />
          </label>

          <button type="button">Kostenlose Anfrage senden</button>

          <small>
            Ihre Angaben werden ausschließlich zur Bearbeitung Ihrer Anfrage
            verwendet.
          </small>
        </form>
      </section>

      <section className="finalCta">
        <div>
          <p className="eyebrow">HNFix Heilbronn</p>
          <h2>Sie haben Arbeit rund ums Haus?</h2>
          <p>Schicken Sie uns Ihre Anfrage. Wir prüfen, wie wir helfen können.</p>
        </div>

        <a href="#anfrage">Jetzt kostenlos anfragen</a>
      </section>

      <footer>
        <div>
          <strong>HNFix</strong>
          <span>Haus & Objekt Service · Heilbronn</span>
        </div>

        <div className="footerLinks">
          <a href="#leistungen">Leistungen</a>
          <a href="#anfrage">Kontakt</a>
          <span>Impressum</span>
          <span>Datenschutz</span>
        </div>
      </footer>
    </main>
  );
}