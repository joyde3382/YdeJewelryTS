import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';
import ContextStore from '../../Context';

const ProductList: React.FC = () => {
    const state = useContext(ContextStore);
    let products = state.products;
    let productsView: JSX.Element[] = [];

    for (let i = 0; i !== products.length; i++) {
        productsView.push(
            <Product
                currentProduct={products[i]} />
        );
    }

    return (
        <div className="py-5">
            <div className="container">
                {/* <Title name="our" title="products" /> */}

                <div className="row">
                        {productsView}
                </div>
            </div>    
        </div>
    );
}

export default ProductList;
