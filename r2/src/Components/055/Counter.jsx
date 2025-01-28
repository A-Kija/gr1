//1. Komponente įdėti h2 tagą ir mygtuką, kuris padidina skaičių, esantį h2 tage vienetu.
//2. Komponente pridėti reset mygtuką, kuris nustato skaičių 0.
//3. Komponente pridėti mygtuką, kuris sumažina skaičių vienetu.
//4. Komponente įdėti dar vieną h2 tagą, kuriame būtų atvaizduojamas skaičius (counter skaičius) padaugintas iš 2.
// Kintant counter skaičiui, jis turi būti padauginamas iš 2 ir atvaizduojamas h2 tage.
// Parašytų funkcijų NEKEISTI. Naudoti useEffect ir useState.


import { useEffect, useState } from 'react';

function Counter() {

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);


    useEffect(_ => {
        setCount2(count * 2);
    }, [count]);

    const add1 = _ => {
        setCount(c => c + 1);
    }

    const reset = _ => {
        setCount(0);
    }

    const rem1 = _ => {
        setCount(c => c - 1);
    }

    return (
        <div className="counter">
            <h2>Counter: {count}</h2>
            <h2>Counter X 2: {count2}</h2>
            <div style={{ display: 'flex' }}>
                <button class="blue" onClick={add1}>+1</button>
                <button class="red" onClick={reset}>Reset</button>
                <button class="green" onClick={rem1}>-1</button>
            </div>
        </div>
    );
}

export default Counter;