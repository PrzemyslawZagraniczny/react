import { IBasket } from "../IBasket";


export const getBasket = async (): Promise<IBasket[]> => {
  
  return fetch("http://localhost:9000/baskets_json", {
    mode: 'cors',
    method: 'GET' ,
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
     },
  }).then(response => response.json())

};

export default getBasket