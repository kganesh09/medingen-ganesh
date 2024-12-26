import React from 'react';
import "../components/css/Profile.css"
import profile from "../my profile.jpg"

const Profile = () => {
  // Static profile data
  const user = {
    name: 'Ganesh',
    email: 'Ganesh1861997@gmail.com',
    profilePicture: profile, // Placeholder image
    phoneno: '7904708331'
  };

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <div className="profile-details">
        <div className="profile-picture">
          <img src={user.profilePicture} alt="Profile" />
        </div>
        <div className="profile-info">
          <div>
            <strong>Name: </strong>
            <span>{user.name}</span>
          </div>
          <div>
            <strong>Email: </strong>
            <span>{user.email}</span>
          </div>
          <div>
            <strong>Contact No: </strong>
            <span>{user.phoneno}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
