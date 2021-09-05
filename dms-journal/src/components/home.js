import React from "react";
import Logo from "../imgs/d-d-6021557_1280.png";
import "./css/home.css";
import Login from "./login";

function LandingPage() {
  return (
    <div className="landing_page">
      <div className="landing_navbar">Nav</div>
      <div className="landing_container">
        <div className="landing_header">
          <h1 className="landing_title">Dungeon Master's Journal</h1>
        </div>
        <div className="landing_image">
          <img className="image" src={Logo} alt="" />
        </div>
        <div className="landing_info">
          <div className="info_body">
            Welcome to Dungeon Master's Journal! We strive to make it easy for DM's and GM's to keep track of their
            worlds. D&D is always a blast but sometimes it gets a bit stressful when you lose a npc's name or have to go
            back to old journals for old reminders. Here we make it easier to keep tabs on npcs, notes, maps, lore,
            items, monsters, initiative and more! Everything is free and you just need to create an account to keep
            track of your campaign!
          </div>
          <div className="login">
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
