(() => {
  const prefix = document.body.dataset.legalPrefix;
  const tabs = [...document.querySelectorAll('[data-language]')];
  const sections = { de: document.getElementById(`${prefix}-de`), en: document.getElementById(`${prefix}-en`) };
  const text = {
    legal: { de: ['Datenschutz', 'Informationen zu Website und App'], en: ['Privacy Policy', 'Information about the website and app'] },
    imprint: { de: ['Impressum & Kontakt', 'Informationen zum Anbieter'], en: ['Legal & Contact', 'Information about the provider'] }
  };
  function select(language, save = false) {
    const tab = tabs.find(button => button.dataset.language === language);
    Object.entries(sections).forEach(([key, section]) => { section.hidden = key !== language; });
    tabs.forEach(button => button.setAttribute('aria-pressed', String(button === tab)));
    document.documentElement.lang = language;
    const [title, subtitle] = text[prefix][language];
    document.querySelector('.legal-hero h1').textContent = title;
    document.querySelector('.legal-hero > p:last-child').textContent = subtitle;
    document.querySelector('.legal-back').textContent = language === 'de' ? '← Zur Startseite' : '← Home';
    document.querySelector('.skip').textContent = language === 'de' ? 'Zum Inhalt springen' : 'Skip to content';
    document.querySelector('.legal-hero .eyebrow').textContent = language === 'de' ? 'WEEKLY / INFORMATIONEN' : 'WEEKLY / INFORMATION';
    document.querySelector('.footer > p').textContent = language === 'de' ? 'Arbeit. Alltag. Training.' : 'Work. Life. Training.';
    document.querySelector('.footer a[href="privacy.html"]').textContent = language === 'de' ? 'Datenschutz' : 'Privacy';
    document.querySelector('.footer a[href="imprint.html"]').textContent = language === 'de' ? 'Impressum' : 'Legal';
    document.querySelector('.footer a[href^="mailto:"]').textContent = language === 'de' ? 'Kontakt' : 'Contact';
    document.title = `${title} – weekly`;
    if (save) { try { sessionStorage.setItem('weekly-lang', language); } catch {} }
  }
  tabs.forEach(tab => tab.addEventListener('click', () => select(tab.dataset.language, true)));
  try { if (sessionStorage.getItem('weekly-lang') === 'en') select('en'); } catch {}
})();
