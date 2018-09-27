import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Aux from './hoc/Aux/Aux';
import Toolbar from './components/Navigation/Toolbar/Toolbar';
import InitialPage from './containers/InitialPage/InitialPage';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import SearchPage from './containers/SearchPage/SearchPage';
import DetailPage from './containers/DetailPage/DetailPage';
import UserDetails from './components/UserDetails/UserDetails';
import Checkout from './components/Checkout/Checkout';
import Dashboard from './containers/Dashboard/Dashboard';
import TripDetailsPage from './containers/TripDetailsPage/TripDetailsPage';
import Footer from './components/Navigation/Footer/Footer';

class App extends Component {

  state = {
    auth: true,
    openLogin: false,
    openSignUp: false
  }

  handleLogin = () => {
    this.setState({ openLogin: true })
  }

  closeLogin = (signUp) => {
    this.setState({ openLogin: false })

    if (signUp) {
      this.setState({ openSignUp: true })
    }
  }

  handleSignUp = () => {
    this.setState({ openSignUp: true })
  }

  closeSignup = (login) => {
    this.setState({ openSignUp: false })

    if (login) {
      this.setState({ openLogin: true })
    }
  }

  render() {
    return (
      <Aux className="App">
        <Toolbar
          loginClicked={this.handleLogin}
          signupClicked={this.handleSignUp}
          auth = {this.state.auth}
          userName='Juan Luis'>
        </Toolbar>
        <main>
          <Login
            openLogin={this.state.openLogin}
            handleCloseLogin={() => this.closeLogin(false)}
            openSignUp={() => this.closeLogin(true)} />
          <SignUp
            openSignUp={this.state.openSignUp}
            closeSignUp={() => this.closeSignup(false)}
            openLogin={() => this.closeSignup(true)} />
          <Switch>
            <Route path="/search-page" exact component={SearchPage} />
            <Route path="/car-details" exact component={DetailPage} />
            <Route path="/user-details" exact component={UserDetails} />
            <Route path="/checkout" exact component={Checkout} />
            <Route path="/dashboard" exact component={Dashboard}/>
            <Route path="/trip-details-page" exact component={TripDetailsPage}/>
            <Route path="/" component={InitialPage} />
          </Switch>
        </main>
        <Footer />
      </Aux>
    );
  }
}

export default App;
