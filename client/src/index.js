import React from "react";
import ReactDOM from "react-dom";
import { browserHistory } from "./redux/store/configuration";
import * as serviceWorker from "./serviceWorker";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { Routes } from "./app/routes";
import NavigationBar from "./app/components/navigation/bar";
import NavigationButtonRegions from "./app/components/navigation/button/regions";
import NavigationButtonGenres from "./app/components/navigation/button/genres";
import NavigationButtonArtists from "./app/components/navigation/button/artists";
import Player from "./app/components/player";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <NavigationBar>
      <NavigationButtonRegions />
      <NavigationButtonGenres />
      <NavigationButtonArtists />
    </NavigationBar>
    <Router history={browserHistory}>
      <Routes />
    </Router>
    <Player />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
