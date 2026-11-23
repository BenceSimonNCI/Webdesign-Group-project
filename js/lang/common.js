/* =============================================================
   js/lang/common.js - the text for the shared (navbar, footer, days) parts, in every language
   Owner: Member 1 (site shell)

   meta.langName = the name shown in the language dropdown -
   every language listed in js/i18n.js MUST have one here.

   HOW TO USE
   * Each key here matches a data-i18n="..." in the HTML.
     Example: data-i18n="common.title" -> the "title" line below.
   * Write the English (en) version first. Other languages can be
     added later - anything missing simply shows in English.
   * Only edit YOUR file, so we never clash in git.
   * Text containing an apostrophe: use "double quotes" around it,
     e.g. title: "Dublin's arcade"
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
      copyright: '© {year} Neon Arcade - student project, not a real arcade.'
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
      tagline: "Inserisci la moneta. Resta un po'.",
      hoursTitle: 'Orari di apertura',
      contactTitle: 'Dove siamo',
      address: '12 Arcade Lane, Dublino 1',
      copyright: '© {year} Neon Arcade - progetto studentesco, non una sala giochi vera.'
    },
    days: { mon: 'Lun', tue: 'Mar', wed: 'Mer', thu: 'Gio', fri: 'Ven', sat: 'Sab', sun: 'Dom' },
    hours: { closed: 'Chiuso', open: '{open} - {close}' }
  },

  hu: {
    meta: { langName: 'Magyar', siteName: 'Neon Arcade', locale: 'hu-HU' },
    skip: 'Ugrás a tartalomhoz',
    nav: { home: 'Kezdőlap', games: 'Játékok', events: 'Események', booking: 'Foglalás',
           about: 'Rólunk', toggle: 'Menü megnyitása', langLabel: 'Nyelv' },
    footer: {
      tagline: 'Dobj be egy érmét. Maradj egy kicsit.',
      hoursTitle: 'Nyitvatartás',
      contactTitle: 'Hol találsz minket',
      address: '12 Arcade Lane, Dublin 1',
      copyright: '© {year} Neon Arcade - egyetemi projekt, nem valódi játékterem.'
    },
    days: { mon: 'Hé', tue: 'Ke', wed: 'Sze', thu: 'Cs', fri: 'Pé', sat: 'Szo', sun: 'Vas' },
    hours: { closed: 'Zárva', open: '{open} - {close}' }
  },

  pl: {
    meta: { langName: 'Polski', siteName: 'Neon Arcade', locale: 'pl-PL' },
    skip: 'Przejdź do treści',
    nav: { home: 'Strona główna', games: 'Gry', events: 'Wydarzenia', booking: 'Rezerwacja',
           about: 'O nas', toggle: 'Przełącz nawigację', langLabel: 'Język' },
    footer: {
      tagline: 'Wrzuć monetę. Zostań na dłużej.',
      hoursTitle: 'Godziny otwarcia',
      contactTitle: 'Znajdź nas',
      address: '12 Arcade Lane, Dublin 1',
      copyright: '© {year} Neon Arcade - projekt studencki, nieprawdziwy salon gier.'
    },
    days: { mon: 'Pon', tue: 'Wt', wed: 'Śr', thu: 'Czw', fri: 'Pt', sat: 'Sob', sun: 'Nd' },
    hours: { closed: 'Zamknięte', open: '{open} - {close}' }
  },

  fr: {
    meta: { langName: 'Français', siteName: 'Neon Arcade', locale: 'fr-FR' },
    skip: 'Aller au contenu principal',
    nav: { home: 'Accueil', games: 'Jeux', events: 'Événements', booking: 'Réserver',
           about: 'À propos', toggle: 'Ouvrir la navigation', langLabel: 'Langue' },
    footer: {
      tagline: 'Insérez une pièce. Restez un moment.',
      hoursTitle: "Horaires d'ouverture",
      contactTitle: 'Nous trouver',
      address: '12 Arcade Lane, Dublin 1',
      copyright: "© {year} Neon Arcade - projet étudiant, pas une vraie salle d'arcade."
    },
    days: { mon: 'Lun', tue: 'Mar', wed: 'Mer', thu: 'Jeu', fri: 'Ven', sat: 'Sam', sun: 'Dim' },
    hours: { closed: 'Fermé', open: '{open} - {close}' }
  }
});
