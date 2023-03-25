import "./Start.css";
function Start() {
  return (
    <main className="start-main">
      <h1 className="start-h1">Welocome to Quickbite</h1>
      <img className="start-img" src="./assets/logo.png" />
      <section className="start-section">
        <h2 className="start-h2">Join us</h2>
        <button className="start-button">Login</button>
        <p className="start-p">Do not have an account ?</p>
        <button className="start-button">Register</button>
      </section>
    </main>
  );
}
export default Start;