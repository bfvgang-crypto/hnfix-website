import type { Metadata } from "next";
import Link from "next/link";
import { CookieSettingsButton } from "../components/cookie-settings-button";
import { PageShell } from "../components/page-shell";
import { createPageMetadata } from "../metadata";

export const metadata: Metadata = createPageMetadata(
  "Datenschutzerklärung",
  "Informationen zur Verarbeitung personenbezogener Daten auf der Website von HNFix.",
  "/datenschutz",
);

export default function DatenschutzPage() {
  return (
    <PageShell>
      <section className="pageHero legalHero">
        <div className="container">
          <p className="sectionEyebrow">Datenschutz</p>
          <h1>Datenschutzerklärung</h1>
          <p className="sectionLead">
            Informationen gemäß der Datenschutz-Grundverordnung (DSGVO)
          </p>
        </div>
      </section>

      <section className="section legalSection">
        <div className="container contentPanel legalContent">
          <section>
            <h2>1. Verantwortlicher</h2>
            <address>
              <strong>HNFix Haus &amp; Objekt Service</strong>
              <br />
              <span className="legalPlaceholder">[Vor- und Nachname beziehungsweise Rechtsform ergänzen]</span>
              <br />
              <span className="legalPlaceholder">[Straße und Hausnummer ergänzen]</span>
              <br />
              <span className="legalPlaceholder">[PLZ und Ort ergänzen]</span>
              <br />
              Telefon: <span className="legalPlaceholder">[Telefonnummer ergänzen]</span>
              <br />
              E-Mail: <span className="legalPlaceholder">[E-Mail-Adresse ergänzen]</span>
            </address>
          </section>

          <section>
            <h2>2. Allgemeine Hinweise</h2>
            <p>
              Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung
              dieser Website, zur Bearbeitung von Anfragen, zur Durchführung
              vorvertraglicher Maßnahmen oder zur Erfüllung gesetzlicher Pflichten
              erforderlich ist. Die maßgeblichen Rechtsgrundlagen sind insbesondere
              Art. 6 Abs. 1 Buchstaben a, b, c und f DSGVO.
            </p>
          </section>

          <section>
            <h2>3. Hosting und Server-Protokolle</h2>
            <p>
              Diese Website wird über Vercel bereitgestellt. Anbieter ist Vercel Inc.,
              440 N Barranca Avenue #4133, Covina, CA 91723, USA. Beim Aufruf der
              Website können technisch erforderliche Daten verarbeitet werden,
              insbesondere IP-Adresse, Datum und Uhrzeit, aufgerufene Seite,
              übertragene Datenmenge, Referrer, Browser- und Betriebssystemangaben.
            </p>
            <p>
              Die Verarbeitung erfolgt zur sicheren und zuverlässigen Bereitstellung
              der Website auf Grundlage von Art. 6 Abs. 1 Buchstabe f DSGVO. Unser
              berechtigtes Interesse liegt im sicheren Betrieb und in der Abwehr von
              Missbrauch. Bei einer Übermittlung in die USA werden die vom Anbieter
              vorgesehenen Garantien für Drittlandübermittlungen eingesetzt.
              Weitere Informationen enthält die{" "}
              <Link href="https://vercel.com/legal/privacy-notice" target="_blank" rel="noopener noreferrer">
                Datenschutzerklärung von Vercel
              </Link>.
            </p>
          </section>

          <section>
            <h2>4. Angebots- und Kontaktanfragen</h2>
            <p>
              Wenn Sie unser Anfrageformular verwenden, verarbeiten wir die von Ihnen
              angegebenen Objekt-, Leistungs- und Kontaktdaten. Dazu können insbesondere
              Name, E-Mail-Adresse, Telefonnummer, Postleitzahl, Ort, Objektdaten,
              gewünschte Leistungen, Terminwünsche und Ihre Nachricht gehören.
            </p>
            <p>
              Die Verarbeitung dient ausschließlich der Prüfung und Beantwortung Ihrer
              Anfrage sowie der Erstellung eines Angebots. Rechtsgrundlage ist Art. 6
              Abs. 1 Buchstabe b DSGVO, soweit die Anfrage auf vorvertragliche Maßnahmen
              gerichtet ist. Ergänzend erfolgt die Verarbeitung auf Grundlage Ihrer
              Einwilligung gemäß Art. 6 Abs. 1 Buchstabe a DSGVO. Eine erteilte
              Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen.
            </p>
            <p>
              Zur Missbrauchsabwehr verarbeiten wir außerdem technisch notwendige
              Angaben wie den Zeitpunkt der Formularnutzung, eine Vorgangskennung und
              die IP-Adresse in begrenztem Umfang. Rechtsgrundlage ist Art. 6 Abs. 1
              Buchstabe f DSGVO.
            </p>
          </section>

          <section>
            <h2>5. Hochgeladene Fotos</h2>
            <p>
              Das Hochladen von Fotos ist freiwillig. Die Bilder werden zur Einschätzung
              des Arbeitsumfangs, zur Angebotserstellung und zur Bearbeitung Ihrer
              Anfrage verwendet. Bitte laden Sie keine Fotos hoch, auf denen Personen,
              Ausweisdokumente, Kennzeichen oder andere nicht erforderliche sensible
              Informationen erkennbar sind.
            </p>
            <p>
              Fotos werden gemeinsam mit Ihrer Anfrage per E-Mail übermittelt. Ohne Ihre
              Einwilligung werden keine Fotos verarbeitet. Rechtsgrundlage ist Art. 6
              Abs. 1 Buchstabe a DSGVO; bei einer konkreten Vertragsanbahnung zusätzlich
              Art. 6 Abs. 1 Buchstabe b DSGVO.
            </p>
          </section>

          <section>
            <h2>6. E-Mail-Versand über Resend</h2>
            <p>
              Für die technische Übermittlung der Formularanfragen nutzen wir Resend,
              einen Dienst der Plus Five Five, Inc., 2261 Market Street #5039, San
              Francisco, CA 94114, USA. Dabei werden die Formularangaben und
              gegebenenfalls hochgeladene Fotos verarbeitet und an die für HNFix
              bestimmte Empfängeradresse zugestellt.
            </p>
            <p>
              Resend wird als Auftragsverarbeiter eingesetzt. Für erforderliche
              Drittlandübermittlungen sieht der Anbieter geeignete Garantien wie die
              EU-Standardvertragsklauseln vor. Weitere Informationen finden Sie in der{" "}
              <Link href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
                Datenschutzerklärung von Resend
              </Link>{" "}
              und im{" "}
              <Link href="https://resend.com/legal/dpa" target="_blank" rel="noopener noreferrer">
                Auftragsverarbeitungsvertrag von Resend
              </Link>.
            </p>
          </section>

          <section>
            <h2>7. Google Analytics 4</h2>
            <p>
              Mit Ihrer ausdrücklichen Einwilligung verwenden wir Google Analytics 4,
              einen Webanalysedienst der Google Ireland Limited, Gordon House, Barrow
              Street, Dublin 4, Irland. Google Analytics hilft uns zu verstehen, wie die
              Website genutzt wird und welche Inhalte verbessert werden können.
            </p>
            <p>
              Verarbeitet werden können insbesondere aufgerufene Seiten, ungefähre
              Standortinformationen, technische Browser- und Geräteinformationen,
              Nutzungszeitpunkte, Interaktionen, gekürzte oder anderweitig geschützte
              Kennungen sowie die IP-Adresse während der technischen Übertragung.
              Google kann hierfür Cookies und vergleichbare Technologien einsetzen.
            </p>
            <p>
              Google Analytics wird erst geladen, nachdem Sie „Analytics erlauben“
              gewählt haben. Rechtsgrundlage ist Art. 6 Abs. 1 Buchstabe a DSGVO in
              Verbindung mit § 25 Abs. 1 TDDDG. Die Einwilligung ist freiwillig und kann
              jederzeit mit Wirkung für die Zukunft widerrufen werden. Ohne Einwilligung
              findet keine Analyse durch Google Analytics statt.
            </p>
            <p>
              Empfänger können Google Ireland Limited, Google LLC und verbundene
              Auftragsverarbeiter sein. Bei einer Übermittlung in die USA werden die
              jeweils anwendbaren Garantien für Drittlandübermittlungen genutzt.
              Weitere Informationen finden Sie in der{" "}
              <Link href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                Datenschutzerklärung von Google
              </Link>.
            </p>
            <div className="legalCookieControl">
              <p>Sie können Ihre Entscheidung hier jederzeit ändern:</p>
              <CookieSettingsButton />
            </div>
          </section>

          <section>
            <h2>8. Speicherung der Einwilligungsentscheidung</h2>
            <p>
              Ihre Auswahl zu Google Analytics wird lokal in Ihrem Browser gespeichert,
              damit die Website Ihre Entscheidung bei weiteren Besuchen berücksichtigt.
              Diese Speicherung ist für die Bereitstellung der von Ihnen gewählten
              Datenschutzeinstellung erforderlich. Rechtsgrundlage ist § 25 Abs. 2 Nr. 2
              TDDDG in Verbindung mit Art. 6 Abs. 1 Buchstabe f DSGVO.
            </p>
          </section>

          <section>
            <h2>9. Speicherdauer und Löschung</h2>
            <p>
              Nicht zu einem Auftrag führende Anfragen und hochgeladene Fotos werden
              grundsätzlich spätestens sechs Monate nach Abschluss der Bearbeitung
              gelöscht, sofern keine Rechtsansprüche eine längere Aufbewahrung
              erfordern. Kommt ein Vertragsverhältnis zustande, speichern wir die dafür
              erforderlichen Unterlagen entsprechend den gesetzlichen handels- und
              steuerrechtlichen Aufbewahrungsfristen. Einwilligungsdaten werden bis zum
              Widerruf beziehungsweise bis zum Wegfall des Nachweiszwecks gespeichert.
              Server-Protokolle und Analysedaten werden nach den beim jeweiligen
              Dienstleister festgelegten Fristen gelöscht oder anonymisiert.
            </p>
            <p className="legalPlaceholder">
              [Vor Veröffentlichung prüfen: Die genannten Fristen müssen mit den
              tatsächlichen Löschfristen im E-Mail-Postfach, bei Resend, Vercel und in
              Google Analytics übereinstimmen.]
            </p>
          </section>

          <section>
            <h2>10. Empfänger personenbezogener Daten</h2>
            <p>
              Daten erhalten nur Stellen, die sie zur Bearbeitung Ihrer Anfrage oder zum
              sicheren Betrieb der Website benötigen. Dazu können Hosting-, E-Mail- und
              Analysedienstleister sowie gesetzlich berechtigte Behörden gehören. Eine
              Weitergabe zu Werbezwecken erfolgt nicht.
            </p>
          </section>

          <section>
            <h2>11. Ihre Rechte</h2>
            <p>Sie haben im Rahmen der gesetzlichen Voraussetzungen insbesondere das Recht auf:</p>
            <ul>
              <li>Auskunft über die zu Ihrer Person gespeicherten Daten,</li>
              <li>Berichtigung unrichtiger oder unvollständiger Daten,</li>
              <li>Löschung oder Einschränkung der Verarbeitung,</li>
              <li>Datenübertragbarkeit,</li>
              <li>Widerspruch gegen Verarbeitungen auf Grundlage berechtigter Interessen,</li>
              <li>Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft.</li>
            </ul>
            <p>
              Außerdem können Sie sich bei einer Datenschutzaufsichtsbehörde beschweren.
              Für Baden-Württemberg ist insbesondere der Landesbeauftragte für den
              Datenschutz und die Informationsfreiheit Baden-Württemberg zuständig.
            </p>
          </section>

          <section>
            <h2>12. Datensicherheit</h2>
            <p>
              Diese Website nutzt eine verschlüsselte HTTPS-Verbindung. Wir treffen
              angemessene technische und organisatorische Maßnahmen, um personenbezogene
              Daten vor Verlust, Veränderung und unbefugtem Zugriff zu schützen.
            </p>
          </section>

          <section>
            <h2>13. Automatisierte Entscheidungen</h2>
            <p>
              Eine automatisierte Entscheidungsfindung einschließlich Profiling im Sinne
              von Art. 22 DSGVO findet nicht statt.
            </p>
          </section>

          <section>
            <h2>14. Aktualisierung dieser Datenschutzerklärung</h2>
            <p>
              Wir passen diese Datenschutzerklärung an, wenn sich die Website, die
              eingesetzten Dienste oder die rechtlichen Anforderungen ändern.
            </p>
          </section>

          <p className="legalUpdated">Stand: August 2026</p>
        </div>
      </section>
    </PageShell>
  );
}
