(() => {
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
