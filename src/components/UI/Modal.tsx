import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ContextStore from "../../Context";
import Modal from "antd/lib/modal/Modal";
import { Button } from "antd";

const ProductModal: React.FC = () => {
  const state = useContext(ContextStore);
  let selectedProduct = state.detailProduct;
  return (
    <Modal>
      <div className="container">
        <div className="row">
          <div
            id="modal"
            className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize"
          >
            <h5>item added to the cart</h5>
            <img
              src={selectedProduct?.img}
              className="img-fluid"
              alt="product"
            />
            <h5>{selectedProduct?.title}</h5>
            <h5 className="text-muted">price : $ {selectedProduct?.price} </h5>
            <Link to="/">
              <Button onClick={() => state.setModelOpen(false)}>store</Button>
            </Link>
            <Link to="/cart">
              <Button onClick={() => state.setModelOpen(false)}>
                go to cart
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProductModal;
