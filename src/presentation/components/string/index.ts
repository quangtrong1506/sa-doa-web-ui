import { viLang } from '@/presentation/components/string/Vn';
import { enLang } from '@/presentation/components/string/En';

export enum LangKey {
  Vi ,
  En ,
}

export const LangMap = (langKey: LangKey) => {
  if (langKey == LangKey.Vi) {
    return viLang
  }
  return enLang
}
