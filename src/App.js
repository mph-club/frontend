import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import Toolbar from './components/Navigation/Toolbar/Toolbar';
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

import * as actions from './store/actions/index';

class App extends Component {

  componentWillMount() {
    this.props.onChechAuthState();
  }

  render() {
    return (
      <React.Fragment>
        <Toolbar />
        <main>
          <Login />
          <SignUp />
          <WelcomeDialog />
          <ValidationWrapper />
          <WelcomeEndedDialog />
          <Switch>
            <Route exact path="/" component={SearchPage} />
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

const mapDispatchToProps = dispatch => {
  return {
    onChechAuthState: () => { dispatch(actions.onAuthCheckState())}
  }
}

export default connect(null, mapDispatchToProps)(App);
