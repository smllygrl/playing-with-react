import ProductsList from "../../components/ProductsList/ProductsList";

const Products = () => {
  const products = [
    { name: "shoes", description: "for feet" },
    { name: "hats", description: "for head" },
    { name: "socks", description: "for feet" },
    { name: "pants", description: "for legs" },
  ];

  return <ProductsList products={products} />;
};

export default Products;
