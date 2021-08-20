//Task List:
//1. Build a PrivateRoute component that redirects if user is not logged in

import { Redirect, Route } from "react-router-dom";

import React from "react";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (localStorage.getItem("token")) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
