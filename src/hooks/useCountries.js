import { useLocaleState } from "react-admin";
import zh from '../countries/zh';
import en from '../countries/en';

export function useCountries () {
  const [ locale ] = useLocaleState();
  if (locale === 'zh') return zh;
  return en;
}