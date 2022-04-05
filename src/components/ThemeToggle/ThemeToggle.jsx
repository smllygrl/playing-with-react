import { useTheme, useThemeUpdate } from "../../ThemeContext";
// import { themeStyles } from "./themes";

const ThemeToggle = () => {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    colour: darkTheme ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
  };

  return (
    <div>
      <button style={themeStyles} onClick={toggleTheme}>
        🌞/🌙
      </button>
    </div>
  );
};

export default ThemeToggle;
