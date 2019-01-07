import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

import {
    StyleButton,
    StyledPaper,
    StyledSlantedDivider,
    ExternalContainer,
    SearchContainer,
    ButtonContainer
} from './styles';
import { hours } from '../../../shared/constants';
import InputSearchBar from './InputSearchBar/InputSearchBar';
import { palette } from '../../../theme';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const getDates = () => {
    var today = new Date();
    var dd = today.getDate() + 1;
    var end = dd + 1
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd
    }

    if (end < 10) {
        end = '0' + end
    }

    if (mm < 10) {
        mm = '0' + mm
    }

    return {
        startDate: yyyy + '-' + mm + '-' + dd,
        endDate: yyyy + '-' + mm + '-' + end
    }
}

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        latitude: '',
        longitude: '',
        isGeocoding: false,
        address: '',
        startDate: getDates().startDate,
        startTime: 10,
        endDate: getDates().endDate,
        endTime: 10
    }

    handleSubmit = (event) => {

        const queryItems = {
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            startDate: this.state.startDate,
            startTime: this.state.startTime,
            endDate: this.state.endDate,
            endTime: this.state.endTime
        }

        const parameters = Object.keys(queryItems)
            .filter(key => (queryItems[key] !== ''))
            .map((key, index) => (index === 0) ? '?' + key + '=' + queryItems[key] : '&' + key + '=' + queryItems[key])
            .reduce((prev = '', current) => prev + current)

        event.preventDefault();
        this.props.history.push({
            pathname: '/filter',
            search: parameters
        })
    }

    handleInputChange = address => {
        this.setState({
            address,
            latitude: null,
            longitude: null,
            errorMessage: '',
        });
    };

    handleInputCloseClick = () => {
        this.setState({
            address: '',
            latitude: null,
            longitude: null,
        });
    };

    handleInputSelect = selected => {
        this.setState({ isGeocoding: true, address: selected });
        geocodeByAddress(selected)
            .then(res => getLatLng(res[0]))
            .then(({ lat, lng }) => {
                this.setState({
                    latitude: lat,
                    longitude: lng,
                    isGeocoding: false,
                });
            })
            .catch(error => {
                this.setState({ isGeocoding: false });
            });
    };

    handleOnChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <ExternalContainer>
                    <StyledPaper>
                        <SearchContainer>
                            <FormLabel style={{ fontWeight: 600 }}>Where</FormLabel>
                            <InputSearchBar
                                address={this.state.address}
                                handleChange={this.handleInputChange}
                                handleSelect={this.handleInputSelect}
                                handleCloseClick={this.handleInputCloseClick}
                            />
                        </SearchContainer>
                        <StyledSlantedDivider />
                        <FormControl>
                            <FormLabel style={{ fontWeight: 600 }}>Trip start</FormLabel>
                            <div style={{ display: 'flex' }}>
                                <TextField
                                    id="startDate-searchBarTxt-id"
                                    type="date"
                                    defaultValue={getDates().startDate}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    name='startDate'
                                    InputProps={{
                                        disableUnderline: true
                                    }}
                                    onChange={this.handleOnChange}
                                />
                                <TextField
                                    id="startTime-searchBarSelect-id"
                                    select
                                    defaultValue='10'
                                    SelectProps={{
                                        native: true
                                    }}
                                    name='startTime'
                                    InputProps={{
                                        disableUnderline: true
                                    }}
                                >{hours.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}</TextField>
                            </div>
                        </FormControl>
                        <StyledSlantedDivider />
                        <FormControl>
                            <FormLabel style={{ fontWeight: 600 }}>Trip end</FormLabel>
                            <div style={{ display: 'flex' }}>
                                <TextField
                                    id="endDate-searchBarInput-id"
                                    type="date"
                                    defaultValue={getDates().endDate}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    name='endDate'
                                    InputProps={{
                                        disableUnderline: true
                                    }}
                                />
                                <TextField
                                    id="endTime-searchBarSelect-id"
                                    select
                                    defaultValue='10'
                                    SelectProps={{
                                        native: true
                                    }}
                                    name='endTime'
                                    InputProps={{
                                        disableUnderline: true
                                    }}
                                >{hours.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}</TextField>
                            </div>
                        </FormControl>
                    </StyledPaper>
                    <ButtonContainer>
                        <StyleButton type="submit" backgroundcolor={palette.green} hovercolor={palette.greenSecondary}>Search</StyleButton>
                    </ButtonContainer>
                </ExternalContainer>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        location: state.filter.location,
        startDate: state.filter.startDate,
        endDate: state.filter.endDate
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearchTouched: (location, startDate, endDate) => { dispatch(actions.onFilterBySearchBar(location, startDate, endDate)) }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar))