import styles from "./PortfolioCard.module.scss";
import { IDetailedProduct } from "../../../../../../models/IDetailProduct";
import React, { useContext } from "react";
import ContextStore from "../../../../../../Context";
import { Link } from "react-router-dom";
import { Card, Button } from "antd";
import Paragraph from "antd/lib/skeleton/Paragraph";
import Meta from "antd/lib/card/Meta";

const PortfolioCard: React.FC<{ currentProduct: IDetailedProduct }> = (props: {
  currentProduct: IDetailedProduct;
}) => {
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
              src={selectedProduct?.img}
              alt="product"
            />
          }
        >
          {/* card footer */}
          <div className={styles.footer}>
            <h3>{selectedProduct?.title}</h3>
            <p className={styles.cutText}>{selectedProduct?.info}</p>
            {/* <Meta
             
              title="Card title"
              description={selectedProduct?.info}
            /> */}
            {/* <Button type="primary">Buy</Button> */}
          </div>
        </Card>
      </Link>
    </div>
  );

  function onImageClick() {
    state.setDetailedProducts(selectedProduct);
    // state.setCart([...state.cart, selectedProduct as IDetailedProduct]);
    state.setModelOpen(true);
  }
};

export default PortfolioCard;
