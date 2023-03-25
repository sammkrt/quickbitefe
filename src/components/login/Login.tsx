import { useState } from "react";
import "./Login.css";
function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await fetch('https://localhost:7179/Auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      console.error('Failed to login');
    }
  };
  return (
    <main className="login-main">
      <h1 className="login-h1">Quickbite</h1>
      <img className="login-img" src="./assets/logo.png" />
      <section className="login-section">
        <h2 className="login-h2">Login</h2>
        <form>
          <p className="login-p">Email</p>
          <input className="login-input" placeholder="Email" type="text" />
          <br />
          <p className="login-p">Password</p>
          <input className="login-input" placeholder="Password" type="text" />
          <br />
          <button className="login-button" type="submit">
            Login
          </button>
        </form>
      </section>
    </main>
  );
}
export default Login;