import React, { Component } from 'react';
import {
    StyledHeaderContainer,
    StyledFilterContainer,
    StyledExternalContainer,
    StyledRightContainer,
    StyledSearchBarContainer,
    StyledReducedComponents,
    StyledSlantedDivider,
    StyledMidComponents,
    StyledReducedSearchContainer,
    StyledBackdrop
} from './styles';
import Typography from '@material-ui/core/Typography';
import SearchBar from '../../components/UI/SearchBar/SearchBar';
import Divider from '@material-ui/core/Divider';
import 'react-input-range/lib/css/index.css';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { space, palette } from '../../theme';
import { carTypes, sortOptions, vehicleMakes } from '../../tools/constants';
import tileData from '../CarsCollection/tileData';
import GridList from '@material-ui/core/GridList';
import CarCardSmall from '../../components/UI/CarCard/CarCardSmall';
import LocationIcon from '@material-ui/icons/LocationCity';
import FilterIcon from '@material-ui/icons/Filter';
import Button from '@material-ui/core/Button';
import ReducedSearchComponents from './ReducedSearchComponents/ReducedSearchComponents';
import SelectTextField from '../../components/UI/FormElements/SelectTextField/SelectTextField';
import RangeSlider from '../../components/UI/FormElements/RangeSlider/RangeSlider';

class FilterPage extends Component {

    state = {
        results: 0,
        vehicleMake: "",
        value5: {
            min: 30,
            max: 200
        },
        reducedSearchBar: false
    }

    handleChange = (event) => {
        this.setState({ sliderValue: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    toggleDrawer = () => {

        const open = this.state.reducedSearchBar
        this.setState({
            reducedSearchBar: !open
        });
    };

    handleCard = (cardId) => {
        this.setState({ cardIdSelected: cardId });
        this.props.history.push('/car-details');
    }


    render() {

        return (
            <React.Fragment>
                <StyledHeaderContainer>
                    <StyledSearchBarContainer>
                        <SearchBar />
                    </StyledSearchBarContainer>
                    <StyledMidComponents>
                        <Button style={{ display: 'block', width: '100%', height: '60px' }} onClick={this.toggleDrawer}>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <LocationIcon style={{ marginRight: space[2] }} />
                                <Typography variant="body2" color="primary" component="h3">Current location</Typography>
                            </div>
                            <div style={{ textAlign: 'center', marginBottom: space[1] }}>
                                <Typography variant="body1" color="primary" component="p">Oct 17, 2018 10:00 am - Oct 20, 2018 10:00 am</Typography>
                            </div>
                        </Button>
                    </StyledMidComponents>
                    <StyledReducedComponents>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Button style={{ width: '50%', height: '60px' }} onClick={this.toggleDrawer}>
                                <LocationIcon style={{ marginRight: space[2] }} />
                                <Typography variant="body2" color="primary" component="h3">Current location</Typography>
                            </Button>
                            <StyledSlantedDivider />
                            <Button style={{ width: '50%', height: '60px' }} >
                                <FilterIcon style={{ marginRight: space[2] }} />
                                <Typography variant="body2" color="primary" component="h3">Filters</Typography>
                            </Button>
                        </div>
                    </StyledReducedComponents>

                    {this.state.reducedSearchBar ?
                        <React.Fragment>
                            <StyledReducedSearchContainer>
                                <ReducedSearchComponents

                                />
                            </StyledReducedSearchContainer>
                            <StyledBackdrop
                                open={this.state.reducedSearchBar}
                                onClick={this.toggleDrawer} />
                        </React.Fragment> :
                        null}

                </StyledHeaderContainer>

                <StyledExternalContainer>
                    <StyledFilterContainer>
                        <div style={{ textAlign: 'center', marginBottom: space[3] }}>
                            <Typography vairant="body1" component="p" style={{ fontWeight: 600 }}>{this.state.results > 100 ? '100+' : this.state.results} results</Typography>
                        </div>
                        <Divider />
                        <form onSubmit={this.handleSubmit}>
                            <div style={{ marginTop: space[4] }}>
                                <SelectTextField
                                    label="Sort by"
                                    id="outlined-filterPage-sortOptions"
                                    fullWidth
                                    select
                                    variant="outlined"
                                    SelectProps={{
                                        native: true
                                    }}
                                >
                                    {sortOptions.map(option => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </SelectTextField>
                            </div>
                            <div style={{ marginTop: space[4] }}>
                                <Typography variant="body1" color="primary" component="p" style={{ marginBottom: space[4], fontWeight: 600 }}>Price</Typography>
                                <RangeSlider
                                    color={palette.blue}
                                    label="Price"
                                    draggableTrack
                                    maxValue={250}
                                    minValue={10}
                                    onChange={value => this.setState({ value5: value })}
                                    onChangeComplete={value => console.log(value)}
                                    value={this.state.value5}
                                />
                            </div>
                            <div style={{ marginTop: space[5] }}>
                                <Typography variant="body1" color="primary" component="p" style={{ marginBottom: space[1], fontWeight: 600 }}>Delivery</Typography>
                                <FormControlLabel
                                    value="recommended"
                                    control={<Radio color="primary" />}
                                    onChange={this.handleChange}
                                    checked={this.state.value === "recommended" ? true : false}
                                    label="Get the car delivery directly to you." />
                            </div>
                            <div style={{ marginTop: space[4] }}>
                                <SelectTextField
                                    label="Vehicle type"
                                    id="outlined-filterPage-sortOptions"
                                    fullWidth
                                    select
                                    variant="outlined"
                                    SelectProps={{
                                        native: true
                                    }}
                                >
                                    {carTypes.map(option => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </SelectTextField>
                            </div>
                            <div style={{ marginTop: space[4] }}>
                                <SelectTextField
                                    label="Vehicle make"
                                    id="outlined-filterPage-sortOptions"
                                    fullWidth
                                    select
                                    variant="outlined"
                                    onChange={this.handleChange}
                                    SelectProps={{
                                        native: true
                                    }}
                                >
                                    {vehicleMakes.map(option => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </SelectTextField>
                            </div>
                        </form>
                    </StyledFilterContainer>
                    <StyledRightContainer>
                        <GridList spacing={3}>
                            {tileData.map(tile => (
                                <CarCardSmall
                                    key={tile.id}
                                    image={tile.img}
                                    title={tile.title}
                                    price={tile.price}
                                    rate={tile.rate}
                                    handleCard={() => this.handleCard(tile.id)} />
                            ))}
                        </GridList>
                    </StyledRightContainer>
                </StyledExternalContainer>
            </React.Fragment>
        );
    }
}

export default FilterPage