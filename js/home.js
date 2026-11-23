/* =============================================================
   home.js - Home page interactions
   Owner: Member 1
     * "Open now" badge computed from ARC_HOURS (js/main.js)
     * Featured cabinets pulled from js/data/games.js
     * Next upcoming event pulled from js/data/events.js
   ============================================================= */

(function () {
  'use strict';

  function openStatus() {
    var el = document.getElementById('openStatus');
    if (!el) { return; }
    var now = new Date();
    var today = window.ARC_HOURS.table[now.getDay()];
    el.classList.remove('arc-badge-open', 'arc-badge-closed');

    if (today && now.getHours() >= today.open && now.getHours() < today.close) {
      el.classList.add('arc-badge-open');
      el.textContent = ARC_I18N.t('home.status.open', { close: window.ARC_HOURS.fmt(today.close) });
      return;
    }
    el.classList.add('arc-badge-closed');
    /* Find the next day with hours. */
    for (var i = 0; i < 7; i++) {
      var d = (now.getDay() + i) % 7;
      var h = window.ARC_HOURS.table[d];
      var opensLaterToday = (i === 0 && h && now.getHours() < h.open);
      if (h && (i > 0 || opensLaterToday)) {
        el.textContent = ARC_I18N.t('home.status.closed', {
          day: i === 0 ? ARC_I18N.t('home.status.today')
                       : ARC_I18N.t('common.days.' + window.ARC_HOURS.dayKeys[d]),
          open: window.ARC_HOURS.fmt(h.open)
        });
        return;
      }
    }
  }

  function gameCard(g) {
    return '<div class="col-md-4"><article class="arc-card arc-game-card h-100">'
      + '<img src="' + g.image + '" alt="' + g.name + '" class="arc-card-img" loading="lazy">'
      + '<div class="arc-card-pad">'
      + '<h3 class="arc-card-title">' + g.name + '</h3>'
      + '<p class="arc-card-meta">' + g.year + ' \u00b7 ' + g.genre + ' \u00b7 ' + g.players + 'P</p>'
      + '</div></article></div>';
  }

  function featuredGames() {
    var wrap = document.getElementById('featuredGames');
    if (!wrap || !window.ARC_DATA || !window.ARC_DATA.games) { return; }
    wrap.innerHTML = window.ARC_DATA.games.slice(0, 3).map(gameCard).join('');
  }

  function nextEvent() {
    var wrap = document.getElementById('nextEvent');
    if (!wrap || !window.ARC_DATA || !window.ARC_DATA.events) { return; }
    var today = new Date(); today.setHours(0, 0, 0, 0);
    var upcoming = window.ARC_DATA.events
      .filter(function (e) { return new Date(e.date + 'T' + e.time) >= today; })
      .sort(function (a, b) { return a.date < b.date ? -1 : 1; })[0];
    if (!upcoming) { wrap.innerHTML = ''; return; }
    var dstr = new Date(upcoming.date + 'T' + upcoming.time)
      .toLocaleDateString(ARC_I18N.locale, { weekday: 'long', day: 'numeric', month: 'long' });
    wrap.innerHTML =
        '<div class="col-md-8"><article class="arc-card arc-card-pad arc-event-feature">'
      + '<p class="arc-card-meta">' + dstr + ' \u00b7 ' + upcoming.time + '</p>'
      + '<h3 class="arc-card-title">' + upcoming.title + '</h3>'
      + '<p class="arc-card-meta">' + ARC_I18N.t('home.event.from', { price: upcoming.price }) + '</p>'
      + '<a class="arc-btn arc-btn-neon" href="booking.html?event=' + upcoming.id + '">'
      + ARC_I18N.t('home.event.book') + '</a>'
      + '</article></div>';
  }

  function renderAll() { openStatus(); featuredGames(); nextEvent(); }

  document.addEventListener('DOMContentLoaded', renderAll);
  ARC_I18N.onChange(renderAll);
})();
