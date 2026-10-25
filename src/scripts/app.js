// =============================================================================
// RCKeyBoard — 2026 Kinetic UI/UX & Interactive Studio Engine
// =============================================================================

document.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const readPreference = (key, fallback = null) => {
    try {
      return localStorage.getItem(key) ?? fallback;
    } catch {
      return fallback;
    }
  };
  const writePreference = (key, value) => {
    try {
      localStorage.setItem(key, value);
    } catch {
      // Keep the current session usable when storage is disabled.
    }
  };

  // ---------------------------------------------------------------------------
  // 1. DOM Elements & State
  // ---------------------------------------------------------------------------
  const revealElements = document.querySelectorAll('.reveal');
  const themeToggle = document.querySelector('.theme-toggle');
  const languageToggle = document.querySelector('.language-toggle');
  const languageMenu = document.querySelector('.language-menu');
  const languageItems = document.querySelectorAll('.language-item');
  const languageLabel = document.querySelector('.language-label');
  const languageSearchInput = document.querySelector('.language-search-input');
  const translatable = document.querySelectorAll('[data-i18n]');
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const navLinks = document.querySelectorAll('.nav-link');
  const backToTopBtn = document.getElementById('back-to-top');
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');

  // Simulator Elements
  const simInput = document.getElementById('sim-input');
  const simClearBtn = document.getElementById('sim-clear');
  const simScreen = document.getElementById('keyboard-simulator');
  const simThemeBtns = document.querySelectorAll('.sim-theme-btn');
  const simKeys = document.querySelectorAll('.sim-keyboard-frame .key');
  const simSuggestions = document.querySelectorAll('.sim-suggestion');
  const soundToggleBtn = document.getElementById('sound-toggle');
  const simWpmVal = document.getElementById('sim-wpm');
  const simKeysVal = document.getElementById('sim-keys-count');
  const simWordsVal = document.getElementById('sim-words');

  // Hero Phone 3D Tilt & Swatches
  const phoneCardWrap = document.querySelector('.phone-card-wrap');
  const heroVisual = document.querySelector('.hero-visual');
  const heroPhoneImg = document.querySelector('.phone-screen img');
  const heroSwatches = document.querySelectorAll('.hero-theme-swatch');

  // Lightbox Modal
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDesc = document.getElementById('lightbox-desc');
  const lightboxCloseBtn = document.getElementById('lightbox-close');

  // Theme Library Filter & Search
  const themeCards = document.querySelectorAll('.theme-card');
  const themeFilterBtns = document.querySelectorAll('.theme-filter-btn');
  const themeSearchInput = document.getElementById('theme-search');

  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');

  // ---------------------------------------------------------------------------
  // 2. Web Audio Mechanical Switch Synthesizer (Realistic Keyboard Typing Audio)
  // ---------------------------------------------------------------------------
  let audioCtx = null;
  let isSoundEnabled = true;

  const initAudio = () => {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  };

  const playKeySound = (keyType = 'normal') => {
    if (!isSoundEnabled) return;
    initAudio();
    if (!audioCtx) return;

    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      const now = audioCtx.currentTime;

      // Realistic mechanical switch frequencies
      if (keyType === 'space') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(140, now);
        osc.frequency.exponentialRampToValueAtTime(45, now + 0.08);
        gain.gain.setValueAtTime(0.28, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.08);
      } else if (keyType === 'enter' || keyType === 'backspace') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(320, now);
        osc.frequency.exponentialRampToValueAtTime(70, now + 0.07);
        gain.gain.setValueAtTime(0.25, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.07);
      } else {
        // Crisp thock click
        osc.type = 'sine';
        const pitch = 380 + Math.random() * 80;
        osc.frequency.setValueAtTime(pitch, now);
        osc.frequency.exponentialRampToValueAtTime(90, now + 0.05);
        gain.gain.setValueAtTime(0.22, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.05);
      }
    } catch {
      // Audio context fallback
    }
  };

  soundToggleBtn?.addEventListener('click', () => {
    isSoundEnabled = !isSoundEnabled;
    soundToggleBtn.classList.toggle('muted', !isSoundEnabled);
    soundToggleBtn.setAttribute('aria-pressed', isSoundEnabled ? 'true' : 'false');
    const label = soundToggleBtn.querySelector('span');
    if (label) label.textContent = isSoundEnabled ? 'Sound: On' : 'Sound: Off';
  });

  // ---------------------------------------------------------------------------
  // 4. Hero 3D Perspective Tilt & Interactive Theme Swatches
  // ---------------------------------------------------------------------------
  const isFinePointer = window.matchMedia('(pointer: fine)').matches && !prefersReducedMotion;

  if (heroVisual && phoneCardWrap && isFinePointer) {
    let tiltFrame = 0;
    let pointerX = 0;
    let pointerY = 0;

    heroVisual.addEventListener('mousemove', (e) => {
      pointerX = e.clientX;
      pointerY = e.clientY;
      if (tiltFrame) return;

      tiltFrame = requestAnimationFrame(() => {
        tiltFrame = 0;
        const rect = heroVisual.getBoundingClientRect();
        const x = pointerX - rect.left - rect.width / 2;
        const y = pointerY - rect.top - rect.height / 2;
        const rotateY = (x / (rect.width / 2)) * 12;
        const rotateX = -(y / (rect.height / 2)) * 12;
        phoneCardWrap.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.015, 1.015, 1.015)`;
      });
    });

    heroVisual.addEventListener('mouseleave', () => {
      if (tiltFrame) cancelAnimationFrame(tiltFrame);
      tiltFrame = 0;
      phoneCardWrap.style.transform = 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  }

  // Hero Quick Swatches
  const themeImages = {
    amoled: 'src/images/amoled_dark.webp',
    avocado: 'src/images/avocado.webp',
    pink: 'src/images/pink_check.webp',
    minecraft: 'src/images/minecraft.webp',
    cute: 'src/images/cute_cat.webp',
    penguin: 'src/images/penguin_elite.webp'
  };

  let swatchTransitionTimer = 0;
  heroSwatches.forEach((swatch) => {
    swatch.setAttribute('aria-pressed', swatch.classList.contains('active') ? 'true' : 'false');
    swatch.addEventListener('click', () => {
      heroSwatches.forEach((s) => {
        s.classList.remove('active');
        s.setAttribute('aria-pressed', 'false');
      });
      swatch.classList.add('active');
      swatch.setAttribute('aria-pressed', 'true');
      const themeKey = swatch.getAttribute('data-hero-theme');
      if (heroPhoneImg && themeImages[themeKey]) {
        window.clearTimeout(swatchTransitionTimer);
        heroPhoneImg.style.opacity = '0.3';
        heroPhoneImg.style.transform = 'scale(0.96)';
        swatchTransitionTimer = window.setTimeout(() => {
          heroPhoneImg.src = themeImages[themeKey];
          heroPhoneImg.style.opacity = '1';
          heroPhoneImg.style.transform = 'scale(1)';
        }, 180);
      }
    });
  });

  // ---------------------------------------------------------------------------
  // 5. Interactive Live Keyboard Simulator & Real-Time Telemetry
  // ---------------------------------------------------------------------------
  let totalKeystrokes = 0;
  let typingStartTime = null;
  let isShiftActive = false;

  const updateTelemetry = () => {
    totalKeystrokes++;
    if (!typingStartTime) typingStartTime = Date.now();

    const elapsedMinutes = Math.max((Date.now() - typingStartTime) / 60000, 0.05);
    const wordsTyped = (simInput?.value.trim().split(/\s+/).filter(Boolean).length || 0);
    const currentWpm = Math.min(Math.round(wordsTyped / elapsedMinutes), 160);

    if (simWpmVal) simWpmVal.textContent = `${currentWpm}`;
    if (simKeysVal) simKeysVal.textContent = `${totalKeystrokes}`;
    if (simWordsVal) simWordsVal.textContent = `${wordsTyped}`;
  };

  const updateWordCount = () => {
    const wordsTyped = (simInput?.value.trim().split(/\s+/).filter(Boolean).length || 0);
    if (simWordsVal) simWordsVal.textContent = `${wordsTyped}`;
  };

  const selectSimulatorTheme = (themeName) => {
    simThemeBtns.forEach((b) => {
      const isActive = b.getAttribute('data-theme') === themeName;
      b.classList.toggle('active', isActive);
      b.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
    if (simScreen) {
      simScreen.className = `simulator-screen theme-${themeName}`;
    }
  };

  simThemeBtns.forEach((btn) => {
    btn.setAttribute('aria-pressed', btn.classList.contains('active') ? 'true' : 'false');
    btn.addEventListener('click', () => {
      const theme = btn.getAttribute('data-theme');
      selectSimulatorTheme(theme);
    });
  });

  // Evaluate simple inline math (e.g., 25*4= -> 100)
  const checkInlineMath = (text) => {
    const mathMatch = text.match(/(\d+)\s*([+\-*/])\s*(\d+)\s*=/);
    if (!mathMatch) return text;

    const left = Number(mathMatch[1]);
    const right = Number(mathMatch[3]);
    const operations = {
      '+': () => left + right,
      '-': () => left - right,
      '*': () => left * right,
      '/': () => right === 0 ? NaN : left / right
    };
    const result = operations[mathMatch[2]]();
    if (!Number.isFinite(result)) return text;

    const expression = `${mathMatch[1]} ${mathMatch[2]} ${mathMatch[3]}`;
    return text.replace(mathMatch[0], `${expression} = ${result} ✨`);
  };

  // Virtual Key Press Handling
  simKeys.forEach((keyBtn) => {
    const keyName = keyBtn.textContent.trim();
    const keyLabels = { '⇧': 'Shift', '⌫': 'Backspace', 'space': 'Space', '?123': 'Symbols', '🌐': 'Change language', '↵': 'Enter' };
    if (keyLabels[keyName]) keyBtn.setAttribute('aria-label', keyLabels[keyName]);
    keyBtn.addEventListener('click', () => {
      const rawText = keyBtn.textContent.trim();
      
      keyBtn.classList.add('pressed');
      setTimeout(() => keyBtn.classList.remove('pressed'), 120);

      if (!simInput) return;

      if (rawText === '⌫') {
        playKeySound('backspace');
        simInput.value = simInput.value.slice(0, -1);
      } else if (rawText === 'space') {
        playKeySound('space');
        simInput.value += ' ';
      } else if (rawText === '⇧') {
        playKeySound('normal');
        isShiftActive = !isShiftActive;
        keyBtn.classList.toggle('active-suggestion', isShiftActive);
        simKeys.forEach((k) => {
          const t = k.textContent.trim();
          if (t.length === 1 && /[a-z]/i.test(t)) {
            k.textContent = isShiftActive ? t.toUpperCase() : t.toLowerCase();
          }
        });
      } else if (rawText === '?123' || rawText === '🌐' || rawText === '↵') {
        playKeySound('enter');
        if (rawText === '↵') simInput.value += '\n';
      } else {
        playKeySound('normal');
        simInput.value += rawText;
        simInput.value = checkInlineMath(simInput.value);
      }

      updateTelemetry();
    });
  });

  // Suggestions Bar auto-insertion
  simSuggestions.forEach((sug) => {
    sug.setAttribute('aria-pressed', sug.classList.contains('active-suggestion') ? 'true' : 'false');
    sug.addEventListener('click', () => {
      if (!simInput) return;
      simSuggestions.forEach((item) => {
        item.classList.toggle('active-suggestion', item === sug);
        item.setAttribute('aria-pressed', item === sug ? 'true' : 'false');
      });
      playKeySound('space');
      simInput.value += (simInput.value.endsWith(' ') ? '' : ' ') + sug.textContent.trim() + ' ';
      updateTelemetry();
    });
  });

  simClearBtn?.addEventListener('click', () => {
    if (simInput) {
      simInput.value = '';
      totalKeystrokes = 0;
      typingStartTime = null;
      if (simWpmVal) simWpmVal.textContent = '0';
      if (simKeysVal) simKeysVal.textContent = '0';
      if (simWordsVal) simWordsVal.textContent = '0';
    }
  });

  // Synchronize Physical Typing into Simulator
  simInput?.addEventListener('keydown', (e) => {
    const pressedKey = e.key.toLowerCase();
    let keyType = 'normal';
    if (pressedKey === ' ') keyType = 'space';
    else if (pressedKey === 'enter' || pressedKey === 'backspace') keyType = pressedKey;

    playKeySound(keyType);
    updateTelemetry();

    simKeys.forEach((k) => {
      if (k.textContent.trim().toLowerCase() === pressedKey) {
        k.classList.add('pressed');
        setTimeout(() => k.classList.remove('pressed'), 160);
      }
    });
  });
  simInput?.addEventListener('input', updateWordCount);

  // ---------------------------------------------------------------------------
  // 6. Theme Library Filters, Real-Time Search & Lightbox Modal
  // ---------------------------------------------------------------------------
  const createThemeSearchIndex = () => Array.from(themeCards, (card) => {
    const title = card.querySelector('h3')?.textContent || '';
    const desc = card.querySelector('p')?.textContent || '';
    const tags = Array.from(card.querySelectorAll('.theme-tags span'), (tag) => tag.textContent).join(' ');
    return {
      card,
      category: card.getAttribute('data-category'),
      searchableText: `${title} ${desc} ${tags}`.toLocaleLowerCase()
    };
  });
  let themeSearchIndex = createThemeSearchIndex();

  const applyThemeFilters = () => {
    const activeCategoryBtn = document.querySelector('.theme-filter-btn.active');
    const selectedFilter = activeCategoryBtn?.getAttribute('data-filter') || 'all';
    const searchQuery = (themeSearchInput?.value || '').trim().toLocaleLowerCase();

    themeSearchIndex.forEach(({ card, category, searchableText }) => {
      const matchesCategory = selectedFilter === 'all' || category === selectedFilter;
      card.hidden = !matchesCategory || (searchQuery && !searchableText.includes(searchQuery));
    });
  };

  themeFilterBtns.forEach((btn) => {
    btn.setAttribute('aria-pressed', btn.classList.contains('active') ? 'true' : 'false');
    btn.addEventListener('click', () => {
      themeFilterBtns.forEach((b) => b.classList.remove('active'));
      themeFilterBtns.forEach((b) => b.setAttribute('aria-pressed', 'false'));
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      applyThemeFilters();
    });
  });

  themeSearchInput?.addEventListener('input', applyThemeFilters);

  // Try in Simulator Trigger
  document.querySelectorAll('.try-sim-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const themeKey = btn.getAttribute('data-theme') || 'amoled';
      selectSimulatorTheme(themeKey);

      const demoSection = document.getElementById('demo');
      if (demoSection) {
        demoSection.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
        setTimeout(() => simInput?.focus(), 600);
      }
    });
  });

  // Lightbox Modal Preview
  let lastLightboxTrigger = null;
  themeCards.forEach((card) => {
    const viewBtn = card.querySelector('.view-lightbox-btn');
    const img = card.querySelector('.theme-media img');
    const title = card.querySelector('.theme-info h3')?.textContent;
    const desc = card.querySelector('.theme-info p')?.textContent;

    const openLightbox = (e) => {
      e.stopPropagation();
      if (!lightboxModal || !img) return;
      lastLightboxTrigger = viewBtn || e.currentTarget;
      lightboxImg.src = img.src;
      if (lightboxTitle) lightboxTitle.textContent = title || 'Keyboard Theme Preview';
      if (lightboxDesc) lightboxDesc.textContent = desc || 'Explore high resolution details of RCKeyBoard custom themes.';
      lightboxModal.classList.add('open');
      lightboxModal.setAttribute('aria-hidden', 'false');
      lightboxModal.inert = false;
      lightboxCloseBtn?.focus();
    };

    viewBtn?.addEventListener('click', openLightbox);
  });

  const closeLightbox = () => {
    lightboxModal?.classList.remove('open');
    lightboxModal?.setAttribute('aria-hidden', 'true');
    if (lightboxModal) lightboxModal.inert = true;
    lastLightboxTrigger?.focus();
    lastLightboxTrigger = null;
  };

  lightboxCloseBtn?.addEventListener('click', closeLightbox);
  lightboxModal?.querySelector('.lightbox-backdrop')?.addEventListener('click', closeLightbox);
  lightboxModal?.addEventListener('keydown', (event) => {
    if (event.key !== 'Tab') return;
    const focusable = Array.from(lightboxModal.querySelectorAll('a[href], button:not([disabled])'));
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  // ---------------------------------------------------------------------------
  // 7. Interactive FAQ Accordion
  // ---------------------------------------------------------------------------
  faqItems.forEach((item) => {
    const question = item.querySelector('.faq-question');
    question?.setAttribute('aria-expanded', item.classList.contains('open') ? 'true' : 'false');
    question?.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      faqItems.forEach((i) => {
        i.classList.remove('open');
        i.querySelector('.faq-question')?.setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('open');
        question.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // ---------------------------------------------------------------------------
  // 8. Translation System (i18n) & Language Dropdown Search
  // ---------------------------------------------------------------------------
  const defaultLanguage = 'en';
  const supportedLanguages = ['en', 'ar', 'es', 'fr', 'de', 'ru', 'pt', 'hi', 'tr', 'ja', 'zh', 'id', 'vi', 'nl', 'th'];
  const translations = {};

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
    writePreference('rc-language', lang);

    languageMenu?.classList.remove('open');
    languageMenu?.setAttribute('aria-hidden', 'true');
    if (languageMenu) languageMenu.inert = true;
    languageToggle?.setAttribute('aria-expanded', 'false');

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
          const textNode = Array.from(el.childNodes).find((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
          if (textNode) textNode.textContent = text;
          else el.textContent = text;
        }
      }
    });

    themeSearchIndex = createThemeSearchIndex();
    applyThemeFilters();

    if (lang === 'ar' || lang === 'ur') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
  };

  languageToggle?.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = languageMenu?.classList.toggle('open');
    languageMenu?.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
    if (languageMenu) languageMenu.inert = !isOpen;
    languageToggle?.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    if (isOpen) {
      setTimeout(() => languageSearchInput?.focus(), 100);
    }
  });

  languageSearchInput?.addEventListener('input', (e) => {
    const q = (e.target.value || '').toLowerCase();
    languageItems.forEach((item) => {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(q) ? 'flex' : 'none';
    });
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
        languageMenu.inert = true;
        languageToggle.setAttribute('aria-expanded', 'false');
      }
    }
  });

  // ---------------------------------------------------------------------------
  // 9. Dark / Light Theme System
  // ---------------------------------------------------------------------------
  const applyTheme = (isLight) => {
    document.body.classList.toggle('light-mode', isLight);
    themeToggle?.setAttribute('aria-pressed', isLight ? 'true' : 'false');
    themeColorMeta?.setAttribute('content', isLight ? '#f5f8f7' : '#111916');
    writePreference('rc-theme', isLight ? 'light' : 'dark');
  };

  const savedTheme = readPreference('rc-theme');
  applyTheme(savedTheme ? savedTheme === 'light' : true);

  themeToggle?.addEventListener('click', () => {
    const isLight = !document.body.classList.contains('light-mode');
    applyTheme(isLight);
  });

  const savedLanguage = readPreference('rc-language') || defaultLanguage;
  translatePage(savedLanguage);

  // ---------------------------------------------------------------------------
  // 10. Mobile Menu Drawer
  // ---------------------------------------------------------------------------
  const setMobileMenuOpen = (isOpen) => {
    if (!mobileMenuOverlay) return;
    mobileMenuOverlay.classList.toggle('open', isOpen);
    mobileMenuOverlay.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
    mobileMenuOverlay.inert = !isOpen;
    document.body.classList.toggle('menu-open', isOpen);
    mobileMenuToggle?.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOverlay?.classList.contains('open'));
  };

  mobileMenuToggle?.addEventListener('click', toggleMobileMenu);

  mobileNavLinks.forEach((link) => {
    link.addEventListener('click', () => {
      setMobileMenuOpen(false);
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && mobileMenuOverlay?.classList.contains('open')) {
      setMobileMenuOpen(false);
    }
  }, { passive: true });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    closeLightbox();
    if (mobileMenuOverlay?.classList.contains('open')) setMobileMenuOpen(false);
    languageMenu?.classList.remove('open');
    languageMenu?.setAttribute('aria-hidden', 'true');
    if (languageMenu) languageMenu.inert = true;
    languageToggle?.setAttribute('aria-expanded', 'false');
  });

  // ---------------------------------------------------------------------------
  // 11. Scroll UI and observer-based navigation state
  // ---------------------------------------------------------------------------
  let scrollFrame = 0;
  const updateScrollState = () => {
    scrollFrame = 0;
    const currentScroll = window.scrollY;
    document.body.classList.toggle('scrolled', currentScroll > 40);
    backToTopBtn?.classList.toggle('visible', currentScroll > 350);
  };

  window.addEventListener('scroll', () => {
    if (!scrollFrame) scrollFrame = requestAnimationFrame(updateScrollState);
  }, { passive: true });
  updateScrollState();

  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  });

  const sectionLinks = Array.from(navLinks).filter((link) => {
    const href = link.getAttribute('href') || '';
    return href.startsWith('#') && document.getElementById(href.slice(1));
  });
  if ('IntersectionObserver' in window && sectionLinks.length) {
    const sectionObserver = new IntersectionObserver((entries) => {
      const currentSection = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (!currentSection) return;

      const activeHref = `#${currentSection.target.id}`;
      sectionLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === activeHref));
    }, { rootMargin: '-18% 0px -68% 0px', threshold: 0 });

    sectionLinks.forEach((link) => sectionObserver.observe(document.getElementById(link.getAttribute('href').slice(1))));
  }

  // ---------------------------------------------------------------------------
  // 12. Small stat counter and reveal-on-scroll enhancement
  // ---------------------------------------------------------------------------
  let statsCounted = false;
  const statNumbers = document.querySelectorAll('.stat-content strong');

  const countUpStats = () => {
    if (statsCounted) return;
    statsCounted = true;

    statNumbers.forEach((el) => {
      const text = el.textContent.trim();
      if (text.includes('500K')) {
        if (prefersReducedMotion) {
          el.textContent = '500K+';
          return;
        }

        const startedAt = performance.now();
        const duration = 720;
        const animateCount = (now) => {
          const progress = Math.min((now - startedAt) / duration, 1);
          el.textContent = `${Math.round(progress * 500)}K+`;
          if (progress < 1) requestAnimationFrame(animateCount);
        };
        requestAnimationFrame(animateCount);
      }
    });
  };

  if ('IntersectionObserver' in window && !prefersReducedMotion) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        if (entry.target.classList.contains('stats')) countUpStats();
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add('visible'));
    countUpStats();
  }
});
