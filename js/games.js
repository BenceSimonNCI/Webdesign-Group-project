/* =============================================================
   games.js - Games page
   Owner: Member 2

   DONE (starter, to show the pattern):
     * builds a card for every game in js/data/games.js
     * the SEARCH box works - use it as the example to copy

   TODO (Member 2):
     * genre / players / decade dropdowns (same idea as search)
     * sort dropdown (name, newest, cheapest)
     * favourites saved in localStorage + "favourites only" button
     * results count (#resultsCount) + show #noResults when empty
     * details modal (#gameModal) + "Book a session" link to
       booking.html?game=<id>
     * read ?genre=racing from the address bar on page load
   ============================================================= */


/* -------------------------------------------------------------
   BUILD ONE CARD
   Gets one game object, returns the HTML for its card as text.
   The ${...} parts are filled in with the game's values.
   ------------------------------------------------------------- */
function buildGameCard(game) {
  const priceText = ARC_I18N.t('games.card.price', { price: game.pricePerPlay.toFixed(2) });

  return `
    <div class="col-md-6 col-lg-4">
      <article class="arc-card arc-game-card h-100">
        <img src="${game.image}" alt="${game.name} arcade cabinet" class="arc-card-img" loading="lazy">
        <div class="arc-card-pad">
          <h2 class="arc-card-title">${game.name}</h2>
          <p class="arc-card-meta">${game.year} · ${game.genre} · ${game.players}P · ${priceText}</p>
        </div>
      </article>
    </div>`;
}


/* -------------------------------------------------------------
   DOES THIS GAME PASS THE FILTERS?
   Returns true (show it) or false (hide it).
   To add a filter: read the dropdown's value, and return false
   when the game doesn't match. Example for genre:

     const genre = document.getElementById('genreFilter').value;
     if (genre !== '' && game.genre !== genre) {
       return false;
     }
   ------------------------------------------------------------- */
function gameMatchesFilters(game) {
  const searchText = document.getElementById('gamesSearch').value.trim().toLowerCase();

  // Search: hide the game if its name doesn't contain the typed text.
  if (searchText !== '' && !game.name.toLowerCase().includes(searchText)) {
    return false;
  }

  return true;
}


/* -------------------------------------------------------------
   DRAW THE GRID
   Called on page load, on every filter change, and when the
   language changes.
   ------------------------------------------------------------- */
function renderGamesGrid() {
  const grid = document.getElementById('gamesGrid');
  let html = '';

  for (const game of GAMES) {
    if (gameMatchesFilters(game)) {
      html += buildGameCard(game);
    }
  }

  grid.innerHTML = html;
}


/* -------------------------------------------------------------
   START-UP
   'input' fires on every key press in the search box.
   For dropdowns use 'change' instead.
   ------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', function () {
  renderGamesGrid();
  document.getElementById('gamesSearch').addEventListener('input', renderGamesGrid);
});

ARC_I18N.onChange(renderGamesGrid);
