import { Link } from "react-router-dom";
import "./Register.css";
function Register() {
  return (
    <main className="register-main">
      <h1 className="register-h1">Quickbite</h1>
      <img className="register-img" src="./assets/logo.png" />
      <section className="register-section">
        <h2 className="register-h2">Register</h2>
        <form>
          <p className="register-p">Name</p>
          <input className="register-input" placeholder="Name" type="text" />
          <br />
          <p className="register-p">Email</p>
          <input className="register-input" placeholder="Email" type="text" />
          <br />
          <p className="register-p">Password</p>
          <input
            className="register-input"
            placeholder="Password"
            type="text"
          />
          <br />
          <Link to="/home">
          <button className="register-button" type="submit">
            Register
          </button>
          </Link>
        </form>
      </section>
    </main>
  );
}
export default Register;
