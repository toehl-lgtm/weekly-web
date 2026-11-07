# Datenschutz und Impressum: Durchsicht 8. November 2026

Keine Rechtsberatung und keine Freigabe. Geprüft wurden `privacy.html` und `imprint.html` gegen App-Quellcode, `Info.plist` und `PrivacyInfo.xcprivacy`.

## Was stimmt
- Aussagen zu lokaler Speicherung, iCloud, MapKit, StoreKit, Update-Check, keine Analyse/Werbung stimmen mit dem Code überein. Die Website setzt keine Cookies; alle Ressourcen sind lokal (CSP).
- Neue Assets (Favicon, Logo, og-Bild) werden vom selben Host geladen; es kommt kein Drittdienst hinzu.

## Offen, nach Priorität
1. **Support-Postfach bei Gmail.** Der Text nennt Google als Auftragsverarbeiter. Für ein gewerbliches Postfach gibt es bei privatem Gmail keinen Auftragsverarbeitungsvertrag (Art. 28 DSGVO); den bietet Google Workspace. Neue Adresse bei einem Anbieter mit AVV und EU-Verarbeitung anlegen (z. B. iCloud+ mit eigener Domain, Proton, Workspace) und danach den Absatz „Support: Kontakt per E-Mail" im Datenschutz anpassen (Anbieter, Sitz, Transfergarantien). Die Adresse steht an diesen Stellen: `index.html` (FAQ, Footer), `privacy.html`, `imprint.html` (je DE/EN) und in der App `FeedbackMailHelper.swift` (`defaultRecipient`). Zusätzlich in App Store Connect (Support, Händlerangaben).
2. **Impressum § 5 DDG: zweiter schneller Kontaktweg.** Nur eine E-Mail genügt nach der Rechtsprechung meist nicht; üblich sind Telefonnummer oder Kontaktformular. Eine statische Seite hat kein Formular, daher Telefonnummer oder ein Postfach mit Antwortzusage. Für Apple wird bei Verkauf in der EU ohnehin eine Händlerangabe (Händler/Trader: Anschrift, Telefon, E-Mail) öffentlich angezeigt; dieselben Angaben verwenden.
3. **Umsatzsteuer-ID / Kleinunternehmer:** Falls vorhanden, im Impressum nennen (§ 5 Abs. 1 Nr. 6 DDG). Falls Kleinunternehmer ohne ID: nichts nötig. Gewerbeanmeldung und Steuerfragen mit Steuerberatung klären.
4. **Standortberechtigung:** erledigt. `NSLocationWhenInUseUsageDescription` wurde samt Übersetzungen aus der App entfernt (kein Standortzugriff im Code). Soll später "aktueller Standort" in der Adresseingabe kommen, Berechtigung und Datenschutztext dann gemeinsam ergänzen.
5. **Stand-Datum:** Datenschutz nennt „Stand: 11. Oktober 2026". Nach der E-Mail-Umstellung aktualisieren.
6. **Nutzungsbedingungen / Abo:** Datenschutz erwähnt das Abo; die Kauf-Ansicht verlinkt laut Roadmap Datenschutz und Nutzungsbedingungen. Prüfen, dass beide URLs live erreichbar sind (Apple EULA reicht, sonst eigene Seite).

## Preise auf der Website (8. November 2026)
- `index.html` zeigt 0,99 €/Monat und 8,99 €/Jahr (Deutschland, inkl. MwSt.), „ca. 24 % sparen", 14 Tage kostenlos für Berechtigte, automatische Verlängerung, Kündigung 24 h vor Ablauf, Hinweis auf abweichende Landespreise. Grundlage sind nur `StoreKit/Weekly.storekit` und `docs/releases/subscription-setup.md` (geplante Startpreise). **Vor dem Veröffentlichen mit den tatsächlichen Preisen in App Store Connect abgleichen**; die Zahlen stehen an einer Stelle im HTML (`#preise`) plus englisch in `assets/brand/language.js`.
- Länderpreise sind bewusst nicht aufgelistet: eine statische Seite kennt den Storefront nicht, und Apple legt sie fest. Wer sie nennen will, zieht sie aus App Store Connect (Preisübersicht) und nennt Stand und Währung.
- Nutzungsbedingungen verlinken auf Apples Standard-EULA, wie die Paywall. Eine eigene Seite wäre nur nötig, wenn die App eigene Bedingungen nutzt.
- Beim Umzug zu Strato ändern sich die URLs: Die App verlinkt `https://toehl-lgtm.github.io/weekly-web/privacy.html` (Paywall, Onboarding, Datenschutz-Ansicht, Nur-Lesen-Ansicht); App Store Connect (Datenschutz-/Support-URL) und `canonical`/`og:image`/Sitemap hier ebenfalls anpassen. Bis zur Weiterleitung die alte Adresse nicht abschalten.
