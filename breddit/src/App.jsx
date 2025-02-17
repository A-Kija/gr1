import Main from './Components/Main';
import Wrapper from './Components/Wrapper';
import { Router } from './Contexts/Router';
import './crud.scss';



export default function App() {


    return (
        <Router>
            <Wrapper>
            <Main />
            </Wrapper>
        </Router>
    );
}

