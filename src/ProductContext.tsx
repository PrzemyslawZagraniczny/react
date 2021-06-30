import React, { useEffect, useState } from "react";

import { IProduct, IProductContextState }  from "./IProduct";
import { getProduct } from "./helpers/getProduct"

const defaultValue: IProductContextState = {
  product: [{id: -1, name:"pusty"}],
}

export const ProductContext = React.createContext(defaultValue);
export function ProductContextProvider({ children }) {
const [product, setProduct] = useState<IProduct[]>([]);

  const providerValue: IProductContextState = {
    product, 
  }

  useEffect(() => {
    getProduct()
    .then((p) => {
      console.log(p)
      setProduct(p)
    })
  }, []);

  return (
    <ProductContext.Provider value={providerValue} >
      {children}
    </ProductContext.Provider>
  );
} 

export default ProductContext;