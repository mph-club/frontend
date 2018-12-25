import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import Toolbar from './components/Navigation/Toolbar/Toolbar';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import Explore from './pages/ExplorePage/ExplorePage';
import DetailPage from './pages/DetailPage/DetailPage';
import UserDetails from './components/UserDetails/UserDetails';
import TripDetailsPage from './pages/TripDetailsPage/TripDetailsPage';
import DeclineForm from './components/TripsDetailsComponents/DeclineForm/DeclineForm';
import ListingDetailsPage from './pages/ListingDetailsPage/ListingDetailsPage';
import Photos from './components/ListingDetailsPageComponents/Photos/Photos';
import DeliverAndAirport from './components/ListingDetailsPageComponents/DeliverAndAirport/DeliverAndAirport';
import CarLocation from './components/ListingDetailsPageComponents/CarLocation/CarLocation';
import TripPreference from './components/ListingDetailsPageComponents/TripPreference/TripPreference';
import TotalCost from './components/TripsDetailsComponents/TotalCost/TotalCost';
import CancelTrip from './components/TripsDetailsComponents/CancelTrip/CancelTrip';
import CancellationReview from './components/TripsDetailsComponents/CancellationReview/CancellationReview';
import ChangeTrip from './components/TripsDetailsComponents/ChangeTrip/ChangeTrip';
import RequestChange from './components/TripsDetailsComponents/RequestChange/RequestChange';
import WelcomeDialog from './components/SignUp/WelcomeDialog/WelcomeDialog';
import ValidationWrapper from './components/SignUp/ValidationWrapper/ValidationWrapper';
import WelcomeEndedDialog from './components/SignUp/WelcomeEndedDialog/WelcomeEndedDialog';
import ConfirmUser from './components/Login/ConfirmUser/ConfirmUser';
import ForgotPassword from './components/Login/ForgotPassword/ForgotPassword';
import HomePage from './pages/HomePage/HomePage';

import * as actions from './store/actions/index';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

const asyncAccount = asyncComponent(() => {
  return import('./pages/Account/Account')
})

const asyncDashboard = asyncComponent(() => {
  return import('./pages/Dashboard/Dashboard')
})

const asyncHostDashboard = asyncComponent(() => {
  return import('./pages/HostDashboard/HostDashboard')
})

const asyncCheckout = asyncComponent(() => {
  return import('./components/DetailPageComponents/Checkout/Checkout')
})

const asyncFilterPage = asyncComponent(() => {
  return import('./pages/FilterPage/FilterPage')
})

class App extends Component {

  componentWillMount() {
    this.props.onChechAuthState();
  }

  render() {

    let routes = <Switch>
      <Route path="/car-details" component={DetailPage} />
      <Route path="/user-details" component={UserDetails} />
      <Route path="/car-location" component={CarLocation} />
      <Route path="/trip-preference" component={TripPreference} />
      <Route path="/filter" component={asyncFilterPage} />
      <Route exact path="/" component={HomePage} />
      <Redirect to="/" />
    </Switch>

    if (this.props.isAuthenticated) {
      routes = <Switch>
        <Route path="/car-details" component={DetailPage} />
        <Route path="/user-details" component={UserDetails} />
        <Route path="/checkout" component={asyncCheckout} />
        <Route path="/dashboard" component={asyncDashboard} />
        <Route path="/host-dashboard" component={asyncHostDashboard} />
        <Route path="/trip-details-page" component={TripDetailsPage} />
        <Route path="/decline-trip" component={DeclineForm} />
        <Route path="/listing-pending" component={ListingDetailsPage} />
        <Route path="/upload-pictures" component={Photos} />
        <Route path="/delivery-and-airport" component={DeliverAndAirport} />
        <Route path="/car-location" component={CarLocation} />
        <Route path="/trip-preference" component={TripPreference} />
        <Route path="/filter" component={asyncFilterPage} />
        <Route path="/total-cost" component={TotalCost} />
        <Route path="/cancel-trip" component={CancelTrip} />
        <Route path="/cancellation-review" component={CancellationReview} />
        <Route path="/change-trip" component={ChangeTrip} />
        <Route path="/request-change" component={RequestChange} />
        <Route path="/account" component={asyncAccount} />
        <Route exact path="/" component={Explore} />
        <Redirect to="/" />
      </Switch>
    }

    return (
      <React.Fragment>
        <Toolbar />
        <main>
          <Login />
          <ForgotPassword/>
          <ConfirmUser />
          <SignUp />
          <WelcomeDialog />
          <ValidationWrapper />
          <WelcomeEndedDialog />
          {routes}
        </main>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.session.isValid
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChechAuthState: () => { dispatch(actions.onAuthCheckState()) }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
