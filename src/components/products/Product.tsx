import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ContextStore from '../../Context';
import { IDetailedProduct } from '../../models/IDetailProduct';

const Product: React.FC<{currentProduct: IDetailedProduct}> = (props: {currentProduct: IDetailedProduct}) => {
    
    let selectedProduct = props.currentProduct;

    const state = useContext(ContextStore);

    return (
        <div className="card">
            <div
                className="img-container p-5"
                onClick={onImageClick}>
                <Link to="/details" >
                    <img src={selectedProduct?.img} alt="product" className="card-img-top" />
                </Link>

                <button className="cart-btn"
                    disabled={selectedProduct?.inCart ? true : false}
                    onClick={onImageClick}>
                    {selectedProduct?.inCart ? (
                        <p className="text-capitalize mb-0">
                            {" "}
                            in cart
                        </p>
                    ) : (
                            <i className="fas fa-cart-plus" />
                        )}
                </button>
            </div>

            {/* card footer */}
            <div className="card-footer d-flex justify-content-between" >
                <p className="align-self-center mb-0" >
                    {selectedProduct?.title}
                </p>
                <h5 className="text-blue font-italic mb-0" >
                    <span className="mr-1">$</span>
                    {selectedProduct?.price}
                </h5>
            </div>
        </div>
    );

    function onImageClick() {
        state.setCart([...state.cart, selectedProduct as IDetailedProduct])
        state.setModelOpen(true);
    }
}

export default Product;