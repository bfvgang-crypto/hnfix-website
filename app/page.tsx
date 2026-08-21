import Image from "next/image";

const services = [
  {
    title: "Haus- & Wohnungsreinigung",
    text: "Gründliche Reinigung für Wohnungen und Häuser.",
  },
  {
    title: "Treppenhausreinigung",
    text: "Saubere Treppenhäuser für Eigentümer und Hausverwaltungen.",
  },
  {
    title: "Keller & Garage",
    text: "Aufräumen, reinigen und freimachen von Nebenräumen.",
  },
  {
    title: "Entrümpelung",
    text: "Wir räumen Wohnungen, Keller und Garagen zuverlässig.",
  },
  {
    title: "Sperrmüllbereitstellung",
    text: "Möbel abbauen und für die Abholung vorbereiten.",
  },
  {
    title: "Hof & Außenreinigung",
    text: "Saubere Außenbereiche rund um Ihre Immobilie.",
  },
  {
    title: "Gartenpflege",
    text: "Pflegearbeiten rund um Haus und Grundstück.",
  },
];

const locations = [
  "Heilbronn",
  "Neckarsulm",
  "Weinsberg",
  "Leingarten",
  "Bad Friedrichshall",
  "Neuenstadt",
  "Lauffen",
  "Abstatt",
];

export default function Home() {
  return (
    <main>

      <header className="siteHeader">
        <a href="#start" className="brand">
          <Image
            src="/logo.png"
            alt="HNFix Haus & Objekt Service"
            width={220}
            height={120}
            priority
          />
        </a>

        <nav>
          <a href="#start">Startseite</a>
          <a href="#leistungen">Leistungen</a>
          <a href="#ablauf">Ablauf</a>
          <a href="#gebiet">Einsatzgebiet</a>
          <a href="#ueber-uns">Über uns</a>
          <a href="#kontakt" className="navCta">
            Angebot
          </a>
        </nav>
      </header>


      <section id="start" className="hero">

        <div className="heroInner">

          <p className="eyebrow">
            Heilbronn & Umgebung
          </p>

          <h1>
            Haus & Objekt Service
          </h1>

          <h2>
            Reinigung · Entrümpelung · Hausservice
          </h2>

          <p className="lead">
            Zuverlässige Hilfe rund um Ihre Immobilie.
            Von Reinigung über Keller und Garage bis zur
            Entrümpelung.
          </p>


          <div className="heroPoints">
            <span>✓ Schnell</span>
            <span>✓ Zuverlässig</span>
            <span>✓ Kostenlose Anfrage</span>
          </div>


          <div className="actions">

            <a
              href="#kontakt"
              className="primary"
            >
              Kostenloses Angebot
            </a>

            <a
              href="#leistungen"
              className="secondary"
            >
              Leistungen
            </a>

          </div>

        </div>

      </section>


      <section
        id="leistungen"
        className="section"
      >

        <p className="eyebrow">
          Unsere Leistungen
        </p>

        <h2>
          Alles aus einer Hand
        </h2>


        <div className="grid">

          {services.map((service) => (

            <article
              key={service.title}
              className="card"
            >

              <h3>
                {service.title}
              </h3>

              <p>
                {service.text}
              </p>

            </article>

          ))}

        </div>

      </section>      <section
        id="ablauf"
        className="section alt"
      >

        <p className="eyebrow">
          So funktioniert&apos;s
        </p>

        <h2>
          Einfach und schnell zum Angebot
        </h2>


        <div className="steps">

          <div>
            <strong>1</strong>
            <span>
              Anfrage senden
            </span>
          </div>

          <div>
            <strong>2</strong>
            <span>
              Fotos & Details schicken
            </span>
          </div>

          <div>
            <strong>3</strong>
            <span>
              Angebot erhalten
            </span>
          </div>

          <div>
            <strong>4</strong>
            <span>
              Termin vereinbaren
            </span>
          </div>

        </div>

      </section>



      <section
        id="gebiet"
        className="section"
      >

        <p className="eyebrow">
          Einsatzgebiet
        </p>

        <h2>
          Heilbronn und Umgebung
        </h2>

        <p className="areaText">
          Wir helfen Kunden in Heilbronn und
          vielen Orten im Umkreis von ca. 50 km.
        </p>


        <div className="locations">

          {locations.map((location) => (
            <span key={location}>
              {location}
            </span>
          ))}

        </div>

      </section>



      <section
        id="ueber-uns"
        className="businessSection"
      >

        <div className="businessInner">

          <div>

            <p className="eyebrow">
              Über HNFix
            </p>

            <h2>
              Ihr zuverlässiger Partner rund ums Haus
            </h2>

          </div>


          <div className="businessText">

            <p>
              HNFix unterstützt Privatkunden,
              Eigentümer und Hausverwaltungen
              bei Reinigung, Entrümpelung und
              praktischen Arbeiten rund um Immobilien.
            </p>


            <p>
              Unser Ziel: saubere Lösungen,
              schnelle Hilfe und zuverlässiger Service.
            </p>

          </div>

        </div>

      </section>




      <section
        id="kontakt"
        className="section contact"
      >

        <div>

          <p className="eyebrow">
            Kostenlose Anfrage
          </p>


          <h2>
            Was können wir für Sie erledigen?
          </h2>


          <p>
            Senden Sie uns Ihre Anfrage.
            Wir melden uns schnellstmöglich.
          </p>

        </div>



        <form className="form">


          <label>
            Name

            <input
              placeholder="Ihr Name"
            />

          </label>



          <label>
            Telefon oder E-Mail

            <input
              placeholder="Ihre Kontaktdaten"
            />

          </label>



          <label>
            PLZ / Ort

            <input
              placeholder="74072 Heilbronn"
            />

          </label>



          <label>
            Leistung

            <select defaultValue="">

              <option value="" disabled>
                Bitte auswählen
              </option>


              {services.map((service) => (

                <option key={service.title}>
                  {service.title}
                </option>

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
            Anfrage senden
          </button>


        </form>


      </section>




      <section className="finalCta">

        <h2>
          Bereit für ein kostenloses Angebot?
        </h2>


        <a href="#kontakt">
          Jetzt Anfrage senden
        </a>


      </section>




      <footer>

        <strong>
          HNFix
        </strong>


        <span>
          Haus & Objekt Service · Heilbronn
        </span>


      </footer>


    </main>
  );
}