// استدعاء العناصر
const elements = document.querySelectorAll('.reveal');
const themeToggle = document.querySelector('.theme-toggle');
const toggleIcon = document.querySelector('.toggle-icon');
const toggleLabel = document.querySelector('.toggle-label');
const languageToggle = document.querySelector('.language-toggle');
const languageMenu = document.querySelector('.language-menu');
const languageItems = document.querySelectorAll('.language-item'); // رجعناها تاني لتجنب أي مشاكل في الـ HTML
const languageLabel = document.querySelector('.language-label');
const translatable = document.querySelectorAll('[data-i18n]');
const smoothLinks = document.querySelectorAll('a[href^="#"]');

// الإعدادات والمتغيرات
const defaultLanguage = 'en';
const supportedLanguages = ['en', 'ar', 'es', 'fr', 'de', 'ru', 'pt', 'hi', 'tr', 'ja', 'zh', 'id', 'vi', 'nl', 'th'];
const translations = {}; // استخدام Cache ككائن ثابت

// 1. وظائف الترجمة (i18n)
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
  
  // تحديث واجهة المستخدم
  if (languageLabel) {
    languageLabel.textContent = label || getLanguageLabel(lang);
  }
  localStorage.setItem('rc-language', lang);
  
  // إغلاق القائمة
  languageMenu?.classList.remove('open');
  languageMenu?.setAttribute('aria-hidden', 'true');

  // تحميل الترجمات (تم إعادتها للتسلسل لتجنب تكرار الـ Fetch لنفس اللغة)
  await loadTranslations(defaultLanguage);
  const currentData = await loadTranslations(lang);

  // تطبيق الترجمة
  translatable.forEach((el) => {
    const key = el.getAttribute('data-i18n'); // العودة للطريقة المضمونة لجلب الخاصية
    if (!key) return;
    
    // جلب النص من اللغة الحالية أو اللغة الافتراضية
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

// 2. وظائف المظهر (Theme)
const applyTheme = (isLight) => {
  document.body.classList.toggle('light-mode', isLight);
  if (toggleIcon) toggleIcon.textContent = isLight ? '🌙' : '☀️';
  if (toggleLabel) toggleLabel.textContent = isLight ? 'Dark' : 'Light';
  localStorage.setItem('rc-theme', isLight ? 'light' : 'dark');
};

// 3. التهيئة الأولية (Initialization)
const savedTheme = localStorage.getItem('rc-theme');
const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
applyTheme(savedTheme ? savedTheme === 'light' : prefersLight);

const savedLanguage = localStorage.getItem('rc-language') || defaultLanguage;
translatePage(savedLanguage);

// 4. الأحداث (Event Listeners)
themeToggle?.addEventListener('click', () => {
  const isLight = !document.body.classList.contains('light-mode');
  applyTheme(isLight);
});

languageToggle?.addEventListener('click', (e) => {
  e.stopPropagation(); // يمنع التعارض مع كليك الشاشة بالكامل
  const isOpen = languageMenu?.classList.toggle('open');
  languageMenu?.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
});

// العودة للطريقة الأصلية المضمونة لمراقبة ضغطات زراير اللغات
languageItems.forEach((item) => {
  item.addEventListener('click', () => {
    const langCode = item.getAttribute('data-lang') || 'en';
    translatePage(langCode, item.textContent || langCode.toUpperCase());
  });
});

window.addEventListener('click', (event) => {
  if (!event.composedPath().includes(languageToggle) && !event.composedPath().includes(languageMenu)) {
    languageMenu?.classList.remove('open');
    languageMenu?.setAttribute('aria-hidden', 'true');
  }
});

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

// 5. تأثير الظهور (Intersection Observer)
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.18 });

elements.forEach((el, index) => {
  el.style.animationDelay = `${Math.min(index * 0.08, 0.4)}s`;
  observer.observe(el);
});