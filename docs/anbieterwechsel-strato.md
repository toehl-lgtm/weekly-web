# Anbieterwechsel zu STRATO: Bestand und Checkliste

Stand: 8. November 2026 (Release-Autopilot, Lauf 12:00). Keine Rechtsberatung. Nichts davon ist schon umgesetzt; es wurde kein Vertrag geschlossen, nichts gekündigt, nichts hochgeladen.

Der eigentliche Umzug (URL-Tabelle, `.htaccess`, Upload) steht in `../oehl-studios/docs/migration.md`. Diese Datei ergänzt, was **weekly-web** selbst betrifft.

## Heutige Anbieter (belegt)

| Zweck | Anbieter heute | Vertrag / AVV | Quelle |
| --- | --- | --- | --- |
| Website `toehl-lgtm.github.io/weekly-web/` | GitHub Pages (persönliches Konto `toehl-lgtm`) | kein DPA für diese Nutzung belegt | `provider-contracts-2026-10-11.md` |
| Quellcode-Repository | GitHub | wie oben; kein Besucherkontakt | – |
| Support-/Impressums-Mail `weekly.workandworkout@gmail.com` | Consumer-Gmail (Google) | **kein AVV möglich** | `provider-contracts-2026-10-11.md`, `legal-review-2026-11-08.md` |
| App-Vertrieb, Abo, Zahlungen | Apple (App Store, StoreKit) | Apple-Entwicklervereinbarung / Paid Apps Agreement | Code, `subscription-setup.md` |
| Sync der App-Daten | Apple iCloud (privater Container `iCloud.com.timoehl.weekly`) | Daten im iCloud-Konto der Nutzer, kein Zugriff des Anbieters | `WeeklyApp.swift` |

## Wer hängt an welcher Adresse

- **App 1.2 (live):** enthält keine Web-Adresse, aber fest `weekly.workandworkout@gmail.com` (Feedback). App Store Connect zeigt Datenschutz- und Support-URL.
- **App 1.4 (Abo-Version):** `https://toehl-lgtm.github.io/weekly-web/privacy.html` an 4 Codestellen (Paywall, Onboarding, Datenschutz-Ansicht, Nur-Lesen-Ansicht), dazu dieselbe Gmail-Adresse. Kein Impressum- oder Startseiten-Link.
- **Folge:** GitHub Pages und das Gmail-Postfach dürfen **nicht abgeschaltet** werden, solange 1.2/1.4 in Gebrauch sind. Neue URLs/Mail erst in einer späteren App-Version einbauen.

## Checkliste

### A. STRATO einrichten (Nutzer)
- [ ] Paket mit Webspace **und** E-Mail buchen, Wunschdomain sichern.
- [ ] Im STRATO-Kundenbereich den **AVV (Art. 28 DSGVO) abschließen** und als PDF in den privaten Firmenordner legen (nicht ins Repo).
- [ ] Aus AVV/STRATO-Datenschutzhinweisen notieren: Vertragspartner (Name, Sitz), Rechenzentrumsstandort, Speicherdauer der Server-Logfiles. Diese Werte brauchen beide Websites.
- [ ] SSL-Zertifikat aktivieren.

### B. DNS und Domain
- [ ] Domain zeigt auf den STRATO-Webspace (bei Buchung über STRATO automatisch).
- [ ] `www` und ohne `www`: eine Variante als Weiterleitung auf die andere (STRATO-Kundenbereich).
- [ ] Mail-DNS (MX, SPF, DKIM, DMARC) von STRATO setzen lassen bzw. prüfen; Testmail an eine fremde Adresse senden und Spam-Ordner prüfen.

### C. E-Mail
- [ ] Postfach anlegen, z. B. `support@<domain>` (eine Adresse für Support **und** Impressum genügt).
- [ ] Gmail behalten: in Gmail Weiterleitung an die neue Adresse einrichten und Autoantwort „Neue Adresse: …“ setzen. Erst löschen, wenn keine App-Version mit der Gmail-Adresse mehr in Gebrauch ist.
- [ ] Neue Adresse eintragen: App Store Connect (Support-Kontakt, EU-Händlerangaben), später App `FeedbackMailHelper.swift` (`defaultRecipient`) in einer Folgeversion.

### D. weekly-web nach Einrichtung der Mail anpassen
Hosting bleibt GitHub Pages (die alten Adressen müssen erreichbar bleiben). Nur Mail und Telefon ändern sich:
- [ ] `imprint.html` (DE/EN), `privacy.html` (DE/EN, Abschnitt 1 und Schlusssatz), `index.html` (FAQ, Fußzeile), alle `mailto:`-Links: Gmail-Adresse → neue Adresse.
- [ ] `privacy.html`, Abschnitt „Support: Kontakt per E-Mail“, zweiter Absatz ersetzen durch:
  - DE: „Das Supportpostfach liegt bei der [[NUTZER: Vertragspartner laut AVV, z. B. STRATO GmbH, Sitz]], mit der ein Vertrag zur Auftragsverarbeitung nach Art. 28 DSGVO besteht. Die Nachrichten werden in Rechenzentren in [[NUTZER: Standort laut AVV]] verarbeitet.“
  - EN: „The support mailbox is hosted by [[NUTZER: processor per DPA]] under a data processing agreement pursuant to Article 28 GDPR. Messages are processed in data centres in [[NUTZER: location per DPA]].“
  - Für eine Übergangszeit ergänzen: „Nachrichten an die frühere Adresse weekly.workandworkout@gmail.com werden weitergeleitet; dafür gilt bis zur Löschung des Postfachs die bisherige Beschreibung (Google).“
- [ ] Telefonnummer ins Impressum (DE und EN, im Kasten unter E-Mail): `Telefon: [[NUTZER: Telefonnummer]]` / `Phone: …`. Gleiche Nummer wie in den EU-Händlerangaben bei Apple.
- [ ] „Stand“ in `privacy.html` (DE/EN) auf das Änderungsdatum setzen.
- [ ] Vor dem Push: `grep -rn "\[\[NUTZER" *.html` muss leer sein.

### E. Später: Umleitung auf die OEHL-Studios-Domain
- [ ] Nach `../oehl-studios/docs/migration.md` Abschnitt 2: `privacy.html` bleibt inhaltlich vollständig (mit Hinweis auf die neue Adresse), `index.html` und `imprint.html` können auf kurze Umleitungsseiten umgestellt werden. Anbieterangaben dürfen nie an zwei Orten voneinander abweichen.
- [ ] App Store Connect: Datenschutz-, Support- und Marketing-URL erst auf die neue Domain umstellen, wenn diese live ist und geprüft wurde (`curl -sI`).

### F. Alte Anbieter
- [ ] **GitHub Pages nicht kündigen/abschalten** (App 1.4 öffnet `privacy.html`). Repository bleibt.
- [ ] Gmail erst löschen, wenn keine App-Version mit der Adresse mehr aktiv ist; vorher Supportmails exportieren und nach Löschfristen behandeln.
- [ ] Die GitHub-Supportanfrage (`github-pages-support-request.md`) wird mit dem Umzug weniger dringend; Restfrage: Besucherlogs der weiterbestehenden `github.io`-Seiten (bleibt im Datenschutz beschrieben).
