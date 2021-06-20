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
      <div className="app_image">
        <img
          className="image"
          src="https://image.freepik.com/free-photo/grunge-vintage-old-paper-background_1373-431.jpg"
          height="652px"
          width="1366px"
          alt=""
        />
      </div>
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
    </div>
  );
}

export default App;
