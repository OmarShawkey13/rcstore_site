// =============================================================================
// RCKeyBoard — Main Application Script
// =============================================================================

// DOM Elements
const elements = document.querySelectorAll('.reveal');
const themeToggle = document.querySelector('.theme-toggle');
const toggleIcon = document.querySelector('.toggle-icon');
const toggleLabel = document.querySelector('.toggle-label');
const languageToggle = document.querySelector('.language-toggle');
const languageMenu = document.querySelector('.language-menu');
const languageItems = document.querySelectorAll('.language-item');
const languageLabel = document.querySelector('.language-label');
const translatable = document.querySelectorAll('[data-i18n]');
const smoothLinks = document.querySelectorAll('a[href^="#"]');
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');
const topbar = document.querySelector('.topbar');

// Settings
const defaultLanguage = 'en';
const supportedLanguages = ['en', 'ar', 'es', 'fr', 'de', 'ru', 'pt', 'hi', 'tr', 'ja', 'zh', 'id', 'vi', 'nl', 'th'];
const translations = {};

// =============================================================================
// 1. Translation System (i18n)
// =============================================================================

const loadTranslations = async (langCode) => {
  if (translations[langCode]) {
    return translations[langCode];
  }

  try {
    const response = await fetch(`src/translate/${langCode}.json`);
    if (!response.ok) {
      throw new Error(`${langCode} translation not found`);
    }
    const data = await response.json();
    translations[langCode] = data;
    return data;
  } catch (error) {
    console.warn(error);
    return langCode !== 'en' ? loadTranslations('en') : {};
  }
};

const getLanguageLabel = (langCode) => {
  const item = document.querySelector(`.language-item[data-lang="${langCode}"]`);
  return item?.textContent || langCode.toUpperCase();
};

const translatePage = async (langCode, label = null) => {
  const lang = supportedLanguages.includes(langCode) ? langCode : defaultLanguage;

  if (languageLabel) {
    languageLabel.textContent = label || getLanguageLabel(lang);
  }
  localStorage.setItem('rc-language', lang);

  languageMenu?.classList.remove('open');
  languageMenu?.setAttribute('aria-hidden', 'true');

  await loadTranslations(defaultLanguage);
  const currentData = await loadTranslations(lang);

  translatable.forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (!key) return;

    const text = currentData[key] || translations[defaultLanguage]?.[key] || '';

    if (text) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = text;
      } else {
        el.textContent = text;
      }
    }
  });
};

// =============================================================================
// 2. Theme System
// =============================================================================

const applyTheme = (isLight) => {
  document.body.classList.toggle('light-mode', isLight);
  if (toggleIcon) toggleIcon.textContent = isLight ? '🌙' : '☀️';
  if (toggleLabel) toggleLabel.textContent = isLight ? 'Dark' : 'Light';
  localStorage.setItem('rc-theme', isLight ? 'light' : 'dark');
};

// =============================================================================
// 3. Initialization
// =============================================================================

const savedTheme = localStorage.getItem('rc-theme');
const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
applyTheme(savedTheme ? savedTheme === 'light' : prefersLight);

const savedLanguage = localStorage.getItem('rc-language') || defaultLanguage;
translatePage(savedLanguage);

// =============================================================================
// 4. Event Listeners
// =============================================================================

// Theme toggle
themeToggle?.addEventListener('click', () => {
  const isLight = !document.body.classList.contains('light-mode');
  applyTheme(isLight);
});

// Language toggle
languageToggle?.addEventListener('click', (e) => {
  e.stopPropagation();
  const isOpen = languageMenu?.classList.toggle('open');
  languageMenu?.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
});

// Language items
languageItems.forEach((item) => {
  item.addEventListener('click', () => {
    const langCode = item.getAttribute('data-lang') || 'en';
    translatePage(langCode, item.textContent || langCode.toUpperCase());
  });
});

// Close language menu on outside click
window.addEventListener('click', (event) => {
  if (languageToggle && languageMenu) {
    if (!event.composedPath().includes(languageToggle) && !event.composedPath().includes(languageMenu)) {
      languageMenu.classList.remove('open');
      languageMenu.setAttribute('aria-hidden', 'true');
    }
  }
});

// Smooth scroll for anchor links
smoothLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const href = link.getAttribute('href');
    if (!href || href === '#') return;
    const target = document.querySelector(href);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Mobile menu toggle
mobileMenuToggle?.addEventListener('click', () => {
  const isOpen = navLinks?.classList.toggle('mobile-open');
  mobileMenuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

  // Animate hamburger to X
  const spans = mobileMenuToggle.querySelectorAll('span');
  if (isOpen) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  }
});

// =============================================================================
// 5. Scroll Animations (Intersection Observer)
// =============================================================================

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

elements.forEach((el, index) => {
  el.style.transitionDelay = `${Math.min(index * 0.06, 0.35)}s`;
  observer.observe(el);
});

// =============================================================================
// 6. Navbar scroll effect
// =============================================================================

let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;

  if (topbar) {
    if (currentScroll > 100) {
      topbar.style.boxShadow = 'var(--shadow-md)';
    } else {
      topbar.style.boxShadow = '';
    }
  }

  lastScroll = currentScroll;
}, { passive: true });