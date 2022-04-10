import "./App.css";
import Counter from "./components/Counter";
import ThemeToggle from "./components/ThemeToggle";
import ChooseEmoji from "./components/ChooseEmoji/ChooseEmoji";
import ChooseResources from "./components/ChooseResources";
import WindowWidth from "./components/WindowWidth/WindowWidth";
import DisplayNameAndAndAge from "./components/DisplayNameAndAge";
// import { ThemeProvider } from "./ThemeContext";
import SearchBar from "./components/SearchBar";
import Products from "./containers/Products";
import SearchProvider from "./context/SearchContext";

function App() {
  return (
    // Everything wrapped in the search provider has access to search and setSearch
    <SearchProvider>
      <SearchBar />
      <Products />
      {/* <DisplayNameAndAndAge name={"Natalie"} age={27} />
      <WindowWidth />
      <ChooseEmoji />
      <Counter />
      <ThemeToggle />
      <ChooseResources />
      <DisplayNameAndAndAge name={32} age={"Luke"} /> */}
    </SearchProvider>
  );
}

export default App;
