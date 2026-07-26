import { initThemeSystem, toggleTheme } from './ui/theme.js';
import { fetchManifest, detectAndInitLanguage, applyTranslations } from './i18n/localization.js';
import { fetchAllData } from './services/api.js';
import { renderAppInfo, renderFeatures, renderExperience, renderAppDescription, renderScreenshots, renderReviews, renderFAQ } from './ui/renderers.js';
import { initInteractivity } from './ui/interactivity.js';
import { initObserver } from './ui/observer.js';

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
