import React, { useState } from "react";
import { storeProducts } from "./data";
import { IDetailedProduct } from "./models/IDetailProduct";
import { IFilter } from "./models/IFilter";
import ContextStore, { IContextState } from "./Context";
import PageSetup from "./components/UI/PageSetup/PageSetup";

const App: React.FC = () => {
  const [products, setProducts] = useState<IDetailedProduct[]>(
    getAllProducts()
  );
  const [detailProduct, setDetailedProducts] = useState<IDetailedProduct>();
  const [currentCategory, setCurrentCategory] = useState<string>("all");
  const [cart, setCart] = useState<IDetailedProduct[]>([]);
  const [filter, setFilter] = useState<IFilter>();
  const [drawer, setDrawer] = useState<boolean>(false);
  const [modalOpen, setModelOpen] = useState<boolean>(false);
  const [modalProduct, setModelProduct] = useState<
    IDetailedProduct | undefined
  >();

  let initialState: IContextState = {
    products: products,
    setProducts: setProducts,

    detailProduct: detailProduct,
    setDetailedProducts: setDetailedProducts,

    currentCategory: currentCategory,
    setCurrentCategory: setCurrentCategory,

    cart: cart,
    setCart: setCart,

    filter: filter,
    setFilter: setFilter,

    drawer: drawer,
    setDrawer: setDrawer,

    modalOpen: modalOpen,
    setModelOpen: setModelOpen,

    modalProduct: modalProduct,
    setModalProduct: setModelProduct,
  };

  return (
    <ContextStore.Provider value={initialState}>
      <PageSetup />
    </ContextStore.Provider>
  );

  function getAllProducts(): IDetailedProduct[] {
    return storeProducts;
  }
};

export default App;
