/* =============================================================
   js/lang/common.js - translations for namespace(s): common
   One file per page owner = no merge conflicts.
   Write English first; other languages can be filled in later -
   anything missing falls back to English automatically.
   meta.langName must exist for EVERY language in common.
   ============================================================= */

ARC_I18N.addTranslations('common', {

  en: {
    meta: { langName: 'English', siteName: 'Neon Arcade', locale: 'en-IE' },
    skip: 'Skip to main content',
    nav: { home: 'Home', games: 'Games', events: 'Events', booking: 'Booking',
           about: 'About', toggle: 'Toggle navigation', langLabel: 'Language' },
    footer: {
      tagline: 'Insert coin. Stay awhile.',
      hoursTitle: 'Opening hours',
      contactTitle: 'Find us',
      address: '12 Arcade Lane, Dublin 1',
      copyright: '\u00a9 {year} Neon Arcade - student project, not a real arcade.'
    },
    days: { mon: 'Mon', tue: 'Tue', wed: 'Wed', thu: 'Thu', fri: 'Fri', sat: 'Sat', sun: 'Sun' },
    hours: { closed: 'Closed', open: '{open} - {close}' }
  },

  it: {
    meta: { langName: 'Italiano', siteName: 'Neon Arcade', locale: 'it-IT' },
    skip: 'Salta al contenuto principale',
    nav: { home: 'Home', games: 'Giochi', events: 'Eventi', booking: 'Prenota',
           about: 'Chi siamo', toggle: 'Apri/chiudi navigazione', langLabel: 'Lingua' },
    footer: {
      tagline: 'Inserisci la moneta. Resta un po\'.',
      hoursTitle: 'Orari di apertura',
      contactTitle: 'Dove siamo',
      address: '12 Arcade Lane, Dublino 1',
      copyright: '\u00a9 {year} Neon Arcade - progetto studentesco, non una sala giochi vera.'
    },
    days: { mon: 'Lun', tue: 'Mar', wed: 'Mer', thu: 'Gio', fri: 'Ven', sat: 'Sab', sun: 'Dom' },
    hours: { closed: 'Chiuso', open: '{open} - {close}' }
  },

  hu: {
    meta: { langName: 'Magyar', siteName: 'Neon Arcade', locale: 'hu-HU' },
    skip: 'Ugr\u00e1s a tartalomhoz',
    nav: { home: 'Kezd\u0151lap', games: 'J\u00e1t\u00e9kok', events: 'Esem\u00e9nyek', booking: 'Foglal\u00e1s',
           about: 'R\u00f3lunk', toggle: 'Men\u00fc megnyit\u00e1sa', langLabel: 'Nyelv' },
    footer: {
      tagline: 'Dobj be egy \u00e9rm\u00e9t. Maradj egy kicsit.',
      hoursTitle: 'Nyitvatart\u00e1s',
      contactTitle: 'Hol tal\u00e1lsz minket',
      address: '12 Arcade Lane, Dublin 1',
      copyright: '\u00a9 {year} Neon Arcade - egyetemi projekt, nem val\u00f3di j\u00e1t\u00e9kterem.'
    },
    days: { mon: 'H\u00e9', tue: 'Ke', wed: 'Sze', thu: 'Cs', fri: 'P\u00e9', sat: 'Szo', sun: 'Vas' },
    hours: { closed: 'Z\u00e1rva', open: '{open} - {close}' }
  },

  pl: {
    meta: { langName: 'Polski', siteName: 'Neon Arcade', locale: 'pl-PL' },
    skip: 'Przejd\u017a do tre\u015bci',
    nav: { home: 'Strona g\u0142\u00f3wna', games: 'Gry', events: 'Wydarzenia', booking: 'Rezerwacja',
           about: 'O nas', toggle: 'Prze\u0142\u0105cz nawigacj\u0119', langLabel: 'J\u0119zyk' },
    footer: {
      tagline: 'Wrzu\u0107 monet\u0119. Zosta\u0144 na d\u0142u\u017cej.',
      hoursTitle: 'Godziny otwarcia',
      contactTitle: 'Znajd\u017a nas',
      address: '12 Arcade Lane, Dublin 1',
      copyright: '\u00a9 {year} Neon Arcade - projekt studencki, nieprawdziwy salon gier.'
    },
    days: { mon: 'Pon', tue: 'Wt', wed: '\u015ar', thu: 'Czw', fri: 'Pt', sat: 'Sob', sun: 'Nd' },
    hours: { closed: 'Zamkni\u0119te', open: '{open} - {close}' }
  },

  fr: {
    meta: { langName: 'Fran\u00e7ais', siteName: 'Neon Arcade', locale: 'fr-FR' },
    skip: 'Aller au contenu principal',
    nav: { home: 'Accueil', games: 'Jeux', events: '\u00c9v\u00e9nements', booking: 'R\u00e9server',
           about: '\u00c0 propos', toggle: 'Ouvrir la navigation', langLabel: 'Langue' },
    footer: {
      tagline: 'Ins\u00e9rez une pi\u00e8ce. Restez un moment.',
      hoursTitle: 'Horaires d\'ouverture',
      contactTitle: 'Nous trouver',
      address: '12 Arcade Lane, Dublin 1',
      copyright: '\u00a9 {year} Neon Arcade - projet \u00e9tudiant, pas une vraie salle d\'arcade.'
    },
    days: { mon: 'Lun', tue: 'Mar', wed: 'Mer', thu: 'Jeu', fri: 'Ven', sat: 'Sam', sun: 'Dim' },
    hours: { closed: 'Ferm\u00e9', open: '{open} - {close}' }
  }
});
