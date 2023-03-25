import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <main className="header-main">
      <img className="header-img" src="./assets/logo.png" alt="" />
      <h1 className="header-h1">Quickbite</h1>
      <Link to="/">
        <button className="header-button">Logout</button>
      </Link>
    </main>
  );
}
export default Header;
