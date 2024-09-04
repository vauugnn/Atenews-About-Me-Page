import React from 'react';

const Card = ({ title, content }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <div className="text-gray-700">{content}</div>
    </div>
  );
};

export default Card;
    