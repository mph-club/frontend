import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';

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

class CarCard extends PureComponent {

	handleCardClicked = () => {
		this.props.history.push('/car-details/' + this.props.id)
	}

	render() {
		return (
			<GridListTile key={this.props.key}>
				<StyledCard>
					<CardActionArea onClick={this.handleCardClicked}>
						<StyledTitle>{this.props.title}</StyledTitle>
						<StyledCardMedia
							image={this.props.image}
							title={this.props.title}
						/>
					</CardActionArea>
					<StyledCardActions>
						{this.props.price ?
							<StyledPriceLayout>
								<StyledDollarSign>$</StyledDollarSign>
								<StyledPrice>{this.props.price}</StyledPrice>
								<StyledPerDay>/per day</StyledPerDay>
							</StyledPriceLayout> : null}
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

export default withRouter(CarCard);