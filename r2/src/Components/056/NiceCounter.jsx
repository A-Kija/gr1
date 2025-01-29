import { useReducer, useState } from 'react';
import countReducer from '../../Reducers/countReducer';

function NiceCounter() {

    const [count, dispachCount] = useReducer(countReducer, 0);
    const [addInput, setAddInput] = useState(0);
    const [multiInput, setMultiInput] = useState(0);

    const add1 = _ => {
        const action = {
            type: 'addOne' // nurodo ką daryti su state
        };
        dispachCount(action);
    }

    const rem1 = _ => {
        const action = {
            type: 'remOne' // nurodo ką daryti su state
        };
        dispachCount(action);
    }

    const add = _ => {
        const action = {
            type: 'add',
            payload: parseInt(addInput),
        };
        dispachCount(action);
    }

    const multi = _ => {
        const action = {
            type: 'multi',
            payload: parseInt(multiInput),
        };
        dispachCount(action);
    }


    return (
        <div className="app">
            <header className="app-header">
                <h2>Counter: {count}</h2>
                <div>
                    <button className="yellow" onClick={add1}>+1</button>
                    <button className="blue" onClick={rem1}>-1</button>
                    <button className="green" onClick={add}>Add</button>
                    <input
                        type="number"
                        onChange={e => setAddInput(e.target.value)}
                        value={addInput}
                        style={{
                            width: '50px',
                            height: '38px',
                            margin: '10px 10px 0 10px',
                        }} />
                    <button className="green" onClick={multi}>Multi</button>
                    <input
                        type="number"
                        onChange={e => setMultiInput(e.target.value)}
                        value={multiInput}
                        style={{
                            width: '50px',
                            height: '38px',
                            margin: '10px 10px 0 10px',
                        }} />
                </div>
            </header>
        </div>
    );
}

export default NiceCounter;