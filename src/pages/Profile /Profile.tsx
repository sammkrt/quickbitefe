import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import './Profile.css'


function Profile() {
  return (
    <main>
      <Header/>
      <img className="profile-img" src="./assets/runner.jpg" alt="restaurant" />
      <hgroup className="profile_info"> 
        <h3 className="profile_info_text">Name : user.name</h3>
        <h3 className="profile_info_text">Email : user.email</h3>
        <h3 className="profile_info_text">Number : user.number</h3>
        <h2 className="profile_info_text">Address</h2>
        <p className="profile_info_text">Street Name: </p>
        <p className="profile_info_text">Postal Code : </p>
        <p className="profile_info_text">House / Building Number : </p>
      </hgroup>
      <Footer />
    </main>
  );
}
export default Profile;
