import React, { useState, useEffect } from "react";
import "./index.css";
import { useCon } from "../contextApi";
function Login() {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [userloginname, setUserloginname] = useState("");
  const [loginpassword, setLoginpassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //   if (username === "" || password === "") {
    //     setError("Both fields are required!");
    //   }
  };

  return (
    <div className="login-container bg-primary">
      <h2 className="text-white">Login Form</h2>

      <form onSubmit={handleSubmit}>
        <div className="formdiv">
          <div>
            <label className="text-white" htmlFor="username">
              Username
            </label>
            <input
              className="inputlogin"
              type="text"
              id="username"
              value={userloginname}
              onChange={(e) => setUserloginname(e.target.value)}
              placeholder="Enter your username"
              required
            />
          </div>
          <div>
            <label className="text-white" htmlFor="password">
              Password
            </label>
            <input
              className="inputlogin"
              type="password"
              id="password"
              value={loginpassword}
              onChange={(e) => setLoginpassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button className="btn text-white" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
