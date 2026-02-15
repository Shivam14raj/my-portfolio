import React from "react";
import photo from "../assets/photo.png";
import "./Home.css";
import globe from "../assets/globeimg.png"
import express from "../assets/express-logo.png"
import reactimg from "../assets/react-logo.png"
import git from "../assets/git-logo.png"
import nextjs from "../assets/nextjs-logo.png"

function Home() {
  return (
    <div>
      <div className="heading">
        <h1 className="logo">SR.</h1>
        <h1 className="h1">I'm Shivam Raj</h1>
        <h1 className="h11">A re-Imagined Software Developer</h1>
         
         <div className="location-card">
          <span className="place">Based in India 
          </span>

          <div className="globe">
          <img src={globe} alt="globe" />
        </div>

         </div>

      </div> 

      <div className="logo-container">
            <img src= {express} alt="" className="express" />
            <img src= {reactimg} alt=""  className="reactimg"/>
            <img src= {git} alt=""  className="git"/>
            <img src= {nextjs} alt=""  className="nextjs"/>
      </div>

      
      
      <div className="bg">
        <img src={photo} alt="" className="profile-img" />
      </div>
    </div>
  );
}

export default Home;
