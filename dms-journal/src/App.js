import "./App.css";
import Login from "./components/login";
import SignUp from "./components/signup";
import LandingPage from "./components/home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Fragment } from "react";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Fragment>
                <LandingPage />
                <Login />
              </Fragment>
            )}
          />
          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
