import React, { Component } from 'react';

import {
    StyledHeader,
    StyledTitle,
    StyledContainer
} from './styles';
import CarsCollection from '../CarsCollection/CarsCollection';
import ListVehicleBanner from './ListVehicleBanner/ListVehicleBanner';
import Aux from '../../hoc/Aux/Aux';
import SearchBar from '../SearchPage/SearchBar/SearchBar';
import ReduceSearchBar from './SearchBar/ReducedSearchBar/ReducedSearchBar';

class SearchPage extends Component {
    render() {
        return (
            <Aux>
                <StyledHeader>
                    <StyledContainer>
                        <StyledTitle variant="title">Search and rent thousands of vehicles in all of Florida</StyledTitle>
                    </StyledContainer>
                    <SearchBar />
                    <ReduceSearchBar />
                </StyledHeader>
                <CarsCollection title="Sedans" />
                <CarsCollection title="SUV's" />
                <CarsCollection title="Exotics" />
                <ListVehicleBanner />
            </Aux>
        );
    }
}

export default SearchPage