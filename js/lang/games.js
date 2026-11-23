/* =============================================================
   js/lang/games.js - translations for namespace(s): games
   One file per page owner = no merge conflicts.
   Write English first; other languages can be filled in later -
   anything missing falls back to English automatically.
   meta.langName must exist for EVERY language in common.
   ============================================================= */

/* Owner: Member 2 (Games page) */
ARC_I18N.addTranslations('games', {
  en: {
    meta: { title: 'Games | Neon Arcade',
            desc: 'Browse every arcade cabinet at Neon Arcade - filter by genre, players and decade, sort and save favourites.' },
    title: 'The cabinets',
    lead: 'Everything on the floor right now. Filter, sort, favourite - then book a session.',
    filters: { search: 'Search', searchPh: 'Search cabinets...', genre: 'Genre', players: 'Players',
               decade: 'Decade', sort: 'Sort', all: 'All', favs: '\u2665 Favourites only', reset: 'Reset' },
    sort: { name: 'Name A-Z', newest: 'Newest', cheapest: 'Cheapest' },
    count: '{count} cabinets',
    noResults: 'No cabinets match those filters.',
    card: { players: '{players}P', details: 'Details', book: 'Book a session', price: '\u20ac{price}/play' },
    modal: { close: 'Close' }
    /* data.<gameId> descriptions go here when translated */
  }
});
