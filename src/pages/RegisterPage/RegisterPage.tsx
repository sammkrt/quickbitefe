import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterPage.css";

function RegisterPage() {
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:5242/Auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname,
          lastname,
          email,
          password,
          address,
          phonenumber,
        }),
      });

      if (response.ok) {
        setSuccessMessage('Registration successful');
        setTimeout(() => {
          navigate('/login');
        }, 1500);
      } else {
        setSuccessMessage("");
        setErrorMessage("Registration failed.");
      }
    } catch (error) {
      console.error("Error registering:", error);
      setSuccessMessage("");
      setErrorMessage("Error registering. Please try again.");
    }
  };

  return (
    <main className="register-main">
      <h1 className="register-h1">Quickbite</h1>
      <img className="register-img" src="./assets/logo.png" alt="logo" />
      <section className="register-section">
        <h2 className="register-h2">Register</h2>
        {successMessage && <div className="register-success">{successMessage}</div>}
        {errorMessage && <div className="register-error">{errorMessage}</div>}
        <form onSubmit={handleSubmit}>
          <p className="register-p">First name</p>
          <input
            className="register-input"
            placeholder="First name"
            type="text"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <br />
          <p className="register-p">Last name</p>
          <input
            className="register-input"
            placeholder="Last name"
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          <br />
          <p className="register-p">Email</p>
          <input
            className="register-input"
            placeholder="Email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <p className="register-p">Password</p>
          <input
            className="register-input"
            placeholder="Password"
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <p className="register-p">Address</p>
          <input
            className="register-input"
            placeholder="Address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
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
          <button className="register-button" type="submit">
            Register
          </button>
        </form>
        {successMessage && <div>{successMessage}</div>}
      </section>
    </main>
  );
}

export default RegisterPage;