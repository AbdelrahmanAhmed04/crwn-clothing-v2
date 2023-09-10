import { createContext, useState } from "react";

import PRODUCTS from "../shop-data/shop-data.json";
export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setPoducts] = useState(PRODUCTS);
  const value = { products, setPoducts };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
