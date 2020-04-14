import styles from "./ProductCard.module.scss";
import { IDetailedProduct } from "../../../models/IDetailProduct";
import { CardTypes } from "../../../models/CardTypes";
import React, { useContext } from "react";
import ContextStore from "../../../Context";
import { Link } from "react-router-dom";
import { Card } from "antd";

const ProductCard: React.FC<{
  currentProduct: IDetailedProduct;
  cardType: CardTypes;
}> = (props: { currentProduct: IDetailedProduct; cardType: CardTypes }) => {
  let selectedProduct = props.currentProduct;

  const state = useContext(ContextStore);
  state.detailProduct = selectedProduct;

  function cardType(cardType: CardTypes) {
    switch (cardType) {
      case CardTypes.portfolio:
        return <p className={styles.cutText}>{selectedProduct?.description}</p>;
      case CardTypes.productsOverView:
        return (
          <h5>
            <span className="mr-1">$</span>
            {selectedProduct?.price}
          </h5>
        );

      case CardTypes.detailed:
        break;
      default:
        break;
    }
  }
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
        {/* card footer */}
        <div style={{ color: "black" }}>
          <p style={{ fontWeight: 700 }}>{selectedProduct?.title}</p>
          {cardType(props.cardType)}
        </div>
      </Link>
    </div>
  );

  function onImageClick() {
    state.setDetailedProducts(selectedProduct);
    state.setModelOpen(true);
  }
};

export default ProductCard;
