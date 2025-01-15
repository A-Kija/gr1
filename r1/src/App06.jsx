import './app.css';
import './buttons.scss';
import Bin from './Components/047/Bin';

function App() {

    console.log('App komponentas');


  return (
    <div className="app">
      <header className="app-header">

        <Bin />


      </header>
    </div>
  );
}

export default App;