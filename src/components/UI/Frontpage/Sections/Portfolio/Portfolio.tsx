import React, { useContext } from "react";
import ContextStore from "../../../../../Context";
import styles from "./Portfolio.module.scss";
import PortfolioCard from "./PortfolioCard/PortfolioCard";

const Portfolio: React.FC = () => {
  const state = useContext(ContextStore);
  let products = state.products;
  let productsView: JSX.Element[] = [];

  for (let i = 0; i !== products.length; i++) {
    productsView.push(<PortfolioCard currentProduct={products[i]} />);
  }

  return (
    <div>
      <h1 className={styles.header}>Our Portfolio</h1>
      <p className={styles.description}>
        Some very interesting and inspirational text passage that makes you
        wanna sell your house to buy these items
      </p>
      <div className={styles.ProductList}>{productsView}</div>
    </div>
  );
};

export default Portfolio;
