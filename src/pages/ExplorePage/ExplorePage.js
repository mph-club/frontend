import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

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

import * as actions from '../../store/actions/index';

class ExplorePage extends Component {

    componentWillMount() {
        this.props.handleFetchInfo();
    }

    render() {

        let cars = null
        const collections = this.props.data

        if ( collections ) {
            cars = Object.keys(collections).map( (collectionKey, index) => {
                return <CarsCollection 
                            key={index} 
                            title={collectionKey} 
                            items={collections[collectionKey]}/>
            })
        }

        return (
            <React.Fragment>
                <StyledHeader>
                    <StyledContainer>
                        <StyledTitle variant="display1" component="h1"> Search and <span>book</span> from a variety of cars in all of Florida.</StyledTitle>
                        <StyledSearchBarContainer>
                            <SearchBar />
                        </StyledSearchBarContainer>
                    </StyledContainer>
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