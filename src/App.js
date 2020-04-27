import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar.jsx";
import Index from "./components/layout/Index.jsx";
import { Provider } from "./context.jsx";

import "./App.css";

function App() {
  return (
    <Provider>
      <Router>
        <React.Fragment>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Index} />
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
