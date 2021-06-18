import React from "react";
import "./css/home.css";
import Login from "./login";

function LandingPage() {
  return (
    <div className="landing_page">
      <div className="landing_container">
        {/* <img
          className="landing_image"
          src="https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
          alt=""
        /> */}

        <div className="landing_header">
          <h1 className="landing_title">Dungeon Master's Journal</h1>
          <p>Have Your World In One Place!</p>
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
          <div className="info_contact">links to stuff go here</div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
