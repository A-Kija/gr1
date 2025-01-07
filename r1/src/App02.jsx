import './app.css';
import Auto from './Components/Auto';
import Namas from './Components/Namas';
import Parkas from './Components/Parkas';
import RandomColor from './Components/RandomColor';
import Volvo from './Components/Volvo';

import rand from './Functions/rand';
import randomColor from './Functions/randomColor';

import kazka from './Functions/demoEx';

import C, { A, B } from './Functions/demoEx';

import * as demo from './Functions/demoEx';


function App() {

    return (
        <div className="app">
            <header className="app-header">

                {kazka()} {A()} {B()} {C()}

                {demo.A()} {demo.B()} {demo.default()}

                {/* <Namas numeris='1' spalva='red' kiekis='5' atsFun={rand} />
               <Namas numeris='2' spalva='green' kiekis='8' atsFun={rand} />
               <Namas numeris='3' spalva='blue' kiekis='1' atsFun={rand} /> */}

                {/* <Parkas koks={rand(1, 4)} /> */}

                <Auto text={<RandomColor ct="bla" />}>
                    <h1>Opel</h1>
                </Auto>
                <Auto text={<RandomColor ct="ku ku" />}>
                    <h3>BMW</h3>
                </Auto>

                <Auto text={<RandomColor />}><Volvo /></Auto>

                <h2 style={{
                    position: 'relative',
                    top: rand(-300, 300) + 'px',
                    color: randomColor(),
                    letterSpacing: rand(5, 30) + 'px',
                }}>REACT<RandomColor /></h2>

            </header>
        </div>
    );
}

export default App;
