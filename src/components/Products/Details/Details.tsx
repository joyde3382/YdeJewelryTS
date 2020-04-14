import React, { useContext } from "react";
import ContextStore from "../../../Context";
import { IDetailedProduct } from "../../../models/IDetailProduct";
import { Button, Divider } from "antd";
import styles from "./Details.module.scss";
import DetailsCard from "./DetailsCard";

const Details: React.FC<{ currentProduct: IDetailedProduct }> = () => {
  const state = useContext(ContextStore);
  let selectedProduct = state.detailProduct;

  return (
    <div className={styles.verticalCenter}>
      <DetailsCard />

      <Divider type="vertical" style={{ height: "100%" }} />

      <div>
        <img src={selectedProduct?.image} />
      </div>
    </div>
  );

  function onButtonClick() {
    if (state.cart === undefined || state.cart.length === 0) {
      state.setCart([selectedProduct as IDetailedProduct]);
    } else {
      state.setCart([...state.cart, selectedProduct as IDetailedProduct]);
    }

    // state.detailProduct?.count = 1;

    console.log(selectedProduct);
    console.log(state.cart);
  }
};

export default Details;
