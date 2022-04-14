import "./styles/styles.scss";
// import Counter from "./components/Counter";
// import ChooseEmoji from "./components/ChooseEmoji/ChooseEmoji";
// import ChooseResources from "./components/ChooseResources";
// import WindowWidth from "./components/WindowWidth/WindowWidth";
// import DisplayNameAndAndAge from "./components/DisplayNameAndAge";
import SearchProvider from "./context/SearchContext/SearchContext";
import ContextContainer from "./containers/ContextContainer/ContextContainer";

function App() {
  return (
    // Everything wrapped in the search provider has access to search and

    <SearchProvider>
      <ContextContainer />
      {/* <DisplayNameAndAndAge name={"Natalie"} age={27} />
      <WindowWidth />
      <ChooseEmoji />
      <Counter />
      <ChooseResources />
      <DisplayNameAndAndAge name={32} age={"Luke"} /> */}
    </SearchProvider>
  );
}

export default App;
