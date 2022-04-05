import { useState } from "react";
// import { lightTheme, darkTheme } from "./themes";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    console.log("Theme button pressed");
    setTheme(theme === "light" ? setTheme("dark") : setTheme("light"));
  };

  // if theme is light then set theme dark else set theme light

  return <button onClick={toggleTheme}>🌞/🌙</button>;
};

export default ThemeToggle;
