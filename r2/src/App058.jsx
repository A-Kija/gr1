
import './app.css';
import './buttons.scss';


import { Router } from './Components/058/Router';
import Main from './Components/058/Main';
import Nav from './Components/058/Nav';
import Wrapper from './Components/058/Wrapper';



function App() {

    return (
        <Router>
            <Wrapper>

                <Nav />
                <Main />

            </Wrapper>
        </Router>
    );
}

export default App;
