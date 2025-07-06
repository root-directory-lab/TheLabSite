function initBackToTop() {
    const backToTopButton = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 0) {
            backToTopButton.classList.remove('hidden');
        } else {
            backToTopButton.classList.add('hidden');
        }
    }, { passive: true });
    
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function initTheme() {
    const savedTheme = sessionStorage.getItem('theme') || localStorage.getItem('theme');
    
    if (savedTheme) {
        applyTheme(savedTheme);
        updateThemeToggle(savedTheme);
    } else {
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const defaultTheme = systemPrefersDark ? 'dark' : 'light';
        localStorage.setItem('theme', defaultTheme);
        applyTheme(defaultTheme);
        updateThemeToggle(defaultTheme);
    }
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
}

function setTheme(theme) {
    sessionStorage.setItem('theme', theme);
    localStorage.setItem('theme', theme);
    applyTheme(theme);
    updateThemeToggle(theme);
}

function updateThemeToggle(theme) {
    document.querySelectorAll('.theme-toggle button').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.theme === theme) {
            btn.classList.add('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    initBackToTop();
});