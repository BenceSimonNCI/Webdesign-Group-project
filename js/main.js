/* =============================================================
   main.js - shared behaviour on every page
   Owner: Member 1 (site shell)
     * marks the current page's nav link as active
     * fills the opening-hours lists (footer + home)
   ============================================================= */

(function () {
  'use strict';

  /* Opening hours per weekday, index = Date.getDay() (0 = Sunday).
     open/close are 24h numbers. null = closed. */
  var HOURS = {
    0: { open: 12, close: 20 },   /* Sun */
    1: null,                      /* Mon - closed */
    2: { open: 16, close: 22 },   /* Tue */
    3: { open: 16, close: 22 },   /* Wed */
    4: { open: 16, close: 23 },   /* Thu */
    5: { open: 12, close: 23 },   /* Fri */
    6: { open: 12, close: 23 }    /* Sat */
  };
  var DAY_KEYS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

  function fmt(h) { return String(h).padStart(2, '0') + ':00'; }

  /** Ordered day list starting Monday (index 1) wrapping to Sunday. */
  function renderHoursList(ul) {
    if (!ul) { return; }
    var order = [1, 2, 3, 4, 5, 6, 0];
    ul.innerHTML = order.map(function (d) {
      var h = HOURS[d];
      var range = h
        ? ARC_I18N.t('common.hours.open', { open: fmt(h.open), close: fmt(h.close) })
        : ARC_I18N.t('common.hours.closed');
      return '<li><span>' + ARC_I18N.t('common.days.' + DAY_KEYS[d]) + '</span><span>' + range + '</span></li>';
    }).join('');
  }

  /* Mark the nav link matching the current file as active.
     Acts as a safety net - pages also hardcode their state. */
  function markActiveNav() {
    var file = location.pathname.split('/').pop() || 'index.html';
    var page = file.replace('.html', '');
    document.querySelectorAll('.arc-nav-link').forEach(function (a) {
      if (a.getAttribute('data-page') === page) {
        a.classList.add('arc-active');
        a.setAttribute('aria-current', 'page');
      }
    });
  }

  function renderAll() {
    renderHoursList(document.getElementById('footerHours'));
    renderHoursList(document.getElementById('homeHours'));
    markActiveNav();
  }

  document.addEventListener('DOMContentLoaded', renderAll);
  ARC_I18N.onChange(renderAll);

  /* Shared so home.js can reuse the same source of truth. */
  window.ARC_HOURS = { table: HOURS, dayKeys: DAY_KEYS, fmt: fmt };
})();
