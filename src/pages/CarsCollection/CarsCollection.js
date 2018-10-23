import React, { Component } from 'react';
import { withRouter } from 'react-router';
import {
    StyledDivContainer,
    StyledGridList,
    StyledTitle,
    StyledSection
} from './styles';
import CarCard from '../../components/UI/CarCard/CarCard';
import tileData from './tileData';
import TextButton from '../../components/UI/Buttons/TextButton/TextButton';
import { space, palette } from '../../theme';

class CarsCollection extends Component {

    state = {
        cardIdSelected: null
    }

    handleCard = (cardId) => {
        this.setState({ cardIdSelected: cardId});
        this.props.history.push('/car-details');
    }

    render() {
        return (
            <StyledSection>
                <StyledTitle variant="display1" color="primary">{this.props.title}</StyledTitle>
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
                <div style={{ marginTop: space[3] }}>
                    <TextButton>View all {this.props.type}</TextButton>
                    <span style={{ color: palette.grey01, marginLeft: space[1], marginRight: space[1] }}>or</span>
                    <TextButton>View all Cars</TextButton>
                </div>
            </StyledSection>
        );
    }
}

export default withRouter(CarsCollection)