//5. Sukurti naują komponentą View, kuriame atvaizduoti counter skaičių h2 tage.
//  Iš Counter komponento h2 tagą ištrinti. Naudoti state uplifting principą.
// View komponentą įdėti į App komponentą.


import './app.css';
import './buttons.scss';
import Counter from './Components/055/Counter';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <Counter />
      </header>
    </div>
  );
}

export default App;