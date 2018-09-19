import React, { Component } from 'react';
import { StyledTitle } from './styles';

class CarsCollection extends Component {
    render() {
        return (
            <section>
                <StyledTitle>{this.props.title}</StyledTitle>
            </section>
        );
    }
}

export default CarsCollection