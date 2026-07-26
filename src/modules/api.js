import { appData, setAppData } from './state.js';

// 6. Data Services
export async function fetchAllData() {
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

