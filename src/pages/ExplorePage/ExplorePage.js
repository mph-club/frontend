import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import {
    StyledHeader,
    StyledTitle,
    ExternalContainer,
    SearchBarContainer,
    SmallSearchBarContainer
} from './styles';
import CarsCollection from '../CarsCollection/CarsCollection';
import Footer from '../../components/Navigation/Footer/Footer';
import SearchBar from '../../components/UI/SearchBar/SearchBar';
import ListVehicleBanner from '../../components/ListingDetailsPageComponents/ListVehicleBanner/ListVehicleBanner';

import * as actions from '../../store/actions/index';
import ReduceSearchBar from '../../components/UI/SearchBar/ReducedSearchBar/ReducedSearchBar';

class ExplorePage extends Component {

    componentWillMount() {
        this.props.handleFetchInfo();
    }

    render() {

        let cars = null
        const collections = this.props.data

        if ( collections ) {

            cars = Object.keys(collections).map(collectionKey => {
                return <CarsCollection 
                            key={collectionKey} 
                            id= {collectionKey} 
                            title={collections[collectionKey].display_name} 
                            items={collections[collectionKey].vehicles}/>
            })
        }

        return (
            <React.Fragment>
                <StyledHeader>
                    <ExternalContainer>
                        <StyledTitle align='center' variant="h4">Search and <span>book</span> from a variety of cars in all of Florida.</StyledTitle>
                        <SearchBarContainer>
                            <SearchBar />
                        </SearchBarContainer>
                        <SmallSearchBarContainer>
                            <ReduceSearchBar />
                        </SmallSearchBarContainer>
                    </ExternalContainer>
                </StyledHeader>
                {cars}
                <ListVehicleBanner />
                <Footer/>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.explore.loading,
        error: state.explore.error,
        data: state.explore.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleFetchInfo: () => { dispatch(actions.onExploreFetchInfo())}
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ExplorePage))