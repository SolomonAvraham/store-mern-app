import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import {
  category,
  infoPage,
  orders,
  products,
  sections,
  stores,
} from "../../services/index";

const DataContext = createContext();

export function useData() {
  return useContext(DataContext);
}

export default function DataProvider({ children }) {
  const [categoryState, setCategoryState] = useState(null);
  const [infoPageState, setInfoPageState] = useState(null);
  const [ordersState, setOrdersState] = useState([]);
  const [productsState, setProductsState] = useState(null);
  const [sectionsState, setSectionsState] = useState(null);
  const [storesState, setStoresState] = useState(null);

  useEffect(() => {
    category().then((data) => setCategoryState(data[0].numOfCategory));
    infoPage().then((data) => setInfoPageState(data[0].numOfInfoPage));
    orders().then((data) => setOrdersState(data));
    products().then((data) => setProductsState(data[0].numOfProd));
    sections().then((data) => setSectionsState(data[0].numOfSection));
    stores().then((data) => setStoresState(data[0].numOfStores));
  }, []);

  return (
    <DataContext.Provider
      value={{
        categoryState,
        infoPageState,
        ordersState,
        productsState,
        sectionsState,
        storesState,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
