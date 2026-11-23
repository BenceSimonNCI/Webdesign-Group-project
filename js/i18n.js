/* =============================================================
   i18n.js - language switching ("i18n" = internationalisation)
   Owner: Member 1 (site shell). Adapted from Bence's CA1.

   >>> YOU DON'T NEED TO READ THIS FILE TO USE IT. <<<
   As a page owner you only need three things:

   1) In HTML, give translatable text a key:
        <h1 data-i18n="games.title">The cabinets</h1>
      Keep the English text inside too (it shows before JS runs).
      Other attributes: data-i18n-placeholder, data-i18n-alt,
      data-i18n-aria-label, data-i18n-content (meta tags).

   2) Put the text for that key in YOUR file js/lang/<page>.js:
        en: { title: 'The cabinets' },
        it: { title: 'I cabinati' }
      (games.title -> file games.js, key "title")

   3) In JS, for text you build yourself:
        ARC_I18N.t('games.noResults')
        ARC_I18N.t('games.count', { count: 5 })  -> fills {count}
      and redraw it when the language changes:
        ARC_I18N.onChange(myRenderFunction);

   A missing translation falls back to English, so nothing ever
   goes blank.
   ============================================================= */

const ARC_I18N = (function () {

  /* ---------------- Settings ---------------- */

  // Languages in the order they appear in the dropdown.
  const SUPPORTED_LANGUAGES = ['en', 'it', 'hu', 'pl', 'fr'];
  const DEFAULT_LANGUAGE = 'en';
  const STORAGE_KEY = 'arc-lang'; // name used in localStorage

  // All translations end up in here, grouped by page:
  //   translations.games.en.title = 'The cabinets'
  const translations = {};

  // Functions the pages asked us to run when the language changes.
  const changeListeners = [];

  let currentLanguage = DEFAULT_LANGUAGE;


  /* ---------------- Registering translations ----------------
     Called once by every file in js/lang/.
     page = 'games', textsByLanguage = { en: {...}, it: {...} }   */
  function addTranslations(page, textsByLanguage) {
    translations[page] = textsByLanguage;
  }


  /* ---------------- Choosing the starting language ----------------
     1st choice: ?lang=it in the address bar
     2nd choice: what the visitor picked last time (localStorage)
     3rd choice: the browser's own language
     otherwise:  English                                          */
  function detectLanguage() {
    const fromAddressBar = new URLSearchParams(window.location.search).get('lang');
    if (SUPPORTED_LANGUAGES.includes(fromAddressBar)) {
      localStorage.setItem(STORAGE_KEY, fromAddressBar);
      return fromAddressBar;
    }

    const savedChoice = localStorage.getItem(STORAGE_KEY);
    if (SUPPORTED_LANGUAGES.includes(savedChoice)) {
      return savedChoice;
    }

    // e.g. "hu-HU" -> "hu"
    const browserLanguage = (navigator.language || '').toLowerCase().split('-')[0];
    if (SUPPORTED_LANGUAGES.includes(browserLanguage)) {
      return browserLanguage;
    }

    return DEFAULT_LANGUAGE;
  }


  /* ---------------- Finding one phrase ----------------
     'games.card.price' in Italian ->
       translations['games']['it']['card']['price']                */
  function findText(language, key) {
    const parts = key.split('.');     // ['games', 'card', 'price']
    const page = parts[0];            // 'games'

    if (translations[page] === undefined || translations[page][language] === undefined) {
      return undefined;
    }

    let value = translations[page][language];
    for (let i = 1; i < parts.length; i++) {
      if (value === undefined || value === null) {
        return undefined;
      }
      value = value[parts[i]];
    }
    return value;
  }


  /* ---------------- t() = "translate" ----------------
     values fills in {placeholders}: t('games.count', { count: 5 })
     {year} always works (used in the footer copyright).          */
  function t(key, values) {
    let text = findText(currentLanguage, key);

    if (typeof text !== 'string') {
      text = findText(DEFAULT_LANGUAGE, key); // fall back to English
    }
    if (typeof text !== 'string') {
      return key; // still nothing: show the key so we spot it
    }

    const fillIns = Object.assign({ year: new Date().getFullYear() }, values);
    for (const name in fillIns) {
      text = text.split('{' + name + '}').join(fillIns[name]);
    }
    return text;
  }


  /* ---------------- Translating the whole page ----------------
     Finds every element with a data-i18n... attribute and swaps
     its text (or attribute) for the current language.           */
  const ATTRIBUTE_MAP = {
    'data-i18n-placeholder': 'placeholder',
    'data-i18n-aria-label': 'aria-label',
    'data-i18n-alt': 'alt',
    'data-i18n-content': 'content'
  };

  function translatePage() {
    for (const element of document.querySelectorAll('[data-i18n]')) {
      element.textContent = t(element.getAttribute('data-i18n'));
    }

    for (const dataAttribute in ATTRIBUTE_MAP) {
      const realAttribute = ATTRIBUTE_MAP[dataAttribute];
      for (const element of document.querySelectorAll('[' + dataAttribute + ']')) {
        element.setAttribute(realAttribute, t(element.getAttribute(dataAttribute)));
      }
    }
  }


  /* ---------------- Switching language ---------------- */
  function setLanguage(language) {
    if (!SUPPORTED_LANGUAGES.includes(language)) {
      return;
    }
    currentLanguage = language;
    localStorage.setItem(STORAGE_KEY, language);

    // <html lang="it"> - screen readers use this to pick a voice.
    document.documentElement.lang = language;

    translatePage();
    document.getElementById('langSelect').value = language;

    // Let each page redraw the content it built with JavaScript.
    for (const listener of changeListeners) {
      listener();
    }
  }

  function onChange(callback) {
    changeListeners.push(callback);
  }


  /* ---------------- The dropdown in the navbar ---------------- */
  function buildLanguageDropdown() {
    const dropdown = document.getElementById('langSelect');
    if (dropdown === null) {
      return;
    }

    let options = '';
    for (const code of SUPPORTED_LANGUAGES) {
      // Each language is shown in its own language ("Magyar", not "Hungarian").
      const name = findText(code, 'common.meta.langName') || code;
      options += `<option value="${code}">${name}</option>`;
    }
    dropdown.innerHTML = options;
    dropdown.value = currentLanguage;

    dropdown.addEventListener('change', function () {
      setLanguage(dropdown.value);
    });
  }


  /* ---------------- Start-up ---------------- */
  currentLanguage = detectLanguage();
  document.documentElement.lang = currentLanguage;

  document.addEventListener('DOMContentLoaded', function () {
    buildLanguageDropdown();
    translatePage();
  });


  /* ---------------- What other files can use ---------------- */
  return {
    t: t,
    onChange: onChange,
    setLanguage: setLanguage,
    addTranslations: addTranslations,
    // ARC_I18N.locale -> e.g. 'it-IT', for formatting dates
    get locale() {
      return t('common.meta.locale');
    }
  };
})();
