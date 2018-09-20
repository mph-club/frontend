import React from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';
import {
	StyledCard,
	StyledCardMedia,
	StyledCardActions,
	StyledTitle,
	StyledPrice,
	StyledPriceLayout,
	StyledDollarSign,
	StyledPerDay,
	StyledGradeRoundedIcon
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
						<div>
							<div>4 trips</div>
						</div>
						<div>
							<StyledGradeRoundedIcon />
							<StyledGradeRoundedIcon />
							<StyledGradeRoundedIcon />
							<StyledGradeRoundedIcon />
							<StyledGradeRoundedIcon />
						</div>
						<div>
							<Typography variant="body1">
								8 mi
							</Typography>
						</div>
					</div>
				</StyledCardActions>
			</StyledCard>
		</GridListTile>
	);
}

export default CarCard;