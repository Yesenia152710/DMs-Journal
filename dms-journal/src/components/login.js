import React from "react";
import { Link } from "react-router-dom";
import "./css/login.css";

function Login() {
  return (
    <div className="login">
      <form>
        <div className="form-group row">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            Email
          </label>
          <div class="col-sm-10">
            <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
          </div>
        </div>
        <div className="form-group row">
          <label for="inputPassword3" class="col-sm-2 col-form-label">
            Password
          </label>
          <div class="col-sm-10">
            <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
          </div>
        </div>
        <div className="signup">
          <Link className="Signup" to="/signup">
            Sign Up
          </Link>
        </div>
        <div className="form-group row">
          <div class="col-sm-10">
            <button type="submit" class="btn btn-primary">
              Sign in
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
