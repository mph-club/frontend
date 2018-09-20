import React from 'react';

import {
    StyledDivContainer,
    StyledGridList,
    StyledTitle,
    StyledSection
} from './styles';
import CarCard from '../CarsCollection/CarCard/CarCard';
import tileData from './tileData';

const CarsCollection = (props) => {
    return (
        <StyledSection>
            <StyledTitle>{props.title}</StyledTitle>
            <StyledDivContainer>
                <StyledGridList spacing={4}>
                    {tileData.map(tile => (
                        <CarCard key={tile.id} image={tile.img} title={tile.title} price={tile.price}/>
                    ))}
                </StyledGridList>
            </StyledDivContainer>
        </StyledSection>
    );
}

export default CarsCollection