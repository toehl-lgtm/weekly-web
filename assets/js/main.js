/**
 * weekly - Modern Interactive Logic
 * Supports DE & EN localizations, real screenshot toggling, theme switching, smooth FAQ, and footer language selector.
 */

// Storage may be unavailable in private or restricted browser contexts.
const weeklyStorage = {
  get(key) { try { return localStorage.getItem(key); } catch { return null; } },
  set(key, value) { try { localStorage.setItem(key, value); } catch { /* Keep working without persistence. */ } }
};

const translations = {
  de: {
    navFeatures: "Features",
    navPreview: "Vorschau",
    navPrivacy: "Datenschutz",
    navSupport: "Support & FAQ",
    badgeText: "Jetzt live im App Store • iOS",
    heroTitlePrefix: "Deine Woche.",
    heroTitleGradient: "Alles hat seinen Platz.",
    heroDesc: "Arbeit, Alltag und Training in einem klaren Wochenüberblick. Plane deinen Tag, erfasse Arbeitszeit und behalte deine Routinen im Blick.",
    appStoreBadge: "Im App Store laden",
    navCta: "App Store ↗",
    discoverFeatures: "Features entdecken",
    ctaTitle: "Deine Woche beginnt hier.",
    ctaDesc: "Plane Arbeit und Training an einem Ort. weekly ist im App Store für iPhone verfügbar – ohne Werbung und Analyse-Tools.",
    ctaBadge: "Im App Store laden",
    ctaMeta: "iPhone • iOS 17+ • ohne Werbung und Tracking • iCloud-Sync",
    tabWeek: "Woche",
    tabToday: "Heute",
    tabWorkout: "Workout",
    previewCaption: "Echte App-Aufnahmen mit Demo-Daten",
    sectionSub: "So funktioniert weekly",
    sectionTitle: "Weniger suchen. Mehr Überblick.",
    sectionDesc: "Vom Wochenplan bis zum Workout: Jede Ansicht zeigt dir genau das, was gerade zählt.",
    todayEyebrow: "DEIN TAG",
    todayTitle: "Heute weißt du, was ansteht.",
    todayDesc: "Termine, Arbeitszeit und das Nächste auf deinem Plan stehen in einer ruhigen Tagesansicht zusammen.",
    workoutEyebrow: "DEIN TRAINING",
    workoutTitle: "Sport passt in deinen Alltag.",
    workoutDesc: "Plane Training neben Arbeit und Freizeit. Im Workout-Bereich findest du deine Routinen und Vorlagen an einem Ort.",
    f3Title: "Wiederkehrende Wochen",
    f3Desc: "Lege eine Basiswoche an und wechsle bei Bedarf zu einer anderen Vorlage.",
    f4Title: "Apple-Kalender",
    f4Desc: "Zeige ausgewählte Kalender direkt neben deinen weekly-Terminen an.",
    f5Title: "Stundennachweise",
    f5Desc: "Exportiere deine Arbeitszeiten als PDF oder CSV.",
    trustTitle: "Deine Daten bleiben in deiner Hand.",
    trustDesc: "Deine Pläne liegen auf deinem Gerät und bei aktivierter Synchronisation in deiner persönlichen iCloud. weekly nutzt keine Analyse-Tools und zeigt keine Werbung. Welche Apple-Dienste die App nutzt, steht in der Datenschutzerklärung.",
    trustBtn: "Datenschutzerklärung öffnen →",
    faqSub: "Hilfe & Support",
    faqTitle: "Häufig gestellte Fragen (FAQ)",
    faqDesc: "Alles Wichtige zur App, Synchronisation und zum Support.",
    faq1Q: "Wie funktioniert die iCloud-Synchronisation?",
    faq1A: "weekly nutzt dein persönliches Apple iCloud-Konto. Wenn iCloud auf deinem iPhone aktiv ist, synchronisieren sich alle Einträge vollautomatisch im Hintergrund auf deinen Apple-Geräten. Es ist keine zusätzliche Registrierung erforderlich.",
    faq2Q: "Werden meine bestehenden Kalendertermine verändert?",
    faq2A: "Nein, keinesfalls. weekly bindet deine Apple-Kalender nur lesend ein, um sie nahtlos im Wochenraster anzuzeigen. Deine bestehenden Kalender bleiben völlig unberührt.",
    faq3Q: "Speichert weekly meine Pläne auf eigenen Servern?",
    faq3A: "Nein. Deine Pläne liegen auf deinem Gerät und bei aktivierter Synchronisation in deiner persönlichen iCloud. Für Ortssuche, Fahrtzeiten und Updates verwendet die App Apple-Dienste; Details findest du in der Datenschutzerklärung.",
    faq4Q: "Wer entwickelt weekly und wie erreiche ich den Support?",
    faq4A: "weekly ist ein unabhängiges Herzensprojekt, das ich (Tim Oehl) als Solo-Entwickler mit viel Liebe zum Detail baue. Bei Fragen, Feedback oder Wünschen erreichst du mich direkt unter weekly.workandworkout@gmail.com. Da ich das Projekt alleine betreue, kann eine Antwort je nach Arbeitsaufwand etwas dauern – vielen Dank für dein Verständnis und deine Geduld!",
    supportIndieBadge: "Unabhängig entwickelt",
    supportBoxTitle: "Fragen oder Feedback an den Entwickler?",
    supportBoxDesc: "Ich freue mich über jede Nachricht, Feedback und neue Ideen. Da ich die App alleine entwickle, kann eine Antwort manchmal etwas Zeit in Anspruch nehmen.",
    supportBtn: "Nachricht schreiben (weekly.workandworkout@gmail.com)",
    footerImprint: "Impressum / Kontakt",
    footerRights: "© 2026 Tim Oehl. Alle Rechte vorbehalten.",
    footerMade: "Ein unabhängiges Projekt von Tim Oehl.",
    langLabel: "Sprache:"
  },
  en: {
    navFeatures: "Features",
    navPreview: "Preview",
    navPrivacy: "Privacy",
    navSupport: "Support & FAQ",
    badgeText: "Now Live on the App Store • iOS",
    heroTitlePrefix: "Your Week.",
    heroTitleGradient: "Everything in its place.",
    heroDesc: "Work, life and training in one clear week view. Plan your day, track work hours and keep your routines in sight.",
    appStoreBadge: "Download on the App Store",
    navCta: "App Store ↗",
    discoverFeatures: "Explore Features",
    ctaTitle: "Your week starts here.",
    ctaDesc: "Plan work and training in one place. weekly is available on the App Store for iPhone, without ads or analytics tools.",
    ctaBadge: "Download on the App Store",
    ctaMeta: "iPhone • iOS 17+ • no ads or tracking • iCloud sync",
    tabWeek: "Week",
    tabToday: "Today",
    tabWorkout: "Workout",
    previewCaption: "Real app captures with sample data",
    sectionSub: "How weekly works",
    sectionTitle: "Less searching. More clarity.",
    sectionDesc: "From the week ahead to your next workout, each view shows what matters right now.",
    todayEyebrow: "YOUR DAY",
    todayTitle: "Know what today holds.",
    todayDesc: "Events, work hours and what's next come together in one calm daily view.",
    workoutEyebrow: "YOUR TRAINING",
    workoutTitle: "Make room for movement.",
    workoutDesc: "Plan exercise alongside work and free time. Find your routines and ready-made plans in one place.",
    f3Title: "Recurring weeks",
    f3Desc: "Set up a base week and switch to another template whenever you need to.",
    f4Title: "Apple Calendars",
    f4Desc: "See selected calendars alongside your weekly events.",
    f5Title: "Time reports",
    f5Desc: "Export your work hours as a PDF or CSV file.",
    trustTitle: "Your data stays in your hands.",
    trustDesc: "Your plans stay on your device and, when sync is enabled, in your personal iCloud. weekly uses no analytics tools and shows no ads. The privacy policy explains which Apple services the app uses.",
    trustBtn: "Open Privacy Policy →",
    faqSub: "Help & Inquiries",
    faqTitle: "Frequently Asked Questions",
    faqDesc: "Everything you need to know about the app, sync, and support.",
    faq1Q: "How does iCloud synchronization work?",
    faq1A: "weekly uses your personal Apple iCloud account. With iCloud enabled on your iPhone, all appointments sync automatically in the background between your Apple devices. No separate login needed.",
    faq2Q: "Will weekly modify my existing calendar events?",
    faq2A: "Not at all. weekly connects to your Apple Calendars in read-only mode to visualize them cleanly in your weekly grid. Your original calendar data is never altered.",
    faq3Q: "Does weekly store my plans on its own servers?",
    faq3A: "No. Your plans stay on your device and, when sync is enabled, in your personal iCloud. The app uses Apple services for places, travel times and updates; see the privacy policy for details.",
    faq4Q: "Who develops weekly and how can I reach support?",
    faq4A: "I'm Tim Oehl, the independent developer behind weekly. You can contact me directly at weekly.workandworkout@gmail.com. As I manage the project on my own, replying may take a little time depending on workload – thank you for your patience and understanding!",
    supportIndieBadge: "Independently developed",
    supportBoxTitle: "Questions or feedback for the developer?",
    supportBoxDesc: "I welcome any message, feedback, or feature ideas. Because I develop weekly independently as a solo project, responses might take a few days.",
    supportBtn: "Send a message (weekly.workandworkout@gmail.com)",
    footerImprint: "Legal & Contact",
    footerRights: "© 2026 Tim Oehl. All rights reserved.",
    footerMade: "An independent project by Tim Oehl.",
    langLabel: "Language:"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  initScreenshotSwitcher();
  initMobileMenu();
  initScrollReveals();
  initFaqAccordion();
});

/* --- 1. Language System --- */
function initLanguage() {
  const langBtns = document.querySelectorAll('.lang-btn, .lang-tab');
  const footerSelect = document.getElementById('footer-lang-select');
  const savedLang = weeklyStorage.get('weekly-lang');
  const browserLang = (navigator.language || 'de').startsWith('de') ? 'de' : 'en';
  const currentLang = ['de', 'en'].includes(savedLang) ? savedLang : browserLang;

  setLanguage(currentLang);

  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const selected = btn.getAttribute('data-lang');
      setLanguage(selected);
      weeklyStorage.set('weekly-lang', selected);
    });
  });

  if (footerSelect) {
    footerSelect.value = currentLang;
    footerSelect.addEventListener('change', (e) => {
      const selected = e.target.value;
      setLanguage(selected);
      weeklyStorage.set('weekly-lang', selected);
    });
  }
}

function setLanguage(lang) {
  lang = ['de', 'en'].includes(lang) ? lang : 'de';
  const dict = translations[lang] || translations.de;
  document.documentElement.setAttribute('lang', lang);
  if (document.querySelector('.hero')) {
    document.title = lang === 'de'
      ? 'weekly – Arbeit und Training in einer Woche'
      : 'weekly – Work and training in one week';
    document.querySelector('.footer-brand span').textContent = lang === 'de' ? 'weekly für iOS' : 'weekly for iOS';
  }

  // Sync nav buttons
  document.querySelectorAll('.lang-btn, .lang-tab').forEach(b => {
    const active = b.getAttribute('data-lang') === lang;
    b.classList.toggle('active', active);
    b.setAttribute('aria-pressed', String(active));
  });

  document.getElementById('theme-toggle')?.setAttribute('aria-label', lang === 'de' ? 'Farbschema wechseln' : 'Change color scheme');
  const menuTrigger = document.querySelector('.mobile-menu-trigger');
  if (menuTrigger) {
    const menuOpen = menuTrigger.getAttribute('aria-expanded') === 'true';
    menuTrigger.setAttribute('aria-label', lang === 'de' ? (menuOpen ? 'Menü schließen' : 'Menü öffnen') : (menuOpen ? 'Close menu' : 'Open menu'));
  }
  document.getElementById('footer-lang-select')?.setAttribute('aria-label', lang === 'de' ? 'Sprache wählen' : 'Choose language');
  document.querySelector('.hero-cta-group .btn-primary')?.setAttribute('aria-label', lang === 'de' ? 'weekly im App Store laden' : 'Download weekly on the App Store');
  document.querySelector('.cta-actions .btn-primary')?.setAttribute('aria-label', lang === 'de' ? 'weekly im App Store laden' : 'Download weekly on the App Store');

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

  updateScreenshot();

  // Update legal page toggles if present
  if (typeof window.showLegalLang === 'function') {
    window.showLegalLang(lang);
  }
  if (typeof window.showImprintLang === 'function') {
    window.showImprintLang(lang);
  }
}

/* --- 2. App preview --- */
const screenshotLabels = {
  de: {
    week: 'weekly: Wochenübersicht mit Arbeit, Uni, Sport und Freizeit',
    today: 'weekly: Tagesansicht mit Arbeitszeit und Terminen',
    workout: 'weekly: Workout-Routinen und Trainingspläne'
  },
  en: {
    week: 'weekly: Week view with work, university, exercise and free time',
    today: 'weekly: Today view with work hours and events',
    workout: 'weekly: Workout routines and training plans'
  }
};

function updateScreenshot() {
  const img = document.getElementById('phone-screenshot');
  const selected = document.querySelector('.tab-pill[data-screenshot].active')?.dataset.screenshot || 'week';
  const lang = document.documentElement.lang === 'en' ? 'en' : 'de';
  if (img) {
    img.src = `assets/img/weekly-${selected}-${lang}.jpg`;
    img.alt = screenshotLabels[lang][selected];
  }
  document.querySelectorAll('[data-preview-image]').forEach(storyImage => {
    const view = storyImage.dataset.previewImage;
    storyImage.src = `assets/img/weekly-${view}-${lang}.jpg`;
    storyImage.alt = screenshotLabels[lang][view];
  });
  document.querySelector('.mockup-controls')?.setAttribute('aria-label', lang === 'de' ? 'App-Vorschau' : 'App preview');
}

function initMobileMenu() {
  const menu = document.querySelector('.mobile-menu');
  if (!menu) return;
  const trigger = menu.querySelector('.mobile-menu-trigger');
  const panel = menu.querySelector('.mobile-menu-panel');
  const setOpen = open => {
    panel.hidden = !open;
    trigger.setAttribute('aria-expanded', String(open));
    const lang = document.documentElement.lang === 'en' ? 'en' : 'de';
    trigger.setAttribute('aria-label', lang === 'de' ? (open ? 'Menü schließen' : 'Menü öffnen') : (open ? 'Close menu' : 'Open menu'));
  };
  trigger.addEventListener('click', () => setOpen(panel.hidden));
  panel.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !panel.hidden) {
      setOpen(false);
      trigger.focus();
    }
  });
}

function initScreenshotSwitcher() {
  const buttons = document.querySelectorAll('.tab-pill[data-screenshot]');
  const img = document.getElementById('phone-screenshot');
  if (!img || !buttons.length) return;

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      updateScreenshot();
    });
  });
}

/* --- 3. Dark / Light Theme Toggle --- */
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  const savedTheme = weeklyStorage.get('weekly-theme');
  const currentTheme = savedTheme || 'dark';

  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  if (toggleBtn) {
    // Avoid double attaching
    toggleBtn.onclick = () => {
      const activeTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      weeklyStorage.set('weekly-theme', newTheme);
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
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    reveals.forEach(el => el.classList.add('active'));
    return;
  }
  document.documentElement.classList.add('reveal-ready');
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

/* --- 5. FAQ Accordion --- */
function initFaqAccordion() {
  const items = document.querySelectorAll('.faq-item');
  items.forEach((item, index) => {
    const question = item.querySelector('.faq-question');
    if (!question) return;

    const answer = item.querySelector('.faq-collapse');
    if (answer) {
      answer.id = `faq-answer-${index}`;
      question.setAttribute('aria-controls', answer.id);
      answer.setAttribute('aria-hidden', String(!item.classList.contains('active')));
    }
    question.setAttribute('aria-expanded', String(item.classList.contains('active')));
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');
      items.forEach(i => {
        i.classList.remove('active');
        i.querySelector('.faq-question')?.setAttribute('aria-expanded', 'false');
        i.querySelector('.faq-collapse')?.setAttribute('aria-hidden', 'true');
      });
      if (!isOpen) {
        item.classList.add('active');
        question.setAttribute('aria-expanded', 'true');
        answer?.setAttribute('aria-hidden', 'false');
      }
    });
  });
}
