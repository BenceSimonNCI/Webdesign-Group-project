/* =============================================================
   events.js - Events page
   Owner: Member 3

   DONE (starter, to show the pattern):
     * lists ALL upcoming events in the right-hand column,
       each with a "Book this event" link

   TODO (Member 3):
     * build the month calendar in #calGrid
         - weekday names in #calWeekdays, month name in #calTitle
         - #calPrev / #calNext buttons change month
         - highlight today, put a dot on days that have events
           (CSS classes ready in base.css: arc-cal-day, arc-cal-today,
            arc-cal-selected, arc-cal-has, arc-cal-other)
     * click a day -> show only that day's events (reuse
       buildEventCard below)
     * category buttons (.arc-tabs [data-cat]) filter the events
     * countdown to the next event in #nextCountdown
   ============================================================= */


/* -------------------------------------------------------------
   BUILD ONE EVENT CARD
   ------------------------------------------------------------- */
function buildEventCard(event) {
  // Show the date in the visitor's language, e.g. "Sat 5 Dec".
  const dateText = new Date(event.date + 'T' + event.time)
    .toLocaleDateString(ARC_I18N.locale, { weekday: 'short', day: 'numeric', month: 'short' });

  return `
    <article class="arc-card arc-card-pad mb-3">
      <p class="arc-card-meta">${dateText} · ${event.time}</p>
      <h3 class="arc-card-title">${event.title}</h3>
      <p class="arc-card-meta">${ARC_I18N.t('events.day.from', { price: event.price })}</p>
      <a class="arc-btn arc-btn-neon mt-2" href="booking.html?event=${event.id}">
        ${ARC_I18N.t('events.day.book')}
      </a>
    </article>`;
}


/* -------------------------------------------------------------
   LIST UPCOMING EVENTS (starter - replace with "events on the
   selected day" once the calendar works)
   ------------------------------------------------------------- */
function renderEventList() {
  const container = document.getElementById('dayEvents');

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  let html = '';
  for (const event of EVENTS) {
    const eventDate = new Date(event.date + 'T' + event.time);
    if (eventDate >= today) {
      html += buildEventCard(event);
    }
  }

  if (html === '') {
    html = `<p class="arc-muted">${ARC_I18N.t('events.day.none')}</p>`;
  }

  container.innerHTML = html;
}


/* -------------------------------------------------------------
   START-UP
   ------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', renderEventList);
ARC_I18N.onChange(renderEventList);
