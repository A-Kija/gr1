import { useEffect, useState } from 'react';
import randColor from '../../Functions/randomColor';

export default function useColorSquare(initC1, initC2) {


    const [color1, setColor1] = useState(initC1);
    const [color2, setColor2] = useState(initC2);


    const click1 = _ => {
        setColor1(randColor());
    }

    const click2 = _ => {
        setColor2(randColor());
    }

    useEffect(_ => {
        if (color1 === initC1 || color1 === '#000000') {
            return;
        }
        setColor2('#000000');
    }, [color1, initC1]);

    useEffect(_ => {
        if (color2 === initC2 || color2 === '#000000') {
            return;
        }
        setColor1('#000000');
    }, [color2, initC2]);





    return { color1, color2, click1, click2 };

}