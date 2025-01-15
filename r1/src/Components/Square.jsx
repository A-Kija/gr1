import { useEffect } from 'react';



export default function Square({ sq, deleteSq }) {

    useEffect(_ => {
        console.log('NAUJAS Square komponentas', sq.number);

        return _ => {
            console.log('Square komponentas panaikintas', sq.number);
        }

    }, [sq.number]);

    return (
        <div className="sq" onClick={_ => deleteSq(sq.id)}>
            {sq.number}
        </div>
    );

}