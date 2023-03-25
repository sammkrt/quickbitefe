import React from 'react';

const Logout = () => {
  const handleLogout = async () => {
    const response = await fetch('https://localhost:7179/Auth/logout', {
      method: 'POST'
    });
    if (response.ok) {
      console.log('Logged out successfully');
    } else {
      console.error('Failed to logout');
    }
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
