import Main from './Components/Main';
import Nav from './Components/Nav';
import Wrapper from './Components/Wrapper';
import { Auth } from './Contexts/Auth';
import { Data } from './Contexts/Data';
import { Router } from './Contexts/Router';
import './style/crud.scss';




export default function App() {

    return (
        <Router>
            <Auth>
                <Data>
                    <Wrapper>
                        <Nav />
                        <Main />
                    </Wrapper>
                </Data>
            </Auth>
        </Router>
    );
}

