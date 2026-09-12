# weekly – Website & App Store Legal Hub

Offizielle Website, Feature-Showcase und rechtliche Pflichtseiten (Datenschutz & Impressum) für die iOS-App **weekly**, optimiert für das kostenlose Hosting via **GitHub Pages**.

---

## 📱 Enthaltene Seiten & URLs

| Seite | Datei | Zweck / Verwendung |
|---|---|---|
| **Landingpage & Feature-Showcase** | `index.html` | Offizielle Startseite, animiertes Mockup, Marketing-URL |
| **Datenschutzerklärung (Privacy Policy)** | `privacy.html` | **Pflicht-Feld** in App Store Connect (DSGVO & Apple Richtlinien) |
| **Impressum & Kontakt** | `imprint.html` | Gesetzliche Anbieterkennzeichnung & Kontakt |
| **Support & FAQ** | `index.html#support` | **Pflicht-Feld** in App Store Connect (Support-URL) |

---

## 🚀 GitHub Pages aktivieren (in 3 Schritten)

GitHub Pages ist für dieses Repository **100 % kostenlos**.

### 1. Neues Repository auf GitHub erstellen
1. Gehe auf [github.com/new](https://github.com/new).
2. Repository-Name: z. B. `weekly-web` (oder `weekly`).
3. Sichtbarkeit: **Public** auswählen.
4. *Keine* README oder Lizenz hinzufügen (da wir diese lokal schon haben).

### 2. Code zu GitHub pushen
Führe in diesem Ordner im Terminal aus:
```bash
cd /Users/timoehl/Developer/weekly-web
git remote add origin https://github.com/<DEIN-NUTZERNAME>/weekly-web.git
git branch -M main
git push -u origin main
```

### 3. GitHub Pages einschalten
1. Öffne dein Repository auf GitHub.
2. Gehe auf **Settings** (Zahnrad oben rechts).
3. Klicke links im Menü auf **Pages**.
4. Unter **Build and deployment** -> **Source**: Wähle **Deploy from a branch**.
5. Wähle **Branch: `main`** und **Folder: `/ (root)`** aus und klicke auf **Save**.

👉 Nach ca. 1 Minute ist deine Website unter `https://<DEIN-NUTZERNAME>.github.io/weekly-web/` weltweit erreichbar!

---

## 📋 URLs für App Store Connect

Trage in **App Store Connect** beim Einreichen der App folgende URLs ein:

- **Datenschutz-URL (Privacy Policy URL):**  
  `https://<DEIN-NUTZERNAME>.github.io/weekly-web/privacy.html`
- **Support-URL:**  
  `https://<DEIN-NUTZERNAME>.github.io/weekly-web/#support`
- **Marketing-URL (optional):**  
  `https://<DEIN-NUTZERNAME>.github.io/weekly-web/`

---

## 🎨 Features des Webdesigns
- **Minimalistischer Apple-Designstil:** Typografie und Farbpalette abgestimmt auf iOS (Dark Mode & Light Mode Umschalter).
- **Flüssige CSS/JS Micro-Animations:** Scroll-Reveal, schwebende Badges, Spotlight-Hover auf Feature-Karten.
- **Interaktives iPhone-Mockup:** Interaktiver Stundenplan-Raster-Switcher (Basiswoche, Arbeitszeit-Modus, Apple Kalender-Sync).
- **0 % Tracking:** Keine Cookie-Banner nötig, keine Drittanbieter-Skripte, maximale Performance (100/100 Google Lighthouse).
