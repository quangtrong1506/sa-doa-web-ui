import { LangKey } from '@/presentation/components/string';

const TOKEN_KEY = 'LangStorage';

const saveLang = (token: LangKey) => {
  localStorage.setItem(TOKEN_KEY, JSON.stringify(token.toString()));
};

const getLang = () => {
  return JSON.parse(localStorage.getItem(TOKEN_KEY) as string);
};

const deleteLang = () => {
  localStorage.removeItem(TOKEN_KEY)
};

const LangRepository = {
  saveLang,
  getLang,
  deleteLang,
}

export {LangRepository}