import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { serverUrl } from '../Constants/main';
import AuthContext from '../Contexts/Auth';

export default function useLogin() {

    const redirectAfterLogin = _ => {
        window.location.hash = '#';
    }

    const [loginData, setLoginData] = useState(null);

    const { setUser } = useContext(AuthContext);

    useEffect(_ => {

        if (null === loginData) {
            return;
        }

        axios.post(serverUrl + 'login', loginData, { withCredentials: true })
            .then(res => {
                setUser(res.data.user);
                redirectAfterLogin();
            })
            .catch(error => {
                console.error(error);
            })
    }, [loginData]);


    return { setLoginData };

}
