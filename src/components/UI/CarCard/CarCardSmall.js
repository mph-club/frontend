import React, { PureComponent } from 'react';
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

class CarCardSmall extends PureComponent {

	handleCardClicked = () => {
		this.props.onCarSelected(this.props.id)
		this.props.history.push('/car-details')
	}

	render() {
		return (
			<GridListTile key={this.props.key}>
				<StyledCard>
					<CardActionArea onClick={this.handleCardClicked}>
						<StyledTitle>{this.props.title}</StyledTitle>
						<StyledCardMediaSmall
							image={this.props.image}
							title={this.props.title}
						/>
					</CardActionArea>
					<StyledCardActions>
						{
							this.props.price ? <StyledPriceLayout>
								<StyledDollarSign>$</StyledDollarSign><StyledPrice>{this.props.price}</StyledPrice><StyledPerDay>/per day</StyledPerDay>
							</StyledPriceLayout> : null
						}
						<div>
							<Typography variant="body2">{this.props.trips}</Typography>
							{this.props.rate ? <RateStars rate={this.props.rate} /> : null}
							<Typography variant="body1" style={{ color: `${CustomTheme.palette.grey02}` }}>{this.props.distance}</Typography>
						</div>
					</StyledCardActions>
				</StyledCard>
			</GridListTile>
		);
	}

}

export default CarCardSmall;