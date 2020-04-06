import React, { useContext } from "react";
import ContextStore from "../../../../../Context";
import Product from "../../../../Products/Product/Product";
import styles from "./Portfolio.module.scss";

const Portfolio: React.FC = () => {
  const state = useContext(ContextStore);
  let products = state.products;
  let productsView: JSX.Element[] = [];

  for (let i = 0; i !== products.length; i++) {
    productsView.push(<Product currentProduct={products[i]} />);
  }

  return (
    <div>
      <h1 className={styles.header}>Our Portfolio</h1>
      <div className={styles.ProductList}>{productsView}</div>
    </div>
  );
};

export default Portfolio;
