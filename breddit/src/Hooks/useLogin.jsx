import axios from 'axios';
import { useState, useEffect } from 'react';
import { serverUrl } from '../Constants/main';

export default function useLogin() {


    const [loginData, setLoginData] = useState(null);

    useEffect(_ => {

        if (null === loginData) {
            return;
        }

        axios.post(serverUrl + 'login', loginData, {withCredentials: true})
            .then(res => {
                console.log(res.data)
            })
            .catch(error => {
                console.error(error);
            })
    }, [loginData]);


    return { setLoginData };

}
