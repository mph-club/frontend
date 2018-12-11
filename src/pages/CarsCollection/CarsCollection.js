import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

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

import * as actions from '../../store/actions/index';

class CarsCollection extends Component {

    handleViewCarsByType = () => {
        this.props.storeFilterProperty('type',this.props.title)
        this.props.history.push('/filter');
    }

    handleViewAllCars = () => {
        this.props.storeFilterProperty('type','all')
        this.props.history.push('/filter');
    }

    render() {
        return (
            <StyledSection>
                <ExternalContainer>
                    <StyledTitle variant="display1" color="primary">{this.props.title}</StyledTitle>
                    <StyledDivContainer>
                        <StyledGridList spacing={4}>
                            {this.props.items.map(item => (
                                <CarCard
                                    key={item.id}
                                    id={item.id}
                                    image={item.thumbnails[2]}
                                    title={item.make + ' ' + item.model + ' ' + item.year}
                                    price={item.price} />
                            ))}
                        </StyledGridList>
                    </StyledDivContainer>
                    <div style={{ marginTop: space[3] }}>
                        <TextButton onClick={this.handleViewCarsByType}>View all {this.props.title}</TextButton>
                        <span style={{ color: palette.grey01, marginLeft: space[1], marginRight: space[1] }}>or</span>
                        <TextButton onClick={this.handleViewAllCars}>View all Cars</TextButton>
                    </div>
                </ExternalContainer>
            </StyledSection>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        storeFilterProperty: (key, value) => { dispatch(actions.onStoreFilterProperty(key, value)) }
    }
}

export default withRouter(connect(null, mapDispatchToProps)(CarsCollection))