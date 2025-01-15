import { useEffect } from 'react';



export default function Square({ sq, deleteSq, changeColor }) {

    useEffect(_ => {
        console.log('NAUJAS Square komponentas', sq.number);

        return _ => {
            console.log('Square komponentas panaikintas', sq.number);
        }

    }, [sq.number]);

    return (
        <div className="sq" style={{
            backgroundColor: sq.color + '33',
            borderColor: sq.color
        }} onDoubleClick={_ => deleteSq(sq.id)} onClick={_ => changeColor(sq.id)}>
            {sq.number}
        </div>
    );

}