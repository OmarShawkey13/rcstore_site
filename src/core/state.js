import { FALLBACK_MANIFEST } from '../i18n/manifest.js';
import { EMBEDDED_LOCALES } from '../i18n/embedded.js';

// Application Global State
export let appData = { info: null, features: [], experience: [], screenshots: [], reviews: [], faq: [] };
export let languagesManifest = FALLBACK_MANIFEST;
export let currentLang = 'en';
export let localeDict = EMBEDDED_LOCALES['en'];

export let currentReviewRatingFilter = 'ALL';
export let currentReviewPage = 0;
export const REVIEWS_PER_PAGE = 3;
export let currentModalImageIdx = 0;

// Safe Storage Helpers
export function safeGetStorage(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
}
export function safeSetStorage(key, value) {
    try { localStorage.setItem(key, value); } catch (e) {}
}

// Universal Nested Property Retrieval
export function getNestedTranslation(key) {
    if (!key) return null;
    const parts = key.split('.');
    let curr = localeDict;
    for (const p of parts) {
        if (curr && curr[p] !== undefined) {
            curr = curr[p];
        } else {
            curr = null;
            break;
        }
    }
    if (curr) return curr;

    // Fallback to English dictionary if key missing in current language
    let fallbackCurr = EMBEDDED_LOCALES['en'];
    for (const p of parts) {
        if (fallbackCurr && fallbackCurr[p] !== undefined) {
            fallbackCurr = fallbackCurr[p];
        } else {
            return null;
        }
    }
    return fallbackCurr;
}


export function setAppData(data) { appData = data; }
export function setLanguagesManifest(man) { languagesManifest = man; }
export function setCurrentLang(lang) { currentLang = lang; }
export function setLocaleDict(dict) { localeDict = dict; }
export function setCurrentReviewRatingFilter(rating) { currentReviewRatingFilter = rating; }
export function setCurrentReviewPage(page) { currentReviewPage = page; }
export function setCurrentModalImageIdx(idx) { currentModalImageIdx = idx; }
