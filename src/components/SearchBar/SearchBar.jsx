import { useState, useContext } from "react";
import { SearchContext } from "../../context";

const SearchBar = () => {
  const [currentInput, setCurrentInput] = useState("");
  const { setSearch } = useContext(SearchContext);

  const handleChange = (event) => {
    setCurrentInput(event.target.value);
  };

  const handleClick = (event) => {
    setSearch(currentInput);
    setCurrentInput("");
  };

  return (
    <div>
      <input value={currentInput} onChange={handleChange} />
      <button onClick={handleClick}>Search</button>
    </div>
  );
};

export default SearchBar;
