import Link from './Link';
import { useContext } from 'react';
import RouterContext from './Router';

export default function Nav() {

    const { page } = useContext(RouterContext);

    const noMenuPages = ['login'];

    if (noMenuPages.includes(page)) {
        return null;
    }

    return (
        <nav className="top-menu">
            <ul>
                <li><Link href="">Home</Link></li>
                <li><Link href="shop">Shop</Link></li>
                <li><Link href="contacts/kaunas">Contacts Kaunas</Link></li>
                <li><Link href="contacts/vilnius">Contacts Vilnius</Link></li>
                <li><Link href="about">About</Link></li>
            </ul>
            <div className="login">
                <Link href="login">Login</Link>
            </div>
        </nav>
    );

}