import GateContext from './GateContext';
import { useContext } from 'react';

export default function Number3() {

    const { number, color } = useContext(GateContext);

    return (
        <div>
            <h1>Number:
                <span style={{ color: color }}> {number}</span>
            </h1>
        </div>
    );
}