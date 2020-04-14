import React, { useContext } from "react";
import ContextStore from "../../../../../Context";
import styles from "./Portfolio.module.scss";
import PortfolioCard from "./PortfolioCard/PortfolioCard";
import ProductCard from "../../../../Products/Product/ProductCard";
import { CardTypes } from "../../../../../models/CardTypes";

const Portfolio: React.FC = () => {
  const state = useContext(ContextStore);
  let products = state.products;
  let productsView: JSX.Element[] = [];

  for (let i = 0; i !== products.length; i++) {
    productsView.push(
      <ProductCard
        currentProduct={products[i]}
        cardType={CardTypes.portfolio}
      />
    );
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
