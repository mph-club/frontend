import React, { Component } from 'react';
import classes from './App.css';
// import SignIn from './components/SignIn/SignIn';
import Aux from './hoc/Aux/Aux';
import Layout from './hoc/Layout/Layout';
import logo from './assets/images/mph-logo.svg';

class App extends Component {

  handleClicked = () => {
     console.log("This is working");
  };
  render() {
    return (
      <Aux className={classes.App}>
        <Layout>
          <div style={{backgroundColor:'black'}}>
            <img src={logo} alt="logo"/>
          </div>
        </Layout>
      </Aux>
    );
  }
}

export default App;
