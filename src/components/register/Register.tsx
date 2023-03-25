import { useState } from "react";
import "./Register.css";
function Register() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await fetch('https://localhost:7179/Auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    });
    if (response.ok) {
      setSuccessMessage('Registration successful');
    } else {
      console.error('Failed to register');
    }
  };




  return (
    <main className="register-main">
      <h1 className="register-h1">Quickbite</h1>
      <img className="register-img" src="./assets/logo.png" />
      <section className="register-section">
        <h2 className="register-h2">Register</h2>
        <form onSubmit={handleSubmit}>
          <label>
          <p className="register-p">Name</p>
          <input className="register-input" placeholder="Name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <br />
          <label>
          <p className="register-p">Email</p>
          <input className="register-input" placeholder="Email" type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </label>
          <br />
          <label>
          <p className="register-p">Password</p>
          <input
            className="register-input"
            placeholder="Password"
            type="text"
            value={password} onChange={(e) => setPassword(e.target.value)}
          />
          </label>
           <br />
          <label>
          <p className="register-p">Password</p>
          <input
            className="register-input"
            placeholder="Password"
            type="text"
          />
          </label>
          <br />
          <button className="register-button" type="submit">
            Register
          </button>
        </form>
        {successMessage && <div>{successMessage}</div>}
      </section>
    </main>
  );
}
export default Register;