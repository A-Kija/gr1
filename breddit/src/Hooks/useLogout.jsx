import axios from 'axios';
import { useEffect, useContext } from 'react';
import { serverUrl } from '../Constants/main';
import AuthContext from '../Contexts/Auth';

export default function useLogout() {

    const redirectAfterLogout = _ => {
        window.location.hash = '#';
    }

    const { setUser } = useContext(AuthContext);

    useEffect(_ => {

        axios.post(serverUrl + 'logout', {}, { withCredentials: true })
            .then(res => {
                setUser(res.data);
                redirectAfterLogout();
            })
            .catch(error => {
                console.error(error);
            })
    }, []);


    return null;

}