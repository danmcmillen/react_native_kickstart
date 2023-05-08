import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js';
import todosTranslationsEn from '../translations/features/todos/en';
import todosTranslationsEs from '../translations/features/todos/es';

// Merge translations from different features
const enTranslations = { ...todosTranslationsEn };
const esTranslations = { ...todosTranslationsEs };

const appTranslations = new I18n({
  en: enTranslations,
  es: esTranslations,
});

// Fallback to English if the translation is not available in the user's language
appTranslations.enableFallback = true;

// Set the current locale based on the user's device settings
appTranslations.locale = Localization.locale;

export default appTranslations;
