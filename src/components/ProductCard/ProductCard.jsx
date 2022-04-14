import "./ProductCard.scss";

const ProductCard = ({ product }) => {
  return (
    <div className="productCard">
      <p className="productCard__title">{product.name}</p>
      <p className="productCard__description">{product.description}</p>
    </div>
  );
};

export default ProductCard;
