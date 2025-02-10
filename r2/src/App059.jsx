
import './app.css';
import './buttons.scss';


import { Router } from './Components/059/Router';
import Main from './Components/059/Main';
import Nav from './Components/059/Nav';
import Wrapper from './Components/059/Wrapper';
import {Auth} from './Components/059/Auth';



function App() {

    return (
        <Router>
            <Auth>
                <Wrapper>

                    <Nav />
                    <Main />

                </Wrapper>
            </Auth>
        </Router>
    );
}

export default App;
