/* =============================================================
   js/lang/booking.js - the text for the Booking page, in every language
   Owner: Member 4

   HOW TO USE
   * Each key here matches a data-i18n="..." in the HTML.
     Example: data-i18n="booking.title" -> the "title" line below.
   * Write the English (en) version first. Other languages can be
     added later - anything missing simply shows in English.
   * Only edit YOUR file, so we never clash in git.
   * Text containing an apostrophe: use "double quotes" around it,
     e.g. title: "Dublin's arcade"
   ============================================================= */

ARC_I18N.addTranslations('booking', {
  en: {
    meta: { title: 'Book a session | Neon Arcade',
            desc: 'Book a casual session, party, tournament entry or private hire at Neon Arcade.' },
    title: 'Book a session',
    lead: 'Reserve a party slot, tournament entry or private hire. Walk-ins never need to book.',
    f: { name: 'Name', email: 'Email', phone: 'Phone', package: 'Package', packagePh: 'Choose...',
         date: 'Date', time: 'Time slot', timePh: 'Choose...', guests: 'Guests',
         game: 'Favourite cabinet (optional)', msg: 'Anything else?',
         terms: 'I accept the house rules', submit: 'Send booking', clear: 'Clear' },
    pkg: { casual: 'Casual play (€1/play)', wrist: 'All-night wristband (€15/person)',
           party: 'Party zone (€120/10 guests)', tourn: 'Tournament entry (€10/person)',
           priv: 'Private hire (€300)' },
    sum: { h: 'Estimated price', note: 'Pick a package to see the estimate.' }
    /* err.<field>: inline error messages go here */
  }
});
