/* =============================================================
   games.js - Games page
   Owner: Member 2
   DONE (starter): renders cards from js/data/games.js so the
   page is never empty.
   TODO (Member 2):
     * search box + genre/players/decade filters + sort
     * favourites in localStorage + "favourites only" toggle
     * results count + #noResults handling
     * details modal (#gameModal) + "Book a session" ->
       booking.html?game=<id>
     * read ?genre= / ?fav=1 from the URL on load
     * translatable text via ARC_I18N.t() + re-render on
       ARC_I18N.onChange()
   ============================================================= */

(function () {
  'use strict';

  function card(g) {
    return '<div class="col-md-6 col-lg-4"><article class="arc-card arc-game-card h-100">'
      + '<img src="' + g.image + '" alt="' + g.name + '" class="arc-card-img" loading="lazy">'
      + '<div class="arc-card-pad">'
      + '<h2 class="arc-card-title">' + g.name + '</h2>'
      + '<p class="arc-card-meta">' + g.year + ' \u00b7 ' + g.genre + ' \u00b7 ' + g.players + 'P \u00b7 '
      + ARC_I18N.t('games.card.price', { price: g.pricePerPlay.toFixed(2) }) + '</p>'
      + '</div></article></div>';
  }

  function render() {
    var grid = document.getElementById('gamesGrid');
    if (!grid || !window.ARC_DATA || !window.ARC_DATA.games) { return; }
    grid.innerHTML = window.ARC_DATA.games.map(card).join('');
  }

  document.addEventListener('DOMContentLoaded', render);
  ARC_I18N.onChange(render);
})();
