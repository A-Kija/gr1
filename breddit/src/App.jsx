import Main from './Components/Main';
import Wrapper from './Components/Wrapper';
import { Data } from './Contexts/Data';
import { Router } from './Contexts/Router';
import './style/crud.scss';



export default function App() {


    return (
        <Router>
            <Data>
                <Wrapper>
                    <Main />
                </Wrapper>
            </Data>
        </Router>
    );
}

