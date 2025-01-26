import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

import { useCon } from "../contextApi";
const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");
  const [userpassword, setUserpassword] = useState("");
  const [userData, setUserData] = useState([]);
  const [accountCreated, setAccountCreated] = useState("");
  const userName = (e) => {
    setUsername(e.target.value);
  };
  const userEmail = (e) => {
    setUseremail(e.target.value);
  };
  const userPassword = (e) => {
    setUserpassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const url = "";

    // const obj = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },

    //   body: JSON.stringify(formData),
    // };
    // const responce = await fetch(url, obj);
    const formData = {
      name: username,

      password: useremail,
      email: userpassword,
    };
    setUserData([...userData, formData]);

    setUserdata(form);
    setUsername("");
    setUseremail("");
    setUserpassword("");
    setAccountCreated("Account Successfully Created");
  };

  return (
    <div className="signupformbg bg-primary">
      <h2 className="text-center text-white">Create Account</h2>
      <form onSubmit={handleSubmit}>
        <div className=" form">
          <div>
            <label className="text-white" htmlFor="name">
              Name:
            </label>
            <input
              className="inputbox"
              type="text"
              id="name"
              name="name"
              value={username}
              onChange={userName}
              required
            />
          </div>

          <div>
            <label className="text-white" htmlFor="email">
              Email:
            </label>
            <input
              className="inputbox"
              type="email"
              id="email"
              name="email"
              value={useremail}
              onChange={userEmail}
              required
            />
          </div>

          <div>
            <label className="text-white" htmlFor="password">
              Password:
            </label>
            <input
              className="inputbox"
              type="password"
              id="password"
              name="password"
              value={userpassword}
              onChange={userPassword}
              required
            />
          </div>

          <button className="btn text-white" type="submit">
            Sign Up
          </button>
          <p className="text-white">{accountCreated}</p>
        </div>
      </form>
      <Link to="/login">
        <p className="text-white">If you have account then Login</p>
      </Link>
    </div>
  );
};

export default SignupForm;
