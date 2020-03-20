import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ProtectedRoute } from './Components';
import { AccountDetails, Home, Login, NotFound, Reviews } from "./Scenes";
import "./App.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/reviews" component={Reviews} />
        <Route exact path="/login" component={Login} />
        <ProtectedRoute exact path="/account" component={AccountDetails} />
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
