import ProductsList from "../../components/ProductsList/ProductsList";

// CONTEXT is not used at all here - simple static data
const Products = () => {
  const products = [
    { name: "shoes", description: "for feet" },
    { name: "hats", description: "for head" },
    { name: "socks", description: "for feet" },
    { name: "pants", description: "for legs" },
  ];

  // ProductsList consumes products
  return <ProductsList products={products} />;
};

export default Products;
