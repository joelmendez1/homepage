import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Footer from "./app-components/footer";
import Navbar from "./app-components/navbar";
import HomePanel from "./panels/home-panel";
import "./dark-theme.scss";
import "./app.scss";

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
          </Routes>
        </div>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
