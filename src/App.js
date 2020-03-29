import React, { Component } from 'react';
import Login from './components/Login';
import Register from './components/Register'
import Profile from './components/Profile'
import Navbar from './components/Navbar'
import Home from './components/Home'
import NotFound from './components/NotFound'
import EditPassword from './components/EditPassword';

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
              <Route path="/forgotPassword" component={EditPassword} />
              {/* <Route path='*' render={(props) => <p style={{ marginTop: '3em' }}>Not Found</p>} /> */}
              <Route path='*' component={NotFound} />

            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
export default App; 
