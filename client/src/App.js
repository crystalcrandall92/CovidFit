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

          <Route exact path={"/fitness"} component={Fitness} />

          <Route exact path={"/nutrition"} component={Nutrition} />

          <Route exact path={"/signup"} component={Signup} />

          <Route exact path={"/signin"} component={Signin} />

          <Route>
            <NoMatch />
          </Route>

        </Switch>
      </div>
    </Router >
  )
}


export default App;
