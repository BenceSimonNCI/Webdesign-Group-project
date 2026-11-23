/* =============================================================
   events.js - Events page
   Owner: Member 3
   DONE (starter): none - skeleton only.
   TODO (Member 3):
     * render a month calendar into #calGrid (prev/next via
       #calPrev/#calNext, today highlighted, dot on event days)
     * click a day -> list that day's events in #dayEvents
     * category chips (.arc-tabs [data-cat]) filter both
       calendar dots and the list
     * #nextCountdown: countdown to the next upcoming event
     * "Book this event" -> booking.html?event=<id>
     * month/day names via toLocaleDateString(ARC_I18N.locale)
       and re-render on ARC_I18N.onChange()
   ============================================================= */

(function () {
  'use strict';
  /* Starter: prove the data loads. Replace with the calendar. */
  document.addEventListener('DOMContentLoaded', function () {
    var el = document.getElementById('dayEvents');
    if (el && window.ARC_DATA && window.ARC_DATA.events) {
      el.innerHTML = '<p class="arc-muted">Calendar coming soon - '
        + window.ARC_DATA.events.length + ' events loaded.</p>';
    }
  });
})();
