import React, { Component } from 'react';

import {
    StyledHeader,
    StyledTitle,
    StyledContainer,
    StyledSearchBarContainer
} from './styles';
import CarsCollection from '../CarsCollection/CarsCollection';
import ListVehicleBanner from '../../components/ListingDetailsPageComponents/ListVehicleBanner/ListVehicleBanner';
import Footer from '../../components/Navigation/Footer/Footer';
import SearchBar from '../../components/UI/SearchBar/SearchBar';

class SearchPage extends Component {
    render() {
        return (
            <React.Fragment>
                <StyledHeader>
                    <StyledContainer>
                        <StyledTitle 
                            variant="display1"
                            component="h1"
                        > 
                            Search and <span>book</span> from a variety of cars in all of Florida.
                        </StyledTitle>
                        <StyledSearchBarContainer>
                            <SearchBar />
                        </StyledSearchBarContainer>
                    </StyledContainer>
                    
                </StyledHeader>
                <CarsCollection 
                    title="Sedans"
                    type="Sedans"
                />
                <CarsCollection 
                    title="SUV's" 
                    type="SUV's"
                />
                <CarsCollection 
                    title="Exotics"
                    type="Exotics" 
                />
                <ListVehicleBanner />
                <Footer/>
            </React.Fragment>
        );
    }
}

export default SearchPage