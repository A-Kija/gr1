import './app.css';
import './buttons.scss';
// import List from './Components/045/List';
// import Sq from './Components/045/Sq';
import { useState } from 'react';

function App() {

  const [text, setText] = useState('');

  return (
    <div className="app">
      <header className="app-header">

        {/* <List /> */}
        {/* <Sq /> */}
        <h1>{text}</h1>
        <input type="text" value={text} onChange={e => setText(e.target.value)} />

      </header>
    </div>
  );
}

export default App;