/* =============================================================
   js/lang/home.js - translations for namespace(s): home, about
   One file per page owner = no merge conflicts.
   Write English first; other languages can be filled in later -
   anything missing falls back to English automatically.
   meta.langName must exist for EVERY language in common.
   ============================================================= */

/* Owner: Member 1 (Home + About + shell) */
ARC_I18N.addTranslations('home', {
  en: {
    meta: { title: 'Neon Arcade | Dublin\'s retro arcade',
            desc: 'Neon Arcade - classic and modern arcade cabinets, tournaments and party bookings in Dublin.' },
    hero: {
      kicker: 'Est. 2026 - Dublin',
      title: 'NEON ARCADE',
      tagline: 'Classic cabinets. Cold drinks. High scores.',
      ctaGames: 'Browse the cabinets',
      ctaBook: 'Book a session'
    },
    featured: { title: 'Featured cabinets', more: 'See all machines \u2192' },
    nextEvent: { title: 'Next event', more: 'Full events calendar \u2192' },
    hours: { title: 'Opening hours' },
    about: {
      title: 'A proper old-school arcade',
      text: 'Twenty-odd cabinets from the 80s to today, a snack bar, and a leaderboard wall of fame.',
      cta: 'More about us'
    },
    status: { open: 'Open now - closes {close}', closed: 'Closed - opens {day} {open}',
              closedToday: 'Closed today', today: 'today' },
    event: { from: 'from \u20ac{price}', book: 'Book this event' }
  }
  /* TODO: it / hu / pl / fr - translate after content is final (Week 4).
     Anything missing falls back to English, so nothing breaks. */
});

ARC_I18N.addTranslations('about', {
  en: {
    meta: { title: 'About | Neon Arcade',
            desc: 'The story, prices, house rules and FAQs of Neon Arcade, Dublin\'s retro arcade.' },
    title: 'About the arcade',
    story: {
      h: 'Our story',
      p1: 'Neon Arcade started with three rescued cabinets in a storage unit and a stubborn belief that games are better shared.',
      p2: 'Today we run a floor of restored classics alongside modern indie machines, host weekly tournaments and keep the change machine well fed.'
    },
    prices: {
      h: 'Prices',
      casual: { h: 'Casual play', unit: '/play', p: 'Pay per game on any standard cabinet.' },
      wrist:  { h: 'All-night wristband', unit: '/person', p: 'Unlimited standard play for the whole session.' },
      party:  { h: 'Party booking', unit: '/group', p: 'Two hours, reserved zone, token bundle included.' }
    },
    rules: {
      h: 'House rules',
      r1: 'No drinks on the machines - bottle holders are on the side of every cab.',
      r2: 'Winner stays on, but respect the queue card on popular cabs.',
      r3: 'Under-14s welcome with an adult until 8pm.',
      r4: 'Be kind to the machines. They are older than you.'
    },
    faq: {
      h: 'FAQ',
      q1: 'Do I need to book?', a1: 'Walk-ins are always welcome. Bookings are only needed for parties and private hire.',
      q2: 'Are the machines really original?', a2: 'Most of our classics run original boards in restored cabinets; a few run faithful emulation for reliability.',
      q3: 'Can I bring my own controller?', a3: 'Fight sticks are welcome on tournament nights - ask staff to plug you in.'
    },
    find: { h: 'Find us', map: '[Map placeholder - 12 Arcade Lane, Dublin 1]' }
  }
});
