(() => {
  const header = document.querySelector('[data-header]');
  const navToggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');
  const copyButton = document.querySelector('[data-copy-address]');
  const copyNote = document.querySelector('[data-copy-note]');
  const year = document.querySelector('[data-year]');
  const blockButtons = document.querySelectorAll('[data-block]');
  const blockOutput = document.querySelector('[data-block-output]');

  const closeNavigation = () => {
    if (!navToggle || !nav) return;
    navToggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
    document.body.classList.remove('nav-open');
  };

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!isOpen));
      nav.classList.toggle('is-open', !isOpen);
      document.body.classList.toggle('nav-open', !isOpen);
    });

    nav.addEventListener('click', (event) => {
      if (event.target instanceof HTMLAnchorElement) closeNavigation();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeNavigation();
    });
  }

  const updateHeader = () => {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 14);
  };

  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  if (copyButton && copyNote) {
    copyButton.addEventListener('click', async () => {
      const address = 'threewordindex.com/model/rocket/design';
      try {
        await navigator.clipboard.writeText(address);
        copyNote.textContent = 'Copied to clipboard';
      } catch {
        copyNote.textContent = address;
      }
      window.setTimeout(() => {
        copyNote.textContent = 'Click to copy';
      }, 2200);
    });
  }

  blockButtons.forEach((button) => {
    button.addEventListener('click', () => {
      blockButtons.forEach((item) => item.classList.remove('is-active'));
      button.classList.add('is-active');
      if (blockOutput) blockOutput.textContent = `${button.dataset.block} Content Block`;
    });
  });

  if (year) year.textContent = new Date().getFullYear().toString();

  const revealItems = document.querySelectorAll('.reveal');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reducedMotion || !('IntersectionObserver' in window)) {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        currentObserver.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px' });

    revealItems.forEach((item) => observer.observe(item));
  }
})();
