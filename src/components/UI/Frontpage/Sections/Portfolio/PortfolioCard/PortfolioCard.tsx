import styles from "./PortfolioCard.module.scss";
import { IDetailedProduct } from "../../../../../../models/IDetailProduct";
import React, { useContext } from "react";
import ContextStore from "../../../../../../Context";
import { Link } from "react-router-dom";
import { Card } from "antd";

const PortfolioCard: React.FC<{
  currentProduct: IDetailedProduct;
  portfolio?: boolean;
}> = (props: { currentProduct: IDetailedProduct }) => {
  let selectedProduct = props.currentProduct;

  const state = useContext(ContextStore);
  state.detailProduct = selectedProduct;
  return (
    <div className={styles.product}>
      <Link to="/details">
        <Card
          hoverable
          style={{ width: 200, height: 400 }}
          cover={
            <img
              onClick={onImageClick}
              style={{ marginTop: "1rem" }}
              src={selectedProduct?.image}
              alt="product"
            />
          }
        >
          {/* card footer */}
          <div className={styles.footer}>
            <h3>{selectedProduct?.title}</h3>
            <p className={styles.cutText}>{selectedProduct?.description}</p>
          </div>
        </Card>
      </Link>
    </div>
  );

  function onImageClick() {
    state.setDetailedProducts(selectedProduct);
  }
};

export default PortfolioCard;
