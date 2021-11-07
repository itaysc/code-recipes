import i18n from 'i18next';
import {useTranslation as useReactTranslation, initReactI18next} from 'react-i18next';
import commonEn from './en/common.json';
import authEn from './en/auth.json';
import commonHe from './he/common.json';
import authHe from './he/auth.json';

i18n
  //.use(i18nextReactNative) // passes i18n down to react-i18next
  .use(initReactI18next)
  .init({
    ns: ['common', 'auth'],
    defaultNS: 'common',
    resources: {
      en: {
        common: commonEn,
        auth: authEn,
      },
      he: {
        common: commonHe,
        auth: authHe,
      },
    },
    //lng: "en",
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

export const useTranslation = () => useReactTranslation(['common']);
export const useAuthTranslation = () => useReactTranslation(['auth']);
