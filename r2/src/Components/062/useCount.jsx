import { useState } from 'react';

export default function useCount(initial) {

    const [count, setCount] = useState(initial);

    const ct = _ => {
        setCount(c => c < 5 ? c + 1 : 0);
    }

    return [count, ct];


}