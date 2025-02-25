import { useState } from 'react';
import useLogin from '../Hooks/useLogin';

export default function Login() {

    const { setLoginData } = useLogin();

    const goHome = _ => {
        window.location.hash = '#';
    }

    const [form, setForm] = useState({
        name: '',
        password: ''
    });

    const changeHandler = e => {
        setForm(f => ({
            ...f,
            [e.target.id]: e.target.value
        }));
    }

    return (
        <section className="login">
            <div className="container">
                <h1>Login</h1>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="name" id="name" onChange={changeHandler} value={form.name} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={changeHandler} value={form.password} />
                    </div>
                    <button className="yellow" onClick={_=> setLoginData(form)}>Login</button>
                    <button className="blue" onClick={goHome}>Cancel</button>
                </div>
            </div>
        </section>
    );

}