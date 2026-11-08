(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const scene = document.querySelector('.intro-scene');
  const word = document.querySelector('.hero-word');
  const message = document.querySelector('.intro-message');
  const back = document.querySelector('.ribbon-back');
  const front = document.querySelector('.ribbon-front');
  const cue = document.querySelector('.scroll-cue');
  const ambient = document.querySelector('.ambient');
  const drifting = [...document.querySelectorAll('[data-drift]')];
  const chapters = [...document.querySelectorAll('.story-chapter')];
  const chapterParts = chapters.flatMap(chapter => [...chapter.querySelectorAll('.chapter-copy, .chapter-screen, .stage-band')]);
  const featureItems = [...document.querySelectorAll('.feature')];
  let frame = 0;
  let observer;
  const clamp = value => Math.min(1, Math.max(0, value));
  function render() {
    frame = 0;
    const distance = Math.max(1, scene.offsetHeight - window.innerHeight);
    const progress = clamp(-scene.getBoundingClientRect().top / distance);
    const reveal = clamp((progress - .25) / .35);
    const introExit = clamp((progress - .82) / .18);
    word.style.transform = `translateY(${-18 - progress * 120}%) scale(${1 - progress * .16})`;
    word.style.opacity = String(1 - clamp((progress - .48) / .45));
    back.style.transform = `translate3d(${progress * -5}%, ${progress * -7}%, 0) rotate(${progress * -11}deg) scale(${1 + progress * .12})`;
    front.style.transform = `translate3d(${progress * 5}%, ${progress * 7}%, 0) rotate(${progress * 9}deg) scale(${1 + progress * .08})`;
    message.style.opacity = String(reveal * (1 - introExit));
    message.style.transform = `translateY(${(1 - reveal) * 24}px)`;
    message.style.pointerEvents = reveal > .8 && introExit < .2 ? 'auto' : 'none';
    message.inert = reveal <= .8 || introExit >= .2;
    cue.style.opacity = String(1 - clamp(progress * 5));
    ambient.style.opacity = String(1 - clamp((progress - .55) / .45));
    chapters.forEach(chapter => {
      const rect = chapter.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;
      const parts = chapter.querySelectorAll('.chapter-copy, .chapter-screen, .stage-band');
      if (window.innerHeight <= 560) { parts.forEach(part => part.removeAttribute('style')); return; }
      const position = clamp((window.innerHeight - rect.top) / rect.height);
      const enter = clamp((position - .02) / .25);
      const leave = clamp((position - .985) / .3);
      const visibility = Math.min(enter, 1 - leave);
      const copy = chapter.querySelector('.chapter-copy');
      const screen = chapter.querySelector('.chapter-screen');
      const bands = chapter.querySelectorAll('.stage-band');
      copy.style.opacity = String(visibility);
      copy.style.transform = `translate3d(0, ${(1 - enter) * 36 - leave * 45}px, 0)`;
      screen.style.opacity = String(visibility);
      screen.style.transform = `translate3d(0, ${(1 - enter) * 68 - leave * 55}px, 0)`;
      bands.forEach((band, i) => {
        const direction = i ? 1 : -1;
        band.style.transform = `translate3d(${direction * (position - .5) * 6}%, ${direction * (position - .5) * 5}%, 0) rotate(${direction * (position - .5) * 6}deg)`;
      });
    });
    const edge = 150;
    featureItems.forEach(item => {
      const top = item.getBoundingClientRect().top;
      const fade = window.innerHeight <= 560 ? 1 : clamp(top / edge);
      item.style.opacity = String(.15 + .85 * fade);
      item.style.transform = `translate3d(0, ${(1 - fade) * 14}px, 0)`;
    });
    drifting.forEach(element => {
      const section = element.closest('.band-section');
      const rect = section.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;
      const position = clamp((window.innerHeight - rect.top) / (window.innerHeight + rect.height));
      const direction = Number(element.dataset.drift);
      element.style.transform = `translate3d(${direction * (position - .5) * 7}%, ${direction * (position - .5) * 6}%, 0) rotate(${direction * (position - .5) * 8}deg)`;
    });
  }
  function schedule() { if (!frame) frame = requestAnimationFrame(render); }
  function setup() {
    document.body.classList.remove('motion-enabled');
    window.removeEventListener('scroll', schedule);
    window.removeEventListener('resize', schedule);
    if (frame) { cancelAnimationFrame(frame); frame = 0; }
    if (observer) observer.disconnect();
    [...drifting, ...chapterParts, ...featureItems, word, message, back, front, cue, ambient].forEach(element => element.removeAttribute('style'));
    message.inert = false;
    document.querySelectorAll('.reveal').forEach(element => element.classList.remove('is-visible'));
    if (reduced.matches) return;
    document.body.classList.add('motion-enabled');
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(entries => entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
      }), { threshold: .08 });
      document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
    } else document.querySelectorAll('.reveal').forEach(element => element.classList.add('is-visible'));
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule, { passive: true });
    render();
  }
  reduced.addEventListener('change', setup);
  setup();
})();
