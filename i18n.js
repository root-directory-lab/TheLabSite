let translations = {};
let currentLang = localStorage.getItem('language') || 'en_US';


const languages = {
    'en_US': 'English',
    'zh_CN': '简体中文',
    'zh_TW': '繁體中文',
    'ja_JP': '日本語',
    'ko_KR': '한국어',
    'ru_RU': 'Русский',
    'ar_SA': 'العربية',
    'vi_VN': 'Tiếng Việt',
    'th_TH': 'ภาษาไทย',
    'de_DE': 'Deutsch',
    'fr_FR': 'Français',
    'es_ES': 'Español',
    'it_IT': 'Italiano'
};

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
    
    updateLanguage(currentLang);
}

function updateLanguage(lang) {
    if (!translations[lang]) {
        console.error(`Translation not available for ${lang}`);
        return;
    }
    
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    const htmlLang = lang.split('_')[0];
    document.documentElement.lang = htmlLang;
    
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
    
    if (lang === 'ar_SA') {
        document.documentElement.dir = 'rtl';
        document.body.style.direction = 'rtl';
    } else {
        document.documentElement.dir = 'ltr';
        document.body.style.direction = 'ltr';
    }
}

function changeLanguage(lang) {
    updateLanguage(lang);
}

const urlParams = new URLSearchParams(window.location.search);
const langParam = urlParams.get('lang');
if (langParam && languages[langParam]) {
    currentLang = langParam;
}

document.addEventListener('DOMContentLoaded', () => {
    initializeTranslations();
});