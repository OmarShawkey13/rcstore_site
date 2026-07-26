import { initThemeSystem, toggleTheme } from './modules/theme.js';
import { fetchManifest, detectAndInitLanguage, applyTranslations } from './modules/localization.js';
import { fetchAllData } from './modules/api.js';
import { renderAppInfo, renderFeatures, renderExperience, renderAppDescription, renderScreenshots, renderReviews, renderFAQ } from './modules/renderers.js';
import { initInteractivity } from './modules/interactivity.js';
import { initObserver } from './modules/observer.js';

// Attach things to window that index.html needs right away
window.toggleTheme = toggleTheme;

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

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}
