import React, { useState, useEffect } from "react";
import { IDetailedProduct } from "./models/IDetailProduct";
import { IFilter } from "./models/IFilter";
import ContextStore, { IContextState } from "./Context";
import PageSetup from "./components/UI/PageSetup/PageSetup";
import { IProductService, ProductService } from "./services/ProductService";

const App: React.FC = () => {
  const service: IProductService = new ProductService();
  const [products, setProducts] = useState<IDetailedProduct[]>();
  const [detailProduct, setDetailedProducts] = useState<IDetailedProduct>();
  const [currentCategory, setCurrentCategory] = useState<string>("all");
  const [cart, setCart] = useState<IDetailedProduct[]>([]);
  const [filter, setFilter] = useState<IFilter>();
  const [filterChecked, setFilterChecked] = useState<boolean>(false);
  const [drawer, setDrawer] = useState<boolean>(false);
  const [modalOpen, setModelOpen] = useState<boolean>(false);
  const [modalProduct, setModelProduct] = useState<
    IDetailedProduct | undefined
  >();

  let initialState: IContextState = {
    products: products as any,
    setProducts: setProducts,

    detailProduct: detailProduct,
    setDetailedProducts: setDetailedProducts,

    currentCategory: currentCategory,
    setCurrentCategory: setCurrentCategory,

    cart: cart,
    setCart: setCart,

    filter: filter,
    setFilter: setFilter,

    filterChecked: filterChecked,
    setFilterChecked: setFilterChecked,

    drawer: drawer,
    setDrawer: setDrawer,

    modalOpen: modalOpen,
    setModelOpen: setModelOpen,

    modalProduct: modalProduct,
    setModalProduct: setModelProduct,
  };

  useEffect(() => {
    if (products) {
      return;
    }
    (async () => {
      await getAllProducts();
    })();
  });

  if (!products) {
    return <div></div>;
  }

  return (
    <ContextStore.Provider value={initialState}>
      <PageSetup />
    </ContextStore.Provider>
  );

  async function getAllProducts() {
    setProducts(await service.getAllProducts());
  }
};

export default App;
