import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();
const URL = 'http://localhost:3333';



export const Auth = ({ children }) => {

    const [loginData, setLoginData] = useState(null);
    const [authMessage, setAuthMessage] = useState(null);

    useEffect(_ => {
        if (loginData === null) {
            return;
        }
        console.log(loginData);

        axios.post(`${URL}/login`, loginData, { withCredentials: true }) // , { withCredentials: true } dėl cookie
            .then(res => {
                console.log(res.data);
                if (!res.data.success) {
                    setAuthMessage({
                        text: res.data.message.text,
                        color: res.data.message.color
                    });
                } else {
                    setAuthMessage(null);
                }
            })
            .catch(err => {
                console.log(err);
            });

    }, [loginData]);

    return (
        <AuthContext.Provider value={{
            setLoginData,
            authMessage
        }}>
            {children}
        </AuthContext.Provider>
    );

}

export default AuthContext;