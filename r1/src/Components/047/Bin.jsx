import H2 from './H2';
import Input from './Input';
import { useState } from 'react';

export default function Bin() {

    const [input, setInput] = useState('Nieko nėra');
    const [text, setText] = useState('');
    const [color, setColor] = useState('');

    const add = _ => {
        setText(input);
        setInput('');
    }

    const doColor = _ => {
        setColor('green');
    }

    return (
        <div className="bin">
            <div>
                <button className="red" onClick={add}>Add text</button>
                <button className="blue" onClick={_ => setText('')}>Clear</button>
                <button className="green" onClick={doColor}>Color</button>
            </div>
            <H2 text={text} color={color} />
            <Input input={input} setInput={setInput} />

        </div>
    );
}