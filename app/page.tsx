import Image from "next/image";

const navigation = [
  { label: "Startseite", href: "#startseite" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "Entrümpelung", href: "#entruempelung" },
  { label: "Hausservice", href: "#hausservice" },
  { label: "Für Vermieter", href: "#vermieter" },
  { label: "Einsatzgebiet", href: "#einsatzgebiet" },
  { label: "Kontakt", href: "#kontakt" },
];

const services = [
  {
    icon: "🧼",
    title: "Reinigung",
    image: "/placeholders/reinigung.jpg",
    description:
      "Gründliche Innen- und Objektreinigung für Wohnungen, Häuser und Gewerbeflächen.",
  },
  {
    icon: "🏢",
    title: "Treppenhaus",
    image: "/placeholders/treppenhaus.jpg",
    description:
      "Regelmäßige oder einmalige Treppenhausreinigung für Eigentümer und Hausverwaltungen.",
  },
  {
    icon: "🧰",
    title: "Keller & Garage",
    image: "/placeholders/keller-garage.jpg",
    description:
      "Freiräumen, reinigen und strukturieren von Nebenflächen für mehr nutzbaren Raum.",
  },
  {
    icon: "📦",
    title: "Entrümpelung",
    image: "/placeholders/entruempelung.jpg",
    description:
      "Effiziente Räumungen mit klarer Planung, sauberer Durchführung und Entlastung vor Ort.",
  },
  {
    icon: "🚛",
    title: "Sperrmüll",
    image: "/placeholders/sperrmuell.jpg",
    description:
      "Demontage, Transport und fachgerechte Bereitstellung für die sichere Entsorgung.",
  },
  {
    icon: "🌿",
    title: "Außenbereich",
    image: "/placeholders/aussenbereich.jpg",
    description:
      "Saubere Zufahrten, Höfe und Eingangsbereiche für einen gepflegten Gesamteindruck.",
  },
];

const heroBenefits = [
  "Kostenlose Anfrage",
  "Schnelle Termine",
  "Zuverlässiger Service",
  "Fachgerechte Entsorgung",
];

const qualityBenefits = [
  "Festpreis Garantie",
  "Schnelle Termine",
  "Fachgerechte Entsorgung",
  "Persönlicher Service",
];

const processSteps = [
  "Anfrage stellen",
  "Fotos & Details senden",
  "Angebot erhalten",
  "Termin vereinbaren",
];

export default function Home() {
  return (
    <main className="page">
      <header className="siteHeader">
        <div className="container headerInner">
          <a href="#startseite" className="brand" aria-label="Zur Startseite">
            <Image
              src="/logo.png"
              alt="HNFix Haus & Objekt Service Heilbronn"
              width={170}
              height={68}
              priority
            />
          </a>

          <nav className="mainNav" aria-label="Hauptnavigation">
            {navigation.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a href="#kontakt" className="headerCta">
            Kostenloses Angebot
          </a>
        </div>
      </header>

      <section id="startseite" className="hero">
        <div className="heroOverlay" />
        <div className="container heroInner">
          <p className="heroEyebrow">Heilbronn & Umgebung – bis 50 km</p>
          <h1>Haus & Objekt Service Heilbronn</h1>
          <p className="heroSubtitle">
            Reinigung · Entrümpelung · Keller · Garage · Treppenhaus ·
            Außenbereich
          </p>

          <ul className="heroBenefits">
            {heroBenefits.map((item) => (
              <li key={item}>✓ {item}</li>
            ))}
          </ul>

          <div className="heroActions">
            <a href="#kontakt" className="btn btnPrimary">
              Kostenloses Angebot anfordern
            </a>
            <a href="#leistungen" className="btn btnGhost">
              Unsere Leistungen
            </a>
          </div>
        </div>
      </section>

      <section id="leistungen" className="section">
        <div className="container">
          <p className="sectionEyebrow">Leistungen</p>
          <h2>Professioneller Service rund um Haus und Objekt</h2>
          <div className="servicesGrid">
            {services.map((service) => (
              <article key={service.title} className="serviceCard">
                <div
                  className="serviceMedia"
                  style={{ backgroundImage: `url(${service.image})` }}
                  aria-hidden
                >
                  <span className="serviceIcon">{service.icon}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="benefitsBar" aria-label="Ihre Vorteile">
        <div className="container benefitsGrid">
          {qualityBenefits.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      <section id="entruempelung" className="section sectionAlt">
        <div className="container contentGrid">
          <article>
            <p className="sectionEyebrow">Entrümpelung</p>
            <h2>Strukturiert, sauber und terminsicher umgesetzt</h2>
            <p>
              Von einzelnen Räumen bis zu kompletten Objekten: Wir übernehmen
              die Entrümpelung zuverlässig und hinterlassen die Fläche besenrein
              zur weiteren Nutzung.
            </p>
          </article>

          <article id="hausservice">
            <p className="sectionEyebrow">Hausservice</p>
            <h2>Regelmäßige Betreuung für Immobilien</h2>
            <p>
              HNFix unterstützt bei Reinigung, Außenpflege und laufenden
              Arbeiten rund ums Objekt – flexibel für private und gewerbliche
              Anforderungen.
            </p>
          </article>
        </div>
      </section>

      <section id="vermieter" className="section">
        <div className="container">
          <p className="sectionEyebrow">Für Vermieter</p>
          <h2>Verlässliche Unterstützung bei Mieterwechsel und Objektpflege</h2>
          <p className="sectionLead">
            Schnelle Termine, klare Abstimmung und professionelle Ausführung für
            ein sauberes Erscheinungsbild Ihrer Immobilie.
          </p>
        </div>
      </section>

      <section className="section sectionAlt" id="ablauf">
        <div className="container">
          <p className="sectionEyebrow">So einfach geht&apos;s</p>
          <h2>In 4 Schritten zum passenden Service</h2>
          <div className="stepsGrid">
            {processSteps.map((step, index) => (
              <article key={step} className="stepCard">
                <span>{index + 1}</span>
                <h3>{step}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="einsatzgebiet" className="section">
        <div className="container">
          <p className="sectionEyebrow">Einsatzgebiet</p>
          <h2>Heilbronn und Umgebung bis 50 km</h2>
          <p className="sectionLead">
            Wir sind in Heilbronn und im regionalen Umkreis schnell für Sie im
            Einsatz – mit persönlichem Service und kurzen Reaktionszeiten.
          </p>
        </div>
      </section>

      <section id="kontakt" className="section">
        <div className="container contactLayout">
          <div>
            <p className="sectionEyebrow">Kontakt</p>
            <h2>Kostenloses Angebot für Ihr Anliegen anfragen</h2>
            <p className="sectionLead">
              Senden Sie uns Ihre Daten und eine kurze Beschreibung. Wir melden
              uns zeitnah mit einem passenden Angebot.
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
    </main>
  );
}
