import "./App.css";
import Counter from "./components/Counter";
import ThemeToggle from "./components/ThemeToggle";
import ChooseEmoji from "./components/ChooseEmoji/ChooseEmoji";
import ChooseResources from "./components/ChooseResources";
import WindowWidth from "./components/WindowWidth/WindowWidth";
import { ThemeProvider } from "./ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <WindowWidth />
        <ChooseEmoji />
        <Counter />
        <ThemeToggle />
        <ChooseResources />
      </div>
    </ThemeProvider>
  );
}

export default App;
