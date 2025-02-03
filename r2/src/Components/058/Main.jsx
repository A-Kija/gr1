import Shop from './Shop';
import Contacts from './Contacts';
import About from './About';
import Home from './Home';
import Product from './Product';
import { useContext } from 'react';
import RouterContext from './Router';
import Page404 from './Page404';

export default function Main() {

    const { page, parameters } = useContext(RouterContext);

    const routes = {
        shop: {c: <Shop />, title: 'Shop', params: 0},
        contacts: {c: <Contacts />, title: 'Contacts', params: 0},
        about: {c: <About />, title: 'About', params: 0},
        product: {c: <Product />, title: 'Product', params: 2},
        '': {c: <Home />, title: 'Home', params: 0},
    };

    const route = _ => {
        if (routes[page] === undefined) {
            return <Page404 />;
        }
        if (parameters.length !== routes[page].params) {
            return <Page404 />;
        }
        return routes[page].c;
    };

    return (
        <main>
            {route()}
        </main>
    );
}