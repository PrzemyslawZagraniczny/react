import React, { useEffect, useState } from "react";
import { IDiscount, IShopContextState } from "./IDiscount";
import { getDiscounts } from "./helpers/getDiscounts"

const defaultValue: IShopContextState = {
  discounts: []
}

export const ShopContext = React.createContext(defaultValue);

export function ShopContextProvider({ children }) {
  const [discounts, setDiscounts] = useState<IDiscount[]>([]);

  const providerValue: IShopContextState = {
    discounts,
  }

  useEffect(() => {
    getDiscounts()
      .then((products) => {
        console.log(products)
        setDiscounts(products)
      })
  }, []);

  return (
    <ShopContext.Provider value={providerValue} >
      {children}
    </ShopContext.Provider>
  );
} ;

export default ShopContext;