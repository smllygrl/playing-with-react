import ProductCard from "../ProductCard/ProductCard";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";

const ProductsList = ({ products }) => {
  // Breadcrumbs followed from SearchBar

  // Below, the value of search is called by the searchContext
  const { search } = useContext(SearchContext);

  // the value of Search is used by this function to find all items which match the search value
  const searchResults = products.filter((product) =>
    product.description.includes(search)
  );

  return (
    <>
      {searchResults.map((product, index) => (
        <ProductCard product={product} key={index} />
      ))}
    </>
  );
};

export default ProductsList;
