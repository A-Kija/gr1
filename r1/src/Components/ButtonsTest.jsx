import { useState } from 'react';
import NiceSq from './NiceSq';

export default function ButtonsTest() {

    const [counter, setCounter] = useState(100);
    const [size, setSize] = useState(100);

    const grbutton = _ => {
        console.log('GREEN Button clicked');
    }

    const blbutton = a => {
        console.log('BLUE Button clicked', a);
    }

    const redbutton = _ => {
        console.log('RED Button clicked');
        // counter++;  Tiesioginsi steito keitimas yra baudžiamas mirties bausme
        // setCounter(counter + 1); // BLOGAI! nors ir veikia
        // setCounter(888); // Gerai, nes nenaudojamas steitas
        // setCounter(ct => ct + 1); // Gerai, nes naudojamas steitas
        // setCounter(ct => ct + 1);
        setCounter(ct => ct + 1);
        // setCounter(counter + 1);
        // console.log('counter:', counter);
    }

    const changeSize = diff => {
        if (diff === null) {
            setSize(100);
            return;
        }
        setSize(sz => sz + diff);
    }

    return (

        <div>

        <button className="green" onClick={grbutton}>Button</button>

        <button className="blue" onClick={_ => blbutton('informacija A')}>Button</button>

        <button className="red" onClick={redbutton}>+1</button>

        <button className="yellow" onClick={_ => changeSize(10)}>+10</button>
        <button className="yellow" onClick={_ => changeSize(-12)}>-12</button>

        <button className="red" onClick={_ => changeSize(null)}>100 again</button>

        <h1>{counter}</h1>

        <NiceSq size={size} />

        </div>

    );
}