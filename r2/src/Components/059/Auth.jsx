import { createContext, useEffect, useState, useContext, useRef } from 'react';
import RouterContext from './Router';
import axios from 'axios';
import Wrapper from './Wrapper';
import Redirect  from './Redirect';

const AuthContext = createContext();
const URL = 'http://localhost:3333';

const redirectAfterLogin = 'http://localhost:3000/#';
const loginUrl = 'http://localhost:3000/#login';


export const Auth = ({ children }) => {

    const guardedRoutes = useRef(['shop', 'about']);

    const { page } = useContext(RouterContext);

    const [loginData, setLoginData] = useState(null);
    const [authMessage, setAuthMessage] = useState(null);
    const [user, setUser] = useState(null);

    const [isAuth, setIsAuth] = useState(false);

    const isAuthCheck = c => {
        if (!guardedRoutes.current.includes(page)) {
            return c;
        } else {
            if (!user) {
                return <Wrapper><div>Loading</div></Wrapper>;
            } else if (user.role === 'guest') {
                return <Wrapper><Redirect to={loginUrl} /></Wrapper>;
            } else {
                return c;
            }

        }
    };

    const logout = _ => {
        axios.post(`${URL}/logout`, {}, { withCredentials: true })
            .then(res => {
                console.log(res.data);
                if (res.data.success) {
                    setUser({
                        name: 'Guest',
                        role: 'guest'
                    });
                    window.location.replace(redirectAfterLogin);
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    useEffect(_ => {
        setIsAuth(false);
        // if (!guardedRoutes.current.includes(page)) {
        //     return;
        // }
        if (user) {
            setIsAuth(user.role === 'guest' ? false : true);
            return;
        }
        axios.get(`${URL}/isauth`, { withCredentials: true })
            .then(res => {
                if (res.data.auth) {
                    setIsAuth(true);
                    setUser(res.data.user);
                } else {
                    setIsAuth(false);
                    setUser({
                        name: 'Guest',
                        role: 'guest'
                    });
                    guardedRoutes.current.includes(page) && window.location.replace(`http://localhost:3000/#login`);
                }
            })
            .catch(err => {
                console.log(err);
                setIsAuth(false);
            });
    }, [page, guardedRoutes, user]);


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
                    setUser(res.data.user);
                    setTimeout(_ => {
                        window.location.replace(redirectAfterLogin);
                        setAuthMessage(null);
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
            authMessage,
            user,
            logout
        }}>
            {isAuthCheck(children)}
        </AuthContext.Provider>
    );

}

export default AuthContext;