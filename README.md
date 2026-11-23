# Neon Arcade - CA2 Group Project

Retro-neon arcade website for the Web Design & Client Side Scripting
group project (60%). See `CA2_Group_Project_Plan.docx` for the full
work split.

Live site: https://bencesimonnci.github.io/Webdesign-Group-project/

---

## Start here (new to HTML/JS? read this first)

### 1. Which files are mine?

Each person owns **one HTML page, one CSS file, one JS file and one
translation file**. Only edit your own files, which means git never clashes.

| Page    | HTML           | CSS               | JS               | Text / translations   | Owner    |
|---------|----------------|-------------------|------------------|-----------------------|----------|
| Home    | `index.html`   | `css/home.css`    | `js/home.js`     | `js/lang/home.js`     | Member 1 |
| About   | `about.html`   | `css/about.css`   | `js/about.js`    | `js/lang/home.js`     | Member 1 |
| Games   | `games.html`   | `css/games.css`   | `js/games.js`    | `js/lang/games.js`    | Member 2 |
| Events  | `events.html`  | `css/events.css`  | `js/events.js`   | `js/lang/events.js`   | Member 3 |
| Booking | `booking.html` | `css/booking.css` | `js/booking.js`  | `js/lang/booking.js`  | Member 4 |

Shared files (owned by Member 1, ask before changing): the navbar and
footer in every page, `css/base.css`, `js/main.js`, `js/i18n.js`,
`js/lang/common.js`.

Data lists: `js/data/games.js` (Member 2) and `js/data/events.js`
(Member 3).

### 2. How to see the site

Just double-click `index.html`. No installs or build step needed.
After saving a change, refresh the browser (Ctrl+F5 if it looks stale).

### 3. How the pieces fit together

```
games.html            the page structure (headings, empty grid, buttons)
  ├─ css/base.css     shared look: colours, buttons, cards, navbar
  ├─ css/games.css    styles only the Games page needs
  ├─ js/data/games.js the list of games (GAMES)
  ├─ js/lang/games.js the page's text in every language
  └─ js/games.js      reads GAMES, builds the cards, makes filters work
```

The JS files at the bottom of each HTML page load **in order**. A file
can only use things from files above it. The order is already set up,
so leave it as it is.

### 4. Your JS file already has a working example

Every page JS file starts with a comment listing **DONE** (working
starter code) and **TODO** (your job). Each one has one finished
example to copy:

- **Games**: the search box works. Copy it for the genre, players and
  decade dropdowns.
- **Events**: the event list and "Book" buttons work. Next step is
  building the calendar.
- **Booking**: the Name field is fully validated. Copy `checkName()`
  for each other field.

### 5. Adding text to a page (and making it translatable)

**Step 1:** in your HTML, give the text a key with `data-i18n`.
Keep the English text in the HTML as well:

```html
<h2 data-i18n="games.popular">Most popular</h2>
```

**Step 2:** add that key to your `js/lang/<page>.js` under `en`:

```js
en: {
  popular: 'Most popular',
  ...
}
```

That's it. The language dropdown now works for it, and other
languages can be added later (until then it shows English).

**Text made in JavaScript** (cards, error messages) uses
`ARC_I18N.t()` instead:

```js
const message = ARC_I18N.t('games.noResults');
const count   = ARC_I18N.t('games.count', { count: 5 }); // fills in {count}
```

### 6. Styling rules

- Our class names start with `arc-` (e.g. `arc-card`) so they
  never clash with Bootstrap's.
- Use the colour variables from the top of `css/base.css`, e.g.
  `color: var(--arc-neon);`. Never type colours like `#00f0ff`.
- No `style="..."` in the HTML (the brief forbids inline styles).
- Bootstrap classes like `row`, `col-md-6` and `mt-3` are fine to use
  for layout and spacing.

### 7. Git cheat-sheet

First time only:
```
git clone https://github.com/BenceSimonNCI/Webdesign-Group-project.git
cd Webdesign-Group-project
git checkout -b feature/games          # your own branch (use your page name)
```

Every time you work:
```
git pull origin main                   # get everyone else's latest work
# ... edit your files ...
git add .
git commit -m "Games: add genre filter"
git push -u origin feature/games
```

Then on GitHub, open a **Pull Request** into `main`. Small, clearly
named commits are good. They are our evidence of who did what for
the report.

---

## Team decisions

- Plain JavaScript, no jQuery.
- Languages: en, it, hu, pl, fr (dropdown in the navbar).
- Style: retro neon. The scanline "CRT" effect comes from the
  `arc-crt` class on `<body>` (see `css/base.css`).
- Links between pages: `games.html?genre=racing`,
  `booking.html?game=<id>`, `booking.html?event=<id>`.
- Hosting: GitHub Pages (updates automatically when `main` changes).
