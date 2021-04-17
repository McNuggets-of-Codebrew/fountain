import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {publicRoutes} from "./features/common/routes"; 

function App() {
  return(
    <Router>
      <Switch>
        {publicRoutes.map((route, index) =>
          <Route
            key={index}
            restricted={false}
            exact={route.exact}
            path={route.path}
            children={route.page}
          />
        )}
      </Switch>
    </Router>
  );
}

export default App;
