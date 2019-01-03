import React, { Fragment } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import {
    StyledIconButton,
    InternalContainer,
    SuggestionsContainer
} from './styles';
import ClearIcon from '@material-ui/icons/Clear';
import TextField from '@material-ui/core/TextField';

class InputSearchBar extends React.Component {

    state = {
        address: '',
        errorMessage: '',
        latitude: null,
        longitude: null,
    }

    handleChange = address => {
        this.setState({
            address,
            latitude: null,
            longitude: null,
            errorMessage: '',
        });
    };

    handleSelect = selected => {
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
                console.log('error', error); // eslint-disable-line no-console
            });
    };

    handleCloseClick = () => {
        this.setState({
            address: '',
            latitude: null,
            longitude: null,
        });
    };

    handleError = (status, clearSuggestions) => {
        console.log('Error from Google Maps API', status); // eslint-disable-line no-console
        this.setState({ errorMessage: status }, () => {
            clearSuggestions();
        });
    };

    render() {
        const { address, errorMessage } = this.state;

        return (
            <div>
                <PlacesAutocomplete
                    onChange={this.handleChange}
                    value={address}
                    onSelect={this.handleSelect}
                    onError={this.handleError}
                    shouldFetchSuggestions={address.length > 2}
                >
                    {({ getInputProps, suggestions, getSuggestionItemProps }) => {
                        return (
                            <Fragment>
                                <InternalContainer>
                                    <TextField
                                        id='searchbar-txt-id'
                                        type="search"
                                        fullWidth
                                        placeholder="Enter a city in FL"
                                        InputProps={{
                                            disableUnderline: true
                                        }}
                                        {...getInputProps()}
                                    />
                                    {this.state.address.length > 0 ?
                                        <StyledIconButton color="inherit" aria-label="Clear" onClick={this.handleCloseClick}>
                                            <ClearIcon />
                                        </StyledIconButton> :
                                        null}
                                </InternalContainer>

                                {suggestions.length > 0 ?
                                        <SuggestionsContainer>
                                            {suggestions.map(suggestion => {
                                                return (
                                                    /* eslint-disable react/jsx-key */
                                                    <div {...getSuggestionItemProps(suggestion)}>
                                                        <strong>
                                                            {suggestion.formattedSuggestion.mainText}
                                                        </strong>{' '}
                                                        <small>
                                                            {suggestion.formattedSuggestion.secondaryText}
                                                        </small>
                                                    </div>
                                                );
                                                /* eslint-enable react/jsx-key */
                                            })}
                                        </SuggestionsContainer>
                                    : null}
                            </Fragment>
                        );
                    }}
                </PlacesAutocomplete>
                {errorMessage.length > 0 && (
                    <div>{this.state.errorMessage}</div>
                )}
            </div>
        );
    }
}

export default InputSearchBar;