import Main from './Components/Main';
import Nav from './Components/Nav';
import Wrapper from './Components/Wrapper';
import { Data } from './Contexts/Data';
import { Router } from './Contexts/Router';
import './style/crud.scss';




export default function App() {

    return (
        <Router>
            <Data>
                <Wrapper>
                    <Nav />
                    <Main />
                </Wrapper>
            </Data>
        </Router>
    );
}

