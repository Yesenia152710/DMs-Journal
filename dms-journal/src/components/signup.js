import React from "react";

function SignUp() {
  return (
    <form style= {{ width: 400}} >
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control"  id="exampleInputPassword1" placeholder="Password" />
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
   
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
  );
}

export default SignUp;
