import React from "react";
import "./home.css"

function LandingPage() {
  return (
    <div class="Landing__Page">
      <h1>Dungeon Masters Journal</h1>
      <div className="Landing__Image"> <img src='https://cdn.pixabay.com/photo/2021/02/16/16/22/d-d-6021557_960_720.png' alt=''/>
      </div>
      <h2>Your world in one place </h2>
      <p>Info and login stuff goes here easy to login</p>
      <a href="signup/">Sign Up</a>
    </div>
  );
}

export default LandingPage;
