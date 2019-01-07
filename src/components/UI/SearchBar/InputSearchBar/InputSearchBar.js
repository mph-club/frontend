import React, { Fragment } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import {
    StyledIconButton,
    InternalContainer,
    SuggestionsContainer
} from './styles';
import ClearIcon from '@material-ui/icons/Clear';
import TextField from '@material-ui/core/TextField';

class InputSearchBar extends React.Component {

    state = {
        errorMessage: '',
    }

    handleError = (status, clearSuggestions) => {
        this.setState({ errorMessage: status }, () => {
            clearSuggestions();
        });
    };

    render() {
        const { errorMessage } = this.state;

        return (
            <div>
                <PlacesAutocomplete
                    onChange={this.props.handleChange}
                    value={this.props.address}
                    onSelect={this.props.handleSelect}
                    onError={this.handleError}
                    shouldFetchSuggestions={this.props.address.length > 2}
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
                                    {this.props.address.length > 0 ?
                                        <StyledIconButton color="inherit" aria-label="Clear" onClick={this.props.handleCloseClick}>
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
                                                        <strong style={{ backgroundColor: '#fff'}}>
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