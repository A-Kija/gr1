import { useState, useContext } from 'react';
import AuthContext from './Auth';

export default function Login() {


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const { setLoginData, authMessage } = useContext(AuthContext);

    const doLogin = _ => {
        setLoginData({username, password});
    };



    return (
        <div className="login">
            {
                authMessage !== null
                    ? <div className="message" style={{color: authMessage.color}}>{authMessage.text}</div>
                    : null
            }
            <h1>Prisijungti</h1>
            <input type="text" placeholder="Vartotojo vardas" value={username} onChange={e => setUsername(e.target.value)} />
            <input type="password" placeholder="Slaptažodis" value={password} onChange={e => setPassword(e.target.value)} />
            <button onClick={doLogin}>Prisijungti</button>
        </div>
    );
}