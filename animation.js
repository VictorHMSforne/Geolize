function initReveal() {
  const elements = document.querySelectorAll('.reveal');

  if (elements.length === 0) {
    setTimeout(initReveal, 100);
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
}

setTimeout(initReveal, 1500);