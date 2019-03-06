import React from 'react'
import { renderRoutes } from "react-router-config";

import load from 'utils/loadable'

class Root extends React.Component{
  render(){
    const {route} = this.props;
    return (<div>
      {/* <h1>Root</h1> */}
      {renderRoutes(route.routes)}
    </div>)
  }
}

const routes = [
  {
    component: Root,
    routes: [
      {
        path: "/",
        exact: true,
        component: load('home/Home')
      },
      {
        path: "/login",
        exact: true,
        component: load('auth/Login')
      },
      {
        path: "/register",
        exact: true,
        component: load('auth/Register')
      },
      {
        path: '*',
        component: load('error/404')
      }
    ]
  }
]

export default routes;