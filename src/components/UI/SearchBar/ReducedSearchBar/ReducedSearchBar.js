import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import * as actions from '../../../../store/actions/index';

import { hours } from '../../../../shared/constants';
import { palette } from '../../../../theme';
import InputSearchBar from '../InputSearchBar/InputSearchBar';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import {
    StyledForm,
    StyleButton,
    StyledPaper,
    Container,
    ButtonContainer
} from './styles';

class ReduceSearchBar extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        latitude: '',
        longitude: '',
        address: '',
        isGeocoding: false
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.history.push('/filter')
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

    render() {

        var today = new Date();
        var dd = today.getDate() + 1;
        var endDate = dd + 1
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();

        if (dd < 10) {
            dd = '0' + dd
        }

        if (endDate < 10) {
            endDate = '0' + endDate
        }

        if (mm < 10) {
            mm = '0' + mm
        }

        return (
            <StyledForm autoComplete="off" onSubmit={event => this.handleSubmit(event)}>
                <StyledPaper>
                    <FormControl margin='normal' fullWidth>
                        <FormLabel style={{ fontWeight: 600, marginBottom: '8px' }}>Where</FormLabel>
                        <InputSearchBar
                            address={this.state.address}
                            handleChange={this.handleInputChange}
                            handleSelect={this.handleInputSelect}
                            handleCloseClick={this.handleInputCloseClick}
                        />
                    </FormControl>
                    <Divider />
                    <FormControl fullWidth margin='normal'>
                        <FormLabel style={{ fontWeight: 600 }}>Trip start</FormLabel>
                        <Container>
                            <TextField
                                id="searchPage-fromTextField"
                                type="date"
                                defaultValue={yyyy + '-' + mm + '-' + dd}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                InputProps={{
                                    disableUnderline: true
                                }}
                            />
                            <TextField
                                id="searchPage-pickupTime"
                                select
                                defaultValue='10'
                                SelectProps={{
                                    native: true
                                }}
                                InputProps={{
                                    disableUnderline: true
                                }}
                            >{hours.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}</TextField>
                        </Container>
                    </FormControl>
                    <Divider />
                    <FormControl fullWidth margin='normal'>
                        <FormLabel style={{ fontWeight: 600 }}>Trip end</FormLabel>
                        <Container>
                            <TextField
                                id="searchPage-untilTextField"
                                type="date"
                                defaultValue={yyyy + '-' + mm + '-' + endDate}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                InputProps={{
                                    disableUnderline: true
                                }}
                            />
                            <TextField
                                id="searchPage-returnTime"
                                select
                                defaultValue='10'
                                SelectProps={{
                                    native: true
                                }}
                                InputProps={{
                                    disableUnderline: true
                                }}
                            >{hours.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}</TextField>
                        </Container>
                    </FormControl>
                    <ButtonContainer>
                        <StyleButton type='submit' backgroundcolor={palette.green} hovercolor={palette.greenSecondary} >Search</StyleButton>
                    </ButtonContainer>
                </StyledPaper>
            </StyledForm>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearchTouched: (location, startDate, endDate) => { dispatch(actions.onFilterBySearchBar(location, startDate, endDate)) }
    }
}

export default withRouter(connect(null, mapDispatchToProps)(ReduceSearchBar))