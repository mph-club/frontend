import React, { Component } from 'react';
import './App.css';
import Aux from './hoc/Aux/Aux';
import Toolbar from './components/Toolbar/Toolbar';
import InitialPage from './containers/InitialPage/InitialPage';
import {StyledMain} from './AppStyles';

class App extends Component {
  render() {
    return (
      <Aux className="App">
          <Toolbar></Toolbar>
          <StyledMain>
              <InitialPage/>
          </StyledMain>
      </Aux>
    );
  }
}

export default App;
