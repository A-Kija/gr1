import { useEffect, useReducer, useState } from 'react';
import countReducer from '../../Reducers/niceCountReducer';
import * as action from '../../Actions/niceActions';

function NiceCounter() {

    const [count, dispachCount] = useReducer(countReducer, 0);
    const [addInput, setAddInput] = useState(0);
    const [multiInput, setMultiInput] = useState(0);

    useEffect(_ => {
        count === 0 && (setAddInput(0) || setMultiInput(0)); // mandras būdas nustatyti abu input laukus į 0, bet nereikėtų taip mandravot
    }, [count]);

    return (
        <>
            <h2>Nice Counter: {count}</h2>
            <div>
                <button className="yellow" onClick={_ => dispachCount(action.add1())}>+1</button>
                <button className="blue" onClick={_ => dispachCount(action.rem1())}>-1</button>
                <button className="green" onClick={_ => dispachCount(action.add(addInput))}>Add</button>
                <input
                    type="number"
                    onChange={e => setAddInput(e.target.value)}
                    value={addInput}
                    style={{
                        width: '50px',
                        height: '38px',
                        margin: '10px 10px 0 10px',
                    }} />
                <button className="green" onClick={_ => dispachCount(action.multi(multiInput))}>Multi</button>
                <input
                    type="number"
                    onChange={e => setMultiInput(e.target.value)}
                    value={multiInput}
                    style={{
                        width: '50px',
                        height: '38px',
                        margin: '10px 10px 0 10px',
                    }} />
                <button className="red" onClick={_ => dispachCount(action.reset())}>Reset</button>
                <button className="yellow" onClick={_ => dispachCount(action.add5())}>+5</button>
            </div>

        </>
    );
}

export default NiceCounter;

// Pridėti reset mygtuką, kuris nustato skaičių į 0
// Pridėti mygtuką kuris skaičių padidina 5
// Nuresetinus skaičių, kartu nusiresetina ir input laukai