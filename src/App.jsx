import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import "./index.css";
import "./assets/theme-manager"; // Import the theme manager script

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("hs_theme") || "light"
  );

  useEffect(() => {
    const html = document.querySelector("html");
    const isDarkOrAuto =
      theme === "dark" ||
      (theme === "auto" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    if (isDarkOrAuto) {
      html.classList.add("dark");
      html.classList.remove("light");
    } else {
      html.classList.add("light");
      html.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div
      className={
        theme === "light" ? "bg-white text-gray-900" : "bg-gray-900 text-white"
      }
    >
      <Navbar
        toggleTheme={toggleTheme}
        isDarkTheme={theme === "dark"}
        theme={theme}
      />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
