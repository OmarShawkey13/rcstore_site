import { FALLBACK_MANIFEST } from './manifest.js';
import { EMBEDDED_LOCALES } from './embedded.js';
import { safeGetStorage, safeSetStorage, languagesManifest, setLanguagesManifest, currentLang, setCurrentLang, localeDict, setLocaleDict, getNestedTranslation } from './state.js';
import { renderAppInfo, renderFeatures, renderExperience, renderAppDescription, renderScreenshots, renderReviews, renderFAQ, renderLangGrid } from './renderers.js';
import { initObserver } from './observer.js';

// 5. Universal Localization Engine
export async function fetchManifest() {
    try {
        const res = await fetch('./locales/manifest.json');
        if (res.ok) {
            languagesManifest = await res.json();
            return;
        }
    } catch (e) {}
    languagesManifest = FALLBACK_MANIFEST;
}

export async function detectAndInitLanguage() {
    const saved = safeGetStorage('lang');
    if (saved) {
        currentLang = saved;
    } else {
        const browserLangs = navigator.languages || [navigator.language || 'en'];
        let matched = 'en';
        if (languagesManifest && languagesManifest.length) {
            for (const bl of browserLangs) {
                const code = bl.split('-')[0].toLowerCase();
                const match = languagesManifest.find(m => m.code === bl || m.code === code);
                if (match) {
                    matched = match.code;
                    break;
                }
            }
        }
        currentLang = matched;
    }
    await switchLanguage(currentLang, false);
}

export async function loadLocale(lang) {
    let loadedDict = null;
    try {
        const res = await fetch(`./locales/${lang}.json`);
        if (res.ok) {
            loadedDict = await res.json();
        }
    } catch (e) {}

    if (!loadedDict) {
        if (EMBEDDED_LOCALES[lang]) {
            loadedDict = EMBEDDED_LOCALES[lang];
        } else if (EMBEDDED_LOCALES[lang.toLowerCase()]) {
            loadedDict = EMBEDDED_LOCALES[lang.toLowerCase()];
        } else {
            loadedDict = EMBEDDED_LOCALES['en'];
        }
    }

    localeDict = loadedDict;
    currentLang = lang;

    const manifestToUse = (languagesManifest && languagesManifest.length) ? languagesManifest : FALLBACK_MANIFEST;
    let meta = manifestToUse.find(m => m.code === lang || m.code.toLowerCase() === lang.toLowerCase());
    if (!meta) {
        meta = FALLBACK_MANIFEST.find(m => m.code === lang || m.code.toLowerCase() === lang.toLowerCase());
    }
    const isRtl = meta ? (meta.dir === 'rtl') : (lang === 'ar' || lang === 'ur');

    document.documentElement.lang = lang;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    if (document.body) {
        if (isRtl) document.body.classList.add('rtl');
        else document.body.classList.remove('rtl');
    }

    const currentFlagEls = document.querySelectorAll('#currentLangFlag');
    const currentNameEls = document.querySelectorAll('#currentLangName');
    if (meta) {
        currentFlagEls.forEach(el => el.textContent = meta.flag);
        currentNameEls.forEach(el => el.textContent = meta.nativeName);
    }
}

export async function switchLanguage(lang, save = true) {
    try {
        await loadLocale(lang);
        if (save) safeSetStorage('lang', lang);

        const tasks = [
            applyTranslations,
            renderAppInfo,
            renderFeatures,
            renderExperience,
            renderAppDescription,
            renderScreenshots,
            renderReviews,
            renderFAQ,
            () => renderLangGrid(languagesManifest),
            initObserver
        ];

        for (const task of tasks) {
            try { task(); } catch (e) {}
        }
    } catch (e) {
        console.warn("Language switch warning:", e);
    }
};

// Safe DOM Translation Application
export function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translated = getNestedTranslation(key);
        if (!translated) return;

        const pulse = el.querySelector('.pulse');
        const chevron = el.querySelector('.chevron');
        const svg = el.querySelector('svg');

        if (pulse) {
            el.innerHTML = '<span class="pulse"></span> ' + escapeHtml(translated);
        } else if (chevron) {
            el.innerHTML = escapeHtml(translated) + ' <span class="chevron">▾</span>';
        } else if (svg) {
            el.innerHTML = svg.outerHTML + ' ' + escapeHtml(translated);
        } else {
            el.textContent = translated;
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        const translated = getNestedTranslation(key);
        if (translated) {
            el.setAttribute('placeholder', translated);
        }
    });
}

function renderLangGrid(list) {
    const grid = document.getElementById('langListGrid');
    if (!grid) return;
    
    const manifestToUse = (list && list.length) ? list : FALLBACK_MANIFEST;

    grid.innerHTML = manifestToUse.map(item => `
        <button class="lang-item-btn ${item.code === currentLang ? 'active' : ''}" onclick="selectLangFromModal('${item.code}')">
            <span class="lang-flag">${item.flag}</span>
            <span>${escapeHtml(item.nativeName)} <small style="opacity: 0.7;">(${escapeHtml(item.name)})</small></span>
        </button>
    `).join('');
}


export function escapeHtml(str) {
    if (!str) return '';
    return str.toString().replace(/&/g, '&amp;')
              .replace(/</g, '&lt;')
              .replace(/>/g, '&gt;')
              .replace(/"/g, '&quot;')
              .replace(/'/g, '&#039;');
}
