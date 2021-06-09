import React, {useContext} from 'react';
import ShopContext from "./ShopContext";


export const Koszyk = () => {
    const {discounts} = useContext(ShopContext);

    return (
        <div>
            lista zniek:
            <ul>
                {console.log(discounts[0].name)}
                {discounts.map( (d) => (        
                    <li>
                        {d.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Koszyk;