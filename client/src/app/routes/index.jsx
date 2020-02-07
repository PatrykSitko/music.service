import React from "react";
import { Switch, Route } from "react-router-dom";
import Genres from "./genres";
import Regions from "./regions";
import "../app.scss";

document.title = "react app";

export const Routes = () => (
  <Switch>
    <Route path="/genres" exact strict component={Genres} />
    <Route path="/regions" exact strict component={Regions} />
  </Switch>
);
