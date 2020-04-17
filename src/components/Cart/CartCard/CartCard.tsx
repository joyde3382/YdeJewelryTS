import styles from "./ProductCard.module.scss";
import { IDetailedProduct } from "../../../models/IDetailProduct";
import { CardTypes } from "../../../models/CardTypes";
import React, { useContext } from "react";
import ContextStore from "../../../Context";
import { Link } from "react-router-dom";
import { Card } from "antd";

const CartCard: React.FC<{ currentProduct: IDetailedProduct }> = (props: {
  currentProduct: IDetailedProduct;
}) => {
  let selectedProduct = props.currentProduct;
  const state = useContext(ContextStore);

  return (
    <div className={styles.product}>
      <Link to="/details">
        <Card
          hoverable
          style={{ width: 200 }}
          cover={
            <img
              onClick={onImageClick}
              style={{ marginTop: "1rem" }}
              src={selectedProduct?.image}
              alt="product"
            />
          }
        ></Card>
      </Link>
    </div>
  );

  function onImageClick() {
    state.setModelOpen(true);
  }
};

export default CartCard;
