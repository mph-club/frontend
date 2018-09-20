import React, { Component } from 'react';

import {
    StyledHeader,
    StyledTitle,
    StyledContainer
} from './styles';
import CarsCollection from '../CarsCollection/CarsCollection';
import ListVehicleBanner from './ListVehicleBanner/ListVehicleBanner';
import Footer from '../../components/UI/Footer/Footer';
import Aux from '../../hoc/Aux/Aux';

class SearchPage extends Component {
    render() {
        return (
            <Aux>
                <StyledHeader>
                    <StyledContainer>
                        <StyledTitle variant="title">Search and rent thousands of vehicles in all of Florida</StyledTitle>
                    </StyledContainer>
                </StyledHeader>
                <CarsCollection title="Sedans" />
                <CarsCollection title="SUV's" />
                <CarsCollection title="Exotics" />
                <ListVehicleBanner />
                <Footer />
            </Aux>
        );
    }
}

export default SearchPage