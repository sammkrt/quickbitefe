import "./Login.css";
function Login() {
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
