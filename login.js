import React from 'react';
import { useState } from 'react';
import SignupImage from "../assets/ff.png";

import axios from 'axios';
import '../styles/login.css';

function Login() {
  function SignupClick  ()  {
    window.location.href = "http://localhost:3000/signup";
    
  };
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [etat, setEtat] = useState(false);
  function Submit  ()  {
    if (username.length ===0) {
      alert('username has left Blank!');
   
    } else if (password.length === 0) {
      alert('password has left Blank!');
    } else {
      const url = 'http://localhost/projett/login.php';
      let fData = new FormData();
      fData.append('username', username);
    ///  fData.append('email', email);
      fData.append('password', password);
      axios
        .post(url, fData)
        .then((response) => {
          alert(response.data);
          if (response.data === 'success') {
            // Rediriger l'utilisateur vers la page Home
            

            localStorage.setItem('isLoggedIn', 'true');

            window.location.href = "http://localhost:3000/home";
          }
          
        })
        .catch((error) => alert(error));
    }
    
  
  
       
  };

  return (
    
    <div className='background'>
      <div className="container">
        <h1>Login</h1>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
       
        <label htmlFor="password">password</label>
        <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <input type="button" className='btn'name="submit" id="submit" value="SEND" onClick={Submit} />
        
      </div>
      <img src={SignupImage} alt="Signup" onClick={SignupClick} />
      <h3>signup</h3>
      </div>
    
  );
}

export default Login;
