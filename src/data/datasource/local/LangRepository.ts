import { LangKey } from '@/presentation/components/string';

const TOKEN_KEY = 'LangStorage';

const saveLang = (token: LangKey) => {
  localStorage.setItem(TOKEN_KEY, token.toString());
};

const getLang = () => {
  return localStorage.getItem(TOKEN_KEY) as LangKey;
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