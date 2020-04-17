import React, { useContext } from "react";
import { IDetailedProduct } from "../../../models/IDetailProduct";
import styles from "./Cart.module.scss";
import { storeProducts } from "../../../data";
import CartCard from "./CartCard/CartCard";
import ContextStore from "../../../Context";
import { Divider, Button } from "antd";

const Cart: React.FC<{ currentProduct: IDetailedProduct }> = () => {
  const state = useContext(ContextStore);
  // state.setCart(state.products);
  const products = state.cart;
  let productsView: JSX.Element[] = [];
  let totalPrice = 0;

  for (let i = 0; i !== products.length; i++) {
    productsView.push(<CartCard currentProduct={products[i]} />);
  }

  for (let i = 0; i !== state.cart.length; i++) {
    totalPrice = totalPrice + state.cart[i].count * state.cart[i].price;
  }

  return (
    <div style={{ justifyContent: "center", width: "80%" }}>
      <h1>Your Cart</h1>
      <Divider />
      {productsView}
      <div style={{ float: "right", textAlign: "end" }}>
        <h1>Total: {totalPrice}</h1>
        <p>Shipping is added at checkout</p>
        <Button>Proceed to checkout</Button>
      </div>
    </div>
  );
};

export default Cart;
