import { IDetailedProduct } from "../../../../models/IDetailProduct";
import React, { useContext } from "react";
import ContextStore from "../../../../Context";
import { Card, Button, Divider } from "antd";
import { PlusOutlined, MinusOutlined, CloseOutlined } from "@ant-design/icons";

const CartCard: React.FC<{ currentProduct: IDetailedProduct }> = (props: {
  currentProduct: IDetailedProduct;
}) => {
  let selectedProduct = props.currentProduct;
  const state = useContext(ContextStore);

  return (
    <div>
      <Card
        bordered={false}
        style={{ display: "flex" }}
        bodyStyle={{ width: "100%", padding: 0 }}
        cover={
          <img
            style={{ marginTop: "1rem", width: "100px" }}
            src={selectedProduct?.image}
            alt="product"
          />
        }
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h1 style={{ width: "50%" }}>{selectedProduct?.title}</h1>
          <p style={{ width: "25%", textAlign: "right" }}>
            ${selectedProduct?.price}
          </p>
          <div
            style={{
              display: "flex",
              width: "25%",
              justifyContent: "flex-end",
            }}
          >
            <Button
              onClick={decrementQuan}
              icon={<MinusOutlined />}
              style={{ marginRight: "0.8rem" }}
            />
            <p style={{ marginRight: "0.8rem" }}>{selectedProduct?.count}</p>
            <Button onClick={inrementQuan} icon={<PlusOutlined />} />
          </div>
          <p style={{ textAlign: "end", width: "25%" }}>
            ${selectedProduct?.price * selectedProduct?.count}
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>Short description of products</p>
          <div>
            <Button onClick={removeItem} icon={<CloseOutlined />} />
          </div>
        </div>
        <Divider style={{ marginTop: "4rem" }} />
      </Card>
    </div>
  );

  function decrementQuan() {
    if (selectedProduct?.count !== 0) {
      selectedProduct.count--;
    }
    if (state.cart.length === 0) {
      state.setCart([selectedProduct as IDetailedProduct]);
    } else {
      state.setCart([...state.cart]);
    }
    console.log(state.cart);
  }

  function inrementQuan() {
    selectedProduct.count++;
    if (state.cart.length === 0) {
      state.setCart([selectedProduct as IDetailedProduct]);
    } else {
      state.setCart([...state.cart]);
    }
    console.log(state.cart);
  }

  function removeItem() {
    state.setCart(state.cart.splice(state.cart.indexOf(selectedProduct), 1));
  }
};

export default CartCard;
