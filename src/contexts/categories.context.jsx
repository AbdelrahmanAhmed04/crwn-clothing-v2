import { createContext, useState, useEffect } from "react";
import { getCollectionsAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesMap = await getCollectionsAndDocuments("categories");
      setCategoriesMap(categoriesMap);
    };
    getCategoriesMap();
  }, []);
  const [categoriesMap, setCategoriesMap] = useState({});
  const value = { categoriesMap, setCategoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
