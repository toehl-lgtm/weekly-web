(() => {
  const dictionary = {
    '.nav nav a:nth-child(1)': 'The app', '.nav nav a:nth-child(2)': 'Workout', '.nav nav a:nth-child(3)': 'Features', '.nav nav a:nth-child(4)': 'Pricing', '.nav nav a:nth-child(5)': 'Questions',
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
    '.features .eyebrow': 'FEATURES', '.features h2': 'Everything in <em>one</em> place.',
    '.feature:nth-child(1) h3': 'Work-hours account', '.feature:nth-child(1) p': 'Target and actual at a glance.',
    '.feature:nth-child(2) h3': 'Appointments &amp; travel time', '.feature:nth-child(2) p': 'Travel time and reminders included.',
    '.feature:nth-child(3) h3': 'Workout Hub', '.feature:nth-child(3) p': 'Plan and record your routines.',
    '.feature:nth-child(4) h3': 'Statistics', '.feature:nth-child(4) p': 'Day, week, month, year.',
    '.feature:nth-child(5) h3': 'Widgets', '.feature:nth-child(5) p': 'A glance from your Home Screen.',
    '.feature:nth-child(6) h3': 'Export &amp; iCloud', '.feature:nth-child(6) p': 'PDF, CSV and sync via iCloud.',
    '.pricing .eyebrow': 'PRICING', '.pricing h2': 'One subscription.<br><em>Everything included.</em>',
    '.pricing-lead': 'Full access to every feature. Monthly or yearly, cancel anytime.',
    '.plan:nth-child(1) .plan-name': 'Monthly', '.plan:nth-child(1) .plan-price span': 'per month',
    '.plan:nth-child(2) .plan-name': 'Yearly<span class="plan-badge">save about 24&nbsp;%</span>', '.plan:nth-child(2) .plan-price span': 'per year',
    '.price-notes li:nth-child(1)': 'Try it free for 14 days if you are eligible. The App Store shows the offer before you buy.',
    '.price-notes li:nth-child(2)': 'Prices shown are for Germany, including VAT. In other countries the App Store shows the price in local currency including taxes; it may differ.',
    '.price-notes li:nth-child(3)': 'The subscription renews automatically until you cancel: any time in your Apple ID settings, at least 24 hours before the period ends.',
    '.price-notes li:nth-child(4)': 'Without an active subscription your existing data stays readable and exportable; editing requires a subscription.',
    '.price-links a:nth-child(1)': 'Terms of Use (Apple)', '.price-links a:nth-child(2)': 'Privacy',
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
