import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Register.css";

function Register() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await fetch('http://localhost:5242/Auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ firstname, lastname, email, password, address, phonenumber })
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
      <img className="register-img" src="./assets/logo.png" alt="logo" />
      <section className="register-section">
        <h2 className="register-h2">Register</h2>
        <form onSubmit={handleSubmit}>
          <p className="register-p">First name</p>
          <input
            className="register-input"
            placeholder="First name"
            type="text"
            value={firstname} onChange={(e) => setFirstname(e.target.value)}
          />
          <br />
          <p className="register-p">Last name</p>
          <input
            className="register-input"
            placeholder="Last name"
            type="text"
            value={lastname} onChange={(e) => setLastname(e.target.value)}
          />
          <br />
          <p className="register-p">Email</p>
          <input
            className="register-input"
            placeholder="Email"
            type="text"
            value={email} onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <p className="register-p">Password</p>
          <input
            className="register-input"
            placeholder="Password"
            type="text"
            value={password} onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <p className="register-p">Address</p>
          <input
            className="register-input"
            placeholder="Address"
            type="text"
            value={address} onChange={(e) => setAddress(e.target.value)}
          />
          <br />
          <p className="register-p">Phone number</p>
          <input
            className="register-input"
            placeholder="Phone number"
            type="text"
            value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)}
          />
          <br />
          <Link to="/login">
            <button className="register-button" type="submit">
              Register
            </button>
          </Link>
        </form>
        {successMessage && <div>{successMessage}</div>}
      </section>
    </main>
  );
}
export default Register;
