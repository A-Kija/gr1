import './app.css';
import './buttons.scss';
import { useEffect, useRef, useState } from 'react';
export default function App() {

    console.log('APP RENDER');

    const [count, setCount] = useState(0);

    // let saugykla = 0;
    const saugykla = useRef(0);

    const h1El = useRef(null);
    const needFocusInput = useRef(null);

    useEffect(_ => {
        needFocusInput.current.focus();
    }, []);

    const iSaugykla = (kiekis) => {
        saugykla.current += kiekis;
        console.log(saugykla.current);
    }

    const erezijos = _ => {
        const h1 = document.querySelector('h1');
        h1.style.color = 'green';
    }

    const mazesnesErezijos = _ => {
        h1El.current.style.color = 'blue';
    }


    return (
        <div className="app">
            <header className="app-header">
                <h1 ref={h1El}>{count}</h1>
                <button onClick={_ => setCount(c => c + 1)}>+1</button>

                <button onClick={_ => iSaugykla(10)} className="yellow">10</button>
                <button onClick={_ => iSaugykla(20)} className="yellow">20</button>

                <button onClick={erezijos}>Žalias</button>
                <button onClick={mazesnesErezijos}>Mėlynas</button>

                <input ref={needFocusInput} type="text"></input>

            </header>
        </div>
    );
}

