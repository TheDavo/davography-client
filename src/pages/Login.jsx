import React, {useState} from 'react'

import './css/Login.css'
import PageTitle from '../components/PageTitle/PageTitle'
export default function Login() {

  const [usernameValue, setUsernameValue] = useState('');

  const handleUsernameChange = (event) => {
    setUsernameValue(event.target.value)
  }

  const [passwordValue, setPasswordValue] = useState('');

  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value)
  }

  const handleLoginSubmit = (event) => {
    event.preventDefault();
  }


  return (
    <div id="login">
      <PageTitle pageTitle="Login" />
      <div className="login-form-wrapper">
        <div className="login-form-container">
          <form className="login-form" onSubmit={handleLoginSubmit}>
            <label htmlFor="username">User Name</label>
            <input type="text" 
              name="username" 
              id="username" 
              placeholder="User Name"
              value={usernameValue}
              onChange={handleUsernameChange} />

            <label htmlFor="password">Password</label>
            <input type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={passwordValue}
              onChange={handlePasswordChange} />

            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  )
}
