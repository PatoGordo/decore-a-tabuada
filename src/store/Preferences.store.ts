import { defineStore } from "pinia";

function getItemName(name: string, version = "1.0") {
  return `APP::${name}>>v${version}`;
}

export const usePreferencesStore = defineStore("preferences", {
  state() {
    const theme = localStorage.getItem(getItemName("theme"));
    const lang = localStorage.getItem(getItemName("lang"));

    return {
      theme: theme || "light",
      lang: lang || "en",
    };
  },
  getters: {
    getTheme(): string {
      return this.theme;
    },
    getLang(): string {
      return this.lang;
    },
  },
  actions: {
    changeThemeTo(newTheme: string) {
      this.theme = newTheme;
      localStorage.setItem(getItemName("theme"), newTheme);
    },
    changeLangTo(newLang: string) {
      this.lang = newLang;
      localStorage.setItem(getItemName("lang"), newLang);
    },
  },
});
