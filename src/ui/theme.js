import { safeGetStorage, safeSetStorage } from '../core/state.js';

// 4. Theme Management Engine
export function toggleTheme() {
    const isLight = document.documentElement.classList.contains('light-mode') || document.body?.classList.contains('light-mode');
    const newTheme = isLight ? 'dark' : 'light';
    applyTheme(newTheme);
    safeSetStorage('user_theme', newTheme);
};

export function applyTheme(theme) {
    const isLight = (theme === 'light');
    if (isLight) {
        document.documentElement.classList.add('light-mode');
        if (document.body) document.body.classList.add('light-mode');
    } else {
        document.documentElement.classList.remove('light-mode');
        if (document.body) document.body.classList.remove('light-mode');
    }

    const iconEls = document.querySelectorAll('#themeIcon');
    iconEls.forEach(el => {
        el.textContent = isLight ? '🌙' : '☀️';
    });

    const themeToggleBtns = document.querySelectorAll('#themeToggle, .theme-toggle-btn');
    themeToggleBtns.forEach(btn => {
        btn.setAttribute('aria-label', isLight ? 'Switch to Dark Mode' : 'Switch to Light Mode');
        btn.setAttribute('title', isLight ? 'Switch to Dark Mode' : 'Switch to Light Mode');
    });
}

export function initThemeSystem() {
    const savedTheme = safeGetStorage('user_theme');
    const systemDarkMedia = window.matchMedia('(prefers-color-scheme: dark)');
    
    let effectiveTheme = savedTheme ? savedTheme : (systemDarkMedia.matches ? 'dark' : 'light');
    applyTheme(effectiveTheme);

    systemDarkMedia.addEventListener('change', (e) => {
        if (!safeGetStorage('user_theme')) {
            applyTheme(e.matches ? 'dark' : 'light');
        }
    });

}
