import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Calories from "./pages/Calories";
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

          <Route exact path={"/calories"} component={Calories} />

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
