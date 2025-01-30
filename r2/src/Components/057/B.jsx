import C from './C';
import { useContext } from 'react';
import { CountContext } from '../../App057';

export default function B({count}) {

     const count2 = useContext(CountContext);

    return (
        <div className="drill-bin">
            <h2>Component B</h2>
            <C count={count} />
            <span>{count2}</span>
        </div>
    );

}