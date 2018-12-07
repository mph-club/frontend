import React from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';
import RateStars from '../../../components/UI/RateStars/RateStars';
import { CustomTheme } from '../../../theme';
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
				<CardActionArea onClick={() => props.handleCard()}>
					<StyledTitle>{props.title}</StyledTitle>
					<StyledCardMedia
						image={props.image}
						title={props.title}
					/>
				</CardActionArea>
				<StyledCardActions>
					{props.price ? 
						<StyledPriceLayout>
							<StyledDollarSign>$</StyledDollarSign>
							<StyledPrice>{props.price}</StyledPrice>
							<StyledPerDay>/per day</StyledPerDay>
						</StyledPriceLayout> : null}
					<div>
						<Typography variant="body2">{props.trips}</Typography>
						{props.rate ? <RateStars rate={props.rate} /> : null}
						<Typography variant="body1" style={{ color: `${CustomTheme.palette.grey02}` }}>{props.distance}</Typography>
					</div>
				</StyledCardActions>
			</StyledCard>
		</GridListTile>
	);
}

export default CarCard;