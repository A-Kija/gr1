import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useGet(url, reloadTime) {
    
    const [images, setImages] = useState(null);

    useEffect(_ => {
        axios.get(url)
            .then(response => {
                setImages(response.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, [url, reloadTime]);

    return { images };
    
}