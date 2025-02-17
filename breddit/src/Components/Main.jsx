import { useContext } from 'react';
import Home from '../Pages/Home';
import RouterContext from '../Contexts/Router';


export default function Main() {

    const { page, parameters, setShowComponent } = useContext(RouterContext);

    const routes = {
        '': {c: <Home />, title: 'Home', params: 0},
    };

    const route = _ => {

        console.log(page);

        return routes?.[page]?.c ?? <h1>404</h1>; 
    };

    return (
        <main>
            {route()}
        </main>
    );
}