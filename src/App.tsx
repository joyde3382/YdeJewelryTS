import React, { useState } from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';
import styles from './App.module.scss';
import { storeProducts } from './data';
import { IDetailedProduct } from './models/IDetailProduct';
import ContextStore, { IContextState } from './Context';
import ProductList from './components/products/ProductList';

const App: React.FC = () => {

  const [products, setProducts] = useState<IDetailedProduct[]>(getAllProducts());
  const [detailProduct, setDetailedProducts] = useState<IDetailedProduct>();
  const [cart, setCart] = useState<IDetailedProduct[]>([]);
  const [modalOpen, setModelOpen] = useState<boolean>(false);
  const [modalProduct, setModelProduct] = useState<IDetailedProduct | undefined>();

  let initialState: IContextState = {
    products: products, setProducts: setProducts,
    detailProduct: detailProduct, setDetailedProducts: setDetailedProducts,
    cart: cart, setCart: setCart,
    modalOpen: modalOpen, setModelOpen: setModelOpen,
    modalProduct: modalProduct, setModalProduct: setModelProduct
  };

  return (
    <ContextStore.Provider value={initialState}>
        <Router>
          <Navbar />
          <ProductList />
        </Router>
    </ContextStore.Provider>
  );

  function getAllProducts(): IDetailedProduct[] {
    return storeProducts;
  }
}

export default App;
