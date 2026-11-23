/* =============================================================
   main.js - code that runs on EVERY page
   Owner: Member 1 (site shell)

   What this file does:
     1. Stores the opening hours (one place, used everywhere)
     2. Writes the opening hours into the footer (and Home page)
     3. Highlights the current page in the navigation bar

   NOTE FOR EVERYONE: all our JS files share the same "global"
   space, so two files must never declare the same name. That's
   why names here are specific (renderOpeningHours, not render).
   ============================================================= */


/* -------------------------------------------------------------
   1. OPENING HOURS
   One entry per day. Times are whole hours on a 24h clock.
   null means "closed that day".
   Change the hours here and the footer, the Home page and the
   "Open now" badge all update automatically.
   ------------------------------------------------------------- */
const OPENING_HOURS = {
  mon: null,
  tue: { open: 16, close: 22 },
  wed: { open: 16, close: 22 },
  thu: { open: 16, close: 23 },
  fri: { open: 12, close: 23 },
  sat: { open: 12, close: 23 },
  sun: { open: 12, close: 20 }
};

// JavaScript's Date.getDay() gives a number: 0 = Sunday, 1 = Monday...
// This list turns that number into one of our day names above.
const DAY_NAMES = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];


// Turns 9 into "09:00" and 17 into "17:00".
function formatHour(hour) {
  return String(hour).padStart(2, '0') + ':00';
}


/* -------------------------------------------------------------
   2. WRITE THE HOURS INTO A <ul> ON THE PAGE
   listId is the id of an empty <ul> in the HTML, e.g. "footerHours".
   ------------------------------------------------------------- */
function renderOpeningHours(listId) {
  const list = document.getElementById(listId);

  // This page doesn't have that list? Nothing to do.
  if (list === null) {
    return;
  }

  // We want the week to start on Monday, so we use our own order.
  const weekOrder = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  let html = '';

  for (const day of weekOrder) {
    const hours = OPENING_HOURS[day];
    let timeText;

    if (hours === null) {
      timeText = ARC_I18N.t('common.hours.closed');
    } else {
      timeText = ARC_I18N.t('common.hours.open', {
        open: formatHour(hours.open),
        close: formatHour(hours.close)
      });
    }

    const dayText = ARC_I18N.t('common.days.' + day);
    html += `<li><span>${dayText}</span><span>${timeText}</span></li>`;
  }

  list.innerHTML = html;
}


/* -------------------------------------------------------------
   3. HIGHLIGHT THE CURRENT PAGE IN THE NAVBAR
   Every nav link has data-page="games" (etc.). We compare that
   with the file name in the address bar (games.html -> "games").
   ------------------------------------------------------------- */
function highlightCurrentNavLink() {
  // "/Webdesign-Group-project/games.html" -> "games.html"
  let fileName = window.location.pathname.split('/').pop();
  if (fileName === '') {
    fileName = 'index.html'; // the site root is the home page
  }
  const pageName = fileName.replace('.html', '');

  const navLinks = document.querySelectorAll('.arc-nav-link');
  for (const link of navLinks) {
    if (link.dataset.page === pageName) {
      link.classList.add('arc-active');          // styled in base.css
      link.setAttribute('aria-current', 'page'); // tells screen readers
    }
  }
}


/* -------------------------------------------------------------
   START-UP
   'DOMContentLoaded' = "the HTML has finished loading", so the
   elements we look for actually exist.
   ARC_I18N.onChange = "run again when the language changes",
   so the day names get translated too.
   ------------------------------------------------------------- */
function renderSharedParts() {
  renderOpeningHours('footerHours');
  renderOpeningHours('homeHours');
  highlightCurrentNavLink();
}

document.addEventListener('DOMContentLoaded', renderSharedParts);
ARC_I18N.onChange(renderSharedParts);
