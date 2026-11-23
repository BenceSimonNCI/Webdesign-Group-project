/* =============================================================
   js/lang/events.js - the text for the Events page, in every language
   Owner: Member 3

   HOW TO USE
   * Each key here matches a data-i18n="..." in the HTML.
     Example: data-i18n="events.title" -> the "title" line below.
   * Write the English (en) version first. Other languages can be
     added later - anything missing simply shows in English.
   * Only edit YOUR file, so we never clash in git.
   * Text containing an apostrophe: use "double quotes" around it,
     e.g. title: "Dublin's arcade"
   ============================================================= */

ARC_I18N.addTranslations('events', {
  en: {
    meta: { title: 'Events | Neon Arcade',
            desc: 'Tournaments, retro nights and family sessions at Neon Arcade - interactive calendar and booking links.' },
    title: 'Events',
    lead: 'Tournaments, retro nights and family sessions. Pick a day on the calendar.',
    countdown: 'Next event: {title} in {days} days',
    countdownToday: 'Next event: {title} - today!',
    cats: { all: 'All', tournament: 'Tournament', retro: 'Retro night', family: 'Family', private: 'Private' },
    cal: { prev: 'Previous month', next: 'Next month' },
    day: { none: 'No events this day.', book: 'Book this event', from: 'from €{price}', spots: '{n} spots left' }
  }
});
