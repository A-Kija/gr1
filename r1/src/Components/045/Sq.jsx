import { useState } from 'react';
import rand from '../../Functions/rand';
import randomColor from '../../Functions/randomColor';

export default function Sq() {

    const [sq, setSq] = useState([]);

    const addSq = _ => {
        setSq(s => [...s, {
            number: rand(100, 999),
            color: randomColor(),
            show: true,
            row: s.length
        }
        ]);
    }

    const sort09 = _ => {
        setSq(s => s.toSorted((a, b) => a.number - b.number));
    }

    const filter500 = _ => {
        setSq(s => s.map(sq => ({...sq, show: sq.number >= 500})));
    }

    const showAll = _ => {
        setSq(s => s.map(sq => ({...sq, show: true})));
    }

    const sortDefault = _ => {
        setSq(s => s.toSorted((a, b) => a.row - b.row));
    }


    return (
        <>
            <div className="sq-bin">
                {
                    sq.map((sq, index) => sq.show ? (
                    <div
                        key={index}
                        style={{
                            backgroundColor: sq.color + '33',
                            borderColor: sq.color
                        }}
                        className="sq"
                    >
                        {sq.number}
                    </div>) : null)
                }
            </div>
            <button className="red" onClick={addSq}>Add</button>
            <button className="blue" onClick={sort09}>SORT 0-9 </button>
            <button className="yellow" onClick={filter500}>Filter 500 or more</button>
            <button className="green" onClick={showAll}>Show All</button>
            <button className="green" onClick={sortDefault}>SORT Default</button>
        </>
    );


}