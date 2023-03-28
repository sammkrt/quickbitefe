import FooterComponent from "../../components/FooterComponent/FooterComponent";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import "./Profile.css"

function Profile() {
  return (
    <main className="profile-main">
      <HeaderComponent />
      <img className="profile-img" src="./assets/user.png" alt="user" />
      <section className="profile-section">
      <p className="profile-p">Name : user.name</p>
      <p className="profile-p">Email : user.email</p>
      <p className="profile-p">Number : user.number</p>
      <p className="profile-p">Address</p>
      <p className="profile-p">Street Name: </p>
      <p className="profile-p">Postal Code : </p>
      <p className="profile-p">House / Building Number : </p>
      </section>
      <FooterComponent />
    </main>
  );
}
export default Profile;
