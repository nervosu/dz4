import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../reducers/userReducer';

const FormComponent = () => {
  const [userData, setUserData] = useState({ name: '', email: '' });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(userData));
    setUserData({ name: '', email: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={userData.name} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="text" name="email" value={userData.email} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
