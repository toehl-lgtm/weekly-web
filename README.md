# weekly – Website & App Store Legal Hub

Offizielle Website, Feature-Showcase und rechtliche Pflichtseiten (Datenschutz & Impressum) für die iOS-App **weekly**, optimiert für das kostenlose Hosting via **GitHub Pages**.

---

## 📱 Enthaltene Seiten & URLs

| Seite | Datei | Zweck / Verwendung |
|---|---|---|
| **Landingpage & Feature-Showcase** | `index.html` | Offizielle Startseite, echte App-Screenshots, Marketing-URL, DE & EN |
| **Datenschutzerklärung (Privacy Policy)** | `privacy.html` | **Pflicht-Feld** in App Store Connect (DSGVO & Apple Richtlinien, DE/EN) |
| **Impressum & Kontakt** | `imprint.html` | Anbieterkennzeichnung & Support-Kontakt (DE/EN) |
| **Support & FAQ** | `index.html#support` | **Pflicht-Feld** in App Store Connect (Support-URL) |

---

## 🌟 Highlights der Landingpage
- **Echte iOS-Screenshots:** Pixelgenaue Aufnahmen direkt aus dem iPhone 17 Pro Simulator mit echten Terminen (inkl. Umschalter zwischen Dunkelmodus und Hellmodus).
- **Offizielles App-Icon:** Das neon-glassmorphe Icon wird oben links und als Favicon genutzt.
- **Zweisprachig (DE / EN):** Nahtloser Sprachwechsler (DE / EN) mit automatischer Erkennung der Browser-Sprache.
- **Verständliche Sprache:** Keine unverständlichen Entwickler-Begriffe, sondern klarer Fokus auf Nutzer-Mehrwert (iCloud-Synchronisation, Privatsphäre, Arbeitszeiterfassung).
- **Offizielle Kontaktadresse:** `weekly.workandworkout@gmail.com`
- **100 % Tracking-frei & blitzschnell:** Keine externen Abhängigkeiten, kein Cookie-Banner erforderlich.

---

## 🚀 GitHub Pages aktivieren (in 3 Schritten)

GitHub Pages ist für dieses Repository **100 % kostenlos**.

### 1. Neues Repository auf GitHub erstellen
1. Gehe auf [github.com/new](https://github.com/new).
2. Repository-Name: z. B. `weekly-web` (oder `weekly`).
3. Sichtbarkeit: **Public** auswählen.
4. *Keine* README oder Lizenz auf GitHub anlegen (ist lokal schon fertig).

### 2. Code zu GitHub pushen
Führe im Terminal aus:
```bash
cd /Users/timoehl/Developer/weekly-web
git remote add origin https://github.com/<DEIN-NUTZERNAME>/weekly-web.git
git branch -M main
git push -u origin main
```

### 3. GitHub Pages einschalten
1. Öffne dein Repository auf GitHub.
2. Gehe auf **Settings** → **Pages**.
3. Wähle unter **Build and deployment** -> **Source**: **Deploy from a branch**.
4. Wähle **Branch: `main`** und **Folder: `/ (root)`** und klicke auf **Save**.

👉 Nach ca. 1 Minute ist deine Website unter `https://<DEIN-NUTZERNAME>.github.io/weekly-web/` online!

---

## 📋 URLs für App Store Connect

Trage in **App Store Connect** beim Einreichen der App folgende URLs ein:

- **Datenschutz-URL (Privacy Policy URL):**  
  `https://<DEIN-NUTZERNAME>.github.io/weekly-web/privacy.html`
- **Support-URL:**  
  `https://<DEIN-NUTZERNAME>.github.io/weekly-web/#support`
- **Marketing-URL (optional):**  
  `https://<DEIN-NUTZERNAME>.github.io/weekly-web/`
