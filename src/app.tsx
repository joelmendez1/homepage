import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";

import { Footer, Navbar } from "./app-components";

import { TranslationProvider } from "./context/translation-context";
import { AboutUsPanel, HomePanel, ContactUsPanel } from "./panels";

import "./app.scss";
import "./dark-theme.scss";

export const ThemeContext = createContext({
  theme: "",
  switchTheme: () => {},
});

export const App = () => {
  const localStoregeTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(
    localStoregeTheme ? localStoregeTheme : "light"
  );

  const switchTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      <TranslationProvider>
        <div className={`app ${theme}-theme`}>
          <div className="app__wrapper">
            <Navbar />

            <Routes>
              <Route path="/" element={<HomePanel />} />
              <Route path="/about-us" element={<AboutUsPanel />} />
              <Route path="/contact-us" element={<ContactUsPanel />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </TranslationProvider>
    </ThemeContext.Provider>
  );
};
