import React from 'react'
import { Link } from "react-router-dom";
import "../styles/hello.css";

function hello() {

  

  return (
    
    <div className='backgroundd'>
    
      <p>Welcome To Our Plateform</p>
     

      <Link to="/login">
          <button className='btnn' > login </button>
        </Link> 

    </div>
  );
}

  


export default hello