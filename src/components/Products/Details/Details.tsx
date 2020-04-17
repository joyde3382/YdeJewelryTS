import React, { useContext } from "react";
import ContextStore from "../../../Context";
import { IDetailedProduct } from "../../../models/IDetailProduct";
import { Divider } from "antd";
import styles from "./Details.module.scss";
import DetailsCard from "./DetailsCard";
import MiniDetailsCard from "./MiniDetailsCard";
import Product from "../../Products/Product/ProductCard";
import { CardTypes } from "../../../models/CardTypes";

const Details: React.FC<{ currentProduct: IDetailedProduct }> = () => {
  const state = useContext(ContextStore);
  let selectedProduct = state.detailProduct;

  let products = state.products;
  let productsView: JSX.Element[] = [];

  for (let i = 0; i !== products.length; i++) {
    productsView.push(
      <Product
        currentProduct={products[i]}
        cardType={CardTypes.productsOverView}
      />
    );
  }

  return (
    <div style={{ width: "100%", margin: "1rem" }}>
      <div className={styles.verticalCenter}>
        <DetailsCard />

        <Divider type="vertical" />

        <img src={selectedProduct?.image} />
      </div>
      <Divider type="horizontal" style={{ width: "100%" }} />
      <div style={{ display: "flex" }}>
        <div style={{ flex: "0 0 35%" }}>
          <h1>Product Description</h1>
          <p>
            A product description is the marketing copy used to describe a
            product’s value proposition to potential customers. A compelling
            product description provides customers with details around features,
            problems it solves and other benefits to help generate a sale. It’s
            no wonder they are worried — the quality of a product description
            can make or break a sale, especially if it doesn’t include the
            information a shopper needs to make a purchase decision. Providing
            key product details is critical if you want the shopper to click
            “Add to Cart” and differentiate your ecommerce website from the
            competition.
          </p>
        </div>
        <div
          style={{ flex: 1, display: "flex", margin: "auto", padding: "2rem" }}
        >
          <MiniDetailsCard />
          <MiniDetailsCard />
          <MiniDetailsCard />
        </div>
      </div>
      <Divider type="horizontal" style={{ width: "100%" }} />
      <div>
        <h1>Related Products</h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {productsView}
        </div>
      </div>
    </div>
  );
};

export default Details;
