import { useState } from 'react';

export default function useImage(fileInput) {

    const [image, setImage] = useState(null);

    const clearImage = _ => {
        fileInput.current.value = null;
        setImage(null);
    }

    const imageReader = img => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = _ => {
                resolve(reader.result);
            }
            reader.onerror = _ => {
                reject(reader.error);
            }
            reader.readAsDataURL(img);
        });
    }

    const readImage = e => {
        const file = e.target.files[0];
        if (file) {
            imageReader(file)
            .then(res => {
                setImage(res);
            })
            .catch(err => {
                setImage(null);
                console.error(err);
            });
        }
    }

    return { image, readImage, clearImage };

}