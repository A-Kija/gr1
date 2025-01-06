import './app.css';
import Bebras from './Bebras';

function Zebras() {

  const tagas = 'h2';

  return (
    <>
      {
        tagas === 'h2'
          ?
          <>
            <h2>Zebras</h2>
            <span>zebras</span>
          </>
          :
          <h3>Zebras</h3>
      }
    </>
  )
}

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <Zebras />
        <h1>React v18</h1>
        <Bebras />
        <Zebras />
      </header>
    </div>
  );
}

export default App;
