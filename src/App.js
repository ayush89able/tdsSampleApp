import React, { Component } from 'react';
import Login from './components/Login';
import Register from './components/Register'
import Profile from './components/Profile'
import Navbar from './components/Navbar'
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div>
        <Router >
          <Navbar />
          <div>

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/profile" component={Profile} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
export default App; 
