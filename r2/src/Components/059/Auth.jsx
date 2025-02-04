import { createContext, useEffect, useState } from 'react';

const AuthContext = createContext();



export const Auth = ({children}) => {

    const [loginData, setLoginData] = useState(null);

    useEffect(_ => {
        if (loginData === null) {
            return;
        }
        console.log(loginData);
    }, [loginData]);

    return (
        <AuthContext.Provider value={{setLoginData}}>
            {children}
        </AuthContext.Provider>
    );

}

export default AuthContext;