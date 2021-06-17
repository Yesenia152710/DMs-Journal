import "./App.css";
import Login from "./components/login";
import SignUp from "./components/signup";
import LandingPage from "./components/home";
import { Route } from "react-router-dom";
import { Fragment } from "react";

function App() {
  return (
    <div className="App">
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
