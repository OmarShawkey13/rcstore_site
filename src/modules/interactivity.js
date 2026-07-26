import { currentReviewPage, setCurrentReviewPage, currentModalImageIdx, setCurrentModalImageIdx, setCurrentReviewRatingFilter, appData, languagesManifest } from './state.js';
import { switchLanguage } from './localization.js';
import { renderReviews, renderLangGrid } from './renderers.js';
import { FALLBACK_MANIFEST } from './manifest.js';

// 8. Interactive Controls & Accessibility Handlers
export function initInteractivity() {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 30) {
            navbar?.classList.add('scrolled');
        } else {
            navbar?.classList.remove('scrolled');
        }
    }, { passive: true });

    // Responsive Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    function toggleMobileMenu(open) {
        const isOpen = open !== undefined ? open : !navLinks?.classList.contains('open');
        if (mobileMenuBtn) {
            mobileMenuBtn.classList.toggle('open', isOpen);
            mobileMenuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        }
        if (navLinks) {
            navLinks.classList.toggle('open', isOpen);
        }
    }

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMobileMenu();
        });
    }

    document.addEventListener('click', (e) => {
        if (navLinks && navLinks.classList.contains('open')) {
            if (!navLinks.contains(e.target) && !mobileMenuBtn?.contains(e.target)) {
                toggleMobileMenu(false);
            }
        }
    });

    if (navLinks) {
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                toggleMobileMenu(false);
            });
        });
    }

    // Magnetic Button Micro-Interactions
    document.querySelectorAll('.magnetic').forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const position = btn.getBoundingClientRect();
            const x = e.clientX - position.left - position.width / 2;
            const y = e.clientY - position.top - position.height / 2;
            btn.style.transform = `translate(${x * 0.2}px, ${y * 0.3}px)`;
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0px, 0px)';
        });
    });

    // Scroll Progress Bar
    const scrollProgress = document.querySelector('.scroll-progress');
    window.addEventListener('scroll', () => {
        const totalScroll = document.documentElement.scrollTop;
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        if (scrollProgress && windowHeight > 0) {
            scrollProgress.style.width = `${(totalScroll / windowHeight) * 100}%`;
        }
    }, { passive: true });

    // Back to Top Button
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Review Filters
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const rating = btn.getAttribute('data-rating');
            if (rating && window.filterReviews) {
                window.filterReviews(rating);
            }
        });
    });

    const prevReviewBtn = document.getElementById('prevReviewBtn');
    if (prevReviewBtn) {
        prevReviewBtn.addEventListener('click', () => {
            if (window.prevReviewPage) window.prevReviewPage();
        });
    }

    const nextReviewBtn = document.getElementById('nextReviewBtn');
    if (nextReviewBtn) {
        nextReviewBtn.addEventListener('click', () => {
            if (window.nextReviewPage) window.nextReviewPage();
        });
    }

    // Dynamic Language Triggers
    document.querySelectorAll('.lang-trigger-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (window.openLangModal) window.openLangModal();
        });
    });

    document.querySelectorAll('.modal-close, .lang-modal-backdrop').forEach(el => {
        el.addEventListener('click', () => {
            if (window.closeLangModal) window.closeLangModal();
        });
    });

    // Keyboard Shortcuts (Escape key listener)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            toggleMobileMenu(false);
            if (window.closeFullscreenModal) window.closeFullscreenModal();
            if (window.closeLangModal) window.closeLangModal();
        }
        const modal = document.getElementById('screenshotModal');
        if (modal && modal.classList.contains('open')) {
            if (e.key === 'ArrowLeft') window.navigateModal(-1);
            if (e.key === 'ArrowRight') window.navigateModal(1);
        }
    });
}


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
    if (switchLanguage) switchLanguage(code, true);
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
    setCurrentReviewRatingFilter(rating);
    setCurrentReviewPage(0);
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
        setCurrentReviewPage(currentReviewPage - 1);
        renderReviews();
    }
};

window.nextReviewPage = function() {
    setCurrentReviewPage(currentReviewPage + 1);
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
    setCurrentModalImageIdx(idx);
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
    setCurrentModalImageIdx((currentModalImageIdx + dir + list.length) % list.length);
    const item = list[currentModalImageIdx];
    const imgUrl = item.localUrl || item.remoteUrl || item;
    const modalImg = document.getElementById('modalImg');
    if (modalImg) modalImg.src = imgUrl;
};
