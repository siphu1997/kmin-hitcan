/* eslint-disable no-undef */
import locales from './locales';
function formatStringByKey(str, key, value) {
  return str.replace(new RegExp(`\\{${key}\\}`, 'gi'), value);
}

class Localization {
  static instance = null;

  localizeData = {};

  constructor() {
    this.language = 'en';
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new Localization();
    return this.instance;
  }

  setLanguage(language) {
    const { language: currentLanguage } = this;
    if (currentLanguage !== language) {
      this.language = language;
      // set to local storage
      // reload
    }
  }

  localize = (localizationKey, params = {}) => {
    const { language } = this;
    const locale = locales[language];
    const keys = localizationKey.split('.');
    let string = locale;
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (string[key]) {
        string = string[key];
      } else {
        return localizationKey;
      }
    }

    const formattedString = Object.keys(params).reduce(
      (str, key) => formatStringByKey(str, key, params[key]),
      string
    );

    return formattedString || localizationKey;
  };

  setData(language, value) {
    this.localizeData[language] = value;
  }
}

export const { localize, language } = Localization.getInstance();
