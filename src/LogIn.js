import React from 'react';

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