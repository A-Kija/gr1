import { useContext } from 'react';
import { CountContext, CountContext2 } from '../../App057';

export default function C({ count }) {

    const count2 = useContext(CountContext);
    const { count3, count4 } = useContext(CountContext2);


    return (
        <div className="drill-bin">
            <h2>Component C</h2>
            <span>{count}</span>
            <span>{count2}</span>
            <span>{count3}</span>
            <span>{count4}</span>
        </div>
    );
}