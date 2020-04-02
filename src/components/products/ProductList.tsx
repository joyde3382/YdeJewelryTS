import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';
import ContextStore from '../../Context';
import { Card, Row } from 'antd';

import styles from './ProductList.module.scss';
import Grid from 'antd/lib/card/Grid';


const ProductList: React.FC = () => {
    const state = useContext(ContextStore);
    let products = state.products;
    let productsView: JSX.Element[] = [];

    const gridStyle = {
        width: '25%',
        textAlign: 'center',
      };

    for (let i = 0; i !== products.length; i++) {
        productsView.push(
            <Product
                currentProduct={products[i]} />
        );
    }
    // {productsView}
    //             {console.log(productsView)}

    return (
        // <div className="py-5">
        <div className={styles.Grid}>
            {productsView}
        </div>
    );
}

export default ProductList;
