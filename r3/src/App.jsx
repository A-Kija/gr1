import './buttons.scss';
import './App.css';
import SimpleContext from './Componets/069/SimpleContext';
import Number from './Componets/069/Number';
import Number2 from './Componets/069/Number2';
import { useState } from 'react';
import GateContext, { Gate } from './Componets/069/GateContext';
import Number3 from './Componets/069/Number3';


function App() {

  const [number, setNumber] = useState(42);

  return (
    <>

    <SimpleContext.Provider value={{number: number, color: 'green'}}>
      <div>
          Konteksto vidus
          <Number />
          <Number2 />
      </div>
    </SimpleContext.Provider>

    <button className="green" onClick={_ => setNumber(n => n + 1)}>ADD</button>


    <Gate>
      <Number3 />
      <GateContext.Consumer>
        {
          ({setNumber}) => <button className="green" onClick={_ => setNumber(n => n + 1)}>ADD</button>
        }
      </GateContext.Consumer>
    </Gate>

 


    </>
  )
}

export default App


