import { useEffect, useState } from 'react';
import './app.css';
import './buttons.scss';

import Home from './Components/057/Home';
import Shop from './Components/057/Shop';
import Contacts from './Components/057/Contacts';
import About from './Components/057/About';


function App() {

    const [hash, setHash] = useState(window.location.hash.replace('#', ''));

    useEffect(_ => {
        // hash change event JS
        window.addEventListener('hashchange', _ => {
            let hash = window.location.hash.replace('#', '');
            setHash(hash);
        });
    }, []);

    useEffect(_ => {

        console.log('hash', hash);

    }, [hash]);



    return (
        <div className="app">
            <header className="app-header">
                <nav className="top-menu">
                    <ul>
                        <li><a href="/#">Home</a></li>
                        <li><a href="/#shop">Shop</a></li>
                        <li><a href="/#contacts">Contacts</a></li>
                        <li><a href="/#about">About</a></li>
                    </ul>
                </nav>
                {hash === 'shop' && <Shop />}
                {hash === 'contacts' && <Contacts />}
                {hash === 'about' && <About />}
                {hash === '' && <Home />}


            </header>
        </div>
    );
}

export default App;
