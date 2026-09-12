/**
 * weekly - Landing Page Interactive Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initScrollReveals();
  initSpotlightCards();
  initMockupTabs();
  initFaqAccordion();
});

/* --- 1. Dark / Light Theme Toggle --- */
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  const savedTheme = localStorage.getItem('weekly-theme');

  const currentTheme = savedTheme || (prefersDark.matches ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('weekly-theme', newTheme);
      updateThemeIcon(newTheme);
    });
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

/* --- 2. Scroll Reveal Animations --- */
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
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

/* --- 3. Mouse Spotlight on Feature Cards --- */
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

/* --- 4. Interactive Phone Mockup Tabs --- */
function initMockupTabs() {
  const tabs = document.querySelectorAll('.tab-pill');
  const container = document.getElementById('mock-timetable-content');
  const statsWorked = document.getElementById('mock-stat-worked');
  const statsTarget = document.getElementById('mock-stat-target');
  const weekTitle = document.getElementById('mock-week-title');

  if (!tabs.length || !container) return;

  const presets = {
    overview: {
      title: 'KW 38 • Basiswoche',
      worked: '18,5 h',
      target: '20,0 h',
      html: `
        <!-- Mo -->
        <div class="mock-day-col">
          <div class="mock-event event-blue" style="top: 10%; height: 32%;">
            <span class="mock-event-title">💻 Software Dev</span>
            <span class="mock-event-time">08:00 - 11:30</span>
          </div>
          <div class="mock-event event-green" style="top: 50%; height: 26%;">
            <span class="mock-event-title">🏀 USC Training</span>
            <span class="mock-event-time">14:00 - 16:30</span>
          </div>
        </div>
        <!-- Di -->
        <div class="mock-day-col">
          <div class="mock-event event-purple" style="top: 25%; height: 35%;">
            <span class="mock-event-title">📚 Vorlesung</span>
            <span class="mock-event-time">10:00 - 13:30</span>
          </div>
          <div class="mock-event event-blue" style="top: 68%; height: 24%;">
            <span class="mock-event-title">💼 Sprint Review</span>
            <span class="mock-event-time">16:00 - 18:00</span>
          </div>
        </div>
        <!-- Mi -->
        <div class="mock-day-col">
          <div class="mock-event event-blue" style="top: 15%; height: 42%;">
            <span class="mock-event-title">💼 Projektarbeit</span>
            <span class="mock-event-time">09:00 - 14:00</span>
          </div>
        </div>
        <!-- Do -->
        <div class="mock-day-col">
          <div class="mock-event event-purple" style="top: 10%; height: 25%;">
            <span class="mock-event-title">📚 Seminar</span>
            <span class="mock-event-time">08:30 - 11:00</span>
          </div>
          <div class="mock-event event-green" style="top: 45%; height: 28%;">
            <span class="mock-event-title">🏃 Gym Workout</span>
            <span class="mock-event-time">13:30 - 16:00</span>
          </div>
        </div>
        <!-- Fr -->
        <div class="mock-day-col">
          <div class="mock-event event-orange" style="top: 20%; height: 25%;">
            <span class="mock-event-title">☕ Team Lunch</span>
            <span class="mock-event-time">11:00 - 13:00</span>
          </div>
          <div class="mock-event event-blue" style="top: 52%; height: 30%;">
            <span class="mock-event-title">💻 Code Refactor</span>
            <span class="mock-event-time">14:30 - 17:30</span>
          </div>
        </div>
      `
    },
    work: {
      title: '💼 Arbeitszeit-Filter',
      worked: '20,0 h',
      target: '20,0 h (100 %)',
      html: `
        <!-- Mo -->
        <div class="mock-day-col">
          <div class="mock-event event-blue" style="top: 10%; height: 35%;">
            <span class="mock-event-title">💼 Dev Frontend</span>
            <span class="mock-event-time">08:00 - 12:00 (4h)</span>
          </div>
        </div>
        <!-- Di -->
        <div class="mock-day-col">
          <div class="mock-event event-blue" style="top: 20%; height: 35%;">
            <span class="mock-event-title">💼 Backlog & Review</span>
            <span class="mock-event-time">09:30 - 13:30 (4h)</span>
          </div>
        </div>
        <!-- Mi -->
        <div class="mock-day-col">
          <div class="mock-event event-blue" style="top: 10%; height: 45%;">
            <span class="mock-event-title">💼 Core Architecture</span>
            <span class="mock-event-time">08:30 - 14:00 (5.5h)</span>
          </div>
        </div>
        <!-- Do -->
        <div class="mock-day-col">
          <div class="mock-event event-blue" style="top: 30%; height: 30%;">
            <span class="mock-event-title">💼 Pair Programming</span>
            <span class="mock-event-time">11:00 - 14:30 (3.5h)</span>
          </div>
        </div>
        <!-- Fr -->
        <div class="mock-day-col">
          <div class="mock-event event-blue" style="top: 15%; height: 26%;">
            <span class="mock-event-title">💼 Weekly Wrap-up</span>
            <span class="mock-event-time">09:00 - 12:00 (3h)</span>
          </div>
        </div>
      `
    },
    calendar: {
      title: '🔄 Apple Kalender Sync',
      worked: '14,0 h',
      target: '20,0 h',
      html: `
        <!-- Mo -->
        <div class="mock-day-col">
          <div class="mock-event event-orange" style="top: 15%; height: 20%; opacity: 0.85;">
            <span class="mock-event-title">📅 iCloud: Zahnarzt</span>
            <span class="mock-event-time">09:00 - 10:30</span>
          </div>
          <div class="mock-event event-green" style="top: 55%; height: 30%;">
            <span class="mock-event-title">🏀 Kalender: Spieltag</span>
            <span class="mock-event-time">15:00 - 18:00</span>
          </div>
        </div>
        <!-- Di -->
        <div class="mock-day-col">
          <div class="mock-event event-blue" style="top: 25%; height: 35%;">
            <span class="mock-event-title">💼 weekly: Dev Work</span>
            <span class="mock-event-time">10:00 - 14:00</span>
          </div>
        </div>
        <!-- Mi -->
        <div class="mock-day-col">
          <div class="mock-event event-purple" style="top: 10%; height: 28%; opacity: 0.9;">
            <span class="mock-event-title">📅 iCloud: Familie</span>
            <span class="mock-event-time">08:00 - 11:00</span>
          </div>
        </div>
        <!-- Do -->
        <div class="mock-day-col">
          <div class="mock-event event-green" style="top: 40%; height: 25%;">
            <span class="mock-event-title">🏃 Kalender: Athletik</span>
            <span class="mock-event-time">13:00 - 15:30</span>
          </div>
        </div>
        <!-- Fr -->
        <div class="mock-day-col">
          <div class="mock-event event-blue" style="top: 15%; height: 40%;">
            <span class="mock-event-title">💼 weekly: Release</span>
            <span class="mock-event-time">09:00 - 14:00</span>
          </div>
        </div>
      `
    }
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const mode = tab.getAttribute('data-mode');
      if (presets[mode]) {
        weekTitle.textContent = presets[mode].title;
        statsWorked.textContent = presets[mode].worked;
        statsTarget.textContent = presets[mode].target;

        container.style.opacity = '0';
        setTimeout(() => {
          container.innerHTML = presets[mode].html;
          container.style.opacity = '1';
        }, 150);
      }
    });
  });
}

/* --- 5. FAQ Accordion --- */
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
