import { useState } from 'react';

export default function Select() {

    const [select, setSelect] = useState('3');

    return (
        <select value={select} onChange={e => setSelect(e.target.value)}>
            <option value="1">Vienas</option>
            <option value="2">Du</option>
            <option value="3">Trys</option>
            <option value="4">Keturi</option>
        </select>
    );

}
