export default function Login() {

    return (
        <section className="login">
            <div className="container">
                <h1>Login</h1>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <button>Login</button>
                </div>
            </div>
        </section>
    );

}