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

const TEST_FORM_RECIPIENT = 'mathiasfriisandersen@gmail.com';

function svgIcon(name) {
  return `<svg class="icon" aria-hidden="true" viewBox="0 0 24 24">${iconPaths[name] || iconPaths.arrow}</svg>`;
}

const pageFiles = {
  home: { da: 'index.html', en: 'index.html', pl: 'index.html' },
  companies: { da: 'virksomheder.html', en: 'companies.html', pl: 'firmy.html' },
  candidates: { da: 'kandidater.html', en: 'candidates.html', pl: 'kandydaci.html' },
  services: { da: 'ydelser.html', en: 'services.html', pl: 'uslugi.html' },
  jobs: { da: 'stillinger.html', en: 'jobs.html', pl: 'oferty-pracy.html' },
  news: { da: 'nyheder.html', en: 'news.html', pl: 'aktualnosci.html' },
  contact: { da: 'kontakt.html', en: 'contact.html', pl: 'kontakt.html' },
  cookies: { da: 'cookies.html', en: 'cookies.html', pl: 'cookies.html' }
};

const locale = ['en', 'pl'].includes(document.documentElement.lang) ? document.documentElement.lang : 'da';
const currentPage = document.body.dataset.page || 'home';
const assetBase = locale === 'da' ? 'assets/' : '../assets/';

const translations = {
  da: {
    nav: { companies: 'For virksomheder', candidates: 'For kandidater', services: 'Ydelser', jobs: 'Ledige stillinger', news: 'Nyheder', contact: 'Kontakt' },
    primaryNav: 'Primær navigation', languageNav: 'Vælg sprog', homeLabel: 'SUB-z forside', menuOpen: 'Åbn menu', menuClose: 'Luk menu',
    footer: { contact: 'Kontakt', shortcuts: 'Genveje', privacy: 'Privatlivspolitik', cookies: 'Cookies' },
    cookieBanner: { title: 'Dit valg om cookies', text: 'SUB-z bruger nødvendig lokal lagring til at huske dit valg. Der er i øjeblikket ingen analyse- eller marketingcookies på siden.', necessary: 'Kun nødvendige', accept: 'Tillad alle', details: 'Læs cookiepolitik' },
    form: {
      subjectCandidate: 'Ny kandidatprofil via SUB-z', subjectCompany: 'Ny bemandingsforespørgsel via SUB-z',
      labels: { name: 'Navn', company: 'Virksomhed', phone: 'Telefon', email: 'Email', trade: 'Fagområde' },
      candidateMessage: 'Jobønske og erfaring', companyMessage: 'Behov',
      status: 'Dit mailprogram åbnes med oplysningerne udfyldt. Send mailen derfra for at færdiggøre henvendelsen.',
      candidateEyebrow: 'Send din profil', companyEyebrow: 'Send en forespørgsel',
      candidateTitle: 'Fortæl os om dig og dit fag', companyTitle: 'Fortæl os om jeres behov',
      candidateLabel: 'Hvilken type job søger du, og hvilken erfaring har du?', companyLabel: 'Hvad har I brug for hjælp til?',
      candidateSubmit: 'Send kandidatprofil', companySubmit: 'Send forespørgsel'
    }
  },
  en: {
    nav: { companies: 'For companies', candidates: 'For candidates', services: 'Services', jobs: 'Vacancies', news: 'News', contact: 'Contact' },
    primaryNav: 'Primary navigation', languageNav: 'Choose language', homeLabel: 'SUB-z home', menuOpen: 'Open menu', menuClose: 'Close menu',
    footer: { contact: 'Contact', shortcuts: 'Quick links', privacy: 'Privacy policy', cookies: 'Cookies' },
    cookieBanner: { title: 'Your cookie choices', text: 'SUB-z uses necessary local storage to remember your choice. The website currently has no analytics or marketing cookies.', necessary: 'Necessary only', accept: 'Allow all', details: 'Read cookie policy' },
    form: {
      subjectCandidate: 'New candidate profile via SUB-z', subjectCompany: 'New staffing enquiry via SUB-z',
      labels: { name: 'Name', company: 'Company', phone: 'Phone', email: 'Email', trade: 'Field' },
      candidateMessage: 'Job preferences and experience', companyMessage: 'Staffing need',
      status: 'Your email application opens with the information filled in. Send the email there to complete your enquiry.',
      candidateEyebrow: 'Send your profile', companyEyebrow: 'Send an enquiry',
      candidateTitle: 'Tell us about you and your trade', companyTitle: 'Tell us what you need',
      candidateLabel: 'What type of work are you looking for, and what experience do you have?', companyLabel: 'What do you need help with?',
      candidateSubmit: 'Send candidate profile', companySubmit: 'Send enquiry'
    }
  },
  pl: {
    nav: { companies: 'Dla firm', candidates: 'Dla kandydatów', services: 'Usługi', jobs: 'Oferty pracy', news: 'Aktualności', contact: 'Kontakt' },
    primaryNav: 'Główna nawigacja', languageNav: 'Wybierz język', homeLabel: 'Strona główna SUB-z', menuOpen: 'Otwórz menu', menuClose: 'Zamknij menu',
    footer: { contact: 'Kontakt', shortcuts: 'Na skróty', privacy: 'Polityka prywatności', cookies: 'Pliki cookie' },
    cookieBanner: { title: 'Twój wybór dotyczący plików cookie', text: 'SUB-z korzysta z niezbędnej pamięci lokalnej, aby zapamiętać Twój wybór. Obecnie strona nie używa analitycznych ani marketingowych plików cookie.', necessary: 'Tylko niezbędne', accept: 'Zezwól na wszystkie', details: 'Przeczytaj politykę cookie' },
    form: {
      subjectCandidate: 'Nowy profil kandydata przez SUB-z', subjectCompany: 'Nowe zapytanie o pracowników przez SUB-z',
      labels: { name: 'Imię i nazwisko', company: 'Firma', phone: 'Telefon', email: 'Email', trade: 'Branża' },
      candidateMessage: 'Oczekiwania zawodowe i doświadczenie', companyMessage: 'Zapotrzebowanie',
      status: 'Program pocztowy otworzy się z uzupełnionymi danymi. Wyślij wiadomość, aby zakończyć zgłoszenie.',
      candidateEyebrow: 'Wyślij swój profil', companyEyebrow: 'Wyślij zapytanie',
      candidateTitle: 'Opowiedz nam o sobie i swoim zawodzie', companyTitle: 'Opisz swoje zapotrzebowanie',
      candidateLabel: 'Jakiej pracy szukasz i jakie masz doświadczenie?', companyLabel: 'W czym możemy pomóc?',
      candidateSubmit: 'Wyślij profil kandydata', companySubmit: 'Wyślij zapytanie'
    }
  }
};

const copy = translations[locale];
const pages = ['companies', 'candidates', 'services', 'jobs', 'news', 'contact'].map(id => [id, copy.nav[id], pageFiles[id][locale]]);

function languageHref(targetLocale) {
  const file = pageFiles[currentPage][targetLocale];
  if (locale === 'da') return targetLocale === 'da' ? file : `${targetLocale}/${file}`;
  if (targetLocale === 'da') return `../${file}`;
  return targetLocale === locale ? file : `../${targetLocale}/${file}`;
}

function localizedContactHref() {
  const file = pageFiles.contact[locale];
  if (['candidates', 'jobs'].includes(currentPage)) return `${file}?type=kandidat`;
  if (['companies', 'services'].includes(currentPage)) return `${file}?type=virksomhed`;
  return file;
}

function setupLanguageMetadata() {
  ['da', 'en', 'pl'].forEach(lang => {
    const link = document.createElement('link');
    link.rel = 'alternate';
    link.hreflang = lang;
    link.href = new URL(languageHref(lang), window.location.href).href;
    document.head.appendChild(link);
  });
  const fallback = document.createElement('link');
  fallback.rel = 'alternate';
  fallback.hreflang = 'x-default';
  fallback.href = new URL(languageHref('da'), window.location.href).href;
  document.head.appendChild(fallback);
}

function setupCookieBanner() {
  const storageKey = 'subz_cookie_consent_v1';
  const resetButton = document.querySelector('[data-reset-cookie]');
  if (resetButton) {
    resetButton.addEventListener('click', () => {
      try { window.localStorage.removeItem(storageKey); } catch (error) { /* No persistent storage available. */ }
      window.location.reload();
    });
  }
  try {
    if (window.localStorage.getItem(storageKey)) return;
  } catch (error) {
    // The banner remains available when local storage is blocked.
  }

  const banner = document.createElement('section');
  banner.className = 'cookie-banner';
  banner.setAttribute('role', 'dialog');
  banner.setAttribute('aria-labelledby', 'cookie-banner-title');
  banner.innerHTML = `
    <div class="cookie-banner__content">
      <h2 id="cookie-banner-title">${copy.cookieBanner.title}</h2>
      <p>${copy.cookieBanner.text} <a href="${pageFiles.cookies[locale]}">${copy.cookieBanner.details}</a></p>
    </div>
    <div class="cookie-banner__actions">
      <button class="btn btn--outline" type="button" data-cookie-choice="necessary">${copy.cookieBanner.necessary}</button>
      <button class="btn btn--primary" type="button" data-cookie-choice="all">${copy.cookieBanner.accept}</button>
    </div>`;

  banner.querySelectorAll('[data-cookie-choice]').forEach(button => {
    button.addEventListener('click', () => {
      const consent = { choice: button.dataset.cookieChoice, version: 1, updated: new Date().toISOString() };
      try { window.localStorage.setItem(storageKey, JSON.stringify(consent)); } catch (error) { /* No persistent storage available. */ }
      window.dispatchEvent(new CustomEvent('subz:cookie-consent', { detail: consent }));
      banner.remove();
    });
  });
  document.body.appendChild(banner);
}

function renderHeader() {
  const links = pages.map(([id, label, href]) => {
    let targetHref = href;
    if (id === 'contact') targetHref = localizedContactHref();
    return `<a class="nav-link${currentPage === id ? ' is-active' : ''}" href="${targetHref}"${currentPage === id ? ' aria-current="page"' : ''}>${label}</a>`;
  }).join('');

  const languageLinks = ['da', 'en', 'pl'].map(lang =>
    `<a class="lang-link${locale === lang ? ' is-active' : ''}" href="${languageHref(lang)}" lang="${lang}"${locale === lang ? ' aria-current="true"' : ''}>${lang.toUpperCase()}</a>`
  ).join('');

  document.querySelector('[data-site-header]').innerHTML = `
    <header class="site-header">
      <div class="container nav-wrap">
        <a class="brand" href="${pageFiles.home[locale]}" aria-label="${copy.homeLabel}">
          <img class="brand-logo" src="${assetBase}sub-z-logo.png" alt="SUB-z — Esprit de corps at work" width="514" height="104">
        </a>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="main-nav" aria-label="${copy.menuOpen}">${svgIcon('menu')}</button>
        <nav class="main-nav" id="main-nav" aria-label="${copy.primaryNav}">
          ${links}
          <div class="language-switch" aria-label="${copy.languageNav}">${languageLinks}</div>
          <a class="btn btn--primary nav-phone" href="tel:+4540601253">${svgIcon('phone')} +45 40 60 12 53</a>
        </nav>
      </div>
    </header>`;
}

function renderFooter() {
  const contactHref = localizedContactHref();
  document.querySelector('[data-site-footer]').innerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a class="brand brand--footer" href="${pageFiles.home[locale]}"><img class="brand-logo" src="${assetBase}sub-z-logo.png" alt="SUB-z — Esprit de corps at work" width="514" height="104"></a>
          </div>
          <div class="footer-col">
            <h2>${copy.footer.contact}</h2>
            <address>Vesterballevej 5<br>7000 Fredericia<br><a href="tel:+4540601253">+45 40 60 12 53</a><br><a href="mailto:support@sub-z.dk">support@sub-z.dk</a></address>
          </div>
          <div class="footer-col">
            <h2>${copy.footer.shortcuts}</h2>
            <ul><li><a href="${pageFiles.companies[locale]}">${copy.nav.companies}</a></li><li><a href="${pageFiles.candidates[locale]}">${copy.nav.candidates}</a></li><li><a href="${pageFiles.jobs[locale]}">${copy.nav.jobs}</a></li><li><a href="${contactHref}">${copy.nav.contact}</a></li></ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© <span data-year></span> SUB-z · CVR 44116935</span>
          <div class="footer-links"><a href="#">${copy.footer.privacy}</a><a href="${pageFiles.cookies[locale]}">${copy.footer.cookies}</a><a href="${contactHref}">${copy.nav.contact}</a><div class="language-switch">${['da', 'en', 'pl'].map(lang => `<a href="${languageHref(lang)}" lang="${lang}">${lang.toUpperCase()}</a>`).join('')}</div></div>
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
    button.setAttribute('aria-label', open ? copy.menuOpen : copy.menuClose);
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
      const formData = new FormData(form);
      const candidate = form.dataset.context === 'kandidat';
      const subject = candidate ? copy.form.subjectCandidate : copy.form.subjectCompany;
      const labels = {
        ...copy.form.labels,
        message: candidate ? copy.form.candidateMessage : copy.form.companyMessage
      };
      const body = Array.from(formData.entries())
        .filter(([, value]) => String(value).trim())
        .map(([key, value]) => `${labels[key] || key}: ${value}`)
        .join('\n\n');
      const mailto = `mailto:${TEST_FORM_RECIPIENT}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      if (status) status.textContent = copy.form.status;
      window.location.href = mailto;
    });
  });
}

function setupContactFormContext() {
  const form = document.querySelector('[data-contact-context]');
  if (!form) return;

  const buttons = form.querySelectorAll('[data-contact-type]');
  const companyField = form.querySelector('[data-company-field]');
  const candidateField = form.querySelector('[data-candidate-field]');
  const companyInput = form.querySelector('#contact-company');
  const tradeInput = form.querySelector('#contact-trade');
  const eyebrow = form.querySelector('[data-form-eyebrow]');
  const title = form.querySelector('[data-form-title]');
  const messageLabel = form.querySelector('[data-message-label]');
  const submit = form.querySelector('[data-submit-label]');
  const status = form.querySelector('.form-status');

  const setContext = (type, updateUrl = false) => {
    const candidate = type === 'kandidat';
    form.dataset.context = candidate ? 'kandidat' : 'virksomhed';
    companyField.hidden = candidate;
    candidateField.hidden = !candidate;
    companyInput.required = !candidate;
    tradeInput.required = candidate;
    companyInput.disabled = candidate;
    tradeInput.disabled = !candidate;
    eyebrow.textContent = candidate ? copy.form.candidateEyebrow : copy.form.companyEyebrow;
    title.textContent = candidate ? copy.form.candidateTitle : copy.form.companyTitle;
    messageLabel.textContent = candidate ? copy.form.candidateLabel : copy.form.companyLabel;
    submit.innerHTML = `${candidate ? copy.form.candidateSubmit : copy.form.companySubmit} ${svgIcon('arrow')}`;
    buttons.forEach(button => {
      const active = button.dataset.contactType === (candidate ? 'kandidat' : 'virksomhed');
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    if (status) status.textContent = '';
    if (updateUrl) {
      const url = new URL(window.location.href);
      url.searchParams.set('type', candidate ? 'kandidat' : 'virksomhed');
      window.history.replaceState({}, '', url);
    }
  };

  const requestedType = new URLSearchParams(window.location.search).get('type');
  setContext(requestedType === 'kandidat' ? 'kandidat' : 'virksomhed');
  buttons.forEach(button => button.addEventListener('click', () => setContext(button.dataset.contactType, true)));
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
setupLanguageMetadata();
setupCookieBanner();
document.querySelectorAll('[data-icon]').forEach(node => { node.innerHTML = svgIcon(node.dataset.icon); });
document.querySelectorAll('[data-year]').forEach(node => { node.textContent = new Date().getFullYear(); });
setupMenu();
setupContactFormContext();
setupForms();
setupJobFilter();
