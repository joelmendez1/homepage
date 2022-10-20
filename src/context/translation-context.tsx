import { i18n } from "i18next";
import { createContext, ReactNode } from "react";
import { useTranslation } from "react-i18next";

interface TranslationProps {
  translate: Function;
  i18n: i18n;
  switchLanguage: Function;
}

interface TranslationProviderProps {
  children: ReactNode;
}

export const TranslationContext = createContext({} as TranslationProps);

export const TranslationProvider = ({ children }: TranslationProviderProps) => {
  const [translate, i18n] = useTranslation("global");

  const switchLanguage = (language: string) => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  };

  return (
    <TranslationContext.Provider
      value={{
        translate,
        i18n,
        switchLanguage,
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
};
