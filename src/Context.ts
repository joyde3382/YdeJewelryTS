import React from "react";
import { IDetailedProduct } from "./models/IDetailProduct";
import { IFilter } from "./models/IFilter";

export interface IContextState {
  products: IDetailedProduct[];
  setProducts: (products: IDetailedProduct[]) => void;

  detailProduct: IDetailedProduct | any;
  setDetailedProducts: (products: IDetailedProduct | any) => void;

  currentCategory: string | undefined;
  setCurrentCategory: (value: string) => void;

  filter: IFilter | undefined;
  setFilter: (filter: IFilter) => void;

  filterChecked: boolean;
  setFilterChecked: (filterChecked: boolean) => void;

  cart: IDetailedProduct[];
  setCart: (cart: IDetailedProduct[]) => void;
  //   addProductToCart: (cart: IDetailedProduct) => void;

  drawer: boolean;
  setDrawer: (value: boolean) => void;
}

const context: IContextState = {} as IContextState;

const ContextStore = React.createContext(context);
export default ContextStore;
