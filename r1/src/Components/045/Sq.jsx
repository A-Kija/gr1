import { useState } from 'react';
import rand from '../../Functions/rand';
import randomColor from '../../Functions/randomColor';
import { v4 as uuidv4 } from 'uuid';
import OneSq from './OneSq';

export default function Sq() {

    const [sq, setSq] = useState([]);

    const addSq = _ => {
        setSq(s => [...s, {
            number: rand(100, 999),
            color: randomColor(),
            show: true,
            row: s.length,
            id: uuidv4()
        }
        ]);
    }

    const sort09 = _ => {
        setSq(s => s.toSorted((a, b) => a.number - b.number));
    }

    const filter500 = _ => {
        setSq(s => s.map(sq => ({ ...sq, show: sq.number >= 500 })));
    }

    const showAll = _ => {
        setSq(s => s.map(sq => ({ ...sq, show: true })));
    }

    const sortDefault = _ => {
        setSq(s => s.toSorted((a, b) => a.row - b.row));
    }

    const hide = id => {
        setSq(s => s.map(sq => sq.id === id ? { ...sq, show: false } : sq));
    }

    const makeWhite = id => {
        setSq(s => s.map(sq => sq.id === id && !sq.copy ? { ...sq, copy: sq.color, color: '#ffffff' } : sq));
    }

    const originalColor = _ => {
        setSq(s => s.map(sq => sq.copy ? { ...sq, color: sq.copy, copy: null } : sq));
    }
        
        

    return (
        <>
            <div className="sq-bin">
                {
                    sq.map(sq => sq.show ? <OneSq key={sq.id} makeWhite={makeWhite} hide={hide} sq={sq} /> : null)
                }
            </div>
            <div>
                <button className="red" onClick={addSq}>Add</button>
                <button className="blue" onClick={sort09}>SORT 0-9 </button>
                <button className="yellow" onClick={filter500}>Filter 500 or more</button>
                <button className="green" onClick={showAll}>Show All</button>
                <button className="green" onClick={sortDefault}>SORT Default</button>
                <button className="green" onClick={originalColor}>Original Color</button>
            </div>
        </>
    );


}