/* =============================================================
   js/data/games.js - cabinet catalogue
   Owner: Member 2. These are STUB entries to prove the format;
   grow this to 20+ real cabinets.
   Contract used by home.js / games.js / booking prefill:
     id:          unique slug (used in ?game=<id> links)
     name:        display name (real cabinet names)
     genre:       one of: fighting | shooter | racing | maze |
                  platform | puzzle | sports | rhythm | pinball
     players:     number (1, 2, 4...)
     decade:      '1980s' | '1990s' | '2000s' | '2010s' | '2020s'
     year:        release year (for 'newest' sort)
     pricePerPlay: euros per play (number)
     image:       path under images/games/
     descKey:     optional i18n key for a description
   ============================================================= */

window.ARC_DATA = window.ARC_DATA || {};

window.ARC_DATA.games = [
  { id: 'pac-man',        name: 'Pac-Man',              genre: 'maze',     players: 2, decade: '1980s', year: 1980, pricePerPlay: 1.00, image: 'images/games/pac-man.svg' },
  { id: 'galaga',         name: 'Galaga',               genre: 'shooter',  players: 2, decade: '1980s', year: 1981, pricePerPlay: 1.00, image: 'images/games/galaga.svg' },
  { id: 'street-fighter', name: 'Street Fighter II',    genre: 'fighting', players: 2, decade: '1990s', year: 1991, pricePerPlay: 1.00, image: 'images/games/street-fighter.svg' },
  { id: 'mortal-kombat',  name: 'Mortal Kombat II',     genre: 'fighting', players: 2, decade: '1990s', year: 1993, pricePerPlay: 1.00, image: 'images/games/mortal-kombat.svg' },
  { id: 'outrun',         name: 'Out Run (sit-down)',   genre: 'racing',   players: 1, decade: '1980s', year: 1986, pricePerPlay: 1.50, image: 'images/games/outrun.svg' },
  { id: 'ddr',            name: 'Dance Dance Revolution', genre: 'rhythm', players: 2, decade: '1990s', year: 1998, pricePerPlay: 2.00, image: 'images/games/ddr.svg' },
  { id: 'time-crisis',    name: 'Time Crisis II',       genre: 'shooter',  players: 2, decade: '1990s', year: 1997, pricePerPlay: 1.50, image: 'images/games/time-crisis.svg' },
  { id: 'pinball-addams', name: 'The Addams Family (pinball)', genre: 'pinball', players: 4, decade: '1990s', year: 1992, pricePerPlay: 1.50, image: 'images/games/pinball-addams.svg' }
];
