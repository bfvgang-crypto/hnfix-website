# hnfix-website
HNFix - Haus &amp; Objekt Service Heilbronn

## Kontaktformular

Für den E-Mail-Versand werden diese serverseitigen Umgebungsvariablen benötigt:

- `RESEND_API_KEY`: API-Schlüssel von Resend
- `CONTACT_TO_EMAIL`: Empfänger der Anfragen
- `CONTACT_FROM_EMAIL`: verifizierter Absender, zum Beispiel `HNFix Website <website@hnfix.de>`

Die benötigten Namen stehen auch in `.env.example`. Die Absender-Domain muss bei
Resend verifiziert sein. Eingegebene Daten werden ausschließlich per POST an die
Server Action übertragen und erscheinen nicht in der URL.
