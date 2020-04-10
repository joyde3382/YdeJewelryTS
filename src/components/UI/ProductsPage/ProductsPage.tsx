import React from "react";
import Products from "./Sections/Products/Products";
import Filters from "./Sections/Filters/Filters";

const ProductsPage: React.FC<{ currentCategory: string }> = () => {
  return (
    <div>
      <Filters />
      <Products />
    </div>
  );
};

export default ProductsPage;
