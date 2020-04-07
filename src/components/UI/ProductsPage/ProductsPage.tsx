import React, { useContext } from "react";
import ContextStore from "../../../Context";
import styles from "./ProductsPage.module.scss";
import Product from "../../Products/Product/Product";
// import { IProductCategory } from "../../../models/IDetailProduct";

const ProductsPage: React.FC<{ currentCategory: string }> = (props: {
  currentCategory: string;
}) => {
  const state = useContext(ContextStore);

  const curentCategory = props.currentCategory;
  const products = state.products;

  let selectedProducts: JSX.Element[] = [];

  for (let i = 0; i !== products.length; i++) {
    if (products[i].category === curentCategory) {
      selectedProducts.push(<Product currentProduct={products[i]} />);
    }
  }
  console.log(selectedProducts);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <h1 style={{ display: "flex", justifyContent: "center" }}>
          {curentCategory}
        </h1>
        <div className={styles.ProductList}>{selectedProducts}</div>
      </div>
    </div>
  );
};

export default ProductsPage;
