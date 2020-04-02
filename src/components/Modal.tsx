import React, { useState, useEffect, useContext } from 'react';
import { Modal } from 'office-ui-fabric-react/lib/Modal';
import { Link } from 'react-router-dom';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import ContextStore from '../Context';

const ProductModal: React.FC = () => {
    const state = useContext(ContextStore);
    let selectedProduct = state.detailProduct;
    return (
        <Modal>
            <div className="container" >
                <div className="row">
                    <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize"                    >
                        <h5>item added to the cart</h5>
                        <img
                            src={selectedProduct?.img}
                            className="img-fluid"
                            alt="product" />
                        <h5>{selectedProduct?.title}</h5>
                        <h5 className="text-muted">price : $ {selectedProduct?.price} </h5>
                        <Link to="/">
                            <PrimaryButton onClick={() => state.setModelOpen(false)}>
                                store
                            </PrimaryButton>
                        </Link>
                        <Link to="/cart">
                            <PrimaryButton onClick={() => state.setModelOpen(false)}>
                                go to cart
                            </PrimaryButton>
                        </Link>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default ProductModal;