import React, { Component } from 'react';
import { withRouter } from 'react-router';
import {
    StyledDivContainer,
    StyledGridList,
    StyledTitle,
    StyledSection
} from './styles';
import CarCard from '../CarsCollection/CarCard/CarCard';
import tileData from './tileData';

class CarsCollection extends Component {

    state = {
        cardIdSelected: null
    }

    handleCard = (cardId) => {
        this.setState({ cardIdSelected: cardId});
        console.log(this.props);
        this.props.history.push('/car-details');
    }

    render() {
        return (
            <StyledSection>
                <StyledTitle>{this.props.title}</StyledTitle>
                <StyledDivContainer>
                    <StyledGridList spacing={4}>
                        {tileData.map(tile => (
                            <CarCard
                                key={tile.id}
                                image={tile.img}
                                title={tile.title}
                                price={tile.price}
                                rate={tile.rate}
                                handleCard={() => this.handleCard(tile.id)} />
                        ))}
                    </StyledGridList>
                </StyledDivContainer>
            </StyledSection>
        );
    }
}

export default withRouter(CarsCollection)