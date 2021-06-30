import { IProduct } from "../IProduct";


export const getProduct = async (): Promise<IProduct[]> => {
  
  return fetch("http://localhost:9000/products_json", {
    mode: 'cors',
    method: 'GET' ,
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
     },
  }).then(response => response.json())

};

export default getProduct