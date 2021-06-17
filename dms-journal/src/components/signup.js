import React from "react";

function SignUp() {
  return (
    <div>
      <form>
        <label>First Name</label>
        <input type="text" placeholder="First Name" />
        <label>Password</label>
        <input type="password" placeholder="password" />
        <label>Confirm Password</label>
        <input type="password" placeholder="Confirm Password" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SignUp;
