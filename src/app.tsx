import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Footer from "./app-components/footer";
import Navbar from "./app-components/navbar";
import "./app.scss";
import "./dark-theme.scss";
import AboutUsPanel from "./panels/about-us-panel";
import HomePanel from "./panels/home-panel";

export const ThemeContext = createContext({
  theme: "",
  switchTheme: () => {},
});

function App() {
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
      <div className={`app ${theme}-theme`}>
        <div className="app__wrapper">
          <Navbar />

          <Routes>
            <Route path="/" element={<HomePanel />} />
            <Route path="/about-us" element={<AboutUsPanel />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
