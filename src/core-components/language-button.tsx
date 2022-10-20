import { useContext } from "react";

import { TranslationContext } from "../context/translation-context";
import { Country } from "../utils/language-utils";

import "./language-button.scss";

export interface LanguageButtonProps {
  country: Country;
}

function LanguageButton({ country: { icon, language } }: LanguageButtonProps) {
  const { switchLanguage } = useContext(TranslationContext);

  return (
    <button
      className="language-button"
      onClick={() => switchLanguage(language)}
    >
      <img
        className="language-button__image"
        src={`${window.location.origin}/countries/${icon}.svg`}
        alt={`${icon} flag`}
      />
    </button>
  );
}

export default LanguageButton;
