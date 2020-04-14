import React from "react";
import Products from "./Sections/Products/Products";
import Filters from "./Sections/Filters/Filters";
import productsImage from "../../../assets/productsImage2.jpg";
import { Layout } from "antd";
import styles from "./ProductsPage.module.scss";
const { Content, Sider } = Layout;

const ProductsPage: React.FC<{ currentCategory: string }> = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        justifyContent: "center",
      }}
    >
      <div
        className={styles.App}
        style={{ backgroundImage: `url(${productsImage})` }}
      ></div>

      {/* Use srcSet to adjust image */}
      <div style={{ backgroundColor: "white", paddingTop: "3rem" }}>
        <div style={{ float: "left" }}>
          <Filters />
        </div>
        <div style={{ width: "100%" }}>
          <Products />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
