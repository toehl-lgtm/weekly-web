(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const scene = document.querySelector('.intro-scene');
  const word = document.querySelector('.hero-word');
  const message = document.querySelector('.intro-message');
  const back = document.querySelector('.ribbon-back');
  const front = document.querySelector('.ribbon-front');
  const cue = document.querySelector('.scroll-cue');
  let frame = 0;
  let observer;
  const clamp = value => Math.min(1, Math.max(0, value));
  function render() {
    frame = 0;
    const distance = Math.max(1, scene.offsetHeight - window.innerHeight);
    const progress = clamp(-scene.getBoundingClientRect().top / distance);
    const reveal = clamp((progress - .25) / .35);
    word.style.transform = `translateY(${-18 - progress * 120}%) scale(${1 - progress * .16})`;
    word.style.opacity = String(1 - clamp((progress - .48) / .45));
    back.style.transform = `translate3d(${progress * -5}%, ${progress * -7}%, 0) rotate(${progress * -11}deg) scale(${1 + progress * .12})`;
    front.style.transform = `translate3d(${progress * 5}%, ${progress * 7}%, 0) rotate(${progress * 9}deg) scale(${1 + progress * .08})`;
    message.style.opacity = String(reveal);
    message.style.transform = `translateY(${(1 - reveal) * 24}px)`;
    message.style.pointerEvents = reveal > .8 ? 'auto' : 'none';
    message.inert = reveal <= .8;
    cue.style.opacity = String(1 - clamp(progress * 5));
  }
  function schedule() { if (!frame) frame = requestAnimationFrame(render); }
  function setup() {
    document.body.classList.remove('motion-enabled');
    window.removeEventListener('scroll', schedule);
    window.removeEventListener('resize', schedule);
    if (frame) { cancelAnimationFrame(frame); frame = 0; }
    if (observer) observer.disconnect();
    [word, message, back, front, cue].forEach(element => element.removeAttribute('style'));
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
