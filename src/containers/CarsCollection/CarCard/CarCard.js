import React from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import GridListTile from '@material-ui/core/GridListTile';
import {
	StyledCard,
	StyledCardMedia,
	StyledCardActions,
	StyledTitle,
	StyledPrice,
	StyledPriceLayout,
	StyledDollarSign,
	StyledPerDay
} from './styles';

const CarCard = (props) => {
	return (
		<GridListTile key={props.key}>
			<StyledCard>
				<CardActionArea>
					<StyledTitle>{props.title}</StyledTitle>
					<StyledCardMedia
						image={props.image}
						title={props.title}
					/>
				</CardActionArea>
				<StyledCardActions>
					<StyledPriceLayout>
						<StyledDollarSign>$</StyledDollarSign><StyledPrice>{props.price}</StyledPrice><StyledPerDay>/per day</StyledPerDay>
					</StyledPriceLayout>
					<div>
						<div>4 trips</div>
					</div>
				</StyledCardActions>
			</StyledCard>
		</GridListTile>
	);
}

export default CarCard;