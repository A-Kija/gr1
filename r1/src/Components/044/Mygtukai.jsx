import { useState } from 'react';

export default function Mygtukai() {

    const [color, setColor] = useState('blue');
    const [count, setCount] = useState(5);


    const handleColorChange = color => {
        setColor(color);
        setCount(5);
    }


    return (
        <div style={{
            padding: '20px',
            border: '1px solid lightgray',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px'
        }}>
            <div className="mygtukai">
                <button className="green" onClick={_ => handleColorChange('green')}>Pažaliuoti</button>
                <button className="red" onClick={_ => setColor('crimson')}>Paraudonuoti</button>
                <button className="yellow" onClick={_ => setCount(c => c + 1)}>+1</button>
            </div>

            <div style={{
                width: '100px',
                height: '100px',
                backgroundColor: color,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '30px',
            }}>{count}</div>
        </div>
    );


}

// Įdėti į App.jsx Naudojant useState, padaryti kad veiktų mygtukai.

// Į kvadratą įrašyti 5 ir padaryti mygtuką, kuris didintų skaičių vienetu.

// Padaryti, kad kai kvadratas pažaliuoja skaičius tampa vėl 5.