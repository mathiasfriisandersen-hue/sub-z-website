const iconPaths = {
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="m6 6 12 12M18 6 6 18"/>',
  arrow: '<path d="M5 12h14m-5-5 5 5-5 5"/>',
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z"/>',
  mail: '<path d="M4 4h16v16H4z"/><path d="m4 6 8 7 8-7"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  pin: '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="2.5"/>',
  people: '<circle cx="9" cy="8" r="3"/><path d="M3 20c0-4 2.5-7 6-7s6 3 6 7"/><path d="M16 4.5a3 3 0 0 1 0 5.8M17 13c2.4.8 4 3.3 4 6"/>',
  handshake: '<path d="m8 11 3 3c1 1 2.2.9 3 0l4-4"/><path d="m2 9 4-4 5 2 2-1 5 5 4 1-4 7-3-1-2 2-8-8-3-3Z"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  building: '<path d="M4 21V7l8-4v18M12 9h8v12M7 9h2m-2 4h2m-2 4h2m8-4h1m-1 4h1M2 21h20"/>',
  road: '<path d="M8 3 5 21M16 3l3 18M12 3v4m0 4v4m0 4v2"/>',
  energy: '<path d="m13 2-7 12h6l-1 8 7-12h-6l1-8Z"/>',
  factory: '<path d="M3 21V9l6 4V9l6 4V5h6v16H3Z"/><path d="M6 17h2m4 0h2m4 0h1"/>',
  briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V4h8v3M3 12h18M10 12v2h4v-2"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>'
};

function svgIcon(name) {
  return `<svg class="icon" aria-hidden="true" viewBox="0 0 24 24">${iconPaths[name] || iconPaths.arrow}</svg>`;
}

const pages = [
  ['companies', 'For virksomheder', 'virksomheder.html'],
  ['candidates', 'For kandidater', 'kandidater.html'],
  ['services', 'Ydelser', 'ydelser.html'],
  ['jobs', 'Ledige stillinger', 'stillinger.html'],
  ['news', 'Nyheder', 'nyheder.html'],
  ['contact', 'Kontakt', 'kontakt.html']
];

function renderHeader() {
  const page = document.body.dataset.page || 'home';
  const links = pages.map(([id, label, href]) =>
    `<a class="nav-link${page === id ? ' is-active' : ''}" href="${href}"${page === id ? ' aria-current="page"' : ''}>${label}</a>`
  ).join('');

  document.querySelector('[data-site-header]').innerHTML = `
    <header class="site-header">
      <div class="container nav-wrap">
        <a class="brand" href="index.html" aria-label="SUB-z forside">
          <span class="brand-mark">S</span><span class="brand-name">SUB-z</span>
        </a>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="main-nav" aria-label="Åbn menu">${svgIcon('menu')}</button>
        <nav class="main-nav" id="main-nav" aria-label="Primær navigation">
          ${links}
          <a class="lang-link" href="index.html?lang=en" lang="en">English</a>
          <a class="btn btn--primary nav-phone" href="tel:+4540601253">${svgIcon('phone')} +45 40 60 12 53</a>
        </nav>
      </div>
    </header>`;
}

function renderFooter() {
  document.querySelector('[data-site-footer]').innerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a class="brand" href="index.html"><span class="brand-mark">S</span><span class="brand-name">SUB-z</span></a>
            <p class="footer-tagline">Esprit de corps at work</p>
          </div>
          <div class="footer-col">
            <h2>Kontakt</h2>
            <address>Vesterballevej 5<br>7000 Fredericia<br><a href="tel:+4540601253">+45 40 60 12 53</a><br><a href="mailto:support@sub-z.dk">support@sub-z.dk</a></address>
          </div>
          <div class="footer-col">
            <h2>Genveje</h2>
            <ul><li><a href="virksomheder.html">For virksomheder</a></li><li><a href="kandidater.html">For kandidater</a></li><li><a href="stillinger.html">Ledige stillinger</a></li><li><a href="kontakt.html">Kontakt</a></li></ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© <span data-year></span> SUB-z · CVR 44116935</span>
          <div class="footer-links"><a href="#">Privatlivspolitik</a><a href="#">Cookies</a><a href="kontakt.html">Kontakt</a><a href="index.html?lang=en" lang="en">English</a></div>
        </div>
      </div>
    </footer>`;
}

function setupMenu() {
  const button = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (!button || !nav) return;
  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!open));
    button.setAttribute('aria-label', open ? 'Åbn menu' : 'Luk menu');
    button.innerHTML = svgIcon(open ? 'menu' : 'close');
    nav.classList.toggle('is-open', !open);
    document.body.classList.toggle('menu-open', !open);
  });
}

function setupForms() {
  document.querySelectorAll('[data-demo-form]').forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      const status = form.querySelector('.form-status');
      if (status) status.textContent = 'Tak — din besked er klar til at blive sendt, når formularen kobles til en mailservice.';
      form.reset();
    });
  });
}

function setupJobFilter() {
  const list = document.querySelector('[data-job-list]');
  if (!list) return;
  const search = document.querySelector('#job-search');
  const category = document.querySelector('#job-category');
  const location = document.querySelector('#job-location');
  const empty = document.querySelector('.empty-state');
  const filter = () => {
    const term = search.value.trim().toLowerCase();
    let visible = 0;
    list.querySelectorAll('.job-card').forEach(card => {
      const matchesTerm = card.textContent.toLowerCase().includes(term);
      const matchesCategory = !category.value || card.dataset.category === category.value;
      const matchesLocation = !location.value || card.dataset.location === location.value;
      const show = matchesTerm && matchesCategory && matchesLocation;
      card.hidden = !show;
      visible += show ? 1 : 0;
    });
    empty.style.display = visible ? 'none' : 'block';
  };
  [search, category, location].forEach(control => control.addEventListener('input', filter));
}

renderHeader();
renderFooter();
document.querySelectorAll('[data-icon]').forEach(node => { node.innerHTML = svgIcon(node.dataset.icon); });
document.querySelectorAll('[data-year]').forEach(node => { node.textContent = new Date().getFullYear(); });
setupMenu();
setupForms();
setupJobFilter();
