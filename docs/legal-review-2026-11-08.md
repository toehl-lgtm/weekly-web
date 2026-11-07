# Datenschutz und Impressum: Durchsicht 8. November 2026

Keine Rechtsberatung und keine Freigabe. Geprüft wurden `privacy.html` und `imprint.html` gegen App-Quellcode, `Info.plist` und `PrivacyInfo.xcprivacy`.

## Was stimmt
- Aussagen zu lokaler Speicherung, iCloud, MapKit, StoreKit, Update-Check, keine Analyse/Werbung stimmen mit dem Code überein. Die Website setzt keine Cookies; alle Ressourcen sind lokal (CSP).
- Neue Assets (Favicon, Logo, og-Bild) werden vom selben Host geladen; es kommt kein Drittdienst hinzu.

## Offen, nach Priorität
1. **Support-Postfach bei Gmail.** Der Text nennt Google als Auftragsverarbeiter. Für ein gewerbliches Postfach gibt es bei privatem Gmail keinen Auftragsverarbeitungsvertrag (Art. 28 DSGVO); den bietet Google Workspace. Neue Adresse bei einem Anbieter mit AVV und EU-Verarbeitung anlegen (z. B. iCloud+ mit eigener Domain, Proton, Workspace) und danach den Absatz „Support: Kontakt per E-Mail" im Datenschutz anpassen (Anbieter, Sitz, Transfergarantien). Die Adresse steht an diesen Stellen: `index.html` (FAQ, Footer), `privacy.html`, `imprint.html` (je DE/EN) und in der App `FeedbackMailHelper.swift` (`defaultRecipient`). Zusätzlich in App Store Connect (Support, Händlerangaben).
2. **Impressum § 5 DDG: zweiter schneller Kontaktweg.** Nur eine E-Mail genügt nach der Rechtsprechung meist nicht; üblich sind Telefonnummer oder Kontaktformular. Eine statische Seite hat kein Formular, daher Telefonnummer oder ein Postfach mit Antwortzusage. Für Apple wird bei Verkauf in der EU ohnehin eine Händlerangabe (Händler/Trader: Anschrift, Telefon, E-Mail) öffentlich angezeigt; dieselben Angaben verwenden.
3. **Umsatzsteuer-ID / Kleinunternehmer:** Falls vorhanden, im Impressum nennen (§ 5 Abs. 1 Nr. 6 DDG). Falls Kleinunternehmer ohne ID: nichts nötig. Gewerbeanmeldung und Steuerfragen mit Steuerberatung klären.
4. **Standortberechtigung:** `Info.plist` enthält `NSLocationWhenInUseUsageDescription`, im Quellcode gibt es aber keinen Standortzugriff (kein CLLocationManager, keine MapKit-Nutzerposition). Entweder Eintrag entfernen (analog zu den bereits entfernten Kalender-Schreib- und Kontakte-Einträgen) oder die tatsächliche Nutzung im Datenschutz nennen. App Review kann nach dem Zweck fragen.
5. **Stand-Datum:** Datenschutz nennt „Stand: 11. Oktober 2026". Nach der E-Mail-Umstellung aktualisieren.
6. **Nutzungsbedingungen / Abo:** Datenschutz erwähnt das Abo; die Kauf-Ansicht verlinkt laut Roadmap Datenschutz und Nutzungsbedingungen. Prüfen, dass beide URLs live erreichbar sind (Apple EULA reicht, sonst eigene Seite).
