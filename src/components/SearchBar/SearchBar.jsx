import { useState, useContext } from "react";
import { SearchContext } from "../../context/SearchContext/SearchContext";
import "./SearchBar.scss";

const SearchBar = () => {
  const [currentInput, setCurrentInput] = useState("");
  const { setSearch } = useContext(SearchContext);

  // SearchBar consumes SearchContext which is the const of createContext();
  // Thus the SearchBar is responsible for the origin of the specific state context used

  // The state which is used through useContext is the input
  // The context of the search is set by the state of the input
  const handleChange = (event) => {
    setCurrentInput(event.target.value);
  };

  // Below, the value of search is SET
  const handleClick = (event) => {
    setSearch(currentInput);
    setCurrentInput("");
  };
  // Go to ProductList to follow the breadcrumbs

  return (
    <div className="searchBar">
      <input
        className="searchBar__input"
        value={currentInput}
        onChange={handleChange}
        type="text"
      />
      <button className="searchBar__button" onClick={handleClick}>
        SEARCH
      </button>
    </div>
  );
};

export default SearchBar;
