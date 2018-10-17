import React, { Component } from 'react';

import {
    StyledHeader,
    StyledTitle,
    StyledContainer,
    StyledSearchBarContainer
} from './styles';
import CarsCollection from '../CarsCollection/CarsCollection';
import ListVehicleBanner from '../../components/ListingDetailsPageComponents/ListVehicleBanner/ListVehicleBanner';
import ReduceSearchBar from '../../components/UI/SearchBar/ReducedSearchBar/ReducedSearchBar';
import Footer from '../../components/Navigation/Footer/Footer';
import SearchBar from '../../components/UI/SearchBar/SearchBar';

class SearchPage extends Component {
    render() {
        return (
            <React.Fragment>
                <StyledHeader>
                    <StyledContainer>
                        <StyledTitle variant="title">Search and rent thousands of vehicles in all of Florida</StyledTitle>
                        <StyledSearchBarContainer>
                            <SearchBar />
                            <ReduceSearchBar />
                        </StyledSearchBarContainer>
                    </StyledContainer>
                    
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