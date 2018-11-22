import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import SimpleReactHook from './components/SimpleReactHook';
import Home from './components/Home';
import './App.css';
import UseEffect from './components/UseEffect';

class App extends Component {
  state = {
    watchMe: Date.now(),
  };

  updateWatchme = () => {
    this.setState({
      watchMe: Date.now(),
    });
  };
  render() {
    return (
      <div className="App">
        <div
          style={{ width: '300px', height: 'auto', float: 'left' }}
          className="sidenav"
        >
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/simple">Simple React Hook</Link>
            </li>
            <li>
              <Link to="/use-effect">UseEffect</Link>
            </li>
          </ul>
        </div>
        <div style={{ width: 'auto', height: 'auto', float: 'left' }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/simple" component={SimpleReactHook} />
            <Route path="/use-effect" component={UseEffect} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
