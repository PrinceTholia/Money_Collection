import React, { useState } from 'react';
import axios from 'axios'; // For making HTTP requests
import './Styles/Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  // State variables to store user input
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  let Navigate=useNavigate();

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to your backend endpoint for user authentication
      const response = await axios.post('http://localhost:3001/createUser', { username, password });
      // Handle successful login, such as redirecting to another page
      console.log('Login successful:', response.data);
    } catch (error) {
      // Handle login error
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
          <div className="button-container">
            <button type="submit" onClick={() => Navigate('/main')}>Login</button>
            <button type="button" onClick={() => Navigate('/register')}>Register</button>
          </div>
      </form>
    </div>
  );
}

export default Login;
