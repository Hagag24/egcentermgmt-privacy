(() => {
  // Always use Mohamed's original uploaded photo on the website.
  // No generated portrait, filters, crop, or background replacement.
  document.querySelectorAll('img').forEach(photo => {
    const src = photo.getAttribute('src') || '';
    const alt = photo.getAttribute('alt') || '';

    if (src.includes('mohamed-abdelrahman-photo.svg') || alt.includes('محمد عبد الرحمن')) {
      photo.src = 'assets/mohamed-abdelrahman-original.jpg?v=20260819-original';
      photo.removeAttribute('srcset');
      photo.style.objectFit = 'contain';
      photo.style.objectPosition = 'center';
      photo.style.background = '#07182F';

      const frame = photo.closest('.photo-frame');
      if (frame) {
        frame.style.aspectRatio = '1 / 1';
        frame.style.background = '#07182F';
      }
    }
  });

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.navlinks');

  if (!toggle || !nav) return;

  const closeMenu = () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', event => {
    if (!nav.contains(event.target) && !toggle.contains(event.target)) closeMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) closeMenu();
  });
})();
