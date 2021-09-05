import "./App.css";

import DM from "./components/dm";
import NPC from "./components/npc";
import Players from "./components/players";
import Towns from "./components/towns";
import Maps from "./components/maps";
import Initiative from "./components/initiative";
import Lore from "./components/lore";
import Notes from "./components/notes";
import SignUp from "./components/signup";
import LandingPage from "./components/home";
import { Route } from "react-router-dom";
import { Fragment } from "react";

function App() {
  return (
    <div className="App">
      <body>
        <Route
          exact
          path="/"
          render={() => (
            <Fragment>
              <LandingPage />
            </Fragment>
          )}
        />
        <Route path="/signup" component={SignUp} />
        <Route path="/account" component={DM} />
        <Route path="/initiative" component={Initiative} />
        <Route path="/towns" component={Towns} />
        <Route path="/players" component={Players} />
        <Route path="/npcs" component={NPC} />
        <Route path="/notes" component={Notes} />
        <Route path="/maps" component={Maps} />
        <Route path="/lore" component={Lore} />
      </body>
    </div>
  );
}

export default App;
