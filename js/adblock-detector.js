(function () {
    /**
     * RCMods Advanced AdBlock & DNS Shield - v2.1 (Stability Patch)
     * Optimized for high-precision detection and modern blocker bypass.
     */

    const INITIAL_DELAY = 800;
    const POLL_INTERVAL = 2000;
    const UNBLOCK_CONFIRMATIONS_REQUIRED = 2; // Must be unblocked for 2 consecutive checks to reload

    let unblockCount = 0;
    let isModalActive = false;

    // Detection Layer 1: DNS & Network
    async function checkNetwork() {
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 3500);

            // Ping a highly-blocked ad domain with cache busting
            await fetch('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?cb=' + Date.now(), {
                method: 'HEAD',
                mode: 'no-cors',
                cache: 'no-store',
                signal: controller.signal
            });
            clearTimeout(timeoutId);
            return false; // Not blocked
        } catch (e) {
            return true; // Blocked
        }
    }

    // Detection Layer 2: CSS Baiting (Advanced)
    function checkVisual() {
        const baitClasses = ['adsbox', 'ad-unit', 'adsbygoogle', 'sponsored-content-panel', 'ad-zone'];
        const container = document.createElement('div');
        // Randomize container ID to avoid automated hiding rules
        container.id = 'rc_' + Math.random().toString(36).substring(7);
        container.style.cssText = 'position:fixed;top:-999px;left:-999px;width:1px;height:1px;opacity:0;pointer-events:none;';

        const baits = baitClasses.map(c => {
            const b = document.createElement('div');
            b.className = c;
            b.style.cssText = 'width:10px;height:10px;display:block !important;';
            container.appendChild(b);
            return b;
        });

        document.body.appendChild(container);

        let isBlocked = false;
        try {
            for (let b of baits) {
                const s = window.getComputedStyle(b);
                if (s.display === 'none' || s.visibility === 'hidden' || s.opacity === '0' || b.offsetHeight === 0) {
                    isBlocked = true;
                    break;
                }
            }
        } catch (e) { isBlocked = true; }

        document.body.removeChild(container);
        return isBlocked;
    }

    async function performDetection() {
        if (checkVisual()) return true;
        return await checkNetwork();
    }

    function showRCModal() {
        if (isModalActive) return;
        isModalActive = true;

        const overlayId = 'rc_ov_' + Math.random().toString(36).substring(7);
        const cardId = 'rc_cd_' + Math.random().toString(36).substring(7);

        const css = `
            #${overlayId} {
                position: fixed; inset: 0; z-index: 2147483647;
                background: rgba(5, 6, 9, 0.94);
                display: flex; align-items: center; justify-content: center;
                padding: 20px; backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px);
                font-family: 'Inter', system-ui, -apple-system, sans-serif;
                animation: rcFadeIn 0.5s ease-out forwards;
            }
            #${cardId} {
                width: 100%; max-width: 480px;
                background: linear-gradient(165deg, #0a0d16 0%, #050609 100%);
                border: 1px solid rgba(129, 140, 248, 0.2);
                border-radius: 32px; padding: 45px 35px;
                text-align: center; color: #f8fafc;
                box-shadow: 0 50px 100px rgba(0,0,0,0.7), 0 0 50px rgba(129, 140, 248, 0.1);
            }
            .rc-ab-icon {
                width: 80px; height: 80px; background: rgba(129, 140, 248, 0.12);
                border-radius: 24px; display: flex; align-items: center; justify-content: center;
                margin: 0 auto 30px; color: #818cf8;
                border: 1px solid rgba(129, 140, 248, 0.25);
            }
            #${cardId} h2 {
                font-size: 26px; font-weight: 800; margin: 0 0 18px;
                background: linear-gradient(135deg, #fff 0%, #cbd5e1 100%);
                -webkit-background-clip: text; -webkit-text-fill-color: transparent;
                letter-spacing: -0.02em;
            }
            #${cardId} p {
                color: #cbd5e1; line-height: 1.8; font-size: 16px; margin: 0 0 30px;
            }
            .rc-ab-status {
                display: flex; align-items: center; justify-content: center; gap: 12px;
                font-size: 14px; color: #64748b; font-weight: 500;
            }
            .rc-spinner {
                width: 16px; height: 16px; border: 2.5px solid rgba(129, 140, 248, 0.2);
                border-top-color: #818cf8; border-radius: 50%;
                animation: rcSpin 0.8s linear infinite;
            }
            @keyframes rcFadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
            @keyframes rcSpin { to { transform: rotate(360deg); } }
            @media (max-width: 480px) {
                #${cardId} { padding: 35px 20px; }
                #${cardId} h2 { font-size: 22px; }
            }
        `;

        const html = `
            <style>${css}</style>
            <div id="${overlayId}">
                <div id="${cardId}">
                    <div class="rc-ab-icon">
                        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                    </div>
<<<<<<< HEAD
                    <h2>Adblocker Detected</h2>
                    <p>This site relies on ads to keep the mods free. Please disable your <b>Adblocker</b> or <b>Private DNS</b> to continue.</p>
                    <div class="rc-ab-status">
                        <div class="rc-spinner"></div>
                        <span>Verifying connection...</span>
=======
                    <h2>تم اكتشاف مانع الإعلانات</h2>
                    <p>الموقع يعتمد على الإعلانات لتوفير المودات مجاناً. يرجى تعطيل <b>Private DNS</b> أو مانع الإعلانات للمتابعة.</p>
                    <div class="rc-ab-status">
                        <div class="rc-spinner"></div>
                        <span>جاري التحقق من الاتصال تلقائياً...</span>
>>>>>>> 9e9578e481f552a1e93e475c7a7ba490d606a980
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', html);
        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';

        // Re-check loop with confirmation
        const poll = async () => {
            const blocked = await performDetection();
            if (!blocked) {
                unblockCount++;
                if (unblockCount >= UNBLOCK_CONFIRMATIONS_REQUIRED) {
                    location.reload();
                } else {
                    setTimeout(poll, 1000); // Check again faster to confirm
                }
            } else {
                unblockCount = 0; // Reset if still blocked
                setTimeout(poll, POLL_INTERVAL);
            }
        };
        setTimeout(poll, 2500);
    }

    async function init() {
        setTimeout(async () => {
            const blocked = await performDetection();
            if (blocked) {
                showRCModal();
            } else {
<<<<<<< HEAD
                // Smart stealth monitor: only check when user returns to the tab
                document.addEventListener('visibilitychange', async () => {
                    if (document.visibilityState === 'visible' && !isModalActive) {
                        if (await performDetection()) showRCModal();
                    }
                });
=======
                // Background stealth monitor
                setInterval(async () => {
                    if (await performDetection()) showRCModal();
                }, 10000);
>>>>>>> 9e9578e481f552a1e93e475c7a7ba490d606a980
            }
        }, INITIAL_DELAY);
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();

})();
