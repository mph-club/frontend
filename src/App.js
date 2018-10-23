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
import Checkout from './components/Checkout/Checkout';
import Dashboard from './pages/Dashboard/Dashboard';
import TripDetailsPage from './pages/TripDetailsPage/TripDetailsPage';
import HostDashboard from './pages/HostDashboard/HostDashboard';
import DeclineForm from './components/SummaryTripForHost/DeclineForm/DeclineForm';
import ListingDetailsPage from './pages/ListingDetailsPage/ListingDetailsPage';
import Photos from './components/ListingDetailsPageComponents/Photos/Photos';
import DeliverAndAirport from './components/ListingDetailsPageComponents/DeliverAndAirport/DeliverAndAirport';
import CarLocation from './components/ListingDetailsPageComponents/CarLocation/CarLocation';
import TripPreference from './components/ListingDetailsPageComponents/TripPreference/TripPreference';
import FilterPage from './pages/FilterPage/FilterPage';
import TotalCost from './components/TripsDetailsComponents/TotalCost/TotalCost';
import CancelTrip from './components/TripsDetailsComponents/CancelTrip/CancelTrip';

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
            <Route path="/total-cost" component={TotalCost}/>
            <Route path="/cancel-trip" component={CancelTrip}/>
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
