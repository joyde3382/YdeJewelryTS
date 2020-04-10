import React, { useContext } from "react";
import ContextStore from "../../../../../Context";
import Product from "../../../../Products/Product/Product";
import styles from "./Products.module.scss";

const Products: React.FC = () => {
  const state = useContext(ContextStore);

  const productCategory = state.filter?.category;
  const filter = state.filter;
  //   const productColor =
  const products = state.products;

  let selectedProducts: JSX.Element[] = [];

  for (let i = 0; i !== products.length; i++) {
    if (productCategory === "all") {
      selectedProducts.push(<Product currentProduct={products[i]} />);
    } else if (products[i].category === productCategory) {
      selectedProducts.push(<Product currentProduct={products[i]} />);
    }
  }

  console.log(filter);

  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <h1>{state.filter?.category}</h1>
      <div className={styles.ProductList}>{selectedProducts}</div>
    </div>
  );
};

export default Products;
