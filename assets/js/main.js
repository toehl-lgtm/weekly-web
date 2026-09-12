/**
 * weekly - Modern Interactive Logic
 * Supports DE & EN localizations, real screenshot toggling, theme switching, smooth FAQ, and footer language selector.
 */

const translations = {
  de: {
    navFeatures: "Features",
    navPreview: "Vorschau",
    navPrivacy: "Datenschutz",
    navSupport: "Support & FAQ",
    badgeText: "Indie-App für iPhone • iOS",
    heroTitlePrefix: "Deine Woche.",
    heroTitleGradient: "Auf den Punkt gebracht.",
    heroDesc: "Schluss mit unübersichtlichen Kalendern. weekly kombiniert die Klarheit eines intuitiven Wochenrasters mit smartem Arbeitszeit-Tracking, automatischer iCloud-Synchronisation und 100 % Privatsphäre.",
    appStoreBadge: "Demnächst im App Store",
    navCta: "App Store",
    discoverFeatures: "Features entdecken",
    metaNative: "⚡ Blitzschnell & intuitiv",
    metaIcloud: "☁️ Automatische iCloud-Synchronisation",
    metaPrivacy: "🔒 Keine Werbung, kein Tracking",
    tabDark: "🌙 Dunkelmodus",
    tabLight: "☀️ Hellmodus",
    sectionSub: "Funktionen im Überblick",
    sectionTitle: "Konzipiert für deinen echten Alltag.",
    sectionDesc: "weekly wurde für Menschen entwickelt, die Arbeit, Studium, Sport und Freizeit harmonisch und ohne Stress in einer klaren Wochenübersicht planen möchten.",
    f1Title: "Klares Wochenraster",
    f1Desc: "Perfekt auf einen Blick. Das übersichtliche Wochenraster mit Zeitleiste (07:00 – 21:00 Uhr) und roter Live-Zeitlinie verschafft dir sofort Orientierung ohne lästiges Scrollen.",
    f2Title: "Smarter Arbeitszeit-Tracker",
    f2Desc: "Behalte deine Soll- und Ist-Arbeitszeiten im Griff. Nur berufliche Termine fließen in deine wöchentliche Arbeitszeitberechnung ein. Ideal für Studium, Nebenjob oder Gleitzeit.",
    f3Title: "Basiswoche & flexible Vorlagen",
    f3Desc: "Erstelle deine ideale Routine-Woche einmalig – sie wiederholt sich automatisch. Bei Prüfungsphasen oder Urlaub schaltest du einfach mit einem Tippen auf ein Wochen-Preset um.",
    f4Title: "Deine Apple-Kalender im Blick",
    f4Desc: "Binde deine bestehenden Kalender (Vereinssport, Termine, Familie) direkt ein. Bestimme selbst, welche Termine als Arbeitszeit gelten und passe die Farben nach Wunsch an.",
    f5Title: "Stundennachweis als PDF & CSV",
    f5Desc: "Monatliche Stundenabrechnungen per Knopfdruck: Exportiere deine geleisteten Stunden als saubere PDF-Übersicht für deinen Arbeitgeber oder als CSV-Tabelle.",
    f6Title: "Sichere iCloud-Synchronisation",
    f6Desc: "Deine Daten gehören dir. Alles wird direkt auf deinem iPhone gespeichert und sicher verschlüsselt über deine eigene Apple iCloud synchronisiert – ohne fremde Server.",
    trustTitle: "100 % Privatsphäre. Kein Tracking. Keine Werbung.",
    trustDesc: "Deine Termine sind Privatsache. weekly läuft vollständig auf deinem Gerät und deiner persönlichen iCloud. Wir erfassen keinerlei Nutzungsdaten, haben keine Werbebanner und verkaufen niemals Daten an Dritte.",
    trustBtn: "Datenschutzerklärung öffnen →",
    faqSub: "Hilfe & Support",
    faqTitle: "Häufig gestellte Fragen (FAQ)",
    faqDesc: "Alles Wichtige zur App, Synchronisation und zum Support.",
    faq1Q: "Wie funktioniert die iCloud-Synchronisation?",
    faq1A: "weekly nutzt dein persönliches Apple iCloud-Konto. Wenn iCloud auf deinem iPhone aktiv ist, synchronisieren sich alle Einträge vollautomatisch im Hintergrund auf deinen Apple-Geräten. Es ist keine zusätzliche Registrierung erforderlich.",
    faq2Q: "Werden meine bestehenden Kalendertermine verändert?",
    faq2A: "Nein, keinesfalls. weekly bindet deine Apple-Kalender nur lesend ein, um sie nahtlos im Wochenraster anzuzeigen. Deine bestehenden Kalender bleiben völlig unberührt.",
    faq3Q: "Speichert weekly Daten auf fremden Entwickler-Servern?",
    faq3A: "Nein, zu 0 %. weekly besitzt keine eigenen Server oder Datenbanken. Deine Daten verbleiben ausschließlich auf deinem Gerät und in deiner persönlichen, verschlüsselten iCloud.",
    faq4Q: "Wer entwickelt weekly und wie erreiche ich den Support?",
    faq4A: "weekly ist ein unabhängiges Herzensprojekt, das ich (Tim Oehl) als Solo-Entwickler mit viel Liebe zum Detail baue. Bei Fragen, Feedback oder Wünschen erreichst du mich direkt unter weekly.workandworkout@gmail.com. Da ich das Projekt alleine betreue, kann eine Antwort je nach Arbeitsaufwand etwas dauern – vielen Dank für dein Verständnis und deine Geduld!",
    supportIndieBadge: "👨‍💻 Indie-Entwickler Projekt",
    supportBoxTitle: "Fragen oder Feedback an den Entwickler?",
    supportBoxDesc: "Ich freue mich über jede Nachricht, Feedback und neue Ideen. Da ich die App alleine entwickle, kann eine Antwort manchmal etwas Zeit in Anspruch nehmen.",
    supportBtn: "Nachricht schreiben (weekly.workandworkout@gmail.com)",
    footerImprint: "Impressum / Kontakt",
    footerRights: "© 2026 Tim Oehl. Alle Rechte vorbehalten.",
    footerMade: "Als Indie-App mit Leidenschaft für iOS entwickelt.",
    langLabel: "Sprache:"
  },
  en: {
    navFeatures: "Features",
    navPreview: "Preview",
    navPrivacy: "Privacy",
    navSupport: "Support & FAQ",
    badgeText: "Indie App for iPhone • iOS",
    heroTitlePrefix: "Your Week.",
    heroTitleGradient: "Clear and Focused.",
    heroDesc: "No more cluttered calendars. weekly combines the visual clarity of a structured timetable grid with smart work-hour tracking, seamless iCloud sync, and 100% privacy.",
    appStoreBadge: "Coming Soon to App Store",
    navCta: "App Store",
    discoverFeatures: "Explore Features",
    metaNative: "⚡ Lightning Fast & Native",
    metaIcloud: "☁️ Automatic iCloud Sync",
    metaPrivacy: "🔒 No Ads, Zero Tracking",
    tabDark: "🌙 Dark Mode",
    tabLight: "☀️ Light Mode",
    sectionSub: "Smart Capabilities",
    sectionTitle: "Built for your real everyday life.",
    sectionDesc: "weekly was created for people who want to organize work, university, sports routines, and leisure time seamlessly without calendar stress.",
    f1Title: "Visual Timetable Grid",
    f1Desc: "See your whole week at a glance. The scaled grid schedule with timeline (07:00 – 21:00) and live red current-time marker gives you instant clarity without endless scrolling.",
    f2Title: "Smart Work-Hour Tracker",
    f2Desc: "Keep your target and actual hours under control. Only work appointments count toward your weekly work goal. Ideal for students, freelancers, and part-time jobs.",
    f3Title: "Base Week & Shift Presets",
    f3Desc: "Define your ideal recurring weekly rhythm once – it generates automatically. Switching to exam phases, shifts, or vacation weeks takes just a single tap.",
    f4Title: "Apple Calendar Integration",
    f4Desc: "Seamlessly view your existing iOS calendars (sports clubs, family, meetings). Customize colors, transparency, and decide which events count towards your work balance.",
    f5Title: "PDF & CSV Time Reports",
    f5Desc: "Effortless monthly work hour documentation: Export your tracked hours as a clean PDF summary for your employer or as raw CSV data.",
    f6Title: "Secure iCloud Sync",
    f6Desc: "Your data stays yours. Everything is stored locally on your device and safely synchronized through your private Apple iCloud – without third-party developer servers.",
    trustTitle: "100% Privacy. Zero Tracking. No Ads.",
    trustDesc: "Your schedule is strictly private. weekly operates entirely on your iPhone and personal iCloud. We do not collect behavioral data, have no ads, and never sell data to anyone.",
    trustBtn: "Open Privacy Policy →",
    faqSub: "Help & Inquiries",
    faqTitle: "Frequently Asked Questions",
    faqDesc: "Everything you need to know about the app, sync, and support.",
    faq1Q: "How does iCloud synchronization work?",
    faq1A: "weekly uses your personal Apple iCloud account. With iCloud enabled on your iPhone, all appointments sync automatically in the background between your Apple devices. No separate login needed.",
    faq2Q: "Will weekly modify my existing calendar events?",
    faq2A: "Not at all. weekly connects to your Apple Calendars in read-only mode to visualize them cleanly in your weekly grid. Your original calendar data is never altered.",
    faq3Q: "Does weekly upload data to external servers?",
    faq3A: "Zero percent. weekly has no developer servers or external databases. Your data stays solely on your device and inside your encrypted personal iCloud.",
    faq4Q: "Who develops weekly and how can I reach support?",
    faq4A: "weekly is an independent passion project crafted and maintained solely by myself, Tim Oehl. You can contact me directly at weekly.workandworkout@gmail.com. As I manage everything independently, replying may take a little time depending on workload – thank you very much for your patience and understanding!",
    supportIndieBadge: "👨‍💻 Indie Developer Project",
    supportBoxTitle: "Questions or feedback for the developer?",
    supportBoxDesc: "I welcome any message, feedback, or feature ideas. Because I develop weekly independently as a solo project, responses might take a few days.",
    supportBtn: "Send a message (weekly.workandworkout@gmail.com)",
    footerImprint: "Legal & Contact",
    footerRights: "© 2026 Tim Oehl. All rights reserved.",
    footerMade: "Handcrafted with passion for iOS as an indie app.",
    langLabel: "Language:"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  initScreenshotSwitcher();
  initScrollReveals();
  initSpotlightCards();
  initFaqAccordion();
});

/* --- 1. Language System --- */
function initLanguage() {
  const langBtns = document.querySelectorAll('.lang-btn');
  const footerSelect = document.getElementById('footer-lang-select');
  const savedLang = localStorage.getItem('weekly-lang');
  const browserLang = (navigator.language || 'de').startsWith('de') ? 'de' : 'en';
  const currentLang = savedLang || browserLang;

  setLanguage(currentLang);

  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const selected = btn.getAttribute('data-lang');
      setLanguage(selected);
      localStorage.setItem('weekly-lang', selected);
    });
  });

  if (footerSelect) {
    footerSelect.value = currentLang;
    footerSelect.addEventListener('change', (e) => {
      const selected = e.target.value;
      setLanguage(selected);
      localStorage.setItem('weekly-lang', selected);
    });
  }
}

function setLanguage(lang) {
  const dict = translations[lang] || translations.de;
  document.documentElement.setAttribute('lang', lang);

  // Sync nav buttons
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-lang') === lang);
  });

  // Sync footer dropdown
  const footerSelect = document.getElementById('footer-lang-select');
  if (footerSelect) {
    footerSelect.value = lang;
  }

  // Update elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Update legal page toggles if present
  if (typeof window.showLegalLang === 'function') {
    window.showLegalLang(lang);
  }
  if (typeof window.showImprintLang === 'function') {
    window.showImprintLang(lang);
  }
}

/* --- 2. Screenshot Switcher --- */
function initScreenshotSwitcher() {
  const buttons = document.querySelectorAll('.tab-pill[data-screenshot]');
  const img = document.getElementById('phone-screenshot');
  if (!img || !buttons.length) return;

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const target = btn.getAttribute('data-screenshot');
      img.style.opacity = '0';
      setTimeout(() => {
        if (target === 'light') {
          img.src = 'assets/img/screenshot-week-grid.png';
          img.alt = 'weekly iOS App Hellmodus Wochenplan';
        } else {
          img.src = 'assets/img/screenshot-week-grid-dark.png';
          img.alt = 'weekly iOS App Dunkelmodus Wochenplan';
        }
        img.style.opacity = '1';
      }, 150);
    });
  });
}

/* --- 3. Dark / Light Theme Toggle --- */
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('weekly-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const currentTheme = savedTheme || (prefersDark ? 'dark' : 'light');

  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  if (toggleBtn) {
    // Avoid double attaching
    toggleBtn.onclick = () => {
      const activeTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('weekly-theme', newTheme);
      updateThemeIcon(newTheme);
    };
  }
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('theme-icon');
  if (!icon) return;
  if (theme === 'dark') {
    icon.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
  } else {
    icon.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
  }
}

/* --- 4. Scroll Reveals --- */
function initScrollReveals() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -20px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

/* --- 5. Mouse Spotlight --- */
function initSpotlightCards() {
  const cards = document.querySelectorAll('.feature-card');
  cards.forEach(card => {
    const spotlight = card.querySelector('.feature-card-spotlight');
    if (!spotlight) return;

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      spotlight.style.left = `${x}px`;
      spotlight.style.top = `${y}px`;
    });
  });
}

/* --- 6. Smooth FAQ Accordion --- */
function initFaqAccordion() {
  const items = document.querySelectorAll('.faq-item');
  items.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (!question) return;

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');
      items.forEach(i => i.classList.remove('active'));
      if (!isOpen) {
        item.classList.add('active');
      }
    });
  });
}
