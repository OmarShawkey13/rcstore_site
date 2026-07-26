export let globalObserver = null;

export function initObserver() {
    if (globalObserver) {
        globalObserver.disconnect();
    }
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-fade');
    globalObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.05 });

    revealElements.forEach(el => globalObserver.observe(el));
}
