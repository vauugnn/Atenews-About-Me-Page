import React from 'react';
import Card from '../components/Card';
import Introduction from '../components/Introduction';
import Likes from '../components/Likes';
import Dislikes from '../components/Dislikes';
import Hobbies from '../components/Hobbies';

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
      {/* Add more cards here */}
    </div>
  );
};

export default Profile;
