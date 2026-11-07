(() => {
  const dictionary = {
    '.nav nav a:nth-child(1)': 'The app', '.nav nav a:nth-child(2)': 'Workout', '.nav nav a:nth-child(3)': 'Questions',
    '.nav-store': 'App Store ↗', '.kicker': 'WORK · LIFE · WORKOUT',
    '.intro-message h2': 'Your week.<br><span>Your rhythm.</span>',
    '.intro-message > p:not(.kicker)': 'For everything that makes up your day.',
    '.intro-link': 'Discover weekly <span aria-hidden="true">↓</span>',
    '.scroll-cue span': 'DISCOVER YOUR WEEK',
    '#woche .eyebrow': '01 / YOUR WEEK', '#woche h2': 'Everything your<br>week <em>is made of.</em>',
    '#woche .chapter-copy > p:last-child': 'Work, training and time for yourself: see what’s ahead and where there’s room.',
    '#tag .eyebrow': '02 / YOUR DAY', '#tag h2': 'Today matters.<br><em>The rest can wait.</em>',
    '#tag .chapter-copy > p:last-child': 'See what’s next. Keep track of your work hours and export them when you need to.',
    '#training .eyebrow': '03 / YOUR TRAINING', '#training h2': 'Make room<br>for <em>movement.</em>',
    '#training .chapter-copy > p:last-child': 'Training belongs in your week too. Plan routines, start sessions and record your exercises.',
    '.privacy .eyebrow': 'YOUR DATA', '.privacy h2': 'Your week.<br>Your data.',
    '.privacy-grid > div > p': 'Your plans stay on your device and, when sync is enabled, in your personal iCloud. Learn which Apple services weekly uses.',
    '.privacy .under-link': 'Privacy information <span aria-hidden="true">↗</span>',
    '.faq .eyebrow': 'GOOD TO KNOW', '.faq h2': 'Questions?',
    '.faq details:nth-child(1) summary': 'How does syncing work?',
    '.faq details:nth-child(1) p': 'When iCloud is enabled for weekly, your data can sync across your devices through your personal iCloud account.',
    '.faq details:nth-child(2) summary': 'Will my Apple calendars be changed?',
    '.faq details:nth-child(2) p': 'weekly reads your selected calendar events. Your source calendars remain unchanged.',
    '.faq details:nth-child(3) summary': 'How do I contact support?',
    '.faq details:nth-child(3) p': 'Email <a href="mailto:weekly.workandworkout@gmail.com">weekly.workandworkout@gmail.com</a>.',
    '.outro .eyebrow': 'FOR EVERYTHING AHEAD', '.outro h2': 'Your week.<br>Your rhythm.',
    '.outro .button': 'weekly on the App Store <span aria-hidden="true">↗</span>',
    '.footer > p': 'Work. Life. Workout.', '.footer a[href="privacy.html"]': 'Privacy',
    '.footer a[href="imprint.html"]': 'Legal', '.footer a[href^="mailto:"]': 'Contact'
  };
  const entries = Object.entries(dictionary).map(([selector, english]) => {
    const element = document.querySelector(selector);
    return element && { element, german: element.innerHTML, english };
  }).filter(Boolean);
  const captions = [...document.querySelectorAll('.screen-caption')];
  const images = [...document.querySelectorAll('.chapter-screen img')];
  const altEnglish = ['weekly week view with sample appointments', 'weekly day view with appointments and work hours', 'weekly workout area with sample routines'];
  const alts = images.map(image => image.alt);
  const tabs = [...document.querySelectorAll('[data-lang]')];
  function select(language, save = false) {
    entries.forEach(({element, german, english}) => { element.innerHTML = language === 'en' ? english : german; });
    captions.forEach(element => { element.textContent = language === 'en' ? 'ACTUAL APP VIEW · SAMPLE DATA' : 'ECHTE APP-ANSICHT · BEISPIELDATEN'; });
    images.forEach((image, i) => { image.src = image.src.replace(/-(de|en)\.jpg$/, `-${language}.jpg`); image.alt = language === 'en' ? altEnglish[i] : alts[i]; });
    tabs.forEach(tab => tab.setAttribute('aria-pressed', String(tab.dataset.lang === language)));
    document.documentElement.lang = language;
    document.querySelector('.skip').textContent = language === 'en' ? 'Skip to content' : 'Zum Inhalt springen';
    document.title = language === 'en' ? 'weekly – Your week. Your rhythm.' : 'weekly – Deine Woche. Dein Rhythmus.';
    if (save) { try { sessionStorage.setItem('weekly-lang', language); } catch {} }
  }
  tabs.forEach(tab => tab.addEventListener('click', () => select(tab.dataset.lang, true)));
  let initial = 'de';
  try { if (sessionStorage.getItem('weekly-lang') === 'en') initial = 'en'; } catch {}
  select(initial);
})();
