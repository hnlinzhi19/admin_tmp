import React, { Component } from 'react';
// import logo from './logo.svg';
import './scss/App.scss';
import { HashRouter as Router } from "react-router-dom";
import RouteWithSubRoutes from 'utils/render';
import routes from 'routes/index';
import { renderRoutes } from "react-router-config";
// {renderRoutes(route.routes)}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)} */}
          {renderRoutes(routes)}
        </div>
      </Router>)
  }
}

export default App;
