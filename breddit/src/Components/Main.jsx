import { useContext } from 'react';
import RouterContext from '../Contexts/Router';


export default function Main() {

    const { page, parameters, routes } = useContext(RouterContext);

    console.log('Perkraunamas Main.jsx:', page, parameters);

    const route = _ => {
        console.log('Main.jsx renderina:', routes?.[page]?.c.type.name ?? '<h1>404</h1>');
        return routes?.[page]?.c ?? <h1>404</h1>; 
    };

    return (
        <main>
            {route()}
        </main>
    );
}