import React from "react";
// import { Router, Route, Switch } from 'react-router';
import { Route, HashRouter } from "react-router-dom";
import Home from "../common/home";
import ModulesView from '../common/Modules';
import SidenavBar from '../common/sidenav';

class Routes extends React.Component {
  render() {
    console.log(this.props);
    return (
      <HashRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/modules" component={ModulesView} />
          <Route exact path="/sidenav" component={SidenavBar} />
        </div>
      </HashRouter>
    );
  }
}

export default Routes;