import React from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';
import RateStars from '../../../components/UI/RateStars/RateStars';
import { CustomTheme } from '../../../theme';
import {
	StyledCard,
	StyledCardActions,
	StyledTitle,
	StyledPrice,
	StyledPriceLayout,
	StyledDollarSign,
	StyledPerDay,
	StyledCardMediaSmall
} from './styles';

const CarCardSmall = (props) => {


	return (
		<GridListTile key={props.key}>
			<StyledCard>
				<CardActionArea onClick={() => props.handleCard()}>
					<StyledTitle>{props.title}</StyledTitle>
					<StyledCardMediaSmall
						image={props.image}
						title={props.title}
					/>
				</CardActionArea>
				<StyledCardActions>
					<StyledPriceLayout>
						<StyledDollarSign>$</StyledDollarSign><StyledPrice>{props.price}</StyledPrice><StyledPerDay>/per day</StyledPerDay>
					</StyledPriceLayout>
					<div>
						<div>
							<Typography variant="body2">4 trips</Typography>
						</div>
						<div>
							<RateStars rate={props.rate}/>
						</div>
						<div>
							<Typography variant="body1" style={{color: `${CustomTheme.palette.grey02}`}}>
								8 mi
							</Typography>
						</div>
					</div>
				</StyledCardActions>
			</StyledCard>
		</GridListTile>
	);
}

export default CarCardSmall;