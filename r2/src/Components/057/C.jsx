import { useContext } from 'react';
import { CountContext } from '../../App';

export default function C({count}) {

    const count2 = useContext(CountContext);


    return (
        <div className="drill-bin">
            <h2>Component C</h2>
            <span>{count}</span>
            <span>{count2}</span>
        </div>
    );

}