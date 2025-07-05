(function() {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = systemPrefersDark ? 'dark' : 'light';
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
})();

function initTheme() {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = systemPrefersDark ? 'dark' : 'light';
    applyTheme(theme);
    updateThemeToggle(theme);
}

function applyTheme(theme) {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
}

function setTheme(theme) {
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
    const theme = e.matches ? 'dark' : 'light';
    applyTheme(theme);
    updateThemeToggle(theme);
});

document.addEventListener('DOMContentLoaded', initTheme);