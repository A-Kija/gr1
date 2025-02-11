import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useCreate(url, reload) {
    
    const [createData, setCreateData] = useState(null);

    useEffect(_ => {
        if (null === createData) {
            return;
        }
        axios.post(url, createData)
            .then(response => {
                console.log(response);
                reload();
            })
            .catch(err => {
                console.log(err);
            });
    }, [createData, url, reload]);

    return { setCreateData };
    
}