import { createContext, useState } from 'react';
import './app.css';
import './buttons.scss';
import A from './Components/057/A';


export const CountContext = createContext();


function App() {

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    return (
        <div className="app">
            <header className="app-header">

                <button onClick={_ => setCount(c => c + 1)}>+1 (c1)</button>
                <button onClick={_ => setCount2(c => c + 1)}>+1 (c2)</button>

                <div className="flex-bin">
                    <CountContext.Provider value={count2}>
                        <A count={count} />
                    </CountContext.Provider>
                </div>

            </header>
        </div>
    );
}

export default App;


// 1. count2 perduoti iš App.jsx į B.jsx naudojant useContext