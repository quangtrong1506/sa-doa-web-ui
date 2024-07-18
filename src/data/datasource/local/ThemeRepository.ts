import { Theme } from '@/data/datasource/local/model/Theme';

const THEME_KEY = "themeMode"
const getThemeMode = () => {
  return localStorage.getItem(THEME_KEY) || Theme.Light;
};
const setThemeMode = (mode: Theme.Light | Theme.Dark) => {
  localStorage.setItem(THEME_KEY, mode);
};

const ThemeRepository = {
  getThemeMode,
  setThemeMode
}

export {ThemeRepository}