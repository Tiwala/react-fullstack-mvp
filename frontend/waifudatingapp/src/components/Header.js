import React, { useState } from 'react'
import logo from './waifu4laifulogo.png'

const Header = ({handleLogin, loggedIn, currentProfile}) => {
  const [userName, setUser] = useState('')
  const [password, setPassword] = useState('')


  const refreshPage = () => {
    window.location.reload(false);
  }

  const onSubmit = (e) => {
    e.preventDefault();

    handleLogin(userName, password);
    setUser('')
    setPassword('')
  }

  return (
    <div id="header">
        <div>
            <img id="logo" onClick={refreshPage} src={logo}/>
        </div>
        <div id="userLogDiv">
          {/* insert ternary for loggedIn here; if true, put danny profile pic and name */}
          {loggedIn ? (
          <div id="loggedInHeader">
            <img src={currentProfile.photo} id="headerPhoto"/>
            <div id="loggedUser">
              {currentProfile.name}
            </div>
          </div>
          ) : (
          <form id="login" onSubmit={onSubmit}>
            <input 
            id="userLogin" 
            type="text" 
            name="userLogin" 
            placeholder="Enter username"
            value={userName}
            onChange={(e) => setUser(e.target.value)} 
            required
            />
            <input id="userPassword" 
            type="password" 
            name="userPassword" 
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required/>
            <button id="loginButton">Login</button>
          </form>
          )}
        </div>
    </div>
  )
}

export default Header;