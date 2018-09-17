import React, { Component } from 'react';
import './App.css';
// import SignIn from './components/SignIn/SignIn';
import InitialPage from './components/InitialPage/InitialPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <SignIn></SignIn> */}
        <InitialPage />
      </div>
    );
  }
}

export default App;
