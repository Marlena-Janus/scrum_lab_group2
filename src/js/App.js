import React from "react";
import Application from "./Application";
import LandingPage from "./landing_page/LandingPage";
import {
  HashRouter,
  Route,
  // Link,
  Switch
  // NavLink,
} from "react-router-dom";
import AddNewRecipe from "./AddNewRecipe";

const App = () => {
  return (
    <>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/application" component={Application} />
        </Switch>
      </HashRouter>
    </>
  );
};

export default App;
