import React, { useState } from 'react';
import axios from 'axios';
import './Styles/Register.css';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  let Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/register', { name, password });
      console.log('Registration successful:', response.data);
      // Optionally, redirect to login page or display a success message
    } catch (error) {
      setError('Registration failed. Please try again.');
      console.error('Registration error:', error);
    }
    Navigate('/login')
  };

  return (
    <div className="register-container">
      <h2 className="register-heading">Register</h2>
      {error && <p className="error-message">{error}</p>}
      <form className="register-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Username:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" handleSubmit >Register</button>

      </form>
    </div>
  );
}

export default Register;
