import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import Cookies from "js-cookie";

import {
  LANGUAGES,
  AUTO_LANG,
  COOKIES,
} from '../store/constants';

i18n
  // load translation using xhr -> see /public/locales
  // learn more: https://github.com/i18next/i18next-xhr-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to the react-i18next components.
  // Alternative use the I18nextProvider: https://react.i18next.com/components/i18nextprov
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: LANGUAGES[0].name,
    lng: AUTO_LANG,
    // backend: {
    //  loadPath: `${process.env.PUBLIC_URL}/locales/{{lng}}/translation.json`
    // },

    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    // special options for react-i18next
    // learn more: https://react.i18next.com/components/i18next-instance
    react: {
      wait: true,
      useSuspense: false,
    },
  });

export const rememberLanguage = (Language: string) : void => {
  Cookies.set(COOKIES.LANG.name, Language, { expires: COOKIES.LANG.expires });
}

export default i18n;
