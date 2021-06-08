import React from "react";

function Login() {
  return (
    <div>
      <form>
        <lable>Email</lable>
        <input placeholder="Email" type="email" />
        <label>Password</label>
        <input placeholder="Password" type="password" />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
