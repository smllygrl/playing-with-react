import { createContext, useState } from "react";

export const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");

  console.log("COMING FROM SEARCH CONTEXT", search);

  // The value of the context is search and setSearch - a stateful exchange
  const data = { search, setSearch };

  // Whenever useContext(SearchContext) is called, like in ProductList, the value called is explicit
  // eg ProductsList consumes search

  return (
    <SearchContext.Provider value={data}>{children}</SearchContext.Provider>
  );
};

export default SearchProvider;
