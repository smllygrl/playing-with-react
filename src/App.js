import "./App.css";
import Counter from "./components/Counter";
import ThemeToggle from "./components/ThemeToggle";
import ChooseEmoji from "./components/ChooseEmoji/ChooseEmoji";
import ChooseResources from "./components/ChooseResources";
import WindowWidth from "./components/WindowWidth/WindowWidth";

function App() {
  return (
    <div className="App">
      <WindowWidth />
      <ChooseEmoji />
      <Counter />
      <ThemeToggle />
      <ChooseResources />
    </div>
  );
}

export default App;
