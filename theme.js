// Tailwind v4 compatible theme switcher
(function() {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (systemPrefersDark) {
        document.documentElement.classList.add('dark');
    }
})();

function getCurrentTheme() {
    return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

function setTheme(theme) {
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    updateThemeToggle(theme);
}

function updateThemeToggle(theme) {
    const buttons = document.querySelectorAll('.theme-toggle button');
    buttons.forEach(btn => {
        if (btn.dataset.theme === theme) {
            const baseClasses = 'p-1.5 rounded-full hover:text-gray-700 dark:hover:text-gray-200';
            const activeClasses = 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm';
            btn.className = `${baseClasses} ${activeClasses}`;
        } else {
            const baseClasses = 'p-1.5 rounded-full hover:text-gray-700 dark:hover:text-gray-200';
            const inactiveClasses = 'text-gray-500 dark:text-gray-400';
            btn.className = `${baseClasses} ${inactiveClasses}`;
        }
    });
}

function initTheme() {
    const theme = getCurrentTheme();
    
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

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
} else {
    initTheme();
}

window.setTheme = setTheme;