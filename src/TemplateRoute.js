import React from "react";
import { Route } from "react-router-dom";
import HomeScreen from "./HomeScreen";

function TemplateRoute(props) {
  const { component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={(routeProps) => (
        <HomeScreen>
          <Component {...routeProps} />
        </HomeScreen>
      )}
    />
  );
}

export default TemplateRoute;
