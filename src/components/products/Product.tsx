import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ContextStore from '../../Context';
import { IDetailedProduct } from '../../models/IDetailProduct';
import 'antd/dist/antd.css';
// import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { Button, Card } from 'antd';

import styles from './Product.module.scss';

const Product: React.FC<{currentProduct: IDetailedProduct}> = (props: {currentProduct: IDetailedProduct}) => {
    
    let selectedProduct = props.currentProduct;

    const state = useContext(ContextStore);

    return (
        <div className={styles.product}>
            <Link to="/details" >

                <Card
                    hoverable
                    style={{width: 320}}
                    
                    cover={<img  onClick={onImageClick} src={selectedProduct?.img} alt="product" />} 
                >    
                    {/* card footer */}
                    <div className={styles.footer} >
                        <p className="align-self-center mb-0" >
                            {selectedProduct?.title}
                        </p>
                        <h5 className="text-blue font-italic mb-0" >
                            <span className="mr-1">$</span>
                            {selectedProduct?.price}
                        </h5>
                        <Button type="primary">Buy</Button>
                    </div>
                </Card>
            </Link>

            
        </div>
    );

    function onImageClick() {
        state.setCart([...state.cart, selectedProduct as IDetailedProduct])
        state.setModelOpen(true);
    }
}

export default Product;