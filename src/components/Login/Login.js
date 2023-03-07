import React, { useState } from 'react';
import './Login.css';
import PropTypes from 'prop-types';
import axios from 'axios';

async function loginUser(credentials) {
  return fetch('https://paul.blueboxonline.com/api/v1/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => {
      axios.get('https://paul.blueboxonline.com/api/v1/users/session'
      , 
          { 
            headers: { 
              'Content-Type': 'application/json',
              "Access-Control-Allow-Origin": "https://react-test-pearl-five.vercel.app"
            }, 
            withCredentials: true 
          }
        );
      return data.json()
    })
 }

const Login = ({setToken }) => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  
  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    console.log('token', token)
    setToken(token.user);
  }

    return(
        <form onSubmit={handleSubmit}>
          <label>
            <p>Username</p>
            <input type="text" onChange={e => setUserName(e.target.value)} />
          </label>
          <label>
            <p>Password</p>
            <input type="password" onChange={e => setPassword(e.target.value)} />
          </label>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      )
}


Login.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default Login;