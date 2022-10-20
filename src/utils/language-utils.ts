import { useContext } from "react";

import { TranslationContext } from "../context/translation-context";

type CountryType = "spain" | "england";
type LanguageType = "es" | "en";

export interface Country {
  icon: CountryType;
  language: LanguageType;
}

export const userLanguage = window.navigator.language.slice(0, 2);

export const currentLanguage = (languageCode: string) => {
  const language =
    languageCode === "es" || languageCode === "en" ? languageCode : "en";
  localStorage.setItem("language", language);

  return language;
};

export const countries: Country[] = [
  { icon: "spain", language: "es" },
  { icon: "england", language: "en" },
];

export const Translate = (text: string) => {
  const { translate } = useContext(TranslationContext);

  return translate(text);
};
