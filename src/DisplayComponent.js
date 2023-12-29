import React from 'react';
import { useSelector } from 'react-redux';

const DisplayComponent = () => {
  const userData = useSelector((state) => state.user);

  return (
    <div>
      <h2>User Data:</h2>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
};

export default DisplayComponent;
