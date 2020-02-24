import React from "react";
import Application from "./Application"
import LandingPage from "./landing_page/LandingPage"

import {
  HashRouter,
  Route,
  Switch,
} from 'react-router-dom';

const App = () => {
  return (
    <>
    <HashRouter>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route  path='/application' component={Application} />
      </Switch>
    </HashRouter>
    </>
  );
};

export default App;
