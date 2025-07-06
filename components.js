const sharedComponents = {
    header: `
    <header class="w-full px-6 py-4 border-b border-gray-300 dark:border-gray-700">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
                <h1 class="text-3xl font-bold text-primary-dark dark:text-gray-100 mb-1">
                    <a href="index.html" class="hover:underline">Zigan Wang</a>
                </h1>
                <span class="text-gray-700 dark:text-gray-300" data-i18n="title">Associate Professor at Tsinghua University</span>
            </div>
            <nav class="flex flex-wrap items-center gap-2 text-sm">
                <a href="index.html" class="text-primary dark:text-blue-400 hover:underline font-medium" data-i18n="nav.home">Home</a>
                <span class="text-gray-400">|</span>
                <a href="pub.html" class="text-primary dark:text-blue-400 hover:underline font-medium" data-i18n="nav.publications">Publications</a>
                <span class="text-gray-400">|</span>
                <a href="team.html" class="text-primary dark:text-blue-400 hover:underline font-medium" data-i18n="nav.team">Team (We Are Hiring)</a>
                <span class="text-gray-400">|</span>
                <select id="langSelect" onchange="changeLanguage(this.value)" aria-label="Language selection" class="px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-blue-400 focus:border-transparent">
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
                <span class="text-gray-400">|</span>
                <div class="theme-toggle inline-flex bg-gray-200 dark:bg-gray-600 rounded-full p-0.5">
                    <button data-theme="light" onclick="setTheme('light')" title="Light theme" aria-label="Switch to light theme" class="p-1.5 rounded-full text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"></path>
                        </svg>
                    </button>
                    <button data-theme="dark" onclick="setTheme('dark')" title="Dark theme" aria-label="Switch to dark theme" class="p-1.5 rounded-full text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                        </svg>
                    </button>
                </div>
                <span class="text-gray-400">|</span>
                <a href="https://github.com/orgs/root-directory-lab" target="_blank" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100" title="GitHub">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                </a>
            </nav>
        </div>
    </header>`,

    sidebar: `
    <aside class="w-full md:w-80 lg:w-96 bg-gray-50 dark:bg-gray-800 p-6 md:border-r border-gray-300 dark:border-gray-700">
        <img src="assets/avatar.jpeg" alt="Zigan Wang" class="w-48 h-48 mx-auto mb-6 rounded-lg shadow-md hover:shadow-lg transition-shadow object-cover" loading="lazy">
        <div class="space-y-4">
            <div>
                <p class="text-sm leading-relaxed">
                    <strong class="block mb-2" data-i18n="research.interests">Research Interests:</strong> 
                    <span data-i18n="research.fields">Applied Microeconomics, International Economics, Environmental Economics, Political and Law Economics, Economic Networks, Econometrics, Computer Vision, Knowledge Graph, GAN.</span>
                </p>
            </div>
            <div>
                <a href="mailto:wangzigan@sz.tsinghua.edu.cn" class="text-primary dark:text-blue-400 hover:underline inline-flex items-center text-sm">
                    <svg class="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                    </svg>
                    Email
                </a>
            </div>
        </div>
    </aside>`,

    footer: `
    <footer class="bg-gray-50 dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700 mt-auto">
        <div class="px-6 py-4 text-center text-sm text-gray-600 dark:text-gray-400">
            © 2025 Zigan Wang. All rights reserved.
        </div>
    </footer>`,

    backToTopButton: `
    <button id="backToTop" class="fixed bottom-8 right-8 p-3 rounded-full shadow-lg hidden bg-primary dark:bg-blue-600 text-white hover:bg-primary-dark dark:hover:bg-blue-700 hover:scale-105 transition-all duration-200 z-50" aria-label="Back to top">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd"></path>
        </svg>
    </button>`,

    loadComponents: function() {
        if (document.getElementById('header')) {
            document.getElementById('header').innerHTML = this.header;
        }
        if (document.getElementById('sidebar')) {
            document.getElementById('sidebar').innerHTML = this.sidebar;
        }
        if (document.getElementById('footer')) {
            document.getElementById('footer').innerHTML = this.footer;
        }
        if (document.getElementById('back-to-top')) {
            document.getElementById('back-to-top').innerHTML = this.backToTopButton;
        }
    }
};

document.addEventListener('DOMContentLoaded', function() {
    sharedComponents.loadComponents();
});