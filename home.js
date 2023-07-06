import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import Navbar from "../components/navbar";

function Home() {

  return (
<div>

<Navbar/>
   <div className="home" >
        <div className="headerContainer" >
        <h1> Capgemini </h1>
        <p> Testing & validation</p>
        <Link to="/execute">
          <button className="btn"> Start Testing </button>
        </Link>
        
      </div>
    </div>
    </div>
  );
}

export default Home;