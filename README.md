# Neon Arcade - CA2 Group Project

Retro-neon arcade website for the Web Design & Client Side Scripting
group project (60%). See `CA2_Group_Project_Plan.docx` for the full
work split.

## Pages & owners

| Page | File | Owner |
|------|------|-------|
| Home | index.html | Member 1 |
| About | about.html | Member 1 |
| Games | games.html | Member 2 |
| Events | events.html | Member 3 |
| Booking | booking.html | Member 4 |

Shared shell (navbar, footer, `css/base.css`, `js/i18n.js`,
`js/main.js`): Member 1. Talk to them before editing shared files.

## Conventions

- Plain JavaScript (team decision - no jQuery).
- Our classes are prefixed `arc-`; colours only via the CSS
  variables in `css/base.css`. No inline styles.
- One CSS file per page plus `base.css`. One JS file per page.
- Translations: each page owner edits `js/lang/<page>.js`
  (calls `ARC_I18N.addTranslations`). Mark text in HTML with
  `data-i18n="<ns>.<key>"`; in JS use `ARC_I18N.t()` and re-render
  inside `ARC_I18N.onChange()`. Missing keys fall back to English.
- Languages: en, it, hu, pl, fr (selector in the navbar).
- Data contracts: `js/data/games.js` and `js/data/events.js`
  (documented at the top of each file).
- Cross-page links: `games.html?genre=`, `booking.html?game=<id>`,
  `booking.html?event=<id>`.
- Git: one branch per person (`feature/games`, ...), merge by PR.
  Version history is our contribution evidence.
- Body has class `arc-crt` = retro scanline overlay
  (see `css/base.css` to tweak/disable).

## Run

No build step - open `index.html` in a browser. Bootstrap is in
`vendor/` so everything works offline. Deploy target: GitHub Pages.
