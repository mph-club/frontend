import React, { Component } from 'react';
import {
    StyledSearchContainer,
    StyledFilterContainer,
    StyledExternalContainer,
    StyledRightContainer
} from './styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import SearchBar from '../../components/UI/SearchBar/SearchBar';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { space } from '../../theme';
import { carTypes, sortOptions, vehicleMakes } from '../../tools/constants';
import tileData from '../CarsCollection/tileData';
import GridList from '@material-ui/core/GridList';
import CarCard from '../../components/UI/CarCard/CarCard';

class FilterPage extends Component {

    state = {
        results: 0,
        vehicleMake: "",
        value5: {
            min: 30,
            max: 200
        }
    }

    handleChange = (event, value) => {
        this.setState({ sliderValue: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }


    render() {
        return (
            <React.Fragment>
                <StyledSearchContainer>
                    <div style={{ width: '900px', height: '70px', margin: '12px auto' }}>
                        <SearchBar />
                    </div>
                </StyledSearchContainer>
                <StyledExternalContainer>
                    <StyledFilterContainer>
                        <div style={{ textAlign: 'center' }}>
                            <Typography>{this.state.results > 100 ? '100+' : this.state.results} results</Typography>
                        </div>
                        <Divider />
                        <form onSubmit={this.handleSubmit}>
                            <div style={{ marginTop: space[4] }}>
                                <Typography variant="body2" color="primary" component="p">Sort by</Typography>
                                <TextField
                                    id="outlined-filterPage-sortOptions"
                                    fullWidth
                                    select
                                    variant="outlined"
                                    SelectProps={{
                                        native: true
                                    }}
                                >{sortOptions.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}</TextField>
                            </div>
                            <div style={{ marginTop: space[4] }}>
                                <Typography variant="body2" color="primary" component="p" style={{ marginBottom: space[3] }}>Price</Typography>
                                <InputRange
                                    draggableTrack
                                    maxValue={250}
                                    minValue={10}
                                    onChange={value => this.setState({ value5: value })}
                                    onChangeComplete={value => console.log(value)}
                                    value={this.state.value5}
                                />
                            </div>
                            <div style={{ marginTop: space[4] }}>
                                <Typography variant="body2" color="primary" component="p">Delivery</Typography>
                                <FormControlLabel
                                    value="recommended"
                                    control={<Radio color="primary" />}
                                    onChange={this.handleChange}
                                    checked={this.state.value === "recommended" ? true : false}
                                    label="Get the car delivery directly to you." />
                            </div>
                            <div style={{ marginTop: space[4] }}>
                                <Typography variant="body2" color="primary" component="p">Vehicle Type</Typography>
                                <TextField
                                    id="outlined-filterPage-sortOptions"
                                    fullWidth
                                    select
                                    variant="outlined"
                                    SelectProps={{
                                        native: true
                                    }}
                                >{carTypes.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}</TextField>
                            </div>
                            <div style={{ marginTop: space[4] }}>
                                <Typography variant="body2" color="primary" component="p">Vehicle Make</Typography>
                                <TextField
                                    id="outlined-filterPage-sortOptions"
                                    fullWidth
                                    select
                                    variant="outlined"
                                    onChange={this.handleChange}
                                    SelectProps={{
                                        native: true
                                    }}
                                >{vehicleMakes.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}</TextField>
                            </div>
                        </form>
                    </StyledFilterContainer>
                    <StyledRightContainer>
                                <GridList spacing={3}>
                                    {tileData.map(tile => (
                                        <CarCard
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