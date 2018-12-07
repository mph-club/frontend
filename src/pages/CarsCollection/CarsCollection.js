import React, { Component } from 'react';
import { withRouter } from 'react-router';
import {
    StyledDivContainer,
    StyledGridList,
    StyledTitle,
    StyledSection,
    ExternalContainer
} from './styles';
import CarCard from '../../components/UI/CarCard/CarCard';

import TextButton from '../../components/UI/Buttons/TextButton/TextButton';
import { space, palette } from '../../theme';

class CarsCollection extends Component {

    state = {
        cardIdSelected: null
    }

    handleCard = (cardId) => {
        this.setState({ cardIdSelected: cardId });
        this.props.history.push('/car-details');
    }

    render() {
        return (
            <StyledSection>
                <ExternalContainer>
                    <StyledTitle variant="display1" color="primary">{this.props.title}</StyledTitle>
                    <StyledDivContainer>
                        <StyledGridList spacing={4}>
                            {this.props.items.map( item => (
                                <CarCard
                                    key={item.id}
                                    image={item.thumbnails[2]}
                                    title={item.make + ' ' + item.model + ' ' + item.year}
                                    price={item.price}
                                    handleCard={() => this.handleCard(item.id)} />
                            ))}
                        </StyledGridList>
                    </StyledDivContainer>
                    <div style={{ marginTop: space[3] }}>
                        <TextButton>View all {this.props.title}</TextButton>
                        <span style={{ color: palette.grey01, marginLeft: space[1], marginRight: space[1] }}>or</span>
                        <TextButton>View all Cars</TextButton>
                    </div>
                </ExternalContainer>
            </StyledSection>
        );
    }
}

export default withRouter(CarsCollection)