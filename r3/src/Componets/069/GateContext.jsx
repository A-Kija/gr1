import { createContext, useState } from 'react';

const GateContext = createContext();


export const Gate = ({children}) => {

    const [number, setNumber] = useState(42);

    return (
        <GateContext.Provider value={{number: number, color: 'green', setNumber}}>
            {children}
        </GateContext.Provider>
    )
}


export default GateContext;