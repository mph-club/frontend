import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
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
import HostDashboard from './containers/HostDashboard/HostDashboard';
import DeclineForm from './components/SummaryTripForHost/DeclineForm/DeclineForm';
import ListingDetailsPage from './containers/ListingDetailsPage/ListingDetailsPage';
import Photos from './components/ListingDetailsPageComponents/Photos/Photos';
import DeliverAndAirport from './components/ListingDetailsPageComponents/DeliverAndAirport/DeliverAndAirport';

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
      <React.Fragment>
        <Toolbar
          loginClicked={this.handleLogin}
          signupClicked={this.handleSignUp}
          auth={this.state.auth}
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
            <Route exact path="/" component={InitialPage} />
            <Route exact path="/search-page" component={SearchPage} />
            <Route exact path="/car-details" component={DetailPage} />
            <Route exact path="/user-details" component={UserDetails} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/host-dashboard" component={HostDashboard} />
            <Route exact path="/trip-details-page" component={TripDetailsPage} />
            <Route exact path="/decline-trip" component={DeclineForm} />
            <Route exact path="/listing-pending" component={ListingDetailsPage} />
            <Route exact path="/upload-pictures" component={Photos} />
            <Route exact path="/delivery-and-airport" component={DeliverAndAirport} />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
