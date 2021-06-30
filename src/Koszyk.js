import React, {useContext} from 'react';
import ShopContext from "./ShopContext";
import ProductContext from "./ProductContext";



export const Koszyk = () => {
    const {basket} = useContext(ShopContext);
    const {product} = useContext(ProductContext);

    return (
        <div>
            <h2>Zawartość koszyka:</h2>
            <table className="produkty">
                <thead>
                <tr>
                    <th>id</th>
                    <th>Produkt</th>
                    <th>Opis produktu</th>
                    <th>Sztuk</th>
                </tr>
                </thead>
                <tbody>
                {basket.map( (item) => (        
                    <tr>
                        <td>{item.id}</td>
                        <td>{product[item.product].name}</td>
                        <td style={{fontSize: '0.8em'}}>{product[item.product].description}</td>
                        <td style={{fontSize: '2.0em'}}>{item.pieces}</td>
                    </tr>
                ))}

                </tbody>
        </table>
  
        </div>
    );
};

export default Koszyk;