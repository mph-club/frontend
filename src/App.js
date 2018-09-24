import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Aux from './hoc/Aux/Aux';
import Toolbar from './components/Navigation/Toolbar/Toolbar';
import InitialPage from './containers/InitialPage/InitialPage';
import { StyledMain } from './AppStyles';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import SearchPage from './containers/SearchPage/SearchPage';
import DetailPage from './containers/DetailPage/DetailPage';

class App extends Component {

  state = {
    auth: false,
    openLogin: false,
    openSignUp: false
  }

  handleLogin = () => {
    this.setState({ openLogin: true })
  }

  closeLogin = () => {
    this.setState({ openLogin: false })
  }

  handleSignUp = () => {
    this.setState({ openSignUp: true })
  }

  closeSignup = () => {
    this.setState({ openSignUp: false })
  }

  render() {
    return (
      <Aux className="App">
        <Toolbar
          loginClicked={this.handleLogin}
          signupClicked={this.handleSignUp}>
        </Toolbar>
        <StyledMain>
          <Login
            openLogin={this.state.openLogin}
            handleCloseLogin={this.closeLogin} />
          <SignUp
            openSignUp={this.state.openSignUp}
            closeSignUp={this.closeSignup} />
          <Switch>
            <Route path="/search-page" exact component={SearchPage} />
            <Route path="/" exact component={InitialPage} />
            <Route path="/car-details" exact component={DetailPage}/>
          </Switch>
        </StyledMain>
      </Aux>
    );
  }
}

export default App;
