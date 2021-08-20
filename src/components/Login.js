import React, { useState } from "react";

import axios from "axios";

const Login = (props) => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  console.log(props);
  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", userInfo)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/bubbles");
      })
      .catch((err) => setError(err.response.data.error));
  };

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <form
        onSubmit={handleSubmit}
        data-testid="loginForm"
        className="login-form"
      >
        <input
          name="username"
          id="username"
          type="text"
          value={userInfo.username}
          onChange={handleChange}
          placeholder="Username"
        />
        <input
          name="password"
          id="password"
          type="password"
          value={userInfo.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <button type="submit" id="submit">
          Submit
        </button>
      </form>

      <p id="error" className="error">
        {error}
      </p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to "Lambda" / "School", save that token to localStorage and redirect to a BubblePage route.
//6. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE id="username" and id="password"
//7. MAKE SURE YOUR SUBMIT BUTTON INCLUDES id="submit"
//8. MAKE SURE YOUR ERROR p tag contains the id="error"
