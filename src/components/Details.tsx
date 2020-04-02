import React, { useState, useEffect, useContext } from 'react';
import { PrimaryButton } from "office-ui-fabric-react/lib/Button";
import { Link } from 'react-router-dom';
import ContextStore from '../Context';
import { IDetailedProduct } from '../models/IDetailProduct';


const Details: React.FC = () => {
    const state = useContext(ContextStore);
    let selectedProduct = state.detailProduct;

    return (
        <div className="container py-5">
            {/* Title */}
            <div className="row" >
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5" >
                    <h1>{selectedProduct?.title}</h1>
                </div>
            </div>
            {/* End title */}

            {/* product info */}
            <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3" >
                    <img src={selectedProduct?.img} className="img-fluid" alt="product" />
                </div>
                {/* product text */}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize" >
                    <h2>model : {selectedProduct?.title} </h2>
                    <h4 className="text-blue">
                        <strong>
                            price: <span>$</span>
                            {selectedProduct?.price}
                        </strong>
                    </h4>
                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                        some info about product:
                                    </p>
                    <p className="text-muted lead">{selectedProduct?.info}</p>
                    {/* buttons */}
                    <div>
                        -
                        <PrimaryButton onClick={onButtonClick}>
                            Does Something
                        </PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );

    function onButtonClick() {
        state.setCart([...state.cart, state.detailProduct as IDetailedProduct]);
    }
}

export default Details;