import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ContextStore from "../../Context";
import { IDetailedProduct } from "../../models/IDetailProduct";
import { Card, Button } from "antd";
import { detailProduct } from "../../data";
import Cart from "../Cart/Cart";

const Details: React.FC<{ currentProduct: IDetailedProduct }> = (props: {
  currentProduct: IDetailedProduct;
}) => {
  // let selectedProduct = props.currentProduct;

  const state = useContext(ContextStore);
  let selectedProduct = state.detailProduct;

  return (
    <div className="container py-5">
      {/* Title */}
      <div className="row">
        <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
          <h1>{selectedProduct?.title}</h1>
        </div>
      </div>
      {/* End title */}

      {/* product info */}
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <img src={selectedProduct?.img} className="img-fluid" alt="product" />
        </div>
        {/* product text */}
        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
          <h2>model : {selectedProduct?.title} </h2>
          <h4 className="text-blue">
            <strong>
              price: <span>$</span>
              {selectedProduct?.price}
            </strong>
          </h4>
          <p className="text-capitalize font-weight-bold mt-3 mb-0"></p>
          <p className="text-muted lead">{selectedProduct?.info}</p>
          {/* buttons */}
          <div>
            <Button onClick={onButtonClick}>Add to cart</Button>
          </div>
        </div>
      </div>
    </div>
  );

  function onButtonClick() {
    if (state.cart === undefined || state.cart.length == 0) {
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
