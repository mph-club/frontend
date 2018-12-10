import React from 'react';
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

const CarsCollection = (props) => {

    return (
        <StyledSection>
            <ExternalContainer>
                <StyledTitle variant="display1" color="primary">{props.title}</StyledTitle>
                <StyledDivContainer>
                    <StyledGridList spacing={4}>
                        {props.items.map(item => (
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
                    <TextButton >View all {props.title}</TextButton>
                    <span style={{ color: palette.grey01, marginLeft: space[1], marginRight: space[1] }}>or</span>
                    <TextButton>View all Cars</TextButton>
                </div>
            </ExternalContainer>
        </StyledSection>
    );
}

export default CarsCollection