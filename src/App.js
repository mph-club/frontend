import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Toolbar from './components/Navigation/Toolbar/Toolbar';
import InitialPage from './pages/InitialPage/InitialPage';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import SearchPage from './pages/SearchPage/SearchPage';
import DetailPage from './pages/DetailPage/DetailPage';
import UserDetails from './components/UserDetails/UserDetails';
import Checkout from './components/DetailPageComponents/Checkout/Checkout';
import Dashboard from './pages/Dashboard/Dashboard';
import TripDetailsPage from './pages/TripDetailsPage/TripDetailsPage';
import HostDashboard from './pages/HostDashboard/HostDashboard';
import DeclineForm from './components/TripsDetailsComponents/DeclineForm/DeclineForm';
import ListingDetailsPage from './pages/ListingDetailsPage/ListingDetailsPage';
import Photos from './components/ListingDetailsPageComponents/Photos/Photos';
import DeliverAndAirport from './components/ListingDetailsPageComponents/DeliverAndAirport/DeliverAndAirport';
import CarLocation from './components/ListingDetailsPageComponents/CarLocation/CarLocation';
import TripPreference from './components/ListingDetailsPageComponents/TripPreference/TripPreference';
import FilterPage from './pages/FilterPage/FilterPage';
import TotalCost from './components/TripsDetailsComponents/TotalCost/TotalCost';
import CancelTrip from './components/TripsDetailsComponents/CancelTrip/CancelTrip';
import CancellationReview from './components/TripsDetailsComponents/CancellationReview/CancellationReview';
import ChangeTrip from './components/TripsDetailsComponents/ChangeTrip/ChangeTrip';
import RequestChange from './components/TripsDetailsComponents/RequestChange/RequestChange';
import Account from './pages/Account/Account';
import WelcomeDialog from './components/SignUp/WelcomeDialog/WelcomeDialog';
import ValidationWrapper from './components/SignUp/ValidationWrapper/ValidationWrapper';
import WelcomeEndedDialog from './components/SignUp/WelcomeEndedDialog/WelcomeEndedDialog';

class App extends Component {

  state = {
    auth: false,
    user: {
      cognitoUser: null,
      password: ''
    },
    openLogin: false,
    openSignUp: false,
    openWelcomeDialog: false,
    openValidationWrapper: false,
    openWelcomeEndedDialog: false
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
    this.setState({
      openValidationWrapper: false,
      openSignUp: true
    })
  }

  closeSignup = (openLogin, result, _password) => {
    this.setState({
      openSignUp: false,
      openLogin: openLogin
    })

    if (result.user) {
      this.setState({
        openWelcomeDialog: true,
        user: {
          cognitoUser: result.user,
          password: _password
        }
      })
    }
  }

  handleAuth = (value) => {
    this.setState({
      auth: value,
      openLogin: false
    })
  }

  handleGetStarted = () => {
    this.setState({
      openWelcomeDialog: false,
      openValidationWrapper: true
    })
  }

  handleGetStartedEnded = () => {
    this.setState({
      openValidationWrapper: false,
      openWelcomeEndedDialog: true
    })
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
            handleAuth={(value) => this.handleAuth(value)}
            handleCloseLogin={() => this.closeLogin(false)}
            openSignUp={() => this.closeLogin(true)} />
          <SignUp
            openSignUp={this.state.openSignUp}
            closeSignUp={(result, password) => this.closeSignup(false, result, password)}
            openLogin={() => this.closeSignup(true)} />
          <WelcomeDialog
            open={this.state.openWelcomeDialog}
            getStarted={this.handleGetStarted} />

          {
            this.state.openValidationWrapper ? <ValidationWrapper
              open={this.state.openValidationWrapper}
              user={this.state.user}
              authenticationFailed={() => this.closeSignup(true)}
              changeEmail={this.handleSignUp} 
              getStartedEnded={this.handleGetStartedEnded}/> : null
          }

          <WelcomeEndedDialog 
            open={this.state.openWelcomeEndedDialog} 
            handleContinueExploring={() => this.setState({ 
              openWelcomeEndedDialog: false
            })}/>

          <Switch>
            <Route exact path="/" component={InitialPage} />
            <Route path="/search-page" component={SearchPage} />
            <Route path="/car-details" component={DetailPage} />
            <Route path="/user-details" component={UserDetails} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/host-dashboard" component={HostDashboard} />
            <Route path="/trip-details-page" component={TripDetailsPage} />
            <Route path="/decline-trip" component={DeclineForm} />
            <Route path="/listing-pending" component={ListingDetailsPage} />
            <Route path="/upload-pictures" component={Photos} />
            <Route path="/delivery-and-airport" component={DeliverAndAirport} />
            <Route path="/car-location" component={CarLocation} />
            <Route path="/trip-preference" component={TripPreference} />
            <Route path="/filter" component={FilterPage} />
            <Route path="/total-cost" component={TotalCost} />
            <Route path="/cancel-trip" component={CancelTrip} />
            <Route path="/cancellation-review" component={CancellationReview} />
            <Route path="/change-trip" component={ChangeTrip} />
            <Route path="/request-change" component={RequestChange} />
            <Route path="/account" component={Account} />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
