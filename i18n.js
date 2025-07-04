let translations = {};
let currentLang = 'en-US';
let isInitialized = false;

const languages = {
    'en-US': 'English',
    'zh-CN': '简体中文',
    'zh-TW': '繁體中文',
    'ja-JP': '日本語',
    'ko-KR': '한국어',
    'ru-RU': 'Русский',
    'ar-SA': 'العربية',
    'he-IL': 'עברית',
    'vi-VN': 'Tiếng Việt',
    'th-TH': 'ภาษาไทย',
    'de-DE': 'Deutsch',
    'fr-FR': 'Français',
    'es-ES': 'Español',
    'it-IT': 'Italiano'
};

const rtlLanguages = ['ar-SA', 'he-IL'];

async function loadTranslation(lang) {
    try {
        const response = await fetch(`i18n/${lang}.json`);
        if (!response.ok) throw new Error(`Failed to load ${lang} translations`);
        return await response.json();
    } catch (error) {
        console.error(`Error loading translation for ${lang}:`, error);
        return null;
    }
}

async function initializeTranslations() {
    if (isInitialized) return;
    
    const storedLang = sessionStorage.getItem('language') || 'en-US';
    currentLang = storedLang;
    
    for (const lang of Object.keys(languages)) {
        const translation = await loadTranslation(lang);
        if (translation) {
            translations[lang] = translation;
        }
    }
    
    if (Object.keys(translations).length === 0) {
        console.error('No translations loaded');
        return;
    }
    
    isInitialized = true;
    updateLanguage(currentLang);
}

function updateLanguage(lang) {
    if (!translations[lang]) {
        console.error(`Translation not available for ${lang}`);
        return;
    }
    
    currentLang = lang;
    sessionStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    
    if (rtlLanguages.includes(lang)) {
        document.documentElement.dir = 'rtl';
        document.body.classList.add('rtl');
    } else {
        document.documentElement.dir = 'ltr';
        document.body.classList.remove('rtl');
    }
    
    const langSelect = document.getElementById('langSelect');
    if (langSelect) {
        langSelect.value = lang;
    }
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const keys = element.getAttribute('data-i18n').split('.');
        let value = translations[lang];
        
        for (const key of keys) {
            if (value && value[key]) {
                value = value[key];
            } else {
                console.warn(`Translation missing for: ${element.getAttribute('data-i18n')} in ${lang}`);
                return;
            }
        }
        
        if (typeof value === 'string') {
            element.textContent = value;
        }
    });
}

function changeLanguage(lang) {
    updateLanguage(lang);
}

document.addEventListener('DOMContentLoaded', () => {
    initializeTranslations();
});