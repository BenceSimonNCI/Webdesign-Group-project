/* =============================================================
   js/data/games.js - the list of arcade machines
   Owner: Member 2

   This is the ONE place the games are stored. The Home page,
   the Games page and the Booking form all read from GAMES.
   To add a machine, copy a line and change the values.
   (These 8 are starters - aim for 20+.)

   Each game needs:
     id           short unique name, no spaces (used in links:
                  booking.html?game=pac-man)
     name         the title shown on the card
     genre        fighting, shooter, racing, maze, platform,
                  puzzle, sports, rhythm or pinball
     players      how many can play at once (a number)
     decade       '1980s', '1990s', '2000s', '2010s' or '2020s'
     year         release year (used for "newest" sorting)
     pricePerPlay euros per play (a number, e.g. 1.50)
     image        picture file in images/games/
   ============================================================= */

const GAMES = [
  { id: 'pac-man',        name: 'Pac-Man',              genre: 'maze',     players: 2, decade: '1980s', year: 1980, pricePerPlay: 1.00, image: 'images/games/pac-man.svg' },
  { id: 'galaga',         name: 'Galaga',               genre: 'shooter',  players: 2, decade: '1980s', year: 1981, pricePerPlay: 1.00, image: 'images/games/galaga.svg' },
  { id: 'street-fighter', name: 'Street Fighter II',    genre: 'fighting', players: 2, decade: '1990s', year: 1991, pricePerPlay: 1.00, image: 'images/games/street-fighter.svg' },
  { id: 'mortal-kombat',  name: 'Mortal Kombat II',     genre: 'fighting', players: 2, decade: '1990s', year: 1993, pricePerPlay: 1.00, image: 'images/games/mortal-kombat.svg' },
  { id: 'outrun',         name: 'Out Run (sit-down)',   genre: 'racing',   players: 1, decade: '1980s', year: 1986, pricePerPlay: 1.50, image: 'images/games/outrun.svg' },
  { id: 'ddr',            name: 'Dance Dance Revolution', genre: 'rhythm', players: 2, decade: '1990s', year: 1998, pricePerPlay: 2.00, image: 'images/games/ddr.svg' },
  { id: 'time-crisis',    name: 'Time Crisis II',       genre: 'shooter',  players: 2, decade: '1990s', year: 1997, pricePerPlay: 1.50, image: 'images/games/time-crisis.svg' },
  { id: 'pinball-addams', name: 'The Addams Family (pinball)', genre: 'pinball', players: 4, decade: '1990s', year: 1992, pricePerPlay: 1.50, image: 'images/games/pinball-addams.svg' }
];
