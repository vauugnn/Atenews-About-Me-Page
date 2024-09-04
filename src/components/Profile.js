import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import Introduction from './Introduction';
import Likes from './Likes';
import Dislikes from './Dislikes';
import Hobbies from './Hobbies';

const Profile = () => {
  return (
    <div className="max-w-md mx-auto p-4">
      <img
        className="profile-image rounded-full w-32 h-32 mx-auto mb-4"
        src="/assets/Vaughn Roche de Roda.jpg"
        alt="Vaughn Roche T. de Roda"
      />
      <Card title="Introduction" content={<Introduction />} />
      <Card title="Likes" content={<Likes />} />
      <Card title="Dislikes" content={<Dislikes />} />
      <Card title="Hobbies" content={<Hobbies />} />  
      <Link to="/">Go to About Me</Link>
    </div>
  );
};

export default Profile;