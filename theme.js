(function() {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
})();

function getCurrentTheme() {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return savedTheme || (systemPrefersDark ? 'dark' : 'light');
}

function applyTheme(theme) {
    const elements = [document.documentElement, document.body];
    const pagecell = document.getElementById('pagecell1');
    
    if (pagecell) {
        elements.push(pagecell);
    }
    
    elements.forEach(el => {
        if (el) {
            el.classList.remove('light');
            el.classList.remove('dark');
            void el.offsetHeight;
            el.classList.add(theme);
        }
    });
    
    const themedElements = document.querySelectorAll('.light, .dark');
    themedElements.forEach(el => {
        el.classList.remove('light', 'dark');
        el.classList.add(theme);
    });
}

function updateThemeToggle(theme) {
    const buttons = document.querySelectorAll('.theme-toggle button');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.theme === theme) {
            btn.classList.add('active');
        }
    });
}

function setTheme(theme) {
    localStorage.setItem('theme', theme);
    applyTheme(theme);
    updateThemeToggle(theme);
}

function initTheme() {
    const theme = getCurrentTheme();
    applyTheme(theme);
    
    const observer = new MutationObserver((mutations) => {
        const themeButtons = document.querySelectorAll('.theme-toggle button');
        if (themeButtons.length > 0) {
            updateThemeToggle(theme);
            observer.disconnect();
        }
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
    
    requestAnimationFrame(() => {
        updateThemeToggle(theme);
    });
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        const theme = e.matches ? 'dark' : 'light';
        applyTheme(theme);
        updateThemeToggle(theme);
    }
});

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
} else {
    initTheme();
}

window.setTheme = setTheme;