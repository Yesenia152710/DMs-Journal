import React from "react";
import { Switch } from "react-router-dom";

function DM_NAV() {
  return (
    <div className="dms_nav">
      <Switch>
        <ul className="nav">
          <li>
            <a href="/npcs">NPC's</a>
          </li>
          <li>
            <a href="/players">Players</a>
          </li>
          <li>
            <a href="/towns">Towns</a>
          </li>
          <li>
            <a href="/maps">Maps</a>
          </li>
          <li>
            <a href="/lore">Lore</a>
          </li>
          <li>
            <a href="/initiative">Initiative</a>
          </li>
          <li>
            <a href="/notes">Notes</a>
          </li>
        </ul>
      </Switch>
    </div>
  );
}

export default DM_NAV;
