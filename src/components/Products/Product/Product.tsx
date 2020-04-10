import styles from "./Product.module.scss";
import { IDetailedProduct } from "../../../models/IDetailProduct";
import React, { useContext } from "react";
import ContextStore from "../../../Context";
import { Link } from "react-router-dom";
import { Card } from "antd";

const Product: React.FC<{ currentProduct: IDetailedProduct }> = (props: {
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
          style={{ width: 200 }}
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
            <p className="align-self-center mb-0">{selectedProduct?.title}</p>
            <h5 className="text-blue font-italic mb-0">
              <span className="mr-1">$</span>
              {selectedProduct?.price}
            </h5>
          </div>
        </Card>
      </Link>
    </div>
  );

  function onImageClick() {
    state.setDetailedProducts(selectedProduct);
    state.setModelOpen(true);
  }
};

export default Product;
