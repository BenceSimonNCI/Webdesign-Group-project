/* =============================================================
   js/lang/booking.js - translations for namespace(s): booking
   One file per page owner = no merge conflicts.
   Write English first; other languages can be filled in later -
   anything missing falls back to English automatically.
   meta.langName must exist for EVERY language in common.
   ============================================================= */

/* Owner: Member 4 (Booking page) */
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
    pkg: { casual: 'Casual play (\u20ac1/play)', wrist: 'All-night wristband (\u20ac15/person)',
           party: 'Party zone (\u20ac120/10 guests)', tourn: 'Tournament entry (\u20ac10/person)',
           priv: 'Private hire (\u20ac300)' },
    sum: { h: 'Estimated price', note: 'Pick a package to see the estimate.' }
    /* err.<field>: inline error messages go here */
  }
});
