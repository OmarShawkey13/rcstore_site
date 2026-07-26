import { escapeHtml } from '../utils/helpers.js';
import { ICONS } from '../utils/icons.js';
import { appData, currentLang, currentReviewRatingFilter, currentReviewPage, REVIEWS_PER_PAGE, getNestedTranslation } from '../core/state.js';


// 7. Dynamic UI Component Renderers
export function renderAppInfo() {
    if (!appData.info) return;
    const info = appData.info;

    const infoContainer = document.getElementById('appInfoGrid');
    if (infoContainer) {
        const devLbl = getNestedTranslation('infoGrid.developer') || 'Developer';
        const catLbl = getNestedTranslation('infoGrid.category') || 'Category';
        const verLbl = getNestedTranslation('infoGrid.version') || 'Version';
        const updLbl = getNestedTranslation('infoGrid.lastUpdated') || 'Last Updated';
        const relLbl = getNestedTranslation('infoGrid.released') || 'Release Date';
        const realDlLbl = getNestedTranslation('infoGrid.realInstalls') || 'Verified Downloads';
        const priceLbl = getNestedTranslation('infoGrid.price') || 'Price';
        const inAppLbl = getNestedTranslation('infoGrid.inApp') || 'In-App Purchases';
        const pkgLbl = getNestedTranslation('infoGrid.packageId') || 'Package Name';
        const ratLbl = getNestedTranslation('infoGrid.contentRating') || 'Content Rating';
        const privLbl = getNestedTranslation('infoGrid.privacyPolicy') || 'Privacy Policy';
        const polBtn = getNestedTranslation('infoGrid.officialPolicy') || 'Official Policy →';

        infoContainer.innerHTML = `
            <div class="info-item">
                <span class="info-label">${devLbl}</span>
                <span class="info-value">${escapeHtml(info.developer?.name || 'Elsayed Khater')}</span>
            </div>
            <div class="info-item">
                <span class="info-label">${catLbl}</span>
                <span class="info-value">${escapeHtml(info.genre || 'Personalization')}</span>
            </div>
            <div class="info-item">
                <span class="info-label">${verLbl}</span>
                <span class="info-value">v${escapeHtml(info.version)}</span>
            </div>
            <div class="info-item">
                <span class="info-label">${updLbl}</span>
                <span class="info-value">${escapeHtml(info.lastUpdatedOn || '')}</span>
            </div>
            <div class="info-item">
                <span class="info-label">${relLbl}</span>
                <span class="info-value">${escapeHtml(info.released || '')}</span>
            </div>
            <div class="info-item">
                <span class="info-label">${realDlLbl}</span>
                <span class="info-value">${(info.realInstalls || 130991).toLocaleString()}</span>
            </div>
            <div class="info-item">
                <span class="info-label">${priceLbl}</span>
                <span class="info-value">${escapeHtml(info.price || '$0.00')} (${info.free ? 'Free' : 'Paid'})</span>
            </div>
            <div class="info-item">
                <span class="info-label">${inAppLbl}</span>
                <span class="info-value">${escapeHtml(info.inAppProductPrice || 'Optional')}</span>
            </div>
            <div class="info-item">
                <span class="info-label">${pkgLbl}</span>
                <span class="info-value"><code>${escapeHtml(info.appId || 'rc.keyboard')}</code></span>
            </div>
            <div class="info-item">
                <span class="info-label">${ratLbl}</span>
                <span class="info-value">${escapeHtml(info.contentRating)}</span>
            </div>
            <div class="info-item">
                <span class="info-label">${privLbl}</span>
                <span class="info-value">
                    <a href="${escapeHtml(info.privacyPolicy)}" target="_blank" rel="noopener" class="info-link">${polBtn}</a>
                </span>
            </div>
        `;
    }

    const supportedLangsContainer = document.getElementById('supportedLangsTags');
    if (supportedLangsContainer && info.supportedLanguages && Array.isArray(info.supportedLanguages)) {
        supportedLangsContainer.innerHTML = info.supportedLanguages.map(lang => 
            `<span class="lang-pill">${escapeHtml(lang)}</span>`
        ).join('');
    }

    const statsSection = document.querySelector('.stats-container');
    if (statsSection) {
        const totDL = getNestedTranslation('stats.totalDownloads') || 'Total Downloads';
        const avgScr = getNestedTranslation('stats.avgScore') || 'Average Score';
        const verRat = getNestedTranslation('stats.verifiedRatings') || 'Verified Ratings';
        const onDev = getNestedTranslation('stats.onDevicePrivacy') || 'On-Device Privacy';

        statsSection.innerHTML = `
            <div class="stat-box reveal-up active">
                <div class="stat-number">${info.installs}</div>
                <div class="stat-label">${totDL}</div>
            </div>
            <div class="stat-box reveal-up active">
                <div class="stat-number">${info.score} ★</div>
                <div class="stat-label">${avgScr}</div>
            </div>
            <div class="stat-box reveal-up active">
                <div class="stat-number">${info.ratings}</div>
                <div class="stat-label">${verRat}</div>
            </div>
            <div class="stat-box reveal-up active">
                <div class="stat-number">100%</div>
                <div class="stat-label">${onDev}</div>
            </div>
        `;
    }
}

export function renderFeatures() {
    const container = document.querySelector('.features-grid');
    if (!container || !appData.features || !appData.features.length) return;

    container.innerHTML = appData.features.map((feat, idx) => {
        const iconSvg = ICONS[feat.icon] || ICONS['sparkles'];
        const title = (currentLang === 'ar' && feat.titleAr) ? feat.titleAr : feat.title;
        
        return `
            <div class="feature-card glass reveal-up active" style="transition-delay: ${idx * 40}ms;">
                <div class="card-glow"></div>
                <span class="feature-badge">${escapeHtml(feat.highlight)}</span>
                <div class="feature-icon-wrapper">
                    ${iconSvg}
                </div>
                <h3>${escapeHtml(title)}</h3>
                <p>${escapeHtml(feat.description)}</p>
            </div>
        `;
    }).join('');
}

export function renderExperience() {
    const container = document.querySelector('.experience-grid');
    if (!container || !appData.experience || !appData.experience.length) return;

    container.innerHTML = appData.experience.map((exp, idx) => {
        const iconSvg = ICONS[exp.icon] || ICONS['check-circle'];
        return `
            <div class="exp-card glass reveal-up active" style="transition-delay: ${idx * 50}ms;">
                <div class="exp-icon">
                    ${iconSvg}
                </div>
                <div class="exp-content">
                    <div class="exp-subtitle">${escapeHtml(exp.subtitle)}</div>
                    <h3>${escapeHtml(exp.title)}</h3>
                    <p class="exp-details">${escapeHtml(exp.details)}</p>
                    <div class="exp-evidence">
                        <strong>Play Store Verification:</strong> ${escapeHtml(exp.evidence)}
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

export function renderAppDescription() {
    const descContainer = document.getElementById('appFullDescription');
    if (!descContainer) return;

    const descriptions = {
        ar: `<div class="desc-content">ارتقِ بتجربة الكتابة على هاتفك الذكي مع <strong>RCKeyBoard</strong>، لوحة مفاتيح متطورة لأجهزة أندرويد تجمع بين الأداء العالي، الذكاء، والخصوصية الصارمة. تم تصميم RCKeyBoard من الصفر لتوفير تجربة كتابة سريعة ودقيقة وقابلة للتخصيص.<br><br><strong>محرك ذكي متطور</strong><br><br>استمتع بتجربة كتابة أكثر ذكاءً وسلاسة مع نظام التنبؤ والتصحيح المتقدم.<br><br><li>تنبؤات نصية دقيقة: تصحيح تلقائي متوازن يركز على التطابق الدقيق والكلمات التي يتعلمها التطبيق.</li><li>حل المعادلات الرياضية بسرعة: اكتب معادلة تبدأ بعلامة "=" مثل \`=4*25\` وسيعرض RCKeyBoard النتيجة مباشرة.</li><br><strong>خصوصية وأمان أولاً</strong><br><br><li>معالجة محلية بالكامل: تتم معالجة التنبؤات والتصحيح والقواميس محلياً على جهازك دون إرسال بيانات خارجية.</li><li>حماية الحقول الحساسة: يعطل التعلم تلقائياً في حقول كلمات المرور وبيانات الدفع.</li></div>`,
        en: `<div class="desc-content">Elevate your typing experience with <strong>RCKeyboard</strong>, an advanced Android keyboard combining high Kotlin performance, intelligence, and strict privacy.<br><br><strong>Smart AI Engine</strong><br><br><li>Precise Context Predictions: Smart auto-correction focusing on exact matches and learned words.</li><li>Instant Math Solver: Type any equation starting with '=' (e.g. '=4*25') and RCKeyboard displays the calculated answer instantly.</li><br><strong>100% Local Privacy</strong><br><br><li>On-Device Processing: All predictions, corrections, and dictionaries are stored locally in a secure SQLite database with zero external server logs.</li><li>Sensitive Field Protection: Automatically turns off learning in password and payment fields.</li></div>`,
        fr: `<div class="desc-content">Améliorez votre saisie sur smartphone avec <strong>RCKeyboard</strong>, un clavier Android avancé combinant performances Kotlin, intelligence et confidentialité stricte.<br><br><strong>Moteur IA Intelligent</strong><br><br><li>Prédictions de texte précises et correction automatique intelligente.</li><li>Calculateur mathématique instantané : Tapez toute équation commençant par '=' (ex: '=4*25') pour obtenir le résultat direct.</li><br><strong>Confidentialité 100% Locale</strong><br><br><li>Traitement sur l'appareil : Toutes les données restent stockées localement en SQLite.</li></div>`,
        es: `<div class="desc-content">Mejora tu experiencia de escritura con <strong>RCKeyboard</strong>, un teclado avanzado para Android que combina alto rendimiento Kotlin, inteligencia y privacidad estricta.<br><br><strong>Motor Inteligente IA</strong><br><br><li>Predicciones precisas de contexto y autocorrección inteligente.</li><li>Calculadora matemática instantánea: Escribe cualquier ecuación comenzando con '=' (ej. '=4*25') para ver el resultado.</li><br><strong>Privacidad 100% Local</strong><br><br><li>Procesamiento en el dispositivo sin envío de datos a servidores externos.</li></div>`
    };

    descContainer.innerHTML = descriptions[currentLang] || descriptions['en'];
}

export function renderScreenshots() {
    const carouselTrack = document.querySelector('.carousel-track');
    if (!carouselTrack) return;

    const list = (appData.screenshots && appData.screenshots.length) 
        ? appData.screenshots 
        : (appData.info?.screenshots || []).map((url, i) => ({ localUrl: url, alt: `RCKeyboard Screen ${i+1}` }));

    if (!list || !list.length) return;

    carouselTrack.innerHTML = list.map((item, idx) => {
        const imgUrl = item.localUrl || item.remoteUrl || item;
        const altText = item.alt || `Official RCKeyboard Screenshot ${idx+1}`;
        return `
            <div class="carousel-slide" onclick="openFullscreenModal(${idx})">
                <div class="screenshot-mockup-wrapper">
                    <div class="reflection-glare"></div>
                    <img src="${imgUrl}" class="screenshot-img" alt="${escapeHtml(altText)}" loading="lazy" decoding="async">
                </div>
            </div>
        `;
    }).join('');
}

export function renderReviews() {
    const container = document.querySelector('.reviews-grid');
    if (!container || !appData.reviews || !Array.isArray(appData.reviews) || appData.reviews.length === 0) return;

    let filtered = appData.reviews;
    if (currentReviewRatingFilter !== 'ALL') {
        const targetScore = parseInt(currentReviewRatingFilter, 10);
        filtered = filtered.filter(r => (r.score || 0) === targetScore);
    }

    const totalPages = Math.ceil(filtered.length / REVIEWS_PER_PAGE) || 1;
    if (currentReviewPage >= totalPages) currentReviewPage = 0;

    const startIdx = currentReviewPage * REVIEWS_PER_PAGE;
    const pageReviews = filtered.slice(startIdx, startIdx + REVIEWS_PER_PAGE);

    if (pageReviews.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">
                No reviews found for ${currentReviewRatingFilter}★ rating.
            </div>
        `;
        return;
    }

    const helpfulLbl = getNestedTranslation('reviews.helpful') || 'Helpful';
    const verLbl = getNestedTranslation('reviews.verified') || '✓ Verified Play Store Review';

    container.innerHTML = pageReviews.map((rev, idx) => {
        if (!rev) return '';
        const score = rev.score || 5;
        const stars = '★'.repeat(Math.max(0, Math.min(5, score))) + '☆'.repeat(Math.max(0, 5 - score));
        const safeName = rev.userName || 'User';
        const avatarUrl = rev.userImage || `https://ui-avatars.com/api/?name=${encodeURIComponent(safeName)}&background=9d4edd&color=fff`;
        const content = rev.content || '';
        const hasReply = !!rev.replyContent;
        
        let repliedDate = '';
        if (hasReply && rev.repliedAt) {
            repliedDate = String(rev.repliedAt).split(' ')[0];
        }
        
        return `
            <div class="review-card glass reveal-up active" style="transition-delay: ${idx * 60}ms;">
                <div>
                    <div class="review-header">
                        <img src="${avatarUrl}" class="avatar" alt="${escapeHtml(safeName)}'s avatar" loading="lazy" decoding="async" width="40" height="40">
                        <div class="reviewer-info">
                            <h4>${escapeHtml(safeName)}</h4>
                            <span class="review-date">${escapeHtml(rev.date || rev.at || '')} ${rev.appVersion ? '• v' + escapeHtml(rev.appVersion) : ''}</span>
                        </div>
                    </div>
                    <div class="rating-stars">${stars}</div>
                    <div class="review-text ${content.length > 180 ? 'truncated' : ''}" id="rev-text-${escapeHtml(rev.id || idx)}">
                        "${escapeHtml(content)}"
                    </div>
                    ${content.length > 180 ? `<button class="toggle-read-more" data-id="${escapeHtml(rev.id || idx)}">Read More</button>` : ''}
                    
                    ${hasReply ? `
                        <div class="developer-reply">
                            <strong data-i18n="reviews.devReply">Developer Reply ${repliedDate ? `(${escapeHtml(repliedDate)})` : ''}:</strong>
                            "${escapeHtml(rev.replyContent)}"
                        </div>
                    ` : ''}
                </div>
                
                <div class="review-footer">
                    <span class="helpful-tag">
                        👍 ${rev.thumbsUpCount || 0} ${helpfulLbl}
                    </span>
                    <span style="font-size: 0.75rem; color: var(--accent);">
                        ${verLbl}
                    </span>
                </div>
            </div>
        `;
    }).join('');

    const prevBtn = document.getElementById('prevReviewBtn');
    const nextBtn = document.getElementById('nextReviewBtn');
    if (prevBtn) prevBtn.disabled = currentReviewPage === 0;
    if (nextBtn) nextBtn.disabled = currentReviewPage >= totalPages - 1;

    container.querySelectorAll('.toggle-read-more').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            if (id && window.toggleReadMore) window.toggleReadMore(id);
        });
    });
}

export function renderFAQ() {
    const container = document.querySelector('.faq-list');
    if (!container || !appData.faq || !appData.faq.length) return;

    const sourceLbl = getNestedTranslation('faq.sourceLabel') || 'Source';

    container.innerHTML = appData.faq.map((item, idx) => {
        const question = (currentLang === 'ar' && item.questionAr) ? item.questionAr : item.question;
        
        return `
            <details class="faq-item glass reveal-up active" style="transition-delay: ${idx * 40}ms;" ${idx === 0 ? 'open' : ''}>
                <summary>${escapeHtml(question)}</summary>
                <div class="faq-content">
                    <p>${escapeHtml(item.answer)}</p>
                    <span class="faq-source-tag">${sourceLbl}: ${escapeHtml(item.source)}</span>
                </div>
            </details>
        `;
    }).join('');
}


