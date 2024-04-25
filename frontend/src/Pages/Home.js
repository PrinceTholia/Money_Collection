// frontend/src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/Home.css';
import donate from './Images/donate.png'
import collect from './Images/collect.png'
import Navigation from '../Components/Navigation';

function Home() {
  return (
    <div className='home-background'>
      <h1> Money Collection </h1>
      <Navigation/>
      <div className='image-container'>
        <ul>
          <li> <Link to ='/donate'> <img src={donate} alt="Donate" /> </Link></li>
          <li> <Link to='/collect'><img src={collect} alt="Collect"/> </Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
