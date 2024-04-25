import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import user from '../Pages/Images/user.png'

const Navigation = () => {
  return (
      <div className='login'>
        <li> <img src={user} alt="Donate" /> </li>
        <li> <Link to="/login">Login</Link> </li>
      </div>
  );
};

export default Navigation;