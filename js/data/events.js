/* =============================================================
   js/data/events.js - the list of events
   Owner: Member 3

   This is the ONE place the events are stored. The Home page,
   the Events page and the Booking form all read from EVENTS.
   To add an event, copy a line and change the values.

   Each event needs:
     id        short unique name, no spaces (used in links:
               booking.html?event=retro-night-dec)
     title     the name shown on the card
     date      'YYYY-MM-DD'  e.g. '2026-12-05'
     time      'HH:MM' start time, 24h clock
     category  tournament, retro, family or private
     price     entry price in euros (0 = free)
     capacity  maximum number of people
   ============================================================= */

const EVENTS = [
  { id: 'sf2-tournament',  title: 'Street Fighter II Tournament',  date: '2026-12-05', time: '19:00', category: 'tournament', price: 10, capacity: 32 },
  { id: 'retro-night-dec', title: '80s Retro Night',               date: '2026-12-12', time: '20:00', category: 'retro',      price: 15, capacity: 60 },
  { id: 'family-sun',      title: 'Family Sunday - half price',    date: '2026-12-14', time: '12:00', category: 'family',     price: 5,  capacity: 40 },
  { id: 'pinball-league',  title: 'Pinball League - Round 3',      date: '2026-12-19', time: '18:30', category: 'tournament', price: 8,  capacity: 24 },
  { id: 'nye-lockin',      title: "New Year's Eve Lock-in",      date: '2026-12-31', time: '21:00', category: 'private',    price: 40, capacity: 80 },
  { id: 'ddr-battle',      title: 'DDR Battle Night',              date: '2027-01-09', time: '19:00', category: 'tournament', price: 10, capacity: 32 }
];
