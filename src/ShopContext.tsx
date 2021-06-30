import React, { useEffect, useState } from "react";
import { IDiscount, IShopContextState } from "./IDiscount";
import { getDiscounts } from "./helpers/getDiscounts"
import { getBasket } from "./helpers/getBasket"
import { IBasket, IBasketContextState } from "./IBasket";


const defaultValue: IShopContextState = {
  // discounts: [],
  basket: [],
}

export const ShopContext = React.createContext(defaultValue);

export function ShopContextProvider({ children }) {
  const [discounts, setDiscounts] = useState<IDiscount[]>([]);
  const [basket, setBasket] = useState<IBasket[]>([]);
  // const providerValue: IShopContextState = {
  //   discounts,
  // }

  const providerValue: IBasketContextState = {
    basket, 
  }


  useEffect(() => {
    // getDiscounts()
    //   .then((discount) => {
    //     console.log(discount)
    //     setDiscounts(discount)
    //   })
    getBasket()
    .then((bask) => {
      console.log(bask)
      setBasket(bask)
    })

  }, []);

  return (
    <ShopContext.Provider value={providerValue} >
      {children}
    </ShopContext.Provider>
  );
} 

export default ShopContext;