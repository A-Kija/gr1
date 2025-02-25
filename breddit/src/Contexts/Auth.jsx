import { createContext } from 'react';

const AuthContext = createContext();


export const Auth = ({ children }) => {

    return (
        <AuthContext.Provider value={{

        }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;