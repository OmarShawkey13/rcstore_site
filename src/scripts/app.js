// =============================================================================
// RCKeyBoard — Main Application & UI/UX Logic
// =============================================================================

document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const revealElements = document.querySelectorAll('.reveal');
  const themeToggle = document.querySelector('.theme-toggle');
  const languageToggle = document.querySelector('.language-toggle');
  const languageMenu = document.querySelector('.language-menu');
  const languageItems = document.querySelectorAll('.language-item');
  const languageLabel = document.querySelector('.language-label');
  const translatable = document.querySelectorAll('[data-i18n]');
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const navLinks = document.querySelectorAll('.nav-link');
  const backToTopBtn = document.getElementById('back-to-top');

  // Interactive Live Simulator Elements
  const simInput = document.getElementById('sim-input');
  const simClearBtn = document.getElementById('sim-clear');
  const simScreen = document.getElementById('keyboard-simulator');
  const simThemeBtns = document.querySelectorAll('.sim-theme-btn');
  const simKeys = document.querySelectorAll('.sim-keyboard-frame .key');
  const simSuggestions = document.querySelectorAll('.sim-suggestion');

  // Lightbox Modal Elements
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDesc = document.getElementById('lightbox-desc');
  const lightboxCloseBtn = document.getElementById('lightbox-close');
  const themeCards = document.querySelectorAll('.theme-card');
  const themeFilterBtns = document.querySelectorAll('.theme-filter-btn');

  // Translation System
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
      if (!response.ok) throw new Error(`${langCode} not found`);
      const data = await response.json();
      translations[langCode] = data;
      return data;
    } catch (error) {
      console.warn(error);
      return langCode !== 'en' ? loadTranslations('en') : {};
    }
  };

  const translatePage = async (langCode) => {
    const lang = supportedLanguages.includes(langCode) ? langCode : defaultLanguage;

    if (languageLabel) {
      languageLabel.textContent = lang.toUpperCase();
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

    if (lang === 'ar' || lang === 'ur') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
  };

  // =============================================================================
  // 2. Theme System (Dark / Light Mode)
  // =============================================================================

  const applyTheme = (isLight) => {
    document.body.classList.toggle('light-mode', isLight);
    localStorage.setItem('rc-theme', isLight ? 'light' : 'dark');
  };

  const savedTheme = localStorage.getItem('rc-theme');
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  applyTheme(savedTheme ? savedTheme === 'light' : prefersLight);

  themeToggle?.addEventListener('click', () => {
    const isLight = !document.body.classList.contains('light-mode');
    applyTheme(isLight);
  });

  const savedLanguage = localStorage.getItem('rc-language') || defaultLanguage;
  translatePage(savedLanguage);

  // =============================================================================
  // 3. Language Selector Handlers
  // =============================================================================

  languageToggle?.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = languageMenu?.classList.toggle('open');
    languageMenu?.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
  });

  languageItems.forEach((item) => {
    item.addEventListener('click', () => {
      const langCode = item.getAttribute('data-lang') || 'en';
      translatePage(langCode);
    });
  });

  window.addEventListener('click', (event) => {
    if (languageToggle && languageMenu) {
      if (!event.composedPath().includes(languageToggle) && !event.composedPath().includes(languageMenu)) {
        languageMenu.classList.remove('open');
        languageMenu.setAttribute('aria-hidden', 'true');
      }
    }
  });

  // =============================================================================
  // 4. Mobile Menu Drawer Handler
  // =============================================================================

  const toggleMobileMenu = () => {
    const isOpen = mobileMenuOverlay?.classList.toggle('open');
    document.body.classList.toggle('menu-open', isOpen);
    mobileMenuToggle?.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  };

  mobileMenuToggle?.addEventListener('click', toggleMobileMenu);

  mobileNavLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenuOverlay?.classList.remove('open');
      document.body.classList.remove('menu-open');
    });
  });

  // =============================================================================
  // 5. Navbar Scroll Effects & Active Link Scrollspy
  // =============================================================================

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll > 40) {
      document.body.classList.add('scrolled');
    } else {
      document.body.classList.remove('scrolled');
    }

    if (backToTopBtn) {
      if (currentScroll > 350) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  }, { passive: true });

  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  const sections = document.querySelectorAll('section[id], header[id]');
  const observeScrollspy = () => {
    const scrollPos = window.scrollY + 200;
    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };
  window.addEventListener('scroll', observeScrollspy, { passive: true });

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // =============================================================================
  // 6. Interactive Live Simulator Demo & Theme Sync
  // =============================================================================

  const selectSimulatorTheme = (themeName) => {
    simThemeBtns.forEach((b) => {
      if (b.getAttribute('data-theme') === themeName) {
        b.classList.add('active');
      } else {
        b.classList.remove('active');
      }
    });
    if (simScreen) {
      simScreen.className = `simulator-screen theme-${themeName}`;
    }
  };

  simThemeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const theme = btn.getAttribute('data-theme');
      selectSimulatorTheme(theme);
    });
  });

  // Virtual Key Press Handling
  simKeys.forEach((keyBtn) => {
    keyBtn.addEventListener('click', () => {
      const keyText = keyBtn.textContent.trim();
      
      keyBtn.classList.add('pressed');
      setTimeout(() => keyBtn.classList.remove('pressed'), 150);

      if (!simInput) return;

      if (keyText === '⌫') {
        simInput.value = simInput.value.slice(0, -1);
      } else if (keyText === 'space') {
        simInput.value += ' ';
      } else if (keyText === '⇧' || keyText === '?123' || keyText === '🌐' || keyText === '↵') {
        // Feature key
      } else {
        simInput.value += keyText;
      }
    });
  });

  simSuggestions.forEach((sug) => {
    sug.addEventListener('click', () => {
      if (!simInput) return;
      simInput.value += (simInput.value.endsWith(' ') ? '' : ' ') + sug.textContent.trim() + ' ';
    });
  });

  simClearBtn?.addEventListener('click', () => {
    if (simInput) simInput.value = '';
  });

  document.addEventListener('keydown', (e) => {
    if (document.activeElement === simInput) {
      const pressedKeyChar = e.key.toLowerCase();
      simKeys.forEach((k) => {
        if (k.textContent.trim().toLowerCase() === pressedKeyChar) {
          k.classList.add('pressed');
          setTimeout(() => k.classList.remove('pressed'), 180);
        }
      });
    }
  });

  // =============================================================================
  // 7. Theme Library Filters, Card Actions & Lightbox Modal
  // =============================================================================

  // Theme Filter Tabs
  themeFilterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      themeFilterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');

      themeCards.forEach((card) => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Theme Card Actions (Try Live & Full View Lightbox)
  document.querySelectorAll('.try-sim-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const themeKey = btn.getAttribute('data-theme') || 'amoled';
      selectSimulatorTheme(themeKey);

      const demoSection = document.getElementById('demo');
      if (demoSection) {
        demoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setTimeout(() => simInput?.focus(), 600);
      }
    });
  });

  // Lightbox Modal Preview
  themeCards.forEach((card) => {
    const viewBtn = card.querySelector('.view-lightbox-btn');
    const img = card.querySelector('.theme-media img');
    const title = card.querySelector('.theme-info h3')?.textContent;
    const desc = card.querySelector('.theme-info p')?.textContent;

    const openLightbox = (e) => {
      e.stopPropagation();
      if (!lightboxModal) return;
      lightboxImg.src = img.src;
      lightboxTitle.textContent = title || 'Keyboard Theme Preview';
      lightboxDesc.textContent = desc || 'Explore high resolution details of RCKeyBoard custom themes.';
      lightboxModal.classList.add('open');
      lightboxModal.setAttribute('aria-hidden', 'false');
    };

    viewBtn?.addEventListener('click', openLightbox);
  });

  const closeLightbox = () => {
    lightboxModal?.classList.remove('open');
    lightboxModal?.setAttribute('aria-hidden', 'true');
  };

  lightboxCloseBtn?.addEventListener('click', closeLightbox);
  lightboxModal?.querySelector('.lightbox-backdrop')?.addEventListener('click', closeLightbox);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });

  // =============================================================================
  // 8. Scroll Animations (Intersection Observer)
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
    { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
  );

  revealElements.forEach((el, index) => {
    el.style.transitionDelay = `${Math.min(index * 0.05, 0.3)}s`;
    observer.observe(el);
  });
});