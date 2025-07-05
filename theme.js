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
        if (storedTheme && (storedTheme === 'light' || storedTheme === 'dark')) {
            return storedTheme;
        }
        
        return getSystemTheme();
    }
    
    function applyTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }
    
    function updateThemeToggle(theme) {
        const buttons = document.querySelectorAll('.theme-toggle button');
        buttons.forEach(btn => {
            const baseClasses = 'p-1.5 rounded-full hover:text-gray-700 dark:hover:text-gray-200';
            if (btn.dataset.theme === theme) {
                const activeClasses = 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm';
                btn.className = `${baseClasses} ${activeClasses}`;
            } else {
                const inactiveClasses = 'text-gray-500 dark:text-gray-400';
                btn.className = `${baseClasses} ${inactiveClasses}`;
            }
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
        });
    }
    
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        const storedTheme = getStoredTheme();
        if (!storedTheme) {
            const newTheme = e.matches ? 'dark' : 'light';
            applyTheme(newTheme);
            updateThemeToggle(newTheme);
        }
    });
    
    initializeTheme();
    
    window.setTheme = setTheme;
    window.updateThemeToggle = updateThemeToggle;
    window.getCurrentTheme = getCurrentTheme;
})();