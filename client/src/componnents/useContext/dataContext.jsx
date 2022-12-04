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
    category().then((data) => setCategoryState(data.Category[0].numOfCategory));
    infoPage().then((data) => setInfoPageState(data.InfoPage[0].numOfInfoPage));
    orders().then((data) => setOrdersState(data.orders));
    products().then((data) => setProductsState(data.productData[0].numOfProd));
    sections().then((data) => setSectionsState(data.section[0].numOfSection));
    stores().then((data) => setStoresState(data.stores[0].numOfStores));
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
