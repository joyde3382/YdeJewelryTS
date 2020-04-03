import React, { useState } from "react";
import Navbar from "./components/UI/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styles from "./App.module.scss";
import { storeProducts } from "./data";
import { IDetailedProduct } from "./models/IDetailProduct";
import ContextStore, { IContextState } from "./Context";
import ProductList from "./components/Products/ProductList/ProductList";
import Details from "./components/Products/Details";
import About from "./components/About/About";
import Cart from "./components/Cart/Cart";
import Default from "./components/Default";
import Welcome from "./components/UI/Frontpage/Frontpage";
import Foot from "./components/UI/Foot/Foot";
import PageSetup from "./components/UI/PageSetup/PageSetup";

const App: React.FC = () => {
  const [products, setProducts] = useState<IDetailedProduct[]>(
    getAllProducts()
  );
  const [detailProduct, setDetailedProducts] = useState<IDetailedProduct>();
  const [cart, setCart] = useState<IDetailedProduct[]>([]);
  const [modalOpen, setModelOpen] = useState<boolean>(false);
  const [modalProduct, setModelProduct] = useState<
    IDetailedProduct | undefined
  >();

  let initialState: IContextState = {
    products: products,
    setProducts: setProducts,
    detailProduct: detailProduct,
    setDetailedProducts: setDetailedProducts,
    cart: cart,
    setCart: setCart,
    modalOpen: modalOpen,
    setModelOpen: setModelOpen,
    modalProduct: modalProduct,
    setModalProduct: setModelProduct
  };

  return (
    <ContextStore.Provider value={initialState}>
      <PageSetup></PageSetup>
    </ContextStore.Provider>
  );

  function getAllProducts(): IDetailedProduct[] {
    return storeProducts;
  }
};

export default App;
