import Image from "next/image";

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
          <Image
            src="/logo.png"
            alt="HNFix Haus & Objekt Service"
            width={220}
            height={120}
            priority
          />
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

            <a href="#anfrage">
              Unverbindlich Kontakt aufnehmen →
            </a>
          </div>
        </div>
      </section>

      <section id="ablauf" className="section alt">
        <div className="sectionHead">
          <p className="eyebrow">So funktioniert&apos;s</p>
          <h2>Von der Anfrage zum Termin</h2>
        </div>

        <div className="steps">
          {[
            "Anfrage senden",
            "Fotos & Details schicken",
            "Angebot erhalten",
            "Termin vereinbaren",
          ].map((step, index) => (
            <div key={step}>
              <strong>{index + 1}</strong>
              <span>{step}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="gebiet" className="section">
        <p className="eyebrow">Einsatzgebiet</p>

        <h2>Heilbronn + ca. 50 km</h2>

        <p className="areaText">
          Heilbronn, Neckarsulm, Weinsberg, Leingarten,
          Bad Friedrichshall und weitere Orte in der Umgebung.
        </p>

        <div className="locations">
          <span>Heilbronn</span>
          <span>Neckarsulm</span>
          <span>Weinsberg</span>
          <span>Leingarten</span>
          <span>Bad Friedrichshall</span>
          <span>Neuenstadt</span>
          <span>Lauffen</span>
          <span>Abstatt</span>
        </div>
      </section>

      <section id="anfrage" className="section contact">
        <div>
          <p className="eyebrow">Kostenlose Anfrage</p>

          <h2>Was können wir für Sie erledigen?</h2>

          <p>
            Beschreiben Sie kurz Ihre Aufgabe. Wir melden uns schnellstmöglich.
          </p>
        </div>

        <form className="form">
          <label>
            Name
            <input placeholder="Ihr Name" />
          </label>

          <label>
            Telefon oder E-Mail
            <input placeholder="Ihre Kontaktdaten" />
          </label>

          <label>
            PLZ / Ort
            <input placeholder="74072 Heilbronn" />
          </label>

          <label>
            Leistung
            <select defaultValue="">
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
              rows={5}
              placeholder="Was soll gemacht werden?"
            />
          </label>

          <button type="button">
            Kostenlose Anfrage senden
          </button>
        </form>
      </section>

      <footer>
        <strong>HNFix</strong>
        <span>Haus & Objekt Service · Heilbronn</span>
      </footer>
    </main>
  );
}