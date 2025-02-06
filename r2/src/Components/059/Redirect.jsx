import { useEffect } from 'react';

export default function Redirect({ to }) {

    useEffect(_ => {
        window.location.replace(to);
    }, [to]);

    return null;

}