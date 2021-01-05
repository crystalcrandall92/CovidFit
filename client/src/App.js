import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Fitness from "./pages/Fitness";
import NoMatch from "./pages/NoMatch";
import Nutrition from "./pages/Nutrition";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";


function App() {
  return (
    <Router>
      <div>
        <Switch>

          <Route exact path={["/", "/home"]} component={Home} />

          <Route exact path={"/fitness"}>
            <Fitness />
          </Route>
          <Route exact path={"/nutrition"}>
            <Nutrition />
          </Route>
          <Route exact path={"/signup"}>
            <Signup />
          </Route>
          <Route exact path={"/signin"}>
            <Signin />
          </Route>
          <Route>
            <NoMatch />
          </Route>

        </Switch>
      </div>
    </Router >
  )
}


export default App;
