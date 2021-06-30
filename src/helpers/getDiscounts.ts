import { IDiscount } from "../IDiscount";

export const getDiscounts = async (): Promise<IDiscount[]> => {
  
  return await fetch("http://localhost:9000/discounts_json", {
    mode: 'cors',
    method: 'GET' ,
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    },
  }).then(response => response.json())

};



export default getDiscounts