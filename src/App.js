import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Aux from './hoc/Aux/Aux';
import Toolbar from './components/Navigation/Toolbar/Toolbar';
import InitialPage from './containers/InitialPage/InitialPage';
import { StyledMain } from './AppStyles';
import Login from './containers/Login/Login';
import SignUp from './containers/SignUp/SignUp';

class App extends Component {

  render() {
    return (
      <Aux className="App">
        <Toolbar></Toolbar>
        <StyledMain>
          <Route path="/" component={InitialPage} />
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={SignUp} />
          </Switch>
        </StyledMain>
      </Aux>
    );
  }
}

export default App;
