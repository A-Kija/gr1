import Link from './Link';
import { useContext, useEffect, useState } from 'react';
import RouterContext from './Router';
import AuthContext from './Auth';

export default function Nav() {

    const { page } = useContext(RouterContext);
    const { user, logout } = useContext(AuthContext);

    const [isLogouting, setIsLogouting] = useState(false);

    const doLogout = _ => {
        setIsLogouting(true);
        logout();
    }

    useEffect(_ => {
        setIsLogouting(false);
    }, [user]);

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
                {
                    user && isLogouting === false
                        ?
                        user.role === 'guest'
                            ? <Link href="login">Login</Link>
                            : <><b>{user.name}</b><span onClick={doLogout}>logout</span></>
                        : null
                }
                {
                    isLogouting
                        ? <b>Logging out...</b>
                        : null
                }
            </div>
        </nav>
    );

}