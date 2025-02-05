import { createContext, useEffect, useState, useContext, use } from 'react';
import RouterContext from './Router';
import axios from 'axios';
import Wrapper from './Wrapper';

const AuthContext = createContext();
const URL = 'http://localhost:3333';

const redirectAfterLogin = 'http://localhost:3000';



export const Auth = ({ children }) => {

    const guardedRoutes = ['shop', 'about'];

    const { page } = useContext(RouterContext);

    const [loginData, setLoginData] = useState(null);
    const [authMessage, setAuthMessage] = useState(null);

    const [isAuth, setIsAuth] = useState(false);

    const isAuthCheck = _ => {
        if (!guardedRoutes.includes(page)) {
            return true;
        } else {
            if (isAuth) {
                return true;
            } else {
                return false;
            }
        }
    };

    useEffect(_ => {
        setIsAuth(false);
        axios.get(`${URL}/isauth`, { withCredentials: true })
            .then(res => {
                if (res.data.auth) {
                    setIsAuth(true);
                } else {
                    setIsAuth(false);
                    window.location.replace(`http://localhost:3000/#login`);
                }
            })
            .catch(err => {
                console.log(err);
                setIsAuth(false);
            });
    }, [page]);


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
                    setAuthMessage({
                        text: res.data.message.text,
                        color: res.data.message.color
                    });
                    setTimeout(_ => {
                        window.location.replace(redirectAfterLogin);
                    }, 1000);
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
            {isAuthCheck() ? children : <Wrapper><div>Loading...</div></Wrapper>}
        </AuthContext.Provider>
    );

}

export default AuthContext;