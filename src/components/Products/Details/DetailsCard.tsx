import React, { useContext } from "react";
import ContextStore from "../../../Context";
import { IDetailedProduct } from "../../../models/IDetailProduct";
import { Button } from "antd";
import styles from "./Details.module.scss";

const DetailsCard: React.FC = () => {
  const state = useContext(ContextStore);
  let selectedProduct = state.detailProduct;

  return (
    <div style={{ padding: "1rem" }}>
      <h1>{selectedProduct?.title}</h1>
      <h5>
        <span className="mr-1">$</span>
        {selectedProduct?.price}
      </h5>
      <p className={styles.cutText}>{selectedProduct?.description}</p>

      <Button onClick={addToCart}>Add to cart</Button>
    </div>
  );

  function addToCart() {
    if (state.cart.length === 0) {
      selectedProduct.count++;
      state.setCart([selectedProduct as IDetailedProduct]);
    } else {
      if (state.cart.indexOf(selectedProduct) !== -1) {
        selectedProduct.count++;
      } else {
        selectedProduct.count++;
        state.setCart([...state.cart, selectedProduct as IDetailedProduct]);
      }
      console.log(selectedProduct);
    }

    console.log(selectedProduct);
    console.log(state.cart);
  }
};

export default DetailsCard;
