import './app.css';
import './buttons.scss';
import { useCallback, useEffect, useState } from 'react';
import rand from './Functions/rand';
import Square from './Components/Square';


export default function App() {

    // console.log('App komponentas');

    const [sq, setSq] = useState([]);
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const disableEnableButton = useCallback(d => {
        setButtonDisabled(d);
    }, [setButtonDisabled]);

    useEffect(_ => {
        if (sq.length >= 5) {
            console.log('Per daug kvadratu');
            disableEnableButton(true);
        } else {
            setButtonDisabled(false);
        }

    }, [sq, disableEnableButton, setButtonDisabled]);

    const addSq = _ => {
        setSq(s => [...s, {
            id: Date.now(),
            number: rand(1000, 9999)
        }]);
    }

    const deleteSq = id => {
        setSq(s => s.filter(sq => sq.id !== id));
    }


    return (
        <div className="app">
            <header className="app-header">

                <div className="sq-bin">
                    {
                        sq.map(s => <Square key={s.id} sq={s} deleteSq={deleteSq} />)
                    }
                </div>
                <button onClick={addSq} className="yellow" disabled={buttonDisabled}>ADD</button>

            </header>
        </div>
    );
}