import React, { Component } from 'react';
import classes from './App.css';
import Aux from './hoc/Aux/Aux';
import Layout from './hoc/Layout/Layout';
import InitialPage from './containers/InitialPage/InitialPage';

class App extends Component {
  render() {
    return (
      <Aux className={classes.App}>
          <Layout>
            <InitialPage />
          </Layout>
      </Aux>
    );
  }
}

export default App;
