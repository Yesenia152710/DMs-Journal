import "./App.css";
import Login from "./components/login";
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
    </div>
  );
}

export default App;
