import React from 'react';
import { useState } from 'react';
import LoginImage from "../assets/ff.png";
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../styles/signup.css";

function Signup() {
  const navigate = useNavigate();
  
 
  function LoginClick  ()  {
    window.location.href = "http://localhost:3000/login";
    
  };
  function validEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');

  function Submit() {
    if (username.length === 0) {
      alert('username has left Blank!');
    } else if (email.length === 0) {
      alert('email has left Blank!');
    } else if (!validEmail(email)) {
        alert('Please enter a valid email address!');
    }
    else if (password.length < 5) {
      alert('Password should have at least 5 characters!');
    } else if (password !== confirmPassword) {
      alert('Password and Confirm Password do not match!');
    } else if (!/[a-zA-Z]/.test(password)) {
      alert('Password should contain alphabets!');
    } else {
      const url = 'http://localhost/projett/signup.php';
      let fData = new FormData();
      fData.append('username', username);
      fData.append('email', email);
      fData.append('password', password);
      axios
        .post(url, fData)
        .then((response) => {
          alert(response.data);
          if (response.status === 200) {

            const urll= "http://localhost/projett/sendConfirmationEmail.php";  
           
          axios
        .post(urll, fData) 
          
        const url2="http://localhost:3000/login";
        window.location.href = "http://localhost:3000/login";

           
             }
        })
        .catch((error) => alert(error));
    }
  }

  return (
    
    <div className='background'>
      <div className="container">
        <h1>Signup</h1>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <label htmlFor="phone">Phone</label>
        <input type="text" name="phone" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="password">password</label>
        <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <label htmlFor="confirmpassword"> Confirm password</label>
        <input type="password" name="confirmpassword" id="confirmpassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
        <input
  type="button"
  className="btn"
  name="submit"
  id="submit"
  value="SEND"
  onClick={Submit}
/>        
      </div>
      <img src={LoginImage} alt="Login" onClick={LoginClick} />
      <h3>Login</h3>
      </div>
   
  );
}

export default Signup;