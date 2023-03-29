import { useState } from "react";
import "./LoginPage.css";
function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
      console.log(data);
    } else {
      console.error("Failed to login");
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
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button className="login-button" type="submit">
            Login
          </button>
        </form>
      </section>
    </main>
  );
}
export default LoginPage;
