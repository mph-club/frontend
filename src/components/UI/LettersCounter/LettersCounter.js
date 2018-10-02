import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LettersCounter extends Component {
  
  render () {
    return (
      <span>{this.props.length}/400</span>
    );
  }
};

LettersCounter.propTypes = {
    length: PropTypes.number.isRequired
};

export default LettersCounter;