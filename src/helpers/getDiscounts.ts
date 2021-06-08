import { IDiscount } from "../IDiscount";

export const getDiscounts = async (): Promise<IDiscount[]> => {
  const response = await fetch("http://localhost:9001/discounts_json", {
    mode: 'cors',
    method: 'GET' ,
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    },
}).then(response => response.json())
  return response
};



export default getDiscounts