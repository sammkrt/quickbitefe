import { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";
function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await fetch("http://localhost:5242/Auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("jwt", data.jwt); 
      window.location.href = "/home"; 
    } else {
      setError("Failed to login");
    }
  };
  return (
    <main className="login-main">
      <h1 className="login-h1">Quickbite</h1>
      <img className="login-img" src="./assets/logo.png" alt="logo" />
      <section className="login-section">
        <h2 className="login-h2">Login</h2>
        <form onSubmit={handleSubmit}>
          <p className="login-p">Email</p>
          <input
            className="login-input"
            placeholder="Email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <p className="login-p">Password</p>
          <input
            className="login-input"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          {error && <p className="login-error">{error}</p>}
          <button className="login-button" type="submit">
            Login
          </button>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </section>
    </main>
  );
}
export default LoginPage;