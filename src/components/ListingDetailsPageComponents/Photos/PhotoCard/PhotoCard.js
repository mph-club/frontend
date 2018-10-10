import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import {
    StyledCard,
    StyledCardAction,
    StyledCoverCard,
    StyledTypography,
    StyledSpanContainer
} from './styles';
import Button from '@material-ui/core/Button';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { palette, space } from '../../../../theme';

const PhotoCard = (props) => {

    let card = <StyledCard
        onClick={() => props.clicked(props.index)} >
        <CardMedia
            component="img"
            alt="Contemplative Reptile"
            image="https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/totR6CBQQ1qkbq81qjCOgg.1440x700.jpg"
            title="Contemplative Reptile"
        />
        <StyledCardAction>
            <Button size="small" style={{ color: `${palette.green}` }} onClick={() => props.deleteClicked(props.index)}>
                <DeleteOutlineIcon fontSize="small" style={{ marginRight: `${space[1]}` }} />
                <span>Delete photo</span>
            </Button>
        </StyledCardAction>
    </StyledCard>

    if (props.cover) {
        card =
            <StyledCoverCard
                onClick={() => props.clicked(props.index)} >

                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    image="https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/totR6CBQQ1qkbq81qjCOgg.1440x700.jpg"
                    title="Contemplative Reptile"
                />
                <StyledCardAction>
                    <Button size="small" style={{ color: `${palette.green}` }} onClick={() => props.deleteClicked(props.index)}>
                        <DeleteOutlineIcon fontSize="small" style={{ marginRight: `${space[1]}` }} />
                        <span>Delete photo</span>
                    </Button>
                    <StyledSpanContainer>
                        <StyledTypography style={{color: palette.white}} variant="body1">cover photo</StyledTypography>
                    </StyledSpanContainer>
                </StyledCardAction>
            </StyledCoverCard>
    }

    return (
        <React.Fragment>
            {card}
        </React.Fragment>
    );
}

export default PhotoCard