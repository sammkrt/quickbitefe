import { Link } from "react-router-dom";
import "./HeaderComponent.css";
function HeaderComponent() {
  const handleLogout = async () => {
    const response = await fetch('http://localhost:5242/Auth/logout', {
      method: 'POST'
    });
    if (response.ok) {
      console.log('Logged out successfully');
      localStorage.removeItem('jwt');
    } else {
      console.error('Failed to logout');
    }
  };


  return (
    <main className="header-main">
      <img className="header-img" src="./assets/logo.png" alt="logo" />
      <h1 className="header-h1">uickbite</h1>
      {/* <Link to="/"> */}
        <button className="header-button" onClick={handleLogout}>Logout</button>
      {/* </Link> */}
    </main>
  );
}
export default HeaderComponent;
