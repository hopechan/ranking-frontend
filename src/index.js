import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.1.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import "assets/scss/paper-kit.scss";

import AdminLayout from "layouts/Admin.jsx";
import LandingPage from "layouts/LandingPage";
const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/ranking" render={props => <LandingPage {...props} />} />
      <Route path="/admin" render={props => <AdminLayout {...props} />} />
      <Redirect to="/ranking" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
