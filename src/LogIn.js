import React, {useContext} from 'react';
// import ShopContext from "./ShopContext";


export const LogIn = () => {

    return (
        <div>
            
            <button onClick={() => window.location.assign("http://localhost:9000/authenticate/google")}>
                Google+
            </button>
        </div>
    );
};

export default LogIn;