import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import SimpleReactHook from './components/SimpleReactHook';
import Home from './components/Home';
import './App.css';
import UseEffect from './components/UseEffect';
import UseEffectCleanup from './components/UseEffectCleanup';
import UseReducer from './components/UseReducer';
import CustomHook from './components/CustomHook';

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
            <li>
              <Link to="/use-effect-cleanup">UseEffectCleanup</Link>
            </li>
            <li>
              <Link to="/use-reducer">Use Reducer</Link>
            </li>
            <li>
              <Link to="/custom-hook">Custom Hook</Link>
            </li>
          </ul>
        </div>
        <div style={{ width: 'auto', height: 'auto', float: 'left' }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/simple" component={SimpleReactHook} />
            <Route path="/use-effect" component={UseEffect} />
            <Route path="/use-effect-cleanup" component={UseEffectCleanup} />
            <Route path="/use-reducer" component={UseReducer} />
            <Route path="/custom-hook" component={CustomHook} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
