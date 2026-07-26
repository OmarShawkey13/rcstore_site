/* RCKeyboard - Core Application Engine & Universal Localization System */

// 1. Core Icons Registry
const ICONS = {
    sparkles: `<svg viewBox="0 0 24 24"><path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2z"/></svg>`,
    'check-circle': `<svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
    brain: `<svg viewBox="0 0 24 24"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44L7 19.5a2.5 2.5 0 0 1-2.5-2.5V14a2.5 2.5 0 0 1 1.5-2.3v-1.4A2.5 2.5 0 0 1 9.5 2zm5 0A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44L17 19.5a2.5 2.5 0 0 0 4.96.44L17 19.5a2.5 2.5 0 0 0 2.5-2.5V14a2.5 2.5 0 0 0-1.5-2.3v-1.4A2.5 2.5 0 0 0 14.5 2z"/></svg>`,
    calculator: `<svg viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="16" y1="14" x2="16" y2="18"/><path d="M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M8 18h.01M12 18h.01"/></svg>`,
    'shield-check': `<svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`,
    lock: `<svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
    clipboard: `<svg viewBox="0 0 24 24"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>`,
    lightning: `<svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    cursor: `<svg viewBox="0 0 24 24"><path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/><path d="m13 13 6 6"/></svg>`,
    palette: `<svg viewBox="0 0 24 24"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.92 0 1.7-.75 1.7-1.67 0-.42-.16-.84-.44-1.17-.28-.34-.44-.76-.44-1.18 0-.92.75-1.67 1.67-1.67h1.67c2.9 0 5.33-2.43 5.33-5.33 0-4.9-3.9-8.9-8.9-8.9z"/></svg>`,
    image: `<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`,
    globe: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    smile: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>`,
    cpu: `<svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="15" x2="23" y2="15"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="15" x2="4" y2="15"/></svg>`,
    layout: `<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,
    zap: `<svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    shield: `<svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    smartphone: `<svg viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,
    sliders: `<svg viewBox="0 0 24 24"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>`
};

// 2. Languages Manifest
const FALLBACK_MANIFEST = [
  { code: "en", name: "English", nativeName: "English", flag: "🇺🇸", dir: "ltr" },
  { code: "ar", name: "Arabic", nativeName: "العربية", flag: "🇸🇦", dir: "rtl" },
  { code: "fr", name: "French", nativeName: "Français", flag: "🇫🇷", dir: "ltr" },
  { code: "de", name: "German", nativeName: "Deutsch", flag: "🇩🇪", dir: "ltr" },
  { code: "es", name: "Spanish", nativeName: "Español", flag: "🇪🇸", dir: "ltr" },
  { code: "pt", name: "Portuguese", nativeName: "Português", flag: "🇧🇷", dir: "ltr" },
  { code: "it", name: "Italian", nativeName: "Italiano", flag: "🇮🇹", dir: "ltr" },
  { code: "tr", name: "Turkish", nativeName: "Türkçe", flag: "🇹🇷", dir: "ltr" },
  { code: "ru", name: "Russian", nativeName: "Русский", flag: "🇷🇺", dir: "ltr" },
  { code: "zh-CN", name: "Chinese Simplified", nativeName: "简体中文", flag: "🇨🇳", dir: "ltr" },
  { code: "zh-TW", name: "Chinese Traditional", nativeName: "繁體中文", flag: "🇹🇼", dir: "ltr" },
  { code: "ja", name: "Japanese", nativeName: "日本語", flag: "🇯🇵", dir: "ltr" },
  { code: "ko", name: "Korean", nativeName: "한국어", flag: "🇰🇷", dir: "ltr" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी", flag: "🇮🇳", dir: "ltr" },
  { code: "id", name: "Indonesian", nativeName: "Bahasa Indonesia", flag: "🇮🇩", dir: "ltr" },
  { code: "ms", name: "Malay", nativeName: "Bahasa Melayu", flag: "🇲🇾", dir: "ltr" },
  { code: "vi", name: "Vietnamese", nativeName: "Tiếng Việt", flag: "🇻🇳", dir: "ltr" },
  { code: "th", name: "Thai", nativeName: "ไทย", flag: "🇹🇭", dir: "ltr" },
  { code: "ur", name: "Urdu", nativeName: "اردو", flag: "🇵🇰", dir: "rtl" }
];

// 3. Complete Universal Embedded Localized Resource Dictionaries (19 Locales)
const EMBEDDED_LOCALES = {
  en: {
    meta: { lang: "en", dir: "ltr" },
    nav: { features: "Features", experience: "Experience", screenshots: "Screenshots", reviews: "Reviews", faq: "FAQ", getApp: "Get App" },
    hero: {
      badge: "Official Google Play App • rc.keyboard",
      title1: "Type at the ",
      titleGradient: "Speed of Intelligence",
      subtitle: "RCKeyboard is an advanced Android keyboard combining high Kotlin performance, smart AI context predictions, an instant math solver, trackpad cursor control, and 100% on-device local privacy.",
      downloadBtn: "Download on Google Play",
      exploreBtn: "Explore Features",
      ratingLabel: "Rating",
      downloadsLabel: "Downloads",
      categoryLabel: "Personalization",
      demoBubble1: "Hey! Try writing \"=4*25\" in RCKeyboard!",
      demoBubble2: "Amazing! It solved the equation instantly! 🔥",
      demoResult: "Result",
      demoTrackpad: "Trackpad Mode (Hold)"
    },
    sections: {
      featuresTitle: "Engineered for Excellence",
      featuresSub: "Every feature extracted directly from the official Google Play listing and built into a seamless Android experience.",
      expTitle: "Real Application Experience",
      expSub: "Visual breakdown of RCKeyboard's core capabilities, verified by official Play Store technical specifications.",
      screenshotsTitle: "Official App Screenshots",
      screenshotsSub: "Explore the crisp interface, themes, and typing layout directly from Google Play.",
      reviewsTitle: "User Reviews & Feedback",
      reviewsSub: "Authentic reviews retrieved directly from the official Google Play listing of RC Keyboard.",
      faqTitle: "Frequently Asked Questions",
      faqSub: "Answers derived exclusively from official Google Play listing information, privacy policy, and developer specifications.",
      ctaTitle: "Upgrade Your Android Typing Today",
      ctaSub: "Join over 100,000 users experiencing the speed, intelligence, and local privacy of RCKeyboard.",
      ctaBtn: "Download Free on Google Play",
      overviewTitle: "Google Play Store Specifications",
      overviewSub: "Complete metadata and technical properties extracted directly from the official Google Play store page.",
      descTitle: "Official Store Description",
      descSub: "Comprehensive breakdown of RCKeyboard's AI engine, privacy architecture, Kotlin performance, and theme options."
    },
    reviews: { snapshotBadge: "✓ Real Google Play Store Reviews Snapshot", allRatings: "All Ratings", helpful: "Helpful", verified: "✓ Verified Play Store Review", readMore: "Read More", showLess: "Show Less", devReply: "Developer Reply" },
    faq: { searchPlaceholder: "Search FAQ topics...", sourceLabel: "Source" },
    infoGrid: { developer: "Developer", category: "Category", version: "Version", lastUpdated: "Last Updated", released: "Release Date", realInstalls: "Verified Downloads", price: "Price", inApp: "In-App Purchases", packageId: "Package Name", supportedLangs: "Supported Languages", contentRating: "Content Rating", privacyPolicy: "Privacy Policy", officialPolicy: "Official Policy →" },
    stats: { totalDownloads: "Total Downloads", avgScore: "Average Score", verifiedRatings: "Verified Ratings", onDevicePrivacy: "On-Device Privacy" },
    theme: { selectTitle: "Theme Mode", light: "Light", dark: "Dark", system: "System Default" },
    langModal: { title: "Select Language", searchPlaceholder: "Search 19+ languages...", close: "Close" },
    footer: { description: "The ultimate smart Android keyboard. Designed natively in Kotlin for speed, intelligence, and privacy.", navHeader: "Navigation", legalHeader: "Legal & Privacy", contactHeader: "Developer Contact", privacyPolicy: "Privacy Policy", terms: "Terms of Service", support: "Developer Support", copyright: "© 2026 RCKeyboard. Official Android Keyboard by Elsayed Khater." },
    subpage: { backHome: "← Back to Home", contactTitle: "Developer Contact & Support", contactSub: "Official contact information derived directly from the Google Play Store listing for RCKeyboard.", officialSite: "Official Website", googlePlayListing: "Google Play Listing", privacyTitle: "Privacy Policy", termsTitle: "Terms of Service", thanksTitle: "Thank You!", thanksSub: "Thank you for using RCKeyboard. Download the app directly from Google Play Store.", thanksBtn: "Download on Google Play", notfoundTitle: "Page Not Found", notfoundSub: "The page you are looking for does not exist or has been moved.", notfoundBtn: "Return to Home Page" }
  },
  ar: {
    meta: { lang: "ar", dir: "rtl" },
    nav: { features: "المميزات", experience: "التجربة والعملية", screenshots: "لقطات الشاشة", reviews: "تقييمات المستخدمين", faq: "الأسئلة الشائعة", getApp: "تحميل التطبيق" },
    hero: {
      badge: "تطبيق رسمي على جوجل بلاي • rc.keyboard",
      title1: "اكتب بـ ",
      titleGradient: "سرعة وذكاء فائقتين",
      subtitle: "RCKeyboard هي لوحة مفاتيح متطورة لأجهزة أندرويد تجمع بين الأداء العالي بلغة Kotlin، التنبؤات الذكية، وحل المعادلات فوراً والخصوصية المحلية 100%.",
      downloadBtn: "تحميل من متجر جوجل بلاي",
      exploreBtn: "استكشف المميزات",
      ratingLabel: "التقييم العام",
      downloadsLabel: "التنزيلات",
      categoryLabel: "أدوات وتخصيص",
      demoBubble1: "مرحباً! جرب كتابة \"=4*25\" في RCKeyboard!",
      demoBubble2: "رائع! تم حل المعادلة فوراً! 🔥",
      demoResult: "النتيجة",
      demoTrackpad: "وضع لوحة التتبع (اضغط مطولاً)"
    },
    sections: {
      featuresTitle: "صُمم للأداء العالي والاحترافية",
      featuresSub: "كل ميزة مستخرجة مباشرة من الوصف الرسمي لمتجر جوجل بلاي لمنحك تجربة كتابة مثالية.",
      expTitle: "تجربة استخدام واقعية وموثوقة",
      expSub: "تحليل بصري لقدرات RCKeyboard الأساسية المدعومة بالموثوقية الفنية لمتجر بلاي.",
      screenshotsTitle: "لقطات الشاشة الرسمية للتطبيق",
      screenshotsSub: "استعرض واجهة التطبيق وثيماته المتميزة مباشرة من متجر جوجل بلاي.",
      reviewsTitle: "آراء وتقييمات المستخدمين الحقيقيين",
      reviewsSub: "مراجعات موثقة وحقيقية تم جلبها مباشرة من متجر جوجل بلاي.",
      faqTitle: "الأسئلة الأكثر تكراراً",
      faqSub: "إجابات موثوقة مستخرجة حصرياً من وصف جوجل بلاي وسياسة الخصوصية الرسمية.",
      ctaTitle: "ارتقِ بتجربة الكتابة على هاتفك الذكي اليوم",
      ctaSub: "انضم إلى أكثر من 100,000 مستخدم يستمتعون بالسرعة، الذكاء، والخصوصية الكاملة مع RCKeyboard.",
      ctaBtn: "تحميل مجاني من جوجل بلاي",
      overviewTitle: "المواصفات الفنية لمتجر جوجل بلاي",
      overviewSub: "البيانات الفنية والمواصفات الموثقة المستخرجة مباشرة من صفحة التطبيق الرسمية.",
      descTitle: "الوصف التفصيلي الرسمي للتطبيق",
      descSub: "استعرض التفاصيل الكاملة لنظام الذكاء الاصطناعي، الخصوصية المحلية، وأداء Kotlin والتخصيص."
    },
    reviews: { snapshotBadge: "✓ لقطة موثقة لتقييمات متجر جوجل بلاي الرسمية", allRatings: "جميع التقييمات", helpful: "مفيد", verified: "✓ مراجعة موثقة من متجر بلاي", readMore: "قراءة المزيد", showLess: "عرض أقل", devReply: "رد المطور" },
    faq: { searchPlaceholder: "ابحث في الأسئلة (مثل: الخصوصية، المجاني، الإنترنت، الصلاحيات)...", sourceLabel: "المصدر" },
    infoGrid: { developer: "المطور", category: "الفئة", version: "الإصدار الحالي", lastUpdated: "آخر تحديث", released: "تاريخ الإصدار", realInstalls: "إجمالي التحميلات الفعلي", price: "السعر", inApp: "الشراء داخل التطبيق", packageId: "معرف الحزمة", supportedLangs: "اللغات المدعومة", contentRating: "التقييم العمري", privacyPolicy: "سياسة الخصوصية", officialPolicy: "السياسة الرسمية ←" },
    stats: { totalDownloads: "إجمالي التنزيلات", avgScore: "متوسط التقييم", verifiedRatings: "تقييمات موثقة", onDevicePrivacy: "خصوصية محلية" },
    theme: { selectTitle: "اختر المظهر", light: "فاتح", dark: "داكن", system: "حسب النظام" },
    langModal: { title: "اختر اللغة", searchPlaceholder: "ابحث عن لغة (مثال: العربية، English)...", close: "إغلاق" },
    footer: { description: "لوحة المفاتيح الذكية المثالية لأجهزة أندرويد. صُممت بلغة Kotlin للأداء العالي والذكاء والخصوصية.", navHeader: "الروابط الرئيسية", legalHeader: "الخصوصية والشروط", contactHeader: "التواصل مع المطور", privacyPolicy: "سياسة الخصوصية", terms: "شروط الاستخدام", support: "دعم المطور", copyright: "© 2026 RCKeyboard. لوحة المفاتيح الرسمية لتطوير السيد خاطر." },
    subpage: { backHome: "العودة للرئيسية ←", contactTitle: "التواصل والدعم الفني للمطور", contactSub: "معلومات الاتصال الرسمية المستخرجة مباشرة من صفحة تطبيق RCKeyboard على متجر بلاي.", officialSite: "الموقع الرسمي", googlePlayListing: "صفحة متجر جوجل بلاي", privacyTitle: "سياسة الخصوصية", termsTitle: "شروط الاستخدام", thanksTitle: "شكراً لك!", thanksSub: "شكراً لاستخدامك RCKeyboard. يمكنك تحميل التطبيق مباشرة من متجر جوجل بلاي.", thanksBtn: "تحميل من متجر جوجل بلاي", notfoundTitle: "الصفحة غير موجودة", notfoundSub: "الصفحة التي تحاول الوصول إليها غير موجودة أو تم نقلها.", notfoundBtn: "العودة للصفحة الرئيسية" }
  },
  fr: {
    meta: { lang: "fr", dir: "ltr" },
    nav: { features: "Fonctionnalités", experience: "Expérience", screenshots: "Captures", reviews: "Avis", faq: "FAQ", getApp: "Obtenir l'App" },
    hero: {
      badge: "Application officielle Google Play • rc.keyboard",
      title1: "Écrivez à la ",
      titleGradient: "Vitesse de l'Intelligence",
      subtitle: "RCKeyboard est un clavier Android avancé combinant de hautes performances en Kotlin, des prédictions IA intelligentes, un calculateur instantané, le contrôle du curseur trackpad et une confidentialité 100% locale.",
      downloadBtn: "Télécharger sur Google Play",
      exploreBtn: "Explorer les fonctionnalités",
      ratingLabel: "Note",
      downloadsLabel: "Téléchargements",
      categoryLabel: "Personnalisation",
      demoBubble1: "Essayez d'écrire \"=4*25\" dans RCKeyboard !",
      demoBubble2: "Génial ! L'équation a été résolue instantanément ! 🔥",
      demoResult: "Résultat",
      demoTrackpad: "Mode Trackpad (Maintenir)"
    },
    sections: {
      featuresTitle: "Conçu pour l'Excellence",
      featuresSub: "Chaque fonctionnalité extraite directement de la fiche officielle Google Play.",
      expTitle: "Expérience Utilisateur Réelle",
      expSub: "Présentation visuelle des capacités de RCKeyboard vérifiées par les spécifications officielles.",
      screenshotsTitle: "Captures d'Écran Officielles",
      screenshotsSub: "Découvrez l'interface moderne et les thèmes directement depuis Google Play.",
      reviewsTitle: "Avis et Commentaires Utilisateurs",
      reviewsSub: "Avis authentiques récupérés directement depuis la fiche officielle Google Play.",
      faqTitle: "Foire Aux Questions",
      faqSub: "Réponses tirées de la fiche officielle et des politiques de confidentialité Google Play.",
      ctaTitle: "Améliorez Votre Saisie Android Aujourd'hui",
      ctaSub: "Rejoignez plus de 100 000 utilisateurs profitant de la vitesse, de l'intelligence et de la confidentialité de RCKeyboard.",
      ctaBtn: "Télécharger Gratuitement sur Google Play",
      overviewTitle: "Spécifications Techniques",
      overviewSub: "Métadonnées et caractéristiques techniques vérifiées sur Google Play.",
      descTitle: "Description Officielle de l'Application",
      descSub: "Présentation complète du moteur IA, de la confidentialité locale, des performances Kotlin et de la personnalisation."
    },
    reviews: { snapshotBadge: "✓ Aperçu Vérifié des Avis Google Play", allRatings: "Toutes les notes", helpful: "Utile", verified: "✓ Avis Vérifié Play Store", readMore: "Lire la suite", showLess: "Réduire", devReply: "Réponse du Développeur" },
    faq: { searchPlaceholder: "Rechercher dans la FAQ...", sourceLabel: "Source" },
    infoGrid: { developer: "Développeur", category: "Catégorie", version: "Version", lastUpdated: "Dernière mise à jour", released: "Date de sortie", realInstalls: "Téléchargements vérifiés", price: "Prix", inApp: "Achats intégrés", packageId: "Nom du paquet", supportedLangs: "Langues supportées", contentRating: "Classification du contenu", privacyPolicy: "Politique de confidentialité", officialPolicy: "Politique Officielle →" },
    stats: { totalDownloads: "Téléchargements Totaux", avgScore: "Note Moyenne", verifiedRatings: "Avis Vérifiés", onDevicePrivacy: "Confidentialité Locale" },
    theme: { selectTitle: "Mode Thème", light: "Clair", dark: "Sombre", system: "Système par défaut" },
    langModal: { title: "Sélectionner la langue", searchPlaceholder: "Rechercher une langue...", close: "Fermer" },
    footer: { description: "Le clavier Android intelligent ultime. Conçu nativement en Kotlin pour la vitesse, l'intelligence et la confidentialité.", navHeader: "Navigation", legalHeader: "Légal & Confidentialité", contactHeader: "Contact Développeur", privacyPolicy: "Politique de Confidentialité", terms: "Conditions d'Utilisation", support: "Support Développeur", copyright: "© 2026 RCKeyboard. Clavier Android officiel par Elsayed Khater." },
    subpage: { backHome: "← Retour à l'accueil", contactTitle: "Contact et Support Développeur", contactSub: "Informations de contact officielles provenant de la fiche Google Play.", officialSite: "Site Officiel", googlePlayListing: "Page Google Play", privacyTitle: "Politique de Confidentialité", termsTitle: "Conditions d'Utilisation", thanksTitle: "Merci !", thanksSub: "Merci d'utiliser RCKeyboard. Téléchargez l'application sur Google Play.", thanksBtn: "Télécharger sur Google Play", notfoundTitle: "Page Non Trouvée", notfoundSub: "La page que vous cherchez n'existe pas ou a été déplacée.", notfoundBtn: "Retourner à l'accueil" }
  },
  es: {
    meta: { lang: "es", dir: "ltr" },
    nav: { features: "Características", experience: "Experiencia", screenshots: "Capturas", reviews: "Opiniones", faq: "FAQ", getApp: "Obtener App" },
    hero: {
      badge: "Aplicación Oficial Google Play • rc.keyboard",
      title1: "Escribe a la ",
      titleGradient: "Velocidad de la Inteligencia",
      subtitle: "RCKeyboard es un teclado Android avanzado que combina un alto rendimiento Kotlin, predicciones inteligentes de IA, solucionador matemático instantáneo y privacidad 100% local.",
      downloadBtn: "Descargar en Google Play",
      exploreBtn: "Explorar características",
      ratingLabel: "Calificación",
      downloadsLabel: "Descargas",
      categoryLabel: "Personalización",
      demoBubble1: "¡Prueba a escribir \"=4*25\" en RCKeyboard!",
      demoBubble2: "¡Increíble! ¡Resolvió la ecuación al instante! 🔥",
      demoResult: "Resultado",
      demoTrackpad: "Modo Trackpad (Mantener)"
    },
    sections: {
      featuresTitle: "Diseñado para la Excelencia",
      featuresSub: "Cada característica extraída directamente de la ficha oficial de Google Play.",
      expTitle: "Experiencia de Uso Real",
      expSub: "Desglose visual de las capacidades de RCKeyboard respaldadas por especificaciones técnicas.",
      screenshotsTitle: "Capturas Oficiales",
      screenshotsSub: "Explora la interfaz nítida y los temas directamente desde Google Play.",
      reviewsTitle: "Opiniones de Usuarios",
      reviewsSub: "Reseñas auténticas extraídas de Google Play.",
      faqTitle: "Preguntas Frecuentes",
      faqSub: "Respuestas derivadas exclusivamente de la ficha técnica de Google Play.",
      ctaTitle: "Mejora tu Escritura Android Hoy",
      ctaSub: "Únete a más de 100,000 usuarios que disfrutan de la velocidad e inteligencia de RCKeyboard.",
      ctaBtn: "Descargar Gratis en Google Play",
      overviewTitle: "Especificaciones de Google Play",
      overviewSub: "Propiedades técnicas verificadas en la tienda oficial.",
      descTitle: "Descripción Oficial de la Tienda",
      descSub: "Desglose completo sobre IA, privacidad, rendimiento Kotlin y temas."
    },
    reviews: { snapshotBadge: "✓ Reseñas Verificadas de Google Play", allRatings: "Todas las notas", helpful: "Útil", verified: "✓ Reseña Verificada de Play Store", readMore: "Leer más", showLess: "Mostrar menos", devReply: "Respuesta del Desarrollador" },
    faq: { searchPlaceholder: "Buscar temas en FAQ...", sourceLabel: "Fuente" },
    infoGrid: { developer: "Desarrollador", category: "Categoría", version: "Versión", lastUpdated: "Última actualización", released: "Fecha de lanzamiento", realInstalls: "Descargas verificadas", price: "Precio", inApp: "Compras integradas", packageId: "Nombre del paquete", supportedLangs: "Idiomas soportados", contentRating: "Clasificación de contenido", privacyPolicy: "Política de privacidad", officialPolicy: "Política Oficial →" },
    stats: { totalDownloads: "Descargas Totales", avgScore: "Calificación Promedio", verifiedRatings: "Reseñas Verificadas", onDevicePrivacy: "Privacidad Local" },
    theme: { selectTitle: "Modo de Tema", light: "Claro", dark: "Oscuro", system: "Por defecto del sistema" },
    langModal: { title: "Seleccionar Idioma", searchPlaceholder: "Buscar idioma...", close: "Cerrar" },
    footer: { description: "El teclado inteligente definitivo para Android. Diseñado en Kotlin para velocidad y privacidad.", navHeader: "Navegación", legalHeader: "Legal y Privacidad", contactHeader: "Contacto Desarrollador", privacyPolicy: "Política de Privacidad", terms: "Términos de Servicio", support: "Soporte al Desarrollador", copyright: "© 2026 RCKeyboard. Teclado oficial por Elsayed Khater." },
    subpage: { backHome: "← Volver al Inicio", contactTitle: "Contacto y Soporte del Desarrollador", contactSub: "Información oficial obtenida de Google Play.", officialSite: "Sitio Web Oficial", googlePlayListing: "Página de Google Play", privacyTitle: "Política de Privacidad", termsTitle: "Términos de Servicio", thanksTitle: "¡Gracias!", thanksSub: "Gracias por usar RCKeyboard. Descarga la aplicación en Google Play.", thanksBtn: "Descargar en Google Play", notfoundTitle: "Página No Encontrada", notfoundSub: "La página que buscas no existe o ha sido movida.", notfoundBtn: "Volver a la Página Principal" }
  },
  de: {
    meta: { lang: "de", dir: "ltr" },
    nav: { features: "Funktionen", experience: "Erfahrung", screenshots: "Screenshots", reviews: "Bewertungen", faq: "FAQ", getApp: "App Holen" },
    hero: { badge: "Offizielle Google Play App • rc.keyboard", title1: "Tippen Sie mit der ", titleGradient: "Geschwindigkeit der Intelligenz", subtitle: "RCKeyboard ist eine fortschrittliche Android-Tastatur, die hohe Kotlin-Leistung, KI-Vorhersagen und 100% lokale Privatsphäre kombiniert.", downloadBtn: "Auf Google Play Herunterladen", exploreBtn: "Funktionen Erkunden", ratingLabel: "Bewertung", downloadsLabel: "Downloads", categoryLabel: "Personalisierung" },
    sections: { featuresTitle: "Entwickelt für Spitzenleistungen", featuresSub: "Jedes Feature direkt aus dem Google Play Eintrag entnommen.", expTitle: "Echte Nutzungserfahrung", expSub: "Visuelle Übersicht der Kernfunktionen von RCKeyboard.", screenshotsTitle: "Offizielle Screenshots", screenshotsSub: "Entdecken Sie die moderne Benutzeroberfläche.", reviewsTitle: "Nutzerbewertungen", reviewsSub: "Echte Bewertungen aus dem Google Play Store.", faqTitle: "Häufig Gestellte Fragen", faqSub: "Antworten aus den offiziellen Spezifikationen.", ctaTitle: "Verbessern Sie Ihr Android-Tippen Heute", ctaSub: "Schließen Sie sich über 100.000 Benutzern an.", ctaBtn: "Kostenlos auf Google Play Herunterladen" },
    reviews: { snapshotBadge: "✓ Verifizierte Google Play Bewertungen", allRatings: "Alle Bewertungen", helpful: "Hilfreich", verified: "✓ Verifizierte Bewertung", readMore: "Mehr lesen", showLess: "Weniger anzeigen", devReply: "Antwort des Entwicklers" },
    faq: { searchPlaceholder: "FAQ durchsuchen...", sourceLabel: "Quelle" },
    infoGrid: { developer: "Entwickler", category: "Kategorie", version: "Version", lastUpdated: "Letztes Update", released: "Veröffentlichungsdatum", realInstalls: "Verifizierte Downloads", price: "Preis", inApp: "In-App-Käufe", packageId: "Paketname", supportedLangs: "Unterstützte Sprachen", contentRating: "Altersfreigabe", privacyPolicy: "Datenschutz", officialPolicy: "Offizielle Richtlinie →" },
    stats: { totalDownloads: "Gesamte Downloads", avgScore: "Durchschnitt", verifiedRatings: "Bewertungen", onDevicePrivacy: "Lokale Privatsphäre" },
    theme: { selectTitle: "Designmodus", light: "Hell", dark: "Dunkel", system: "Systemstandard" },
    langModal: { title: "Sprache Auswählen", searchPlaceholder: "Sprache suchen...", close: "Schließen" },
    footer: { description: "Die ultimative intelligente Android-Tastatur. Entwickelt in Kotlin für Geschwindigkeit und Datenschutz.", navHeader: "Navigation", legalHeader: "Rechtliches & Datenschutz", contactHeader: "Entwicklerkontakt", privacyPolicy: "Datenschutzrichtlinie", terms: "Nutzungsbedingungen", support: "Entwicklersupport", copyright: "© 2026 RCKeyboard. Offizielle Tastatur von Elsayed Khater." },
    subpage: { backHome: "← Zurück zur Startseite", contactTitle: "Entwicklerkontakt & Support", contactSub: "Offizielle Kontaktdaten von Google Play.", officialSite: "Offizielle Website", googlePlayListing: "Google Play Seite", privacyTitle: "Datenschutzrichtlinie", termsTitle: "Nutzungsbedingungen", thanksTitle: "Vielen Dank!", thanksSub: "Vielen Dank für die Nutzung von RCKeyboard.", thanksBtn: "Auf Google Play Herunterladen", notfoundTitle: "Seite nicht gefunden", notfoundSub: "Die gesuchte Seite existiert nicht.", notfoundBtn: "Zurück zur Startseite" }
  },
  pt: {
    meta: { lang: "pt", dir: "ltr" },
    nav: { features: "Recursos", experience: "Experiência", screenshots: "Capturas", reviews: "Avaliações", faq: "Perguntas Frequentes", getApp: "Baixar App" },
    hero: { badge: "Aplicativo Oficial do Google Play • rc.keyboard", title1: "Digite na ", titleGradient: "Velocidade da Inteligência", subtitle: "RCKeyboard é um teclado avançado para Android que combina alto desempenho em Kotlin, predições inteligentes com IA e privacidade 100% local.", downloadBtn: "Baixar no Google Play", exploreBtn: "Explorar Recursos", ratingLabel: "Classificação", downloadsLabel: "Downloads", categoryLabel: "Personalização" },
    sections: { featuresTitle: "Projetado para a Excelência", featuresSub: "Todos os recursos extraídos da lista oficial do Google Play.", expTitle: "Experiência Real do Usuário", expSub: "Análise visual dos recursos do RCKeyboard.", screenshotsTitle: "Capturas de Tela Oficiais", screenshotsSub: "Explore a interface diretamente do Google Play.", reviewsTitle: "Avaliações e Comentários", reviewsSub: "Avaliações autênticas obtidas diretamente do Google Play.", faqTitle: "Perguntas Frequentes", faqSub: "Respostas derivadas das informações oficiais.", ctaTitle: "Melhore sua Digitação no Android Hoje", ctaSub: "Junte-se a mais de 100.000 usuários.", ctaBtn: "Baixar Grátis no Google Play" },
    reviews: { snapshotBadge: "✓ Avaliações Verificadas do Google Play", allRatings: "Todas as Avaliações", helpful: "Útil", verified: "✓ Avaliação Verificada", readMore: "Ler mais", showLess: "Mostrar menos", devReply: "Resposta do Desenvolvedor" },
    faq: { searchPlaceholder: "Pesquisar perguntas frequentes...", sourceLabel: "Fonte" },
    infoGrid: { developer: "Desenvolvedor", category: "Categoria", version: "Versão", lastUpdated: "Última atualização", released: "Lançamento", realInstalls: "Downloads verificados", price: "Preço", inApp: "Compras no app", packageId: "Nome do pacote", supportedLangs: "Idiomas suportados", contentRating: "Classificação", privacyPolicy: "Política de Privacidade", officialPolicy: "Política Oficial →" },
    stats: { totalDownloads: "Downloads Totais", avgScore: "Nota Média", verifiedRatings: "Avaliações Verificadas", onDevicePrivacy: "Privacidade no Dispositivo" },
    theme: { selectTitle: "Modo de Tema", light: "Claro", dark: "Escuro", system: "Padrão" },
    langModal: { title: "Selecionar Idioma", searchPlaceholder: "Pesquisar idiomas...", close: "Fechar" },
    footer: { description: "O teclado Android inteligente definitivo.", navHeader: "Navegação", legalHeader: "Legal & Privacidade", contactHeader: "Contato", privacyPolicy: "Política de Privacidade", terms: "Termos de Serviço", support: "Suporte", copyright: "© 2026 RCKeyboard. Elsayed Khater." },
    subpage: { backHome: "← Voltar ao Início", contactTitle: "Contato e Suporte do Desenvolvedor", contactSub: "Informações oficiais do Google Play.", officialSite: "Site Oficial", googlePlayListing: "Página no Google Play", privacyTitle: "Política de Privacidade", termsTitle: "Termos de Serviço", thanksTitle: "Obrigado!", thanksSub: "Obrigado por usar o RCKeyboard.", thanksBtn: "Baixar no Google Play", notfoundTitle: "Página Não Encontrada", notfoundSub: "A página procurada não existe.", notfoundBtn: "Voltar ao Início" }
  },
  ru: {
    meta: { lang: "ru", dir: "ltr" },
    nav: { features: "Функции", experience: "Опыт", screenshots: "Скриншоты", reviews: "Отзывы", faq: "FAQ", getApp: "Скачать" },
    hero: { badge: "Официальное приложение Google Play • rc.keyboard", title1: "Печатайте со ", titleGradient: "Скоростью Интеллекта", subtitle: "RCKeyboard — это продвинутая клавиатура Android, сочетающая высокую производительность Kotlin, ИИ-подсказки и 100% локальную конфиденциальность.", downloadBtn: "Скачать в Google Play", exploreBtn: "Изучить функции", ratingLabel: "Рейтинг", downloadsLabel: "Загрузки", categoryLabel: "Персонализация" },
    sections: { featuresTitle: "Создано для совершенства", featuresSub: "Каждая функция взята напрямую из описания Google Play.", expTitle: "Реальный опыт использования", expSub: "Визуальный обзор возможностей RCKeyboard.", screenshotsTitle: "Официальные скриншоты", screenshotsSub: "Изучите интерфейс прямо из Google Play.", reviewsTitle: "Отзывы пользователей", reviewsSub: "Подлинные отзывы из Google Play.", faqTitle: "Часто задаваемые вопросы", faqSub: "Ответы на основе официальных данных.", ctaTitle: "Улучшите печать на Android сегодня", ctaSub: "Присоединяйтесь к более чем 100 000 пользователей.", ctaBtn: "Скачать бесплатно в Google Play" },
    reviews: { snapshotBadge: "✓ Проверенные отзывы Google Play", allRatings: "Все оценки", helpful: "Полезно", verified: "✓ Проверенный отзыв", readMore: "Читать далее", showLess: "Свернуть", devReply: "Ответ разработчика" },
    faq: { searchPlaceholder: "Поиск по FAQ...", sourceLabel: "Источник" },
    infoGrid: { developer: "Разработчик", category: "Категория", version: "Версия", lastUpdated: "Обновлено", released: "Дата релиза", realInstalls: "Проверенные скачивания", price: "Цена", inApp: "Покупки в приложении", packageId: "Имя пакета", supportedLangs: "Поддерживаемые языки", contentRating: "Возрастной рейтинг", privacyPolicy: "Политика конфиденциальности", officialPolicy: "Официальная политика →" },
    stats: { totalDownloads: "Всего скачиваний", avgScore: "Средний балл", verifiedRatings: "Проверенные отзывы", onDevicePrivacy: "Локальная приватность" },
    theme: { selectTitle: "Тема оформления", light: "Светлая", dark: "Тёмная", system: "Системная" },
    langModal: { title: "Выберите язык", searchPlaceholder: "Поиск языка...", close: "Закрыть" },
    footer: { description: "Умная клавиатура Android. Создана на Kotlin для скорости и приватности.", navHeader: "Навигация", legalHeader: "Правила и приватность", contactHeader: "Связь с разработчиком", privacyPolicy: "Политика конфиденциальности", terms: "Условия использования", support: "Поддержка", copyright: "© 2026 RCKeyboard. Разработчик Elsayed Khater." },
    subpage: { backHome: "← На главную", contactTitle: "Контакты и поддержка", contactSub: "Официальная информация из Google Play.", officialSite: "Официальный сайт", googlePlayListing: "Страница в Google Play", privacyTitle: "Политика конфиденциальности", termsTitle: "Условия использования", thanksTitle: "Спасибо!", thanksSub: "Спасибо за использование RCKeyboard.", thanksBtn: "Скачать в Google Play", notfoundTitle: "Страница не найдена", notfoundSub: "Запрашиваемая страница не существует.", notfoundBtn: "Вернуться на главную" }
  },
  tr: {
    meta: { lang: "tr", dir: "ltr" },
    nav: { features: "Özellikler", experience: "Deneyim", screenshots: "Ekran Görüntüleri", reviews: "Yorumlar", faq: "SSS", getApp: "Uygulamayı İndir" },
    hero: { badge: "Resmi Google Play Uygulaması • rc.keyboard", title1: "Yazmanın ", titleGradient: "Zeka Hızını Yaşayın", subtitle: "RCKeyboard, yüksek Kotlin performansı, akıllı yapay zeka tahminleri ve %100 yerel gizlilik sunan gelişmiş bir Android klavyesidir.", downloadBtn: "Google Play'den İndir", exploreBtn: "Özellikleri Keşfet", ratingLabel: "Puan", downloadsLabel: "İndirme", categoryLabel: "Kişiselleştirme" },
    sections: { featuresTitle: "Mükemmellik İçin Tasarlandı", featuresSub: "Her özellik resmi Google Play sayfasından derlenmiştir.", expTitle: "Gerçek Kullanım Deneyimi", expSub: "RCKeyboard yeteneklerinin görsel incelemesi.", screenshotsTitle: "Resmi Ekran Görüntüleri", screenshotsSub: "Arayüzü keşfedin.", reviewsTitle: "Kullanıcı Yorumları", reviewsSub: "Google Play'den alınan gerçek yorumlar.", faqTitle: "Sıkça Sorulan Sorular", faqSub: "Resmi verilerden derlenen yanıtlar.", ctaTitle: "Android Yazma Deneyiminizi Yükseltin", ctaSub: "100.000'den fazla kullanıcıya katılın.", ctaBtn: "Google Play'de Ücretsiz İndir" },
    reviews: { snapshotBadge: "✓ Doğrulanmış Google Play Yorumları", allRatings: "Tüm Puanlar", helpful: "Faydalı", verified: "✓ Doğrulanmış Yorum", readMore: "Devamını Oku", showLess: "Daha Az Göster", devReply: "Geliştirici Yanıtı" },
    faq: { searchPlaceholder: "SSS ara...", sourceLabel: "Kaynak" },
    infoGrid: { developer: "Geliştirici", category: "Kategori", version: "Sürüm", lastUpdated: "Son Güncelleme", released: "Yayın Tarihi", realInstalls: "Doğrulanmış İndirme", price: "Fiyat", inApp: "Uygulama İçi Satın Alma", packageId: "Paket Adı", supportedLangs: "Desteklenen Diller", contentRating: "Derecelendirme", privacyPolicy: "Gizlilik Politikası", officialPolicy: "Resmi Politika →" },
    stats: { totalDownloads: "Toplam İndirme", avgScore: "Ortalama Puan", verifiedRatings: "Doğrulanmış Yorumlar", onDevicePrivacy: "Cihaz İçi Gizlilik" },
    theme: { selectTitle: "Tema Modu", light: "Açık", dark: "Koyu", system: "Varsayılan" },
    langModal: { title: "Dil Seçin", searchPlaceholder: "Dil ara...", close: "Kapat" },
    footer: { description: "Akıllı Android klavyesi. Hız ve gizlilik için Kotlin ile geliştirildi.", navHeader: "Gezinme", legalHeader: "Yasal & Gizlilik", contactHeader: "Geliştirici İletişim", privacyPolicy: "Gizlilik Politikası", terms: "Kullanım Koşulları", support: "Desteği", copyright: "© 2026 RCKeyboard. Elsayed Khater." },
    subpage: { backHome: "← Ana Sayfaya Dön", contactTitle: "Geliştirici İletişim & Destek", contactSub: "Google Play'den alınan resmi bilgiler.", officialSite: "Resmi Web Sitesi", googlePlayListing: "Google Play Sayfası", privacyTitle: "Gizlilik Politikası", termsTitle: "Kullanım Koşulları", thanksTitle: "Teşekkürler!", thanksSub: "RCKeyboard kullandığınız için teşekkür ederiz.", thanksBtn: "Google Play'den İndir", notfoundTitle: "Sayfa Bulunamadı", notfoundSub: "Aradığınız sayfa mevcut değil.", notfoundBtn: "Ana Sayfaya Dön" }
  },
  "zh-CN": {
    meta: { lang: "zh-CN", dir: "ltr" },
    nav: { features: "核心功能", experience: "应用体验", screenshots: "应用截图", reviews: "用户评价", faq: "常见问题", getApp: "下载应用" },
    hero: { badge: "Google Play 官方应用 • rc.keyboard", title1: "体验 ", titleGradient: "智能极致打字速度", subtitle: "RCKeyboard 是一款先进的 Android 智能键盘，结合 Kotlin 高能原生性能、AI 上下文预测与 100% 本地隐私保护。", downloadBtn: "前往 Google Play 下载", exploreBtn: "探索核心功能", ratingLabel: "应用评分", downloadsLabel: "下载总量", categoryLabel: "个性化" },
    sections: { featuresTitle: "专为卓越性能打造", featuresSub: "各项功能均直接源自 Google Play 官方说明。", expTitle: "真实应用体验", expSub: "核心功能直观展示。", screenshotsTitle: "官方应用截图", screenshotsSub: "探索清爽界面与主题。", reviewsTitle: "真实用户评价", reviewsSub: "直接提取自 Google Play 页面的真实验证评价。", faqTitle: "常见问题解答", faqSub: "解答均源自官方说明。", ctaTitle: "立即提升您的 Android 打字体验", ctaSub: "加入超过 100,000 名用户的行列。", ctaBtn: "在 Google Play 免费下载" },
    reviews: { snapshotBadge: "✓ Google Play 真实评价快照", allRatings: "所有评分", helpful: "赞同", verified: "✓ 已验证评价", readMore: "展开阅读", showLess: "收起", devReply: "开发者回复" },
    faq: { searchPlaceholder: "搜索常见问题...", sourceLabel: "来源" },
    infoGrid: { developer: "开发者", category: "应用类别", version: "当前版本", lastUpdated: "最近更新", released: "发布日期", realInstalls: "真实下载量", price: "价格", inApp: "应用内购买", packageId: "包名", supportedLangs: "支持语言", contentRating: "分级", privacyPolicy: "隐私政策", officialPolicy: "官方政策链接 →" },
    stats: { totalDownloads: "总下载量", avgScore: "平均评分", verifiedRatings: "验证评价数", onDevicePrivacy: "本地设备隐私" },
    theme: { selectTitle: "主题模式", light: "浅色", dark: "深色", system: "跟随系统" },
    langModal: { title: "选择语言", searchPlaceholder: "搜索语言...", close: "关闭" },
    footer: { description: "终极智能 Android 键盘。采用 Kotlin 原生开发，兼具速度、智能与隐私。", navHeader: "导航", legalHeader: "法律与隐私", contactHeader: "开发者联系方式", privacyPolicy: "隐私政策", terms: "服务条款", support: "开发者支持", copyright: "© 2026 RCKeyboard. Elsayed Khater 官方 Android 键盘。" },
    subpage: { backHome: "← 返回首页", contactTitle: "开发者联系与支持", contactSub: "官方联系信息提取自 Google Play 页面。", officialSite: "官方网站", googlePlayListing: "Google Play 页面", privacyTitle: "隐私政策", termsTitle: "服务条款", thanksTitle: "感谢使用！", thanksSub: "感谢使用 RCKeyboard。", thanksBtn: "在 Google Play 下载", notfoundTitle: "页面未找到", notfoundSub: "您访问的页面不存在。", notfoundBtn: "返回首页" }
  },
  ja: {
    meta: { lang: "ja", dir: "ltr" },
    nav: { features: "機能", experience: "体験", screenshots: "スクリーンショット", reviews: "レビュー", faq: "FAQ", getApp: "アプリを入手" },
    hero: { badge: "Google Play 公式アプリ • rc.keyboard", title1: "タイピングを ", titleGradient: "知性のスピードへ", subtitle: "RCKeyboardは、Kotlinの高速性能、AI文脈予測、100%ローカルプライバシーを組み合わせた高度なAndroidキーボードです。", downloadBtn: "Google Playでダウンロード", exploreBtn: "機能を探索", ratingLabel: "評価", downloadsLabel: "ダウンロード数", categoryLabel: "カスタマイズ" },
    sections: { featuresTitle: "卓越したパフォーマンス設計", featuresSub: "Google Play公式リストから抽出された機能。", expTitle: "実際のアプリ体験", expSub: "検証されたCore機能のビジュアル分解。", screenshotsTitle: "公式スクリーンショット", screenshotsSub: "洗練されたUIとテーマ。", reviewsTitle: "ユーザーレビューとフィードバック", reviewsSub: "Google Playからの本物のレビュー。", faqTitle: "よくある質問", faqSub: "公式データに基づく回答。", ctaTitle: "Androidタイピングを今すぐアップグレード", ctaSub: "10万人以上のユーザーに参加しましょう。", ctaBtn: "Google Playで無料ダウンロード" },
    reviews: { snapshotBadge: "✓ Google Play公式レビュー", allRatings: "すべての評価", helpful: "参考になった", verified: "✓ 検証済みレビュー", readMore: "続きを読む", showLess: "折りたたむ", devReply: "デベロッパーの返信" },
    faq: { searchPlaceholder: "FAQを検索...", sourceLabel: "情報源" },
    infoGrid: { developer: "開発者", category: "カテゴリ", version: "バージョン", lastUpdated: "最終更新日", released: "リリース日", realInstalls: "検証済みDL数", price: "価格", inApp: "アプリ内購入", packageId: "パッケージ名", supportedLangs: "対応言語", contentRating: "対象年齢", privacyPolicy: "プライバシーポリシー", officialPolicy: "公式ポリシー →" },
    stats: { totalDownloads: "総ダウンロード数", avgScore: "平均スコア", verifiedRatings: "検証済みレビュー", onDevicePrivacy: "ローカルプライバシー" },
    theme: { selectTitle: "テーマモード", light: "ライト", dark: "ダーク", system: "システム標準" },
    langModal: { title: "言語を選択", searchPlaceholder: "言語を検索...", close: "閉じる" },
    footer: { description: "究極のスマートAndroidキーボード。Kotlinで高速・安心設計。", navHeader: "ナビゲーション", legalHeader: "法的情報＆プライバシー", contactHeader: "開発者のお問い合わせ", privacyPolicy: "プライバシーポリシー", terms: "利用規約", support: "開発者サポート", copyright: "© 2026 RCKeyboard. Elsayed Khater." },
    subpage: { backHome: "← ホームに戻る", contactTitle: "開発者へのお問い合わせ", contactSub: "Google Play公式情報。", officialSite: "公式サイト", googlePlayListing: "Google Play ページ", privacyTitle: "プライバシーポリシー", termsTitle: "利用規約", thanksTitle: "ありがとうございます！", thanksSub: "RCKeyboardをご利用いただきありがとうございます。", thanksBtn: "Google Playでダウンロード", notfoundTitle: "ページが見つかりません", notfoundSub: "お探しのページは存在しません。", notfoundBtn: "ホームに戻る" }
  },
  ur: {
    meta: { lang: "ur", dir: "rtl" },
    nav: { features: "خصوصیات", experience: "تجربہ", screenshots: "اسکرین شاٹس", reviews: "رائے", faq: "سوالات", getApp: "ایپ حاصل کریں" },
    hero: { badge: "گوگل پلے کی سرکاری ایپ • rc.keyboard", title1: "لکھیں ", titleGradient: "ذکاء کی رفتار سے", subtitle: "RCKeyboard ایک جدید اینڈرائیڈ کی بورڈ ہے جو بہترین کارکردگی، ذکی پیش گوئیاں اور 100% مقامی پرائیویسی فراہم کرتا ہے۔", downloadBtn: "گوگل پلے سے ڈاؤن لوڈ کریں", exploreBtn: "خصوصیات دیکھیں", ratingLabel: "ریٹنگ", downloadsLabel: "ڈاؤن لوڈز", categoryLabel: "تخصیص" },
    sections: { featuresTitle: "بہترین کارکردگی کے لیے تیار کردہ", featuresSub: "سرکاری تفصیلات سے اخذ کردہ تمام خصوصیات۔", expTitle: "حقیقی استعمال کا تجربہ", expSub: "تکنیکی خصوصیات کا بصری جائزہ۔", screenshotsTitle: "سرکاری اسکرین شاٹس", screenshotsSub: "براہ راست انٹرفیس دیکھیں۔", reviewsTitle: "صارفین کی رائے", reviewsSub: "گوگل پلے سے حاصل کردہ جائزےBreakdown۔", faqTitle: "بار بار پوچھے گئے سوالات", faqSub: "سرکاری معلومات پر مبنی جوابات۔", ctaTitle: "آج ہی اپنا رائٹنگ تجربہ اپ گریڈ کریں", ctaSub: "100,000 سے زائد صارفین میں شامل ہوں۔", ctaBtn: "گوگل پلے پر مفت ڈاؤن لوڈ کریں" },
    reviews: { snapshotBadge: "✓ گوگل پلے کے تصدیق شدہ جائزے", allRatings: "تمام ریٹنگز", helpful: "مفید", verified: "✓ تصدیق شدہ جائزہ", readMore: "مزید پڑھیں", showLess: "کم دکھائیں", devReply: "ڈویلپر کا جواب" },
    faq: { searchPlaceholder: "سوالات تلاش کریں...", sourceLabel: "ماخذ" },
    infoGrid: { developer: "ڈویلپر", category: "زمرہ", version: "ورژن", lastUpdated: "آخری اپ ڈیٹ", released: "تاریخ اشاعت", realInstalls: "تصدیق شدہ ڈاؤن لوڈز", price: "قیمت", inApp: "ان ایپ خریداری", packageId: "پیکیج کا نام", supportedLangs: "مدعومہ زبانیں", contentRating: "مواد کی ریٹنگ", privacyPolicy: "پرائیویسی پالیسی", officialPolicy: "سرکاری پالیسی ←" },
    stats: { totalDownloads: "کل ڈاؤن لوڈز", avgScore: "اوسط اسکور", verifiedRatings: "تصدیق شدہ جائزے", onDevicePrivacy: "مقامی پرائیویسی" },
    theme: { selectTitle: "تھیم موڈ", light: "روشنی", dark: "تاریک", system: "سستم ڈیفالٹ" },
    langModal: { title: "زبان منتخب کریں", searchPlaceholder: "زبان تلاش کریں...", close: "بند کریں" },
    footer: { description: "اینڈرائیڈ کے لیے زبردست کی بورڈ۔ رفتار اور پرائیویسی کے لیے سائنسی طور پر تیار کردہ۔", navHeader: "نیویگیشن", legalHeader: "قانون و پرائیویسی", contactHeader: "ڈویلپر رابطہ", privacyPolicy: "پرائیویسی پالیسی", terms: "شرائط و ضوابط", support: "ڈویلپر سپورٹ", copyright: "© 2026 RCKeyboard. تیار کردہ السيد خاطر۔" },
    subpage: { backHome: "ہوم پیج پر واپس جائیں ←", contactTitle: "ڈویلپر رابطہ و سپورٹ", contactSub: "گوگل پلے سے حاصل کردہ سرکاری معلومات۔", officialSite: "سرکاری ویب سائٹ", googlePlayListing: "گوگل پلے پیج", privacyTitle: "پرائیویسی پالیسی", termsTitle: "شرائط و ضوابط", thanksTitle: "شکریہ!", thanksSub: "RCKeyboard استعمال کرنے کا شکریہ۔", thanksBtn: "گوگل پلے سے ڈاؤن لوڈ کریں", notfoundTitle: "صفحہ نہیں ملا", notfoundSub: "مطلوبہ صفحہ موجود نہیں ہے۔", notfoundBtn: "ہوم پیج پر واپس جائیں" }
  },
  ko: {
    meta: { lang: "ko", dir: "ltr" },
    nav: { features: "주요 기능", experience: "앱 체험", screenshots: "스크린샷", reviews: "사용자 리뷰", faq: "자주 묻는 질문", getApp: "앱 다운로드" },
    hero: { badge: "Google Play 공식 앱 • rc.keyboard", title1: "지능의 속도로 ", titleGradient: "빠르게 타이핑하세요", subtitle: "RCKeyboard는 고성능 Kotlin 엔진, 스마트 AI 문맥 예측 및 100% 온디바이스 개인정보 보호 기능을 갖춘 고급 Android 키보드입니다.", downloadBtn: "Google Play에서 다운로드", exploreBtn: "기능 둘러보기", ratingLabel: "평점", downloadsLabel: "다운로드", categoryLabel: "맞춤 설정" },
    sections: { featuresTitle: "최상의 성능을 위한 설계", featuresSub: "Google Play 공식 설명에서 추출된 모든 핵심 기능.", expTitle: "실제 앱 사용 경험", expSub: "검증된 RCKeyboard 핵심 역량.", screenshotsTitle: "공식 스크린샷", screenshotsSub: "Google Play의 깔끔한 인터페이스 둘러보기.", reviewsTitle: "사용자 리뷰 및 평가", reviewsSub: "Google Play Store 공식 리뷰.", faqTitle: "자주 묻는 질문", faqSub: "공식 정보 기반 답변.", ctaTitle: "지금 Android 타이핑 경험을 업그레이드하세요", ctaSub: "10만 명 이상의 사용자와 함께하세요.", ctaBtn: "Google Play에서 무료 다운로드" },
    reviews: { snapshotBadge: "✓ Google Play 검증 리뷰", allRatings: "전체 평점", helpful: "도움됨", verified: "✓ 검증된 리뷰", readMore: "더 보기", showLess: "접기", devReply: "개발자 답변" },
    faq: { searchPlaceholder: "FAQ 검색...", sourceLabel: "출처" },
    infoGrid: { developer: "개발자", category: "카테고리", version: "버전", lastUpdated: "최근 업데이트", released: "출시일", realInstalls: "검증된 다운로드", price: "가격", inApp: "인앱 구매", packageId: "패키지 이름", supportedLangs: "지원 언어", contentRating: "연령 등급", privacyPolicy: "개인정보 처리방침", officialPolicy: "공식 방침 →" },
    stats: { totalDownloads: "총 다운로드", avgScore: "평균 평점", verifiedRatings: "검증된 리뷰", onDevicePrivacy: "기기 내 보안" },
    theme: { selectTitle: "테마 모드", light: "라이트", dark: "다크", system: "시스템 기본값" },
    langModal: { title: "언어 선택", searchPlaceholder: "언어 검색...", close: "닫기" },
    footer: { description: "최고의 스마트 Android 키보드.", navHeader: "탐색", legalHeader: "법률 및 개인정보 보호", contactHeader: "개발자 연락처", privacyPolicy: "개인정보 처리방침", terms: "서비스 약관", support: "개발자 지원", copyright: "© 2026 RCKeyboard. Elsayed Khater." },
    subpage: { backHome: "← 홈으로 돌아가기", contactTitle: "개발자 연락처 및 지원", contactSub: "Google Play 공식 연락처 정보.", officialSite: "공식 웹사이트", googlePlayListing: "Google Play 페이지", privacyTitle: "개인정보 처리방침", termsTitle: "서비스 약관", thanksTitle: "감사합니다!", thanksSub: "RCKeyboard를 이용해 주셔서 감사합니다.", thanksBtn: "Google Play에서 다운로드", notfoundTitle: "페이지를 찾을 수 없습니다", notfoundSub: "요청하신 페이지가 존재하지 않습니다.", notfoundBtn: "홈으로 돌아가기" }
  },
  it: {
    meta: { lang: "it", dir: "ltr" },
    nav: { features: "Caratteristiche", experience: "Esperienza", screenshots: "Screenshot", reviews: "Recensioni", faq: "FAQ", getApp: "Scarica App" },
    hero: { badge: "App Ufficiale Google Play • rc.keyboard", title1: "Scrivi alla ", titleGradient: "Velocità dell'Intelligenza", subtitle: "RCKeyboard è un tastiera Android avanzata che combina elevate prestazioni Kotlin, predizioni IA intelligenti e privacy al 100% locale.", downloadBtn: "Scarica su Google Play", exploreBtn: "Esplora Funzionalità", ratingLabel: "Valutazione", downloadsLabel: "Download", categoryLabel: "Personalizzazione" },
    sections: { featuresTitle: "Progettato per l'Eccellenza", featuresSub: "Ogni funzionalità estratta direttamente dalla pagina ufficiale di Google Play.", expTitle: "Esperienza di Utilizzo Reale", expSub: "Panoramica visiva delle capacità di RCKeyboard.", screenshotsTitle: "Screenshot Ufficiali", screenshotsSub: "Esplora l'interfaccia direttamente da Google Play.", reviewsTitle: "Recensioni degli Utenti", reviewsSub: "Recensioni autentiche estratte direttamente da Google Play.", faqTitle: "Domande Frequenti", faqSub: "Risposte basate sulle informazioni ufficiali.", ctaTitle: "Migliora la tua Digitazione su Android Oggi", ctaSub: "Unisciti a oltre 100.000 utenti.", ctaBtn: "Scarica Gratis su Google Play" },
    reviews: { snapshotBadge: "✓ Recensioni Verificate di Google Play", allRatings: "Tutte le valutazioni", helpful: "Utile", verified: "✓ Recensione Verificata", readMore: "Leggi di più", showLess: "Mostra meno", devReply: "Risposta del Sviluppatore" },
    faq: { searchPlaceholder: "Cerca nella FAQ...", sourceLabel: "Fonte" },
    infoGrid: { developer: "Sviluppatore", category: "Categoria", version: "Versione", lastUpdated: "Ultimo aggiornamento", released: "Data di rilascio", realInstalls: "Download verificati", price: "Prezzo", inApp: "Acquisti in-app", packageId: "Nome pacchetto", supportedLangs: "Lingue supportate", contentRating: "Classificazione contenuti", privacyPolicy: "Informativa sulla privacy", officialPolicy: "Politica Ufficiale →" },
    stats: { totalDownloads: "Download Totali", avgScore: "Punteggio Medio", verifiedRatings: "Recensioni Verificate", onDevicePrivacy: "Privacy Locale" },
    theme: { selectTitle: "Modalità Tema", light: "Chiaro", dark: "Scuro", system: "Predefinito" },
    langModal: { title: "Seleziona Lingua", searchPlaceholder: "Cerca lingua...", close: "Chiudi" },
    footer: { description: "La tastiera Android intelligente definitiva.", navHeader: "Navigazione", legalHeader: "Note Legali & Privacy", contactHeader: "Contatto Sviluppatore", privacyPolicy: "Informativa sulla Privacy", terms: "Termini di Servizio", support: "Supporto", copyright: "© 2026 RCKeyboard. Elsayed Khater." },
    subpage: { backHome: "← Torna alla Home", contactTitle: "Contatto & Supporto Sviluppatore", contactSub: "Informazioni ufficiali estratte da Google Play.", officialSite: "Sito Ufficiale", googlePlayListing: "Pagina Google Play", privacyTitle: "Informativa sulla Privacy", termsTitle: "Termini di Servizio", thanksTitle: "Grazie!", thanksSub: "Grazie per aver scelto RCKeyboard.", thanksBtn: "Scarica su Google Play", notfoundTitle: "Pagina Non Trovata", notfoundSub: "La pagina richiesta non esiste.", notfoundBtn: "Torna alla Home" }
  },
  hi: {
    meta: { lang: "hi", dir: "ltr" },
    nav: { features: "विशेषताएं", experience: "अनुभव", screenshots: "स्क्रीनशॉट", reviews: "समीक्षाएं", faq: "सवाल-जवाब", getApp: "ऐप डाउनलोड करें" },
    hero: { badge: "गूगल प्ले ऑफिशियल ऐप • rc.keyboard", title1: "बुद्धिमत्ता की गति से ", titleGradient: "टाइप करें", subtitle: "RCKeyboard एक उन्नत एंड्रॉइड कीबोर्ड है जो उच्च कोटलिन प्रदर्शन, स्मार्ट एआई संदर्भ पूर्वानुमान और 100% स्थानीय गोपनीयता प्रदान करता है।", downloadBtn: "गूगल प्ले पर डाउनलोड करें", exploreBtn: "विशेषताएं देखें", ratingLabel: "रेटिंग", downloadsLabel: "डाउनलोड", categoryLabel: "निजीकरण" },
    sections: { featuresTitle: "उत्कृष्टता के लिए निर्मित", featuresSub: "आधिकारिक गूगल प्ले लिस्टिंग से ली गई सभी विशेषताएं।", expTitle: "वास्तविक ऐप अनुभव", expSub: "सत्यापित ब्रेकडाउन।", screenshotsTitle: "आधिकारिक स्क्रीनशॉट", screenshotsSub: "इंटरफेस और थीम देखें।", reviewsTitle: "उपयोगकर्ता समीक्षाएं", reviewsSub: "गूगल प्ले स्टोर से ली गई समीक्षाएं।", faqTitle: "अक्सर पूछे जाने वाले प्रश्न", faqSub: "आधिकारिक उत्तर।", ctaTitle: "आज ही अपना एंड्रॉइड टाइपिंग अनुभव अपग्रेड करें", ctaSub: "100,000 से अधिक उपयोगकर्ताओं में शामिल हों।", ctaBtn: "गूगल प्ले पर मुफ्त डाउनलोड करें" },
    reviews: { snapshotBadge: "✓ गूगल प्ले सत्यापित समीक्षाएं", allRatings: "सभी रेटिंग", helpful: "उपयोगी", verified: "✓ सत्यापित समीक्षा", readMore: "और पढ़ें", showLess: "कम दिखाएं", devReply: "डेवलपर जवाब" },
    faq: { searchPlaceholder: "प्रश्न खोजें...", sourceLabel: "स्रोत" },
    infoGrid: { developer: "डेवलपर", category: "श्रेणी", version: "संस्करण", lastUpdated: "अंतिम अपडेट", released: "रिलीज की तारीख", realInstalls: "सत्यापित डाउनलोड", price: "मूल्य", inApp: "इन-ऐप खरीदारी", packageId: "पैकेज नाम", supportedLangs: "समर्थित भाषाएं", contentRating: "सामग्री रेटिंग", privacyPolicy: "गोपनीयता नीति", officialPolicy: "आधिकारिक नीति →" },
    stats: { totalDownloads: "कुल डाउनलोड", avgScore: "औसत स्कोर", verifiedRatings: "सत्यापित रेटिंग", onDevicePrivacy: "स्थानीय गोपनीयता" },
    theme: { selectTitle: "थीम मोड", light: "लाइट", dark: "डार्क", system: "सिस्टम डिफॉल्ट" },
    langModal: { title: "भाषा चुनें", searchPlaceholder: "भाषा खोजें...", close: "बंद करें" },
    footer: { description: "सर्वश्रेष्ठ स्मार्ट एंड्रॉइड कीबोर्ड।", navHeader: "नेविगेशन", legalHeader: "कानूनी व गोपनीयता", contactHeader: "डेवलपर संपर्क", privacyPolicy: "गोपनीयता नीति", terms: "सेवा की शर्तें", support: "डेवलपर सहायता", copyright: "© 2026 RCKeyboard. Elsayed Khater." },
    subpage: { backHome: "← होम पर वापस जाएं", contactTitle: "डेवलपर संपर्क व सहायता", contactSub: "गूगल प्ले से ली गई जानकारी।", officialSite: "आधिकारिक वेबसाइट", googlePlayListing: "गूगल प्ले पेज", privacyTitle: "गोपनीयता नीति", termsTitle: "सेवा की शर्तें", thanksTitle: "धन्यवाद!", thanksSub: "RCKeyboard का उपयोग करने के लिए धन्यवाद।", thanksBtn: "गूगल प्ले पर डाउनलोड करें", notfoundTitle: "पृष्ठ नहीं मिला", notfoundSub: "पृष्ठ मौजूद नहीं है।", notfoundBtn: "होम पर वापस जाएं" }
  },
  id: {
    meta: { lang: "id", dir: "ltr" },
    nav: { features: "Fitur", experience: "Pengalaman", screenshots: "Tangkapan Layar", reviews: "Ulasan", faq: "FAQ", getApp: "Unduh Aplikasi" },
    hero: { badge: "Aplikasi Resmi Google Play • rc.keyboard", title1: "Ketik pada ", titleGradient: "Kecepatan Intelijen", subtitle: "RCKeyboard adalah papan ketik Android canggih yang menggabungkan performa tinggi Kotlin, prediksi AI pintar, dan privasi lokal 100%.", downloadBtn: "Unduh di Google Play", exploreBtn: "Jelajahi Fitur", ratingLabel: "Penilaian", downloadsLabel: "Unduhan", categoryLabel: "Personalisasi" },
    sections: { featuresTitle: "Dirancang untuk Keunggulan", featuresSub: "Setiap fitur diambil dari deskripsi resmi Google Play.", expTitle: "Pengalaman Penggunaan Nyata", expSub: "Analisis visual kemampuan RCKeyboard.", screenshotsTitle: "Tangkapan Layar Resmi", screenshotsSub: "Jelajahi antarmuka dari Google Play.", reviewsTitle: "Ulasan Pengguna", reviewsSub: "Ulasan otentik dari Google Play Store.", faqTitle: "Pertanyaan Umum", faqSub: "Jawaban dari spesifikasi resmi.", ctaTitle: "Tingkatkan Pengalaman Ketik Anda", ctaSub: "Bergabunglah dengan lebih dari 100.000 pengguna.", ctaBtn: "Unduh Gratis di Google Play" },
    reviews: { snapshotBadge: "✓ Ulasan Terverifikasi Google Play", allRatings: "Semua Rating", helpful: "Membantu", verified: "✓ Ulasan Terverifikasi", readMore: "Baca Selengkapnya", showLess: "Tampilkan Sedikit", devReply: "Balasan Pengembang" },
    faq: { searchPlaceholder: "Cari FAQ...", sourceLabel: "Sumber" },
    infoGrid: { developer: "Pengembang", category: "Kategori", version: "Versi", lastUpdated: "Terakhir Diperbarui", released: "Tanggal Rilis", realInstalls: "Unduhan Terverifikasi", price: "Harga", inApp: "Pembelian Dalam Aplikasi", packageId: "Nama Paket", supportedLangs: "Bahasa yang Didukung", contentRating: "Rating Konten", privacyPolicy: "Kebijakan Privasi", officialPolicy: "Kebijakan Resmi →" },
    stats: { totalDownloads: "Total Unduhan", avgScore: "Skor Rata-Rata", verifiedRatings: "Ulasan Terverifikasi", onDevicePrivacy: "Privasi Lokal" },
    theme: { selectTitle: "Mode Tema", light: "Terang", dark: "Gelap", system: "Default Sistem" },
    langModal: { title: "Pilih Bahasa", searchPlaceholder: "Cari bahasa...", close: "Tutup" },
    footer: { description: "Papan ketik Android pintar terbaik.", navHeader: "Navigasi", legalHeader: "Hukum & Privasi", contactHeader: "Kontak Pengembang", privacyPolicy: "Kebijakan Privasi", terms: "Ketentuan Layanan", support: "Dukungan", copyright: "© 2026 RCKeyboard. Oleh Elsayed Khater." },
    subpage: { backHome: "← Kembali ke Beranda", contactTitle: "Kontak & Dukungan Pengembang", contactSub: "Informasi resmi dari Google Play.", officialSite: "Situs Resmi", googlePlayListing: "Halaman Google Play", privacyTitle: "Kebijakan Privasi", termsTitle: "Ketentuan Layanan", thanksTitle: "Terima Kasih!", thanksSub: "Terima kasih telah menggunakan RCKeyboard.", thanksBtn: "Unduh di Google Play", notfoundTitle: "Halaman Tidak Ditemukan", notfoundSub: "Halaman tidak ada.", notfoundBtn: "Kembali ke Beranda" }
  },
  ms: {
    meta: { lang: "ms", dir: "ltr" },
    nav: { features: "Ciri-ciri", experience: "Pengalaman", screenshots: "Tangkapan Skrin", reviews: "Ulasan", faq: "Soalan Lazim", getApp: "Muat Turun" },
    hero: { badge: "Aplikasi Rasmi Google Play • rc.keyboard", title1: "Taip pada ", titleGradient: "Kelajuan Inteligen", subtitle: "RCKeyboard ialah papan kekunci Android canggih yang menggabungkan prestasi tinggi Kotlin, ramalan AI pintar dan privasi 100% tempatan.", downloadBtn: "Muat Turun di Google Play", exploreBtn: "Terokai Ciri", ratingLabel: "Penarafan", downloadsLabel: "Muat Turun", categoryLabel: "Peribadi" },
    sections: { featuresTitle: "Direka untuk Kecemerlangan", featuresSub: "Setiap ciri diambil daripada penerangan Google Play.", expTitle: "Pengalaman Sebenar", expSub: "Pecahan visual keupayaan terbukti.", screenshotsTitle: "Tangkapan Skrin Rasmi", screenshotsSub: "Terokai antaramuka Google Play.", reviewsTitle: "Ulasan Pengguna", reviewsSub: "Ulasan tulen Google Play.", faqTitle: "Soalan Lazim", faqSub: "Jawapan daripada spesifikasi rasmi.", ctaTitle: "Tingkatkan Pengalaman Menaip Anda", ctaSub: "Sertai lebih 100,000 pengguna.", ctaBtn: "Muat Turun Percuma di Google Play" },
    reviews: { snapshotBadge: "✓ Ulasan Disahkan Google Play", allRatings: "Semua Penarafan", helpful: "Berguna", verified: "✓ Ulasan Disahkan", readMore: "Baca Lagi", showLess: "Tunjukkan Sedikit", devReply: "Balasan Pembangun" },
    faq: { searchPlaceholder: "Cari Soalan...", sourceLabel: "Sumber" },
    infoGrid: { developer: "Pembangun", category: "Kategori", version: "Versi", lastUpdated: "Kemas Kini Terakhir", released: "Tarikh Dikeluarkan", realInstalls: "Muat Turun Disahkan", price: "Harga", inApp: "Pembelian Dalam Aplikasi", packageId: "Nama Pakej", supportedLangs: "Bahasa Disokong", contentRating: "Penarafan Kandungan", privacyPolicy: "Dasar Privasi", officialPolicy: "Dasar Rasmi →" },
    stats: { totalDownloads: "Jumlah Muat Turun", avgScore: "Skor Purata", verifiedRatings: "Ulasan Disahkan", onDevicePrivacy: "Privasi Tempatan" },
    theme: { selectTitle: "Mod Tema", light: "Cerah", dark: "Gelap", system: "Lalai Sistem" },
    langModal: { title: "Pilih Bahasa", searchPlaceholder: "Cari bahasa...", close: "Tutup" },
    footer: { description: "Papan kekunci Android pintar terbaik.", navHeader: "Navigasi", legalHeader: "Undang-undang & Privasi", contactHeader: "Hubungi Pembangun", privacyPolicy: "Dasar Privasi", terms: "Syarat Perkhidmatan", support: "Sokongan", copyright: "© 2026 RCKeyboard. Elsayed Khater." },
    subpage: { backHome: "← Kembali ke Utama", contactTitle: "Hubungi & Sokongan Pembangun", contactSub: "Maklumat rasmi Google Play.", officialSite: "Laman Web Rasmi", googlePlayListing: "Halaman Google Play", privacyTitle: "Dasar Privasi", termsTitle: "Syarat Perkhidmatan", thanksTitle: "Terima Kasih!", thanksSub: "Terima kasih kerana menggunakan RCKeyboard.", thanksBtn: "Muat Turun di Google Play", notfoundTitle: "Halaman Tidak Ditemui", notfoundSub: "Halaman tidak wujud.", notfoundBtn: "Kembali ke Utama" }
  },
  vi: {
    meta: { lang: "vi", dir: "ltr" },
    nav: { features: "Tính năng", experience: "Trải nghiệm", screenshots: "Ảnh màn hình", reviews: "Đánh giá", faq: "Hỏi đáp", getApp: "Tải ứng dụng" },
    hero: { badge: "Ứng dụng Google Play chính thức • rc.keyboard", title1: "Gõ phím với ", titleGradient: "Tốc độ Thông minh", subtitle: "RCKeyboard là bàn phím Android tiên tiến kết hợp hiệu suất Kotlin cao, dự đoán ngữ cảnh AI thông minh và bảo mật 100% trên thiết bị.", downloadBtn: "Tải trên Google Play", exploreBtn: "Khám phá tính năng", ratingLabel: "Đánh giá", downloadsLabel: "Lượt tải", categoryLabel: "Cá nhân hóa" },
    sections: { featuresTitle: "Thiết kế cho sự Xuất sắc", featuresSub: "Mọi tính năng được trích xuất từ Google Play.", expTitle: "Trải nghiệm Ứng dụng Thực tế", expSub: "Tổng quan tính năng được xác thực.", screenshotsTitle: "Ảnh chụp Màn hình Chính thức", screenshotsSub: "Khám phá giao diện từ Google Play.", reviewsTitle: "Đánh giá từ Người dùng", reviewsSub: "Đánh giá thực tế từ Google Play Store.", faqTitle: "Câu hỏi Thường gặp", faqSub: "Câu trả lời từ tài liệu chính thức.", ctaTitle: "Nâng cấp trải nghiệm gõ phím ngay", ctaSub: "Tham gia cùng hơn 100.000 người dùng.", ctaBtn: "Tải miễn phí trên Google Play" },
    reviews: { snapshotBadge: "✓ Đánh giá đã xác thực Google Play", allRatings: "Tất cả đánh giá", helpful: "Hữu ích", verified: "✓ Đánh giá đã xác thực", readMore: "Xem thêm", showLess: "Thu gọn", devReply: "Phản hồi từ Nhà phát triển" },
    faq: { searchPlaceholder: "Tìm câu hỏi...", sourceLabel: "Nguồn" },
    infoGrid: { developer: "Nhà phát triển", category: "Danh mục", version: "Phiên bản", lastUpdated: "Cập nhật lần cuối", released: "Ngày phát hành", realInstalls: "Lượt tải đã xác thực", price: "Giá", inApp: "Mua trong ứng dụng", packageId: "Tên gói", supportedLangs: "Ngôn ngữ hỗ trợ", contentRating: "Xếp hạng nội dung", privacyPolicy: "Chính sách quyền riêng tư", officialPolicy: "Chính sách chính thức →" },
    stats: { totalDownloads: "Tổng lượt tải", avgScore: "Điểm trung bình", verifiedRatings: "Đánh giá đã xác thực", onDevicePrivacy: "Bảo mật trên thiết bị" },
    theme: { selectTitle: "Chế độ Chủ đề", light: "Sáng", dark: "Tối", system: "Mặc định hệ thống" },
    langModal: { title: "Chọn Ngôn ngữ", searchPlaceholder: "Tìm ngôn ngữ...", close: "Đóng" },
    footer: { description: "Bàn phím Android thông minh hàng đầu.", navHeader: "Điều hướng", legalHeader: "Pháp lý & Quyền riêng tư", contactHeader: "Liên hệ", privacyPolicy: "Chính sách Quyền riêng tư", terms: "Điều khoản Dịch vụ", support: "Hỗ trợ", copyright: "© 2026 RCKeyboard. Elsayed Khater." },
    subpage: { backHome: "← Quay lại Trang chủ", contactTitle: "Liên hệ & Hỗ trợ Nhà phát triển", contactSub: "Thông tin chính thức từ Google Play.", officialSite: "Trang web chính thức", googlePlayListing: "Trang Google Play", privacyTitle: "Chính sách Quyền riêng tư", termsTitle: "Điều khoản Dịch vụ", thanksTitle: "Cảm ơn bạn!", thanksSub: "Cảm ơn bạn đã sử dụng RCKeyboard.", thanksBtn: "Tải trên Google Play", notfoundTitle: "Không tìm thấy trang", notfoundSub: "Trang không tồn tại.", notfoundBtn: "Quay lại Trang chủ" }
  },
  th: {
    meta: { lang: "th", dir: "ltr" },
    nav: { features: "คุณสมบัติ", experience: "ประสบการณ์", screenshots: "ภาพหน้าจอ", reviews: "รีวิว", faq: "คำถามที่พบบ่อย", getApp: "ดาวน์โหลดแอป" },
    hero: { badge: "แอปพลิเคชันอย่างเป็นทางการบน Google Play • rc.keyboard", title1: "พิมพ์ด้วย ", titleGradient: "ความเร็วแห่งอัจฉริยภาพ", subtitle: "RCKeyboard เป็นคีย์บอร์ด Android ขั้นสูงที่รวมประสิทธิภาพสูงของ Kotlin การทำนายบริบทอัจฉริยะด้วย AI และความเป็นส่วนตัวในเครื่อง 100%", downloadBtn: "ดาวน์โหลดบน Google Play", exploreBtn: "สำรวจคุณสมบัติ", ratingLabel: "คะแนน", downloadsLabel: "ยอดดาวน์โหลด", categoryLabel: "การปรับแต่ง" },
    sections: { featuresTitle: "ออกแบบมาเพื่อความเป็นเลิศ", featuresSub: "ทุกคุณสมบัติสกัดมาจากคำอธิบายบน Google Play", expTitle: "ประสบการณ์การใช้งานจริง", expSub: "ภาพรวมความสามารถหลักที่ได้รับการตรวจสอบแล้ว", screenshotsTitle: "ภาพหน้าจออย่างเป็นทางการ", screenshotsSub: "สำรวจอินเทอร์เฟซจาก Google Play", reviewsTitle: "รีวิวและความคิดเห็นจากผู้ใช้", reviewsSub: "รีวิวจริงจาก Google Play Store", faqTitle: "คำถามที่พบบ่อย", faqSub: "คำตอบจากข้อมูลอย่างเป็นทางการ", ctaTitle: "ยกระดับการพิมพ์บน Android ของคุณวันนี้", ctaSub: "เข้าร่วมกับผู้ใช้มากกว่า 100,000 คน", ctaBtn: "ดาวน์โหลดฟรีบน Google Play" },
    reviews: { snapshotBadge: "✓ รีวิวที่ได้รับการตรวจสอบแล้วจาก Google Play", allRatings: "คะแนนทั้งหมด", helpful: "มีประโยชน์", verified: "✓ รีวิวจริง", readMore: "อ่านเพิ่มเติม", showLess: "แสดงน้อยลง", devReply: "การตอบกลับจากผู้พัฒนา" },
    faq: { searchPlaceholder: "ค้นหาคำถาม...", sourceLabel: "ที่มา" },
    infoGrid: { developer: "ผู้พัฒนา", category: "หมวดหมู่", version: "เวอร์ชัน", lastUpdated: "อัปเดตล่าสุด", released: "วันที่เปิดตัว", realInstalls: "ดาวน์โหลดที่ตรวจสอบแล้ว", price: "ราคา", inApp: "การซื้อในแอป", packageId: "ชื่อแพ็กเกจ", supportedLangs: "ภาษาที่รองรับ", contentRating: "การจัดระดับเนื้อหา", privacyPolicy: "นโยบายความเป็นส่วนตัว", officialPolicy: "นโยบายอย่างเป็นทางการ →" },
    stats: { totalDownloads: "ยอดดาวน์โหลดทั้งหมด", avgScore: "คะแนนเฉลี่ย", verifiedRatings: "รีวิวที่ได้รับการตรวจสอบ", onDevicePrivacy: "ความเป็นส่วนตัวในเครื่อง" },
    theme: { selectTitle: "โหมดธีม", light: "สว่าง", dark: "มืด", system: "ตามระบบ" },
    langModal: { title: "เลือกภาษา", searchPlaceholder: "ค้นหาภาษา...", close: "ปิด" },
    footer: { description: "คีย์บอร์ด Android อัจฉริยะขั้นสุด", navHeader: "การนำทาง", legalHeader: "กฎหมายและความเป็นส่วนตัว", contactHeader: "ติดต่อผู้พัฒนา", privacyPolicy: "นโยบายความเป็นส่วนตัว", terms: "ข้อกำหนดการให้บริการ", support: "ฝ่ายสนับสนุน", copyright: "© 2026 RCKeyboard. โดย Elsayed Khater" },
    subpage: { backHome: "← กลับสู่หน้าหลัก", contactTitle: "ติดต่อและสนับสนุนผู้พัฒนา", contactSub: "ข้อมูลอย่างเป็นทางการจาก Google Play", officialSite: "เว็บไซต์อย่างเป็นทางการ", googlePlayListing: "หน้า Google Play", privacyTitle: "นโยบายความเป็นส่วนตัว", termsTitle: "ข้อกำหนดการให้บริการ", thanksTitle: "ขอบคุณ!", thanksSub: "ขอบคุณที่ใช้ RCKeyboard", thanksBtn: "ดาวน์โหลดบน Google Play", notfoundTitle: "ไม่พบหน้าเว็บ", notfoundSub: "ไม่พบหน้าเว็บที่คุณต้องการ", notfoundBtn: "กลับสู่หน้าหลัก" }
  },
  "zh-TW": {
    meta: { lang: "zh-TW", dir: "ltr" },
    nav: { features: "核心功能", experience: "應用體驗", screenshots: "應用截圖", reviews: "用戶評價", faq: "常見問題", getApp: "下載應用" },
    hero: { badge: "Google Play 官方應用 • rc.keyboard", title1: "體驗 ", titleGradient: "智能極致打字速度", subtitle: "RCKeyboard 是一款先進的 Android 智能鍵盤，結合 Kotlin 原生高性能、AI 上下文預測與 100% 本地隱私保護。", downloadBtn: "前往 Google Play 下載", exploreBtn: "探索核心功能", ratingLabel: "應用評分", downloadsLabel: "下載總量", categoryLabel: "個性化" },
    sections: { featuresTitle: "專為卓越性能打造", featuresSub: "各項功能均直接源自 Google Play 官方說明。", expTitle: "真實應用體驗", expSub: "核心功能直觀展示。", screenshotsTitle: "官方應用截圖", screenshotsSub: "探索清爽界面與主題。", reviewsTitle: "真實用戶評價", reviewsSub: "直接提取自 Google Play 頁面的真實驗證評價。", faqTitle: "常見問題解答", faqSub: "解答均源自官方說明。", ctaTitle: "立即提升您的 Android 打字體驗", ctaSub: "加入超過 100,000 名用戶的行列。", ctaBtn: "在 Google Play 免費下載" },
    reviews: { snapshotBadge: "✓ Google Play 真實評價快照", allRatings: "所有評分", helpful: "贊同", verified: "✓ 已驗證評價", readMore: "展開閱讀", showLess: "收起", devReply: "開發者回覆" },
    faq: { searchPlaceholder: "搜尋常見問題...", sourceLabel: "來源" },
    infoGrid: { developer: "開發者", category: "應用類別", version: "當前版本", lastUpdated: "最近更新", released: "發布日期", realInstalls: "真實下載量", price: "價格", inApp: "應用內購買", packageId: "包名", supportedLangs: "支持語言", contentRating: "分級", privacyPolicy: "隱私政策", officialPolicy: "官方政策連結 →" },
    stats: { totalDownloads: "總下載量", avgScore: "平均評分", verifiedRatings: "驗證評價數", onDevicePrivacy: "本地設備隱私" },
    theme: { selectTitle: "主題模式", light: "淺色", dark: "深色", system: "隨系統" },
    langModal: { title: "選擇語言", searchPlaceholder: "搜尋語言...", close: "關閉" },
    footer: { description: "終極智能 Android 鍵盤。採用 Kotlin 原生開發，兼具速度與隱私。", navHeader: "導航", legalHeader: "法律與隱私", contactHeader: "開發者聯繫方式", privacyPolicy: "隱私政策", terms: "服務條款", support: "開發者支持", copyright: "© 2026 RCKeyboard. Elsayed Khater 官方 Android 鍵盤。" },
    subpage: { backHome: "← 返回首頁", contactTitle: "開發者聯繫與支持", contactSub: "官方聯繫資訊提取自 Google Play 頁面。", officialSite: "官方網站", googlePlayListing: "Google Play 頁面", privacyTitle: "隱私政策", termsTitle: "服務條款", thanksTitle: "感謝使用！", thanksSub: "感謝使用 RCKeyboard。", thanksBtn: "在 Google Play 下載", notfoundTitle: "頁面未找到", notfoundSub: "您訪問的頁面不存在。", notfoundBtn: "返回首頁" }
  }
};

// Application Global State
let appData = { info: null, features: [], experience: [], screenshots: [], reviews: [], faq: [] };
let languagesManifest = FALLBACK_MANIFEST;
let currentLang = 'en';
let localeDict = EMBEDDED_LOCALES['en'];

let currentReviewRatingFilter = 'ALL';
let currentReviewPage = 0;
const REVIEWS_PER_PAGE = 3;
let currentModalImageIdx = 0;

// Safe Storage Helpers
function safeGetStorage(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
}
function safeSetStorage(key, value) {
    try { localStorage.setItem(key, value); } catch (e) {}
}

// Universal Nested Property Retrieval
function getNestedTranslation(key) {
    if (!key) return null;
    const parts = key.split('.');
    let curr = localeDict;
    for (const p of parts) {
        if (curr && curr[p] !== undefined) {
            curr = curr[p];
        } else {
            curr = null;
            break;
        }
    }
    if (curr) return curr;

    // Fallback to English dictionary if key missing in current language
    let fallbackCurr = EMBEDDED_LOCALES['en'];
    for (const p of parts) {
        if (fallbackCurr && fallbackCurr[p] !== undefined) {
            fallbackCurr = fallbackCurr[p];
        } else {
            return null;
        }
    }
    return fallbackCurr;
}

// Global Window Event Handlers
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
    if (window.switchLanguage) window.switchLanguage(code, true);
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
    currentReviewRatingFilter = rating;
    currentReviewPage = 0;
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
        currentReviewPage--;
        renderReviews();
    }
};

window.nextReviewPage = function() {
    currentReviewPage++;
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
    currentModalImageIdx = idx;
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
    currentModalImageIdx = (currentModalImageIdx + dir + list.length) % list.length;
    const item = list[currentModalImageIdx];
    const imgUrl = item.localUrl || item.remoteUrl || item;
    const modalImg = document.getElementById('modalImg');
    if (modalImg) modalImg.src = imgUrl;
};

// Application Bootstrapping
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

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

// 4. Theme Management Engine
window.toggleTheme = function() {
    const isLight = document.documentElement.classList.contains('light-mode') || document.body?.classList.contains('light-mode');
    const newTheme = isLight ? 'dark' : 'light';
    applyTheme(newTheme);
    safeSetStorage('user_theme', newTheme);
};

function applyTheme(theme) {
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

function initThemeSystem() {
    const savedTheme = safeGetStorage('user_theme');
    const systemDarkMedia = window.matchMedia('(prefers-color-scheme: dark)');
    
    let effectiveTheme = savedTheme ? savedTheme : (systemDarkMedia.matches ? 'dark' : 'light');
    applyTheme(effectiveTheme);

    systemDarkMedia.addEventListener('change', (e) => {
        if (!safeGetStorage('user_theme')) {
            applyTheme(e.matches ? 'dark' : 'light');
        }
    });

    const themeToggles = document.querySelectorAll('#themeToggle, .theme-toggle-btn');
    themeToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            window.toggleTheme();
        });
    });
}

// 5. Universal Localization Engine
async function fetchManifest() {
    try {
        const res = await fetch('./locales/manifest.json');
        if (res.ok) {
            languagesManifest = await res.json();
            return;
        }
    } catch (e) {}
    languagesManifest = FALLBACK_MANIFEST;
}

async function detectAndInitLanguage() {
    const saved = safeGetStorage('lang');
    if (saved) {
        currentLang = saved;
    } else {
        const browserLangs = navigator.languages || [navigator.language || 'en'];
        let matched = 'en';
        if (languagesManifest && languagesManifest.length) {
            for (const bl of browserLangs) {
                const code = bl.split('-')[0].toLowerCase();
                const match = languagesManifest.find(m => m.code === bl || m.code === code);
                if (match) {
                    matched = match.code;
                    break;
                }
            }
        }
        currentLang = matched;
    }
    await switchLanguage(currentLang, false);
}

async function loadLocale(lang) {
    let loadedDict = null;
    try {
        const res = await fetch(`./locales/${lang}.json`);
        if (res.ok) {
            loadedDict = await res.json();
        }
    } catch (e) {}

    if (!loadedDict) {
        if (EMBEDDED_LOCALES[lang]) {
            loadedDict = EMBEDDED_LOCALES[lang];
        } else if (EMBEDDED_LOCALES[lang.toLowerCase()]) {
            loadedDict = EMBEDDED_LOCALES[lang.toLowerCase()];
        } else {
            loadedDict = EMBEDDED_LOCALES['en'];
        }
    }

    localeDict = loadedDict;
    currentLang = lang;

    const manifestToUse = (languagesManifest && languagesManifest.length) ? languagesManifest : FALLBACK_MANIFEST;
    let meta = manifestToUse.find(m => m.code === lang || m.code.toLowerCase() === lang.toLowerCase());
    if (!meta) {
        meta = FALLBACK_MANIFEST.find(m => m.code === lang || m.code.toLowerCase() === lang.toLowerCase());
    }
    const isRtl = meta ? (meta.dir === 'rtl') : (lang === 'ar' || lang === 'ur');

    document.documentElement.lang = lang;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    if (document.body) {
        if (isRtl) document.body.classList.add('rtl');
        else document.body.classList.remove('rtl');
    }

    const currentFlagEls = document.querySelectorAll('#currentLangFlag');
    const currentNameEls = document.querySelectorAll('#currentLangName');
    if (meta) {
        currentFlagEls.forEach(el => el.textContent = meta.flag);
        currentNameEls.forEach(el => el.textContent = meta.nativeName);
    }
}

window.switchLanguage = async function(lang, save = true) {
    try {
        await loadLocale(lang);
        if (save) safeSetStorage('lang', lang);

        const tasks = [
            applyTranslations,
            renderAppInfo,
            renderFeatures,
            renderExperience,
            renderAppDescription,
            renderScreenshots,
            renderReviews,
            renderFAQ,
            () => renderLangGrid(languagesManifest),
            initObserver
        ];

        for (const task of tasks) {
            try { task(); } catch (e) {}
        }
    } catch (e) {
        console.warn("Language switch warning:", e);
    }
};

// Safe DOM Translation Application
function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translated = getNestedTranslation(key);
        if (!translated) return;

        const pulse = el.querySelector('.pulse');
        const chevron = el.querySelector('.chevron');
        const svg = el.querySelector('svg');

        if (pulse) {
            el.innerHTML = '<span class="pulse"></span> ' + escapeHtml(translated);
        } else if (chevron) {
            el.innerHTML = escapeHtml(translated) + ' <span class="chevron">▾</span>';
        } else if (svg) {
            el.innerHTML = svg.outerHTML + ' ' + escapeHtml(translated);
        } else {
            el.textContent = translated;
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        const translated = getNestedTranslation(key);
        if (translated) {
            el.setAttribute('placeholder', translated);
        }
    });
}

function renderLangGrid(list) {
    const grid = document.getElementById('langListGrid');
    if (!grid) return;
    
    const manifestToUse = (list && list.length) ? list : FALLBACK_MANIFEST;

    grid.innerHTML = manifestToUse.map(item => `
        <button class="lang-item-btn ${item.code === currentLang ? 'active' : ''}" onclick="selectLangFromModal('${item.code}')">
            <span class="lang-flag">${item.flag}</span>
            <span>${escapeHtml(item.nativeName)} <small style="opacity: 0.7;">(${escapeHtml(item.name)})</small></span>
        </button>
    `).join('');
}

// 6. Data Services
async function fetchAllData() {
    try {
        const [appRes, featRes, expRes, scrRes, revRes, faqRes] = await Promise.all([
            fetch('./data/app.json').catch(() => fetch('./data/app_info.json')).catch(() => null),
            fetch('./data/features.json').catch(() => null),
            fetch('./data/experience.json').catch(() => null),
            fetch('./data/screenshots.json').catch(() => null),
            fetch('./data/reviews.json').catch(() => null),
            fetch('./data/faq.json').catch(() => null)
        ]);

        if (appRes && appRes.ok) appData.info = await appRes.json();
        if (featRes && featRes.ok) appData.features = await featRes.json();
        if (expRes && expRes.ok) appData.experience = await expRes.json();
        if (scrRes && scrRes.ok) appData.screenshots = await scrRes.json();
        if (revRes && revRes.ok) {
            const revJson = await revRes.json();
            appData.reviews = revJson.reviews || revJson;
        }
        if (faqRes && faqRes.ok) appData.faq = await faqRes.json();
    } catch (e) {}
}

// 7. Dynamic UI Component Renderers
function renderAppInfo() {
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

function renderFeatures() {
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

function renderExperience() {
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

function renderAppDescription() {
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

function renderScreenshots() {
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

function renderReviews() {
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

function renderFAQ() {
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

function escapeHtml(str) {
    if (!str) return '';
    return str.toString().replace(/&/g, '&amp;')
              .replace(/</g, '&lt;')
              .replace(/>/g, '&gt;')
              .replace(/"/g, '&quot;')
              .replace(/'/g, '&#039;');
}

// 8. Interactive Controls & Accessibility Handlers
function initInteractivity() {
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

// 9. Intersection Observer for Scroll Reveals
function initObserver() {
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-fade');
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.05 });

    revealElements.forEach(el => observer.observe(el));
}
