/* =============================================================
   home.js - Home page
   Owner: Member 1

   What this file does:
     1. "Open now" / "Closed" badge in the hero
     2. Shows 3 featured games  (data from js/data/games.js)
     3. Shows the next upcoming event (data from js/data/events.js)

   Uses OPENING_HOURS, DAY_NAMES and formatHour() from main.js.
   ============================================================= */


/* -------------------------------------------------------------
   1. OPEN / CLOSED BADGE
   ------------------------------------------------------------- */
function renderOpenStatus() {
  const badge = document.getElementById('openStatus');
  if (badge === null) {
    return;
  }

  const now = new Date();
  const currentHour = now.getHours();
  const todayName = DAY_NAMES[now.getDay()]; // e.g. "fri"
  const todayHours = OPENING_HOURS[todayName];

  // Remove old colour classes before adding the right one.
  badge.classList.remove('arc-badge-open', 'arc-badge-closed');

  // Are we open right now?
  const isOpenNow = todayHours !== null
    && currentHour >= todayHours.open
    && currentHour < todayHours.close;

  if (isOpenNow) {
    badge.classList.add('arc-badge-open');
    badge.textContent = ARC_I18N.t('home.status.open', {
      close: formatHour(todayHours.close)
    });
    return;
  }

  // We're closed - find when we open next.
  badge.classList.add('arc-badge-closed');

  // Opening later today? (e.g. it's 10:00 and we open at 12:00)
  if (todayHours !== null && currentHour < todayHours.open) {
    badge.textContent = ARC_I18N.t('home.status.closed', {
      day: ARC_I18N.t('home.status.today'),
      open: formatHour(todayHours.open)
    });
    return;
  }

  // Otherwise check tomorrow, the day after, ... until we find an open day.
  for (let daysAhead = 1; daysAhead <= 7; daysAhead++) {
    const dayNumber = (now.getDay() + daysAhead) % 7; // % 7 wraps Saturday -> Sunday
    const dayName = DAY_NAMES[dayNumber];
    const hours = OPENING_HOURS[dayName];

    if (hours !== null) {
      badge.textContent = ARC_I18N.t('home.status.closed', {
        day: ARC_I18N.t('common.days.' + dayName),
        open: formatHour(hours.open)
      });
      return;
    }
  }
}


/* -------------------------------------------------------------
   2. FEATURED GAMES
   Takes the first 3 games from the list and builds a card for each.
   ------------------------------------------------------------- */
function renderFeaturedGames() {
  const container = document.getElementById('featuredGames');
  if (container === null) {
    return;
  }

  const featured = GAMES.slice(0, 3); // first 3 items
  let html = '';

  for (const game of featured) {
    html += `
      <div class="col-md-4">
        <article class="arc-card arc-game-card h-100">
          <img src="${game.image}" alt="${game.name} arcade cabinet" class="arc-card-img" loading="lazy">
          <div class="arc-card-pad">
            <h3 class="arc-card-title">${game.name}</h3>
            <p class="arc-card-meta">${game.year} · ${game.genre} · ${game.players}P</p>
          </div>
        </article>
      </div>`;
  }

  container.innerHTML = html;
}


/* -------------------------------------------------------------
   3. NEXT EVENT
   Finds the earliest event that hasn't happened yet.
   ------------------------------------------------------------- */
function renderNextEvent() {
  const container = document.getElementById('nextEvent');
  if (container === null) {
    return;
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0); // midnight, so events later today still count

  let nextEvent = null;

  for (const event of EVENTS) {
    const eventDate = new Date(event.date + 'T' + event.time);

    // Skip events in the past.
    if (eventDate < today) {
      continue;
    }
    // Keep this one if it's sooner than the best we've found so far.
    if (nextEvent === null || event.date < nextEvent.date) {
      nextEvent = event;
    }
  }

  if (nextEvent === null) {
    container.innerHTML = '';
    return;
  }

  // Show the date in the visitor's language, e.g. "Saturday 5 December".
  const dateText = new Date(nextEvent.date + 'T' + nextEvent.time)
    .toLocaleDateString(ARC_I18N.locale, { weekday: 'long', day: 'numeric', month: 'long' });

  container.innerHTML = `
    <div class="col-md-8">
      <article class="arc-card arc-card-pad arc-event-feature">
        <p class="arc-card-meta">${dateText} · ${nextEvent.time}</p>
        <h3 class="arc-card-title">${nextEvent.title}</h3>
        <p class="arc-card-meta">${ARC_I18N.t('home.event.from', { price: nextEvent.price })}</p>
        <a class="arc-btn arc-btn-neon" href="booking.html?event=${nextEvent.id}">
          ${ARC_I18N.t('home.event.book')}
        </a>
      </article>
    </div>`;
}


/* -------------------------------------------------------------
   START-UP (see main.js for what these two lines mean)
   ------------------------------------------------------------- */
function renderHomePage() {
  renderOpenStatus();
  renderFeaturedGames();
  renderNextEvent();
}

document.addEventListener('DOMContentLoaded', renderHomePage);
ARC_I18N.onChange(renderHomePage);
