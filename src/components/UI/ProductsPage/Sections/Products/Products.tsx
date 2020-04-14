import React, { useContext } from "react";
import ContextStore from "../../../../../Context";
import Product from "../../../../Products/Product/ProductCard";
import styles from "./Products.module.scss";
import { CardTypes } from "../../../../../models/CardTypes";

const Products: React.FC = () => {
  const state = useContext(ContextStore);

  const filter = state.filter;
  const products = state.products;

  let selectedProducts: JSX.Element[] = [];

  for (let i = 0; i !== products.length; i++) {
    if (filter?.category === "all") {
      selectedProducts.push(
        <Product
          currentProduct={products[i]}
          cardType={CardTypes.productsOverView}
        />
      );
    } else if (
      (products[i].category === filter?.category ||
        filter?.category === undefined) &&
      (products[i].color === filter?.color || filter?.color === undefined) &&
      (products[i].pricetag === filter?.priceTag ||
        filter?.priceTag === undefined)
    ) {
      selectedProducts.push(
        <Product
          currentProduct={products[i]}
          cardType={CardTypes.productsOverView}
        />
      );
    }
  }

  if (selectedProducts.length === 0) {
    selectedProducts.push(<div>No products matching filter</div>);
  }

  console.log(filter);

  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      {/* <h1 style={{ fontSize: "70px" }}>Products</h1> */}
      <div className={styles.ProductList}>{selectedProducts}</div>
    </div>
  );
};

export default Products;
