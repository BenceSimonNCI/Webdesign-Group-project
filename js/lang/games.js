/* =============================================================
   js/lang/games.js - the text for the Games page, in every language
   Owner: Member 2

   HOW TO USE
   * Each key here matches a data-i18n="..." in the HTML.
     Example: data-i18n="games.title" -> the "title" line below.
   * Write the English (en) version first. Other languages can be
     added later - anything missing simply shows in English.
   * Only edit YOUR file, so we never clash in git.
   * Text containing an apostrophe: use "double quotes" around it,
     e.g. title: "Dublin's arcade"
   ============================================================= */

ARC_I18N.addTranslations('games', {
  en: {
    meta: { title: 'Games | Neon Arcade',
            desc: 'Browse every arcade cabinet at Neon Arcade - filter by genre, players and decade, sort and save favourites.' },
    title: 'The cabinets',
    lead: 'Everything on the floor right now. Filter, sort, favourite - then book a session.',
    filters: { search: 'Search', searchPh: 'Search cabinets...', genre: 'Genre', players: 'Players',
               decade: 'Decade', sort: 'Sort', all: 'All', favs: '♥ Favourites only', reset: 'Reset' },
    sort: { name: 'Name A-Z', newest: 'Newest', cheapest: 'Cheapest' },
    count: '{count} cabinets',
    noResults: 'No cabinets match those filters.',
    card: { players: '{players}P', details: 'Details', book: 'Book a session', price: '€{price}/play' },
    modal: { close: 'Close' }
    /* data.<gameId> descriptions go here when translated */
  }
});
