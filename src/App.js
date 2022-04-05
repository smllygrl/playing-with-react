import "./App.css";
import Counter from "./components/Counter";
import ThemeToggle from "./components/ThemeToggle";
import ChooseEmoji from "./components/ChooseEmoji/ChooseEmoji";
import ChooseResources from "./components/ChooseResources";
import WindowWidth from "./components/WindowWidth/WindowWidth";
import DisplayNameAndAndAge from "./components/DisplayNameAndAge";
import { ThemeProvider } from "./ThemeContext";

function App() {
  return (
    <ThemeProvider>
      {/* <div className="App"> */}
      <DisplayNameAndAndAge name={"Natalie"} age={27} />
      <WindowWidth />
      <ChooseEmoji />
      <Counter />
      <ThemeToggle />
      <ChooseResources />
      <DisplayNameAndAndAge name={32} age={"Luke"} />
      {/* </div> */}
    </ThemeProvider>
  );
}

export default App;
