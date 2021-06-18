import React from "react";
import { Link } from "react-router-dom";
import "./css/login.css";

function Login() {
  return (
    <div className="login">
      <form>
        <div className="login_form">
          <label className="login_lable">Email</label>
          <div className="col-sm-10">
            <input type="email" className="input" id="inputEmail3" placeholder="Email" />
          </div>
        </div>
        <div className="login_form">
          <label className="login_lable">Password</label>
          <div class="col-sm-10">
            <input type="password" className=" input" id="inputPassword3" placeholder="Password" />
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
