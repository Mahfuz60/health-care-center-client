import { CircularProgress } from "@mui/material";
import React from "react";
import { Redirect, Route } from "react-router-dom";
import useAuth from "../../../hooks/UseAuth";

const PrivateRoute = ({ children, ...rest }) => {
  let { user, loading } = useAuth();
  
  if (loading) {
    return <CircularProgress />;
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
