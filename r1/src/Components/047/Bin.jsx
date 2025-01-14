import H2 from './H2';
import Input from './Input';
import { useEffect, useState } from 'react';

export default function Bin() {


    const [input, setInput] = useState('');
    const [text, setText] = useState('');
    const [color, setColor] = useState(null);
    const [cb, setCb] = useState(false);


    console.log('Bin komponentas atnaujintas');

    useEffect(_ => {
        console.log('Bin komponentas sukurtas');
    }, []);

    useEffect(_ => {
        console.log('Bin komponente pasikeitė tekstas');
    }, [text]);

    useEffect(_ => {
        console.log('Bin komponente pasikeitė spalva arba cb');
        // setCb(c => !c);
    }, [color, cb]);


    const add = _ => {
        setText(input);
        setInput('');
    }

    const doColor = _ => {
        setColor(c => c === 'green' ? null : 'green');
    }

    return (
        <div className="bin">
            <div>
                <button className="red" onClick={add}>Add text</button>
                <button className="blue" onClick={_ => setText('')}>Clear</button>
                <button className="green" onClick={doColor}>Color</button>
            </div>
            <H2 text={text} color={color} />
            <Input input={input} setInput={setInput} cb={cb} setCb={setCb}/>

        </div>
    );
}