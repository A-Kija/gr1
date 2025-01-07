import './app.css';
import './buttons.scss';
import B043 from './Components/B043';
// import ButtonsTest from './Components/ButtonsTest';
import C043 from './Components/C043';
import { useState } from 'react';

function App() {

    const [size, setSize] = useState(100);

  return (
    <div className="app">
      <header className="app-header">

        {/* <ButtonsTest /> */}

        <B043 setSize={setSize} />
        <C043 size={size} />


      </header>
    </div>
  );
}

export default App;