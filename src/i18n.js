import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importuj pliki z tłumaczeniami (upewnij się, że ścieżki są poprawne)
import pl from '../src/Locales/pl.json';
import en from '../src/Locales/en.json';

const resources = {
    pl: {
        translation: pl
    },
    en: {
        translation: en
    }
};

// 1. Sprawdź localStorage po zapisany język przy starcie aplikacji
const savedLanguage = localStorage.getItem('i18nextLng') || 'pl'; // Domyślnie 'pl', jeśli nic nie ma

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: savedLanguage, // 2. Użyj język zamiast na sztywno 'pl'
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;