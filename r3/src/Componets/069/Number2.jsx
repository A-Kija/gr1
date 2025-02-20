import SimpleContext from './SimpleContext';
import { useContext } from 'react';

export default function Number2() {

    const { number, color } = useContext(SimpleContext);

    return (
        <div>
            <h1>Number:
                <span style={{ color: color }}> {number}</span>
            </h1>
        </div>
    );
}