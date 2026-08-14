// =============================================================================
// RCKeyBoard — 2026 Kinetic UI/UX & Interactive Studio Engine
// =============================================================================

document.addEventListener('DOMContentLoaded', () => {
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
  const simAccuracyVal = document.getElementById('sim-accuracy');

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
    const label = soundToggleBtn.querySelector('span');
    if (label) label.textContent = isSoundEnabled ? 'Sound: On' : 'Sound: Off';
  });

  // ---------------------------------------------------------------------------
  // 3. Dynamic Cursor Spotlight Follower
  // ---------------------------------------------------------------------------
  const spotlight = document.createElement('div');
  spotlight.className = 'cursor-spotlight';
  document.body.appendChild(spotlight);

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let currentSpotX = mouseX;
  let currentSpotY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }, { passive: true });

  const renderSpotlight = () => {
    currentSpotX += (mouseX - currentSpotX) * 0.12;
    currentSpotY += (mouseY - currentSpotY) * 0.12;
    spotlight.style.transform = `translate(${currentSpotX - 300}px, ${currentSpotY - 300}px)`;
    requestAnimationFrame(renderSpotlight);
  };
  requestAnimationFrame(renderSpotlight);

  // ---------------------------------------------------------------------------
  // 4. Hero 3D Perspective Tilt & Interactive Theme Swatches
  // ---------------------------------------------------------------------------
  const isFinePointer = window.matchMedia('(pointer: fine)').matches;

  if (heroVisual && phoneCardWrap && isFinePointer) {
    heroVisual.addEventListener('mousemove', (e) => {
      const rect = heroVisual.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const rotateY = (x / (rect.width / 2)) * 14;
      const rotateX = -(y / (rect.height / 2)) * 14;

      phoneCardWrap.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    heroVisual.addEventListener('mouseleave', () => {
      phoneCardWrap.style.transform = 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  }

  // Hero Quick Swatches
  const themeImages = {
    amoled: 'src/images/rckeyboard.webp',
    avocado: 'src/images/avocado.png',
    pink: 'src/images/pink_check.png',
    minecraft: 'src/images/minecraft.png',
    cute: 'src/images/cute_cat.png',
    penguin: 'src/images/penguin_elite.png'
  };

  heroSwatches.forEach((swatch) => {
    swatch.addEventListener('click', () => {
      heroSwatches.forEach((s) => s.classList.remove('active'));
      swatch.classList.add('active');
      const themeKey = swatch.getAttribute('data-hero-theme');
      if (heroPhoneImg && themeImages[themeKey]) {
        heroPhoneImg.style.opacity = '0.3';
        heroPhoneImg.style.transform = 'scale(0.96)';
        setTimeout(() => {
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
    if (simAccuracyVal) simAccuracyVal.textContent = '99%';
  };

  const selectSimulatorTheme = (themeName) => {
    simThemeBtns.forEach((b) => {
      b.classList.toggle('active', b.getAttribute('data-theme') === themeName);
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

  // Evaluate simple inline math (e.g., 25*4= -> 100)
  const checkInlineMath = (text) => {
    const mathMatch = text.match(/(\d+\s*[\+\-\*\/]\s*\d+)\s*=/);
    if (mathMatch) {
      try {
        const expression = mathMatch[1];
        // Safe basic arithmetic eval
        const sanitized = expression.replace(/[^0-9\+\-\*\/]/g, '');
        const result = Function(`'use strict'; return (${sanitized})`)();
        return text.replace(mathMatch[0], `${expression} = ${result} ✨`);
      } catch {
        return text;
      }
    }
    return text;
  };

  // Virtual Key Press Handling
  simKeys.forEach((keyBtn) => {
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
    sug.addEventListener('click', () => {
      if (!simInput) return;
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

  // ---------------------------------------------------------------------------
  // 6. Theme Library Filters, Real-Time Search & Lightbox Modal
  // ---------------------------------------------------------------------------
  const applyThemeFilters = () => {
    const activeCategoryBtn = document.querySelector('.theme-filter-btn.active');
    const selectedFilter = activeCategoryBtn?.getAttribute('data-filter') || 'all';
    const searchQuery = (themeSearchInput?.value || '').trim().toLowerCase();

    themeCards.forEach((card) => {
      const category = card.getAttribute('data-category');
      const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
      const desc = card.querySelector('p')?.textContent.toLowerCase() || '';
      const tags = Array.from(card.querySelectorAll('.theme-tags span')).map(t => t.textContent.toLowerCase()).join(' ');

      const matchesCategory = selectedFilter === 'all' || category === selectedFilter;
      const matchesSearch = !searchQuery || title.includes(searchQuery) || desc.includes(searchQuery) || tags.includes(searchQuery);

      if (matchesCategory && matchesSearch) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  };

  themeFilterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      themeFilterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
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
        demoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setTimeout(() => simInput?.focus(), 600);
      }
    });
  });

  // Lightbox Modal Preview
  themeCards.forEach((card) => {
    const viewBtn = card.querySelector('.view-lightbox-btn');
    const media = card.querySelector('.theme-media');
    const img = card.querySelector('.theme-media img');
    const title = card.querySelector('.theme-info h3')?.textContent;
    const desc = card.querySelector('.theme-info p')?.textContent;

    const openLightbox = (e) => {
      e.stopPropagation();
      if (!lightboxModal || !img) return;
      lightboxImg.src = img.src;
      if (lightboxTitle) lightboxTitle.textContent = title || 'Keyboard Theme Preview';
      if (lightboxDesc) lightboxDesc.textContent = desc || 'Explore high resolution details of RCKeyBoard custom themes.';
      lightboxModal.classList.add('open');
      lightboxModal.setAttribute('aria-hidden', 'false');
    };

    viewBtn?.addEventListener('click', openLightbox);
    media?.addEventListener('click', openLightbox);
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

  // ---------------------------------------------------------------------------
  // 7. Interactive FAQ Accordion
  // ---------------------------------------------------------------------------
  faqItems.forEach((item) => {
    const question = item.querySelector('.faq-question');
    question?.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      faqItems.forEach((i) => i.classList.remove('open'));
      if (!isOpen) {
        item.classList.add('open');
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

  languageToggle?.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = languageMenu?.classList.toggle('open');
    languageMenu?.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
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
      }
    }
  });

  // ---------------------------------------------------------------------------
  // 9. Dark / Light Theme System
  // ---------------------------------------------------------------------------
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

  // ---------------------------------------------------------------------------
  // 10. Mobile Menu Drawer
  // ---------------------------------------------------------------------------
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

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && mobileMenuOverlay?.classList.contains('open')) {
      mobileMenuOverlay.classList.remove('open');
      document.body.classList.remove('menu-open');
      mobileMenuToggle?.setAttribute('aria-expanded', 'false');
    }
  }, { passive: true });

  // ---------------------------------------------------------------------------
  // 11. Navbar Scrollspy & Back-to-Top Progress
  // ---------------------------------------------------------------------------
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
    const scrollPos = window.scrollY + 220;
    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  };
  window.addEventListener('scroll', observeScrollspy, { passive: true });

  // ---------------------------------------------------------------------------
  // 12. Animated Stats Number Counters on Scroll
  // ---------------------------------------------------------------------------
  let statsCounted = false;
  const statNumbers = document.querySelectorAll('.stat-content strong');

  const countUpStats = () => {
    if (statsCounted) return;
    statsCounted = true;

    statNumbers.forEach((el) => {
      const text = el.textContent.trim();
      if (text.includes('100K')) {
        let count = 0;
        const timer = setInterval(() => {
          count += 5;
          if (count >= 100) {
            el.textContent = '100K+';
            clearInterval(timer);
          } else {
            el.textContent = `${count}K+`;
          }
        }, 40);
      }
    });
  };

  // ---------------------------------------------------------------------------
  // 13. Staggered Scroll Animations (Intersection Observer)
  // ---------------------------------------------------------------------------
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          if (entry.target.classList.contains('stats')) {
            countUpStats();
          }
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  revealElements.forEach((el, index) => {
    el.style.transitionDelay = `${Math.min(index * 0.04, 0.28)}s`;
    observer.observe(el);
  });
});