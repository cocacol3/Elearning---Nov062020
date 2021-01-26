import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

const auth = ({ path, Component }) => {
  return (
    <div>
      <Route
        path={path}
        render={(routeProps) => {
          if (localStorage.getItem("credentials")) {
            return <Component {...routeProps} />;
          }

          alert(
            "Please log in as administrator to access this page!"
          );
          return <Redirect to="/" />;
        }}
      />
    </div>
  );
};

export default auth;
