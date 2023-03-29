// import FooterComponent from "../../components/FooterComponent/FooterComponent";
// import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
// import "./Profile.css"

// function Profile() {

  
//   return (
//     <main className="profile-main">
//       <HeaderComponent />
//       <img className="profile-img" src="./assets/user.png" alt="user" />
//       <section className="profile-section">
//       <p className="profile-p">Name : user.name</p>
//       <p className="profile-p">Email : user.email</p>
//       <p className="profile-p">Number : user.number</p>
//       <p className="profile-p">Address :</p>
//       </section>
//       <FooterComponent />
//     </main>
//   );
// }
// export default Profile;

import { useState, useEffect } from 'react';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  phoneNumber: string;
}

const Profile = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    console.log(jwt); 
    if (!jwt) {
      setLoading(false);
      setError('Please first login');
      return;
    }

    fetch('http://localhost:5242/Auth/user', {
      method: 'GET',
      headers: { Authorization: `Bearer ${jwt}` },
      credentials: 'include',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      <p>First Name: {user.firstName}</p>
      <p>Last Name: {user.lastName}</p>
      <p>Email: {user.email}</p>
      <p>Address: {user.address}</p>
      <p>Phone Number: {user.phoneNumber}</p>
    </div>
  );
};

export default Profile;
