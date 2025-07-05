const Layout = {
    renderHeader() {
        return `
            <div class="flex justify-between items-start">
                <div>
                    <h1 class="text-2xl md:text-3xl font-bold text-slate-800 dark:text-gray-100 mb-1">
                        <a href="index.html" class="hover:underline">Zigan Wang</a>
                    </h1>
                    <span class="text-sm md:text-base text-gray-700 dark:text-gray-300" data-i18n="title">Associate Professor at Tsinghua University</span>
                </div>
                <button id="mobileMenuToggle" class="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700" aria-label="Toggle menu">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
            <nav id="mainNav" class="hidden md:block mt-4 md:mt-2">
                <div class="flex flex-col md:flex-row md:items-center md:justify-end gap-4 md:gap-2">
                    <div class="flex flex-col md:flex-row md:items-center gap-4 md:gap-2">
                        <a href="index.html" class="text-blue-700 dark:text-blue-400 hover:underline font-medium" data-i18n="nav.home">Home</a>
                        <span class="hidden md:inline text-gray-400" aria-hidden="true">|</span>
                        <a href="pub.html" class="text-blue-700 dark:text-blue-400 hover:underline font-medium" data-i18n="nav.publications">Publications</a>
                        <span class="hidden md:inline text-gray-400" aria-hidden="true">|</span>
                        <a href="team.html" class="text-blue-700 dark:text-blue-400 hover:underline font-medium" data-i18n="nav.team">Team</a>
                    </div>
                    <span class="hidden md:inline text-gray-400 mx-2" aria-hidden="true">|</span>
                    <select id="langSelect" onchange="changeLanguage(this.value)" aria-label="Language selection" class="w-full md:w-auto px-2 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400">
                        <option value="en-US">English</option>
                        <option value="zh-CN">简体中文</option>
                        <option value="zh-TW">繁體中文</option>
                        <option value="ja-JP">日本語</option>
                        <option value="ko-KR">한국어</option>
                        <option value="ru-RU">Русский</option>
                        <option value="ar-SA">العربية</option>
                        <option value="he-IL">עברית</option>
                        <option value="vi-VN">Tiếng Việt</option>
                        <option value="th-TH">ภาษาไทย</option>
                        <option value="de-DE">Deutsch</option>
                        <option value="fr-FR">Français</option>
                        <option value="es-ES">Español</option>
                        <option value="it-IT">Italiano</option>
                    </select>
                    <span class="hidden md:inline text-gray-400 mx-2" aria-hidden="true">|</span>
                    <div class="theme-toggle inline-flex bg-gray-200 dark:bg-gray-700 rounded-full p-0.5" role="group" aria-label="Theme selection">
                        <button data-theme="light" title="Light theme" aria-label="Switch to light theme" class="theme-toggle-light p-1.5 rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"></path>
                            </svg>
                        </button>
                        <button data-theme="dark" title="Dark theme" aria-label="Switch to dark theme" class="theme-toggle-dark p-1.5 rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                            </svg>
                        </button>
                    </div>
                    <span class="hidden md:inline text-gray-400 mx-2" aria-hidden="true">|</span>
                    <a href="https://github.com/orgs/root-directory-lab" target="_blank" rel="noopener noreferrer" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100" title="GitHub" aria-label="Visit GitHub profile">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                    </a>
                </div>
            </nav>
        `;
    },

    renderSidebar() {
        return `
            <button id="mobileSidebarToggle" class="md:hidden w-full mb-4 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600">
                <span data-i18n="sidebar.toggle">View Profile Info</span>
            </button>
            <div id="sidebarContent" class="hidden md:block">
                <img src="assets/avatar.jpeg" alt="Zigan Wang - Associate Professor at Tsinghua University" class="w-full max-w-[200px] mx-auto md:max-w-none mb-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200" loading="lazy">
                <div class="space-y-4">
                    <div>
                        <p class="text-sm">
                            <strong data-i18n="research.interests">Research Interests:</strong> 
                            <span data-i18n="research.fields">Applied Microeconomics, International Economics, Environmental Economics, Political and Law Economics, Economic Networks, Econometrics, Computer Vision, Knowledge Graph, GAN.</span>
                        </p>
                    </div>
                    <div>
                        <a href="mailto:wangzigan@sz.tsinghua.edu.cn" class="text-blue-700 dark:text-blue-400 hover:underline inline-flex items-center text-sm">
                            <svg class="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 8.5L12 5.5L15 8.5M12 5.5V15.5M5 11.5V19.5H19V11.5"/>
                            </svg>
                            Email
                        </a>
                    </div>
                </div>
            </div>
        `;
    },

    renderFooter() {
        return `
            <div class="px-4 md:px-6 py-4 text-center text-xs md:text-sm text-gray-600 dark:text-gray-400">
                © 2025 Zigan Wang. All rights reserved.
            </div>
        `;
    },

    renderBackToTop() {
        return `
            <button id="backToTop" class="fixed bottom-4 right-4 md:bottom-8 md:right-8 p-2.5 md:p-3 bg-blue-700 dark:bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-800 dark:hover:bg-blue-700 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 hidden" aria-label="Back to top">
                <svg class="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd"></path>
                </svg>
            </button>
        `;
    },

    initMobileMenu() {
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        const mainNav = document.getElementById('mainNav');
        
        if (mobileMenuToggle && mainNav) {
            mobileMenuToggle.addEventListener('click', () => {
                mainNav.classList.toggle('hidden');
            });
        }
    },

    initMobileSidebar() {
        const mobileSidebarToggle = document.getElementById('mobileSidebarToggle');
        const sidebarContent = document.getElementById('sidebarContent');
        
        if (mobileSidebarToggle && sidebarContent) {
            mobileSidebarToggle.addEventListener('click', () => {
                sidebarContent.classList.toggle('hidden');
                const isHidden = sidebarContent.classList.contains('hidden');
                mobileSidebarToggle.innerHTML = `<span data-i18n="sidebar.toggle">${isHidden ? 'View' : 'Hide'} Profile Info</span>`;
            });
        }
    },

    initBackToTop() {
        const backToTopButton = document.getElementById('backToTop');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.remove('hidden');
            } else {
                backToTopButton.classList.add('hidden');
            }
        });
        
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    },

    initThemeToggle() {
        // Ensure DOM is ready
        const setupThemeButtons = () => {
            const lightButton = document.querySelector('.theme-toggle-light');
            const darkButton = document.querySelector('.theme-toggle-dark');
            
            if (!lightButton || !darkButton) {
                console.error('Theme toggle buttons not found');
                return;
            }
            
            if (typeof window.setTheme !== 'function') {
                console.error('window.setTheme function not available');
                return;
            }
            
            // Remove any existing listeners to prevent duplicates
            const newLightButton = lightButton.cloneNode(true);
            const newDarkButton = darkButton.cloneNode(true);
            lightButton.parentNode.replaceChild(newLightButton, lightButton);
            darkButton.parentNode.replaceChild(newDarkButton, darkButton);
            
            // Add click listeners
            newLightButton.addEventListener('click', (e) => {
                e.preventDefault();
                window.setTheme('light');
            });
            
            newDarkButton.addEventListener('click', (e) => {
                e.preventDefault();
                window.setTheme('dark');
            });
            
            // Update button states
            if (typeof window.updateThemeToggle === 'function' && typeof window.getCurrentTheme === 'function') {
                const currentTheme = window.getCurrentTheme();
                window.updateThemeToggle(currentTheme);
            }
        };
        
        // Run setup immediately
        setupThemeButtons();
    },

    init() {
        const header = document.getElementById('top');
        if (header) {
            header.innerHTML = this.renderHeader();
        }

        const sidebar = document.getElementById('left');
        if (sidebar) {
            sidebar.innerHTML = this.renderSidebar();
        }

        const footer = document.querySelector('footer');
        if (footer) {
            footer.innerHTML = this.renderFooter();
        }

        document.body.insertAdjacentHTML('beforeend', this.renderBackToTop());
        
        this.initMobileMenu();
        this.initMobileSidebar();
        this.initBackToTop();
        this.initThemeToggle();
    }
};

document.addEventListener('DOMContentLoaded', () => {
    Layout.init();
});