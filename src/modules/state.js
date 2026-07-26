import { FALLBACK_MANIFEST } from './manifest.js';
import { EMBEDDED_LOCALES } from './embedded.js';

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

// Global Window Event Handlers
window.openLangModal = function() {
    const list = (languagesManifest && languagesManifest.length) ? languagesManifest : FALLBACK_MANIFEST;
    renderLangGrid(list);
    const modal = document.getElementById('langModal');
    if (modal) {
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
};

window.closeLangModal = function() {
    const modal = document.getElementById('langModal');
    if (modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    }
};

window.selectLangFromModal = function(code) {
    if (window.switchLanguage) window.switchLanguage(code, true);
    if (window.closeLangModal) window.closeLangModal();
};

window.filterLanguages = function(query) {
    const list = (languagesManifest && languagesManifest.length) ? languagesManifest : FALLBACK_MANIFEST;
    const q = (query || '').toLowerCase().trim();
    const filtered = list.filter(item => 
        item.name.toLowerCase().includes(q) || 
        item.nativeName.toLowerCase().includes(q) || 
        item.code.toLowerCase().includes(q)
    );
    renderLangGrid(filtered);
};

window.filterFAQ = function(query) {
    const q = (query || '').toLowerCase().trim();
    document.querySelectorAll('.faq-item').forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(q) ? 'block' : 'none';
    });
};

window.filterReviews = function(rating) {
    currentReviewRatingFilter = rating;
    currentReviewPage = 0;
    document.querySelectorAll('.filter-btn').forEach(btn => {
        if (btn.getAttribute('data-rating') === rating) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    renderReviews();
};

window.prevReviewPage = function() {
    if (currentReviewPage > 0) {
        currentReviewPage--;
        renderReviews();
    }
};

window.nextReviewPage = function() {
    currentReviewPage++;
    renderReviews();
};

window.toggleReadMore = function(id) {
    const el = document.getElementById('rev-text-' + id);
    if (el) el.classList.toggle('truncated');
};

window.openFullscreenModal = function(idx) {
    const list = (appData.screenshots && appData.screenshots.length) 
        ? appData.screenshots 
        : (appData.info?.screenshots || []);
    if (!list || !list.length) return;
    currentModalImageIdx = idx;
    const item = list[currentModalImageIdx];
    const imgUrl = item.localUrl || item.remoteUrl || item;
    const modal = document.getElementById('screenshotModal');
    const modalImg = document.getElementById('modalImg');
    if (modalImg) modalImg.src = imgUrl;
    if (modal) {
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
};

window.closeFullscreenModal = function() {
    const modal = document.getElementById('screenshotModal');
    if (modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    }
};

window.navigateModal = function(dir) {
    const list = (appData.screenshots && appData.screenshots.length) 
        ? appData.screenshots 
        : (appData.info?.screenshots || []);
    if (!list || !list.length) return;
    currentModalImageIdx = (currentModalImageIdx + dir + list.length) % list.length;
    const item = list[currentModalImageIdx];
    const imgUrl = item.localUrl || item.remoteUrl || item;
    const modalImg = document.getElementById('modalImg');
    if (modalImg) modalImg.src = imgUrl;
};

// Application Bootstrapping
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

async function initApp() {
    try { initThemeSystem(); } catch (e) {}
    try { await fetchManifest(); } catch (e) {}
    try { await detectAndInitLanguage(); } catch (e) {}

    try {
        await fetchAllData();
        renderAppInfo();
        renderFeatures();
        renderExperience();
        renderAppDescription();
        renderScreenshots();
        renderReviews();
        renderFAQ();
    } catch (e) {
        console.warn("Data render fallback executed:", e);
    }

    try {
        applyTranslations();
        initInteractivity();
        initObserver();
    } catch (e) {
        console.warn("Interactivity init warning:", e);
    }
}



export function setAppData(data) { appData = data; }
export function setLanguagesManifest(man) { languagesManifest = man; }
export function setCurrentLang(lang) { currentLang = lang; }
export function setLocaleDict(dict) { localeDict = dict; }
export function setCurrentReviewRatingFilter(rating) { currentReviewRatingFilter = rating; }
export function setCurrentReviewPage(page) { currentReviewPage = page; }
export function setCurrentModalImageIdx(idx) { currentModalImageIdx = idx; }
