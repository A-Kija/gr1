
import './app.css';
import './buttons.scss';


import { Router } from './Components/058/Router';
import Main from './Components/058/Main';
import Nav from './Components/058/Nav';



function App() {

    return (
        <Router>
            <div className="app">
                <header className="app-header">

                    <Nav />
                    <Main />

                </header>
            </div>
        </Router>
    );
}

export default App;
