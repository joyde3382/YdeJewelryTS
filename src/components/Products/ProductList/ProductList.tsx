import React, { useContext } from "react";
import ContextStore from "../../../Context";
import Product from "../Product/Product";
import styles from "./ProductList.module.scss";

const ProductList: React.FC = () => {
  const state = useContext(ContextStore);
  let products = state.products;
  let productsView: JSX.Element[] = [];

  if (!products) {
    return <div></div>;
  }

  for (let i = 0; i !== products.length; i++) {
    productsView.push(<Product currentProduct={products[i]} />);
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <h1 style={{ display: "flex", justifyContent: "center" }}>Products</h1>
        <div className={styles.ProductList}>{productsView}</div>
      </div>
    </div>
  );
};

export default ProductList;
