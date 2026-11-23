/* =============================================================
   i18n.js - language switching engine
   Owner: Member 1 (site shell). Adapted from Bence's CA1
   (Emerald Escapes, js/i18n.js) and extended so each page owner
   can ship their own translation file without merge conflicts.

   HOW IT WORKS
   * Every language pack lives in js/lang/<page>.js and calls
       ARC_I18N.addTranslations('<ns>', { en: {...}, it: {...}, ... })
     where <ns> is the page namespace (common, home, games,
     events, booking, about). Owner of the page = owner of its
     lang file, so nobody edits the same file.
   * In HTML, mark text with data-i18n="ns.key". Dotted path,
     first part is the namespace:
       data-i18n="key"             -> element textContent
       data-i18n-html="key"        -> element innerHTML
       data-i18n-placeholder/-aria-label/-alt/-content -> attrs
   * In JS, call ARC_I18N.t('ns.key', { name: value }) and
     re-render inside ARC_I18N.onChange(function () {...}).
   * Missing key -> falls back to English -> falls back to the
     key text, so a missing phrase can never blank the page.

   References: see CA1 i18n.js (same approach, same sources).
   ============================================================= */

window.ARC_I18N = (function () {
  'use strict';

  var STORAGE_KEY = 'arc-lang';
  var FALLBACK = 'en';

  // Order here = order shown in the selector.
  // Decided by the team: en, it, hu, pl, fr.
  var SUPPORTED = ['en', 'it', 'hu', 'pl', 'fr'];

  var current = FALLBACK;
  var listeners = [];

  // { 'common': { en: {...}, it: {...} }, 'games': {...}, ... }
  window.ARC_TRANSLATIONS = window.ARC_TRANSLATIONS || {};
  var dicts = window.ARC_TRANSLATIONS;

  /**
   * Merge one page's translations. Called by every js/lang file.
   *   addTranslations('games', { en: {...}, it: {...} })
   */
  function addTranslations(namespace, byLang) {
    dicts[namespace] = dicts[namespace] || {};
    Object.keys(byLang).forEach(function (lang) {
      dicts[namespace][lang] = byLang[lang];
    });
  }

  function detectLanguage() {
    // ?lang=it wins and is remembered (shareable links).
    var requested = new URLSearchParams(window.location.search).get('lang');
    if (SUPPORTED.indexOf(requested) !== -1) {
      localStorage.setItem(STORAGE_KEY, requested);
      return requested;
    }
    var saved = localStorage.getItem(STORAGE_KEY);
    if (SUPPORTED.indexOf(saved) !== -1) {
      return saved;
    }
    var preferred = navigator.languages || [navigator.language || ''];
    for (var i = 0; i < preferred.length; i++) {
      var code = String(preferred[i]).toLowerCase().split('-')[0];
      if (SUPPORTED.indexOf(code) !== -1) {
        return code;
      }
    }
    return FALLBACK;
  }

  function lookup(source, key) {
    return key.split('.').reduce(function (level, part) {
      return level && typeof level === 'object' ? level[part] : undefined;
    }, source);
  }

  function interpolate(text, values) {
    var all = { year: new Date().getFullYear() };
    Object.keys(values || {}).forEach(function (name) {
      all[name] = values[name];
    });
    return text.replace(/\{(\w+)\}/g, function (whole, name) {
      return all[name] !== undefined ? all[name] : whole;
    });
  }

  function lookupKey(lang, key) {
    var parts = key.split('.');
    var ns = dicts[parts[0]] ? parts[0] : 'common';
    var path = dicts[parts[0]] ? parts.slice(1).join('.') : key;
    var pack = (dicts[ns] || {})[lang];
    return pack ? lookup(pack, path) : undefined;
  }

  /**
   * Translate 'ns.key' in the current language.
   * Falls back to English, then to the key itself.
   */
  function t(key, values) {
    var text = lookupKey(current, key);
    if (typeof text !== 'string') {
      text = lookupKey(FALLBACK, key);
    }
    if (typeof text !== 'string') {
      return key;
    }
    return interpolate(text, values);
  }

  var ATTRIBUTE_TARGETS = {
    'data-i18n-placeholder': 'placeholder',
    'data-i18n-aria-label': 'aria-label',
    'data-i18n-alt': 'alt',
    'data-i18n-content': 'content',
    'data-i18n-title-attr': 'title'
  };

  function apply(root) {
    var scope = root || document;

    scope.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.textContent = t(el.getAttribute('data-i18n'));
    });
    scope.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      el.innerHTML = t(el.getAttribute('data-i18n-html'));
    });
    Object.keys(ATTRIBUTE_TARGETS).forEach(function (attr) {
      scope.querySelectorAll('[' + attr + ']').forEach(function (el) {
        el.setAttribute(ATTRIBUTE_TARGETS[attr], t(el.getAttribute(attr)));
      });
    });
  }

  function updateDocumentLanguage() {
    document.documentElement.setAttribute('lang', current);
  }

  function setLanguage(language, options) {
    if (SUPPORTED.indexOf(language) === -1) {
      return;
    }
    current = language;
    if (!options || options.remember !== false) {
      localStorage.setItem(STORAGE_KEY, language);
    }
    updateDocumentLanguage();
    apply();
    syncSelector();
    listeners.forEach(function (cb) { cb(current); });
  }

  /** Re-render hook: pages register a callback to redraw
      JS-built content when the language changes. */
  function onChange(callback) {
    listeners.push(callback);
  }

  function syncSelector() {
    var sel = document.getElementById('langSelect');
    if (sel) { sel.value = current; }
  }

  function buildSelector() {
    var sel = document.getElementById('langSelect');
    if (!sel) { return; }
    // Each language named in its own language.
    sel.innerHTML = SUPPORTED.map(function (code) {
      var name = (dicts.common && dicts.common[code]
                  && dicts.common[code].meta
                  && dicts.common[code].meta.langName) || code;
      return '<option value="' + code + '">' + name + '</option>';
    }).join('');
    sel.value = current;
    sel.addEventListener('change', function () {
      setLanguage(sel.value);
    });
  }

  current = detectLanguage();
  updateDocumentLanguage();

  document.addEventListener('DOMContentLoaded', function () {
    buildSelector();
    apply();
  });

  return {
    t: t,
    apply: apply,
    onChange: onChange,
    setLanguage: setLanguage,
    addTranslations: addTranslations,
    supported: SUPPORTED.slice(),
    get language() { return current; },
    get locale() { return t('common.meta.locale'); }
  };
})();
