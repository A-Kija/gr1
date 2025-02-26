import Link from './Link';
import { useContext } from 'react';
import RouterContext from '../Contexts/Router';
import AuthContext from '../Contexts/Auth';

export default function Nav() {

    const { page, routes } = useContext(RouterContext);

    const { user } = useContext(AuthContext);


    if (routes[page]?.hideNav) {
        return null;
    }

    return (
        <section className="nav">
            <div className="container">
                <nav>
                    <ul>
                        <li><Link to="">Home</Link></li>
                        <li><Link to="about">About</Link></li>
                        <li><Link to="contact">Contact</Link></li>
                    </ul>
                    {
                        user !== null && user.role === 'guest'
                            ?
                            <div className="auth">
                                <Link to="login">Login</Link>
                                <Link to="register">Register</Link>
                            </div>
                            : null
                    }
                    {
                        user !== null && user.role !== 'guest'
                            ?
                            <div className="auth user">
                                <h3>{user.name}</h3>
                                <div className="avatar">
                                    <img src={user.avatar} alt={user.name} />
                                </div>
                                <Link to="logout">Logout</Link>
                            </div>
                            : null
                    }
                </nav>
            </div>
        </section>
    );
}