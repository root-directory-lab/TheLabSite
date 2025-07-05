(function() {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
})();

function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    applyTheme(theme);
    updateThemeToggle(theme);
}

function applyTheme(theme) {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
    
    const elements = document.querySelectorAll('[class*="dark:"], [class*="light:"]');
    elements.forEach(el => {
        el.classList.remove('light', 'dark');
        el.classList.add(theme);
    });
}

function setTheme(theme) {
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

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        const theme = e.matches ? 'dark' : 'light';
        applyTheme(theme);
        updateThemeToggle(theme);
    }
});

document.addEventListener('DOMContentLoaded', initTheme);