(function() {
    const THEME_KEY = 'theme-preference';
    
    const getThemePreference = () => {
        if (localStorage.getItem(THEME_KEY)) {
            return localStorage.getItem(THEME_KEY);
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };
    
    const setPreference = (theme) => {
        localStorage.setItem(THEME_KEY, theme);
        reflectPreference();
    };
    
    const reflectPreference = () => {
        const theme = getThemePreference();
        
        document.documentElement.setAttribute('data-theme', theme);
        
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        
        document.querySelector('#theme-toggle')?.setAttribute('aria-label', theme);
    };
    
    const toggleTheme = () => {
        const currentTheme = getThemePreference();
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setPreference(newTheme);
    };
    
    reflectPreference();
    
    window.addEventListener('DOMContentLoaded', () => {
        const toggle = document.querySelector('#theme-toggle');
        if (toggle) {
            toggle.addEventListener('click', toggleTheme);
        }
    });
    
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ({matches: isDark}) => {
        if (!localStorage.getItem(THEME_KEY)) {
            setPreference(isDark ? 'dark' : 'light');
        }
    });
    
    window.toggleTheme = toggleTheme;
})();