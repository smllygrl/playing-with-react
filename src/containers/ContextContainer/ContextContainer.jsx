import SearchBar from "../../components/SearchBar/SearchBar";
import Products from "../Products/Products";
import "./ContextContainer.scss";

const ContextContainer = () => {
  return (
    <div className="contextContainer">
      <SearchBar />
      <Products />
    </div>
  );
};

export default ContextContainer;
