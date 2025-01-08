import { useState } from 'react';

export default function Radio() {

    const [radio, setRadio] = useState('b');

    const handleRadio = id => {
        // setRadio(id);
        setRadio(r => r === id ? '' : id);
    }

    return (
        <div>
            <input type="checkbox" id="radio_a" checked={radio === 'a'} onChange={_ => handleRadio('a')} /><label htmlFor="radio_a">A</label>
            <input type="checkbox" id="radio_b" checked={radio === 'b'} onChange={_ => handleRadio('b')} /><label htmlFor="radio_b">B</label>
            <input type="checkbox" id="radio_c" checked={radio === 'c'} onChange={_ => handleRadio('c')} /><label htmlFor="radio_c">C</label>
            <input type="checkbox" id="radio_d" checked={radio === 'd'} onChange={_ => handleRadio('d')} /><label htmlFor="radio_d">D</label>
        </div>
    );
}