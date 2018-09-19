import React, { Component } from 'react';

import { StyledHeader } from './styles';
import CarsCollection from './CarsCollection/CarsCollection';
import ListVehicleBanner from './ListVehicleBanner/ListVehicleBanner';
import Footer from '../../components/UI/Footer/Footer';
import Aux from '../../hoc/Aux/Aux';

class SearchPage extends Component {
    render() {
        return (
            <Aux>
                <StyledHeader />
                <CarsCollection title="Sedans"/>
                <CarsCollection title="SUV's"/>
                <CarsCollection title="Exotics"/>
                <ListVehicleBanner/>
                <Footer/>
            </Aux>
        );
    }
}

export default SearchPage