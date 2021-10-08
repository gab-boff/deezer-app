import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Favorites from "./pages/Favorites";
import Main from "./pages/Main";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/favorites" exact component={Favorites} />
      </Switch>
    </BrowserRouter>
  );
}
