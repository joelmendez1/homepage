import i18next from "i18next";
import ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from "react-router-dom";

import global_en from "./translations/en/global.json";
import global_es from "./translations/es/global.json";
import { currentLanguage, userLanguage } from "./utils/language-utils";

import App from "./app";

import "./index.scss";

i18next.init({
  interpolation: {
    escapeValue: false,
  },
  lng: localStorage.getItem("language") ?? currentLanguage(userLanguage),
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </BrowserRouter>
);
