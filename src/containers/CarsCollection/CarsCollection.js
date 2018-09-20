import React from 'react';

import {
    StyledDivContainer,
    StyledGridList,
    StyledTitle,
    StyledSection
} from './styles';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import CarCard from '../CarsCollection/CarCard/CarCard';
import tileData from './tileData';

const CarsCollection = (props) => {
    return (
        <StyledSection>
            <StyledTitle>{props.title}</StyledTitle>
            <StyledDivContainer>
                <StyledGridList>
                    {tileData.map(tile => (
                        <CarCard key={tile.id} image={tile.img} title={tile.title} price={tile.price}/>
                    ))}
                </StyledGridList>
            </StyledDivContainer>
        </StyledSection>
    );
}

export default CarsCollection