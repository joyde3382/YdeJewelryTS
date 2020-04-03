import React, { useContext } from "react";
import ContextStore from "../../../Context";
import Product from "../Product/Product";
import styles from "./ProductList.module.scss";

const ProductList: React.FC = () => {
  const state = useContext(ContextStore);
  let products = state.products;
  let productsView: JSX.Element[] = [];

  for (let i = 0; i !== products.length; i++) {
    productsView.push(<Product currentProduct={products[i]} />);
  }

  return (
    <div className={styles.container}>
      <div className={styles.products}>
        {productsView}
      </div>
    </div>
  );
};

export default ProductList;
