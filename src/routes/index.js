import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "../pages/login";
import Cadastro from "../pages/cadastro";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/cadastro" component={Cadastro} />
    </Switch>
  );
};

export default Routes;
