import styles from './Product.module.scss';
import { IDetailedProduct } from '../../../models/IDetailProduct';
import React, { useContext } from 'react';
import ContextStore from '../../../Context';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import { Button } from 'office-ui-fabric-react/lib/Button';

const Product: React.FC<{currentProduct: IDetailedProduct}> = (props: {currentProduct: IDetailedProduct}) => {
    
    let selectedProduct = props.currentProduct;

    const state = useContext(ContextStore);

    return (
        <div className={styles.product}>
            <Link to="/details" >

                <Card
                    hoverable                    
                    cover={<img onClick={onImageClick} src={selectedProduct?.img} alt="product" />} 
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
        state.setDetailedProducts(selectedProduct)
        state.setCart([...state.cart, selectedProduct as IDetailedProduct])
        state.setModelOpen(true);
    }
}

export default Product;