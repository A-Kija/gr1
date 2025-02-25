import Link from './Link';

export default function Nav() {
    return (
        <section className="nav">
            <div className="container">
                <nav>
                    <ul>
                        <li><Link to="">Home</Link></li>
                        <li><Link to="about">About</Link></li>
                        <li><Link to="contact">Contact</Link></li>
                    </ul>
                    <div className="auth">
                        <Link to="login">Login</Link>
                        <Link to="register">Register</Link>
                    </div>
                </nav>
            </div>
        </section>
    );
}