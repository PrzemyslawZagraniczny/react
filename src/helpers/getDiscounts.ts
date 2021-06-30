import { IDiscount } from "../IDiscount";

export const getDiscounts = async (): Promise<IDiscount[]> => {
  
  return fetch("http://localhost:9000/discounts_json", {
    mode: 'cors',
    method: 'GET' ,
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
     },
  }).then(response => response.json())

};



export default getDiscounts