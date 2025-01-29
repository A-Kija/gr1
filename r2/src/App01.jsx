//5. Sukurti naują komponentą View, kuriame atvaizduoti counter skaičių h2 tage.
//  Iš Counter komponento h2 tagą ištrinti. Naudoti state uplifting principą.
// View komponentą įdėti į App komponentą.

//6. App komponente sukurti mygtuką, kuris kaitaliotų counterio esančio View komponente spalvą žalia/raudona.
//7. App komponente sukurti range tipo input1, kuris kaitaliotų counterio esančio View komponente spalvą fonto dydį nuo 10px iki 60px.


// Rytoj useReduser ir useContext

import './app.css';
import './buttons.scss';
import { useState } from 'react';
import Counter from './Components/055/Counter';
import View from './Components/055/View';

function App() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState(false);
    const [size, setSize] = useState(20);

    const changeColor = _ => setColor(c => !c);

    const changeSize = e => setSize(e.target.value);

    return (
        <div className="app">
            <header className="app-header">
                <Counter count={count} setCount={setCount} />
                <View count={count} color={color} size={size} />
                <button className="yellow" onClick={changeColor}>Change color</button>
                <input type="range" className="win10-thumb" min="10" max="60" onChange={changeSize} value={size} />
            </header>
        </div>
    );
}

export default App;