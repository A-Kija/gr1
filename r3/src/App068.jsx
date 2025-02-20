import './buttons.scss';
import './App.css';
import Gate from './Componets/068/Gate.jsx';
import { useState } from 'react';
import A from './Componets/068/A.jsx';
import B from './Componets/068/B.jsx';
import AB from './Componets/068/AB.jsx';

function App() {

  const [isOpen, setIsOpen] = useState(true);
  const [aOrB, setAOrB] = useState(true);


  return (
    <>

      <div className="container">

        {/* <Gate isOpen={isOpen}>

          <A />
          <B />

        </Gate> */}

        <AB aOrB={aOrB}>

          <A />
          <B />

        </AB>


      </div>


      <button onClick={_ => setIsOpen(!isOpen)} className="green">Toggle</button>
      <button onClick={_ => setAOrB(!aOrB)} className="red">Toggle A or B</button>


    </>
  )
}

export default App


// Sukurt komponetą AB kuris turėtų vaikus A ir B. AB turi būti atskirame faile.
// AB turi būti valdomas state, kuris leidžia rodyti A arba B vaiką vienu metu.
