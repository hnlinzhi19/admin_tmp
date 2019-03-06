import React from 'react';
import { Route,} from "react-router-dom";

const setTitle = title => () =>{
  console.log(1);
  document.title = title;
} 

export default  route => (
  <Route
    path={route.path}
    render={props => (
      // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes}  onEnter={setTitle(route.title)} />
    )}
  />
);
