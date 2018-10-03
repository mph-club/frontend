import React, { Component } from 'react';

import {
    StyledHeader,
    StyledTitle,
    StyledContainer
} from './styles';
import CarsCollection from '../CarsCollection/CarsCollection';
import ListVehicleBanner from './ListVehicleBanner/ListVehicleBanner';
import SearchBar from '../SearchPage/SearchBar/SearchBar';
import ReduceSearchBar from './SearchBar/ReducedSearchBar/ReducedSearchBar';
import Footer from '../../components/Navigation/Footer/Footer';

class SearchPage extends Component {
    render() {
        return (
            <React.Fragment>
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
                <Footer/>
            </React.Fragment>
        );
    }
}

export default SearchPage