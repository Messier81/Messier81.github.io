import React from "react";
import "./App.css";
import Front from "./comps/Front";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Front} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
