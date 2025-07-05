(function() {
    const THEME_KEY = 'preferred-theme';
    
    function getStoredTheme() {
        return localStorage.getItem(THEME_KEY);
    }
    
    function storeTheme(theme) {
        localStorage.setItem(THEME_KEY, theme);
    }
    
    function getSystemTheme() {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    
    function getCurrentTheme() {
        return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    }
    
    function getInitialTheme() {
        const storedTheme = getStoredTheme();
        return (storedTheme === 'light' || storedTheme === 'dark') ? storedTheme : getSystemTheme();
    }
    
    function applyTheme(theme) {
        document.documentElement.classList.toggle('dark', theme === 'dark');
        document.documentElement.setAttribute('data-theme', theme);
    }
    
    function updateThemeToggle(theme) {
        document.querySelectorAll('.theme-toggle button').forEach(btn => {
            const isActive = btn.dataset.theme === theme;
            btn.classList.toggle('bg-white', isActive && theme === 'light');
            btn.classList.toggle('dark:bg-gray-800', isActive);
            btn.classList.toggle('text-gray-900', isActive && theme === 'light');
            btn.classList.toggle('dark:text-white', isActive);
            btn.classList.toggle('shadow-sm', isActive);
            btn.classList.toggle('text-gray-500', !isActive);
            btn.classList.toggle('dark:text-gray-400', !isActive);
        });
    }
    
    function setTheme(theme) {
        applyTheme(theme);
        storeTheme(theme);
        updateThemeToggle(theme);
    }
    
    function initializeTheme() {
        const theme = getInitialTheme();
        applyTheme(theme);
        
        document.addEventListener('DOMContentLoaded', () => {
            updateThemeToggle(theme);
            
            document.addEventListener('click', (e) => {
                const themeButton = e.target.closest('.theme-toggle button');
                if (themeButton && themeButton.dataset.theme) {
                    setTheme(themeButton.dataset.theme);
                }
            });
        });
    }
    
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!getStoredTheme()) {
            const newTheme = e.matches ? 'dark' : 'light';
            applyTheme(newTheme);
            updateThemeToggle(newTheme);
        }
    });
    
    initializeTheme();
    
    window.setTheme = setTheme;
    window.getCurrentTheme = getCurrentTheme;
    window.updateThemeToggle = updateThemeToggle;
})();