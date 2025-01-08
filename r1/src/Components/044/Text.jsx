import { useState } from 'react';

export default function Text() {

    const [text, setText] = useState('');
    const [greenText, setGreenText] = useState({pirmas: '', antras: '', trecias: ''});

    const handleText = e => {
        setText(e.target.value);
    }

    const handleGreenText = e => {
        const {name, value} = e.target;
        setGreenText(gt => ({...gt, [name]: value}));
    }

    return (
        <>
            <input type="text" onChange={e => handleText(e)} value={text} />
            <input type="text" name="pirmas" className="green" value={greenText.pirmas} onChange={handleGreenText} />
            <input type="text" name="antras" className="green" value={greenText.antras} onChange={handleGreenText} />
            <input type="text" name="trecias" className="green" value={greenText.trecias} onChange={handleGreenText} />
        </>
    );
} 