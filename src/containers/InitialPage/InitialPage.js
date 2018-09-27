import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { StyledButton, } from '../../components/UI/Buttons/PrimaryButton/styles';
import {
    StyledGrid,
    StyledContainer,
    StyledLeftLayout,
    StyledTitle,
    StyledTitleSpan,
    StyledDateForm,
    StyledFormContainer,
    StyledTextField,
    StyledDateContainer,
    StyledDateContainerItemOne,
    StyledDateContainerItemTwo,
    StyledButtonContainer,
    StyledNativeTextField
} from './styles';


class InitialPage extends Component {

    handleSearch = () => {
        this.props.history.push('/search-page')
    }

    render() {
        return (
            <React.Fragment>
                <Grid container spacing={0} style={{marginTop: '64px'}}>
                    <Grid item xs={12} sm={12} md={6}>
                        <StyledLeftLayout>
                            <div>
                                <StyledTitle>Search and <StyledTitleSpan>rent</StyledTitleSpan> thousands of high end vehicles in all of Florida.</StyledTitle>
                            </div>
                            <StyledFormContainer>
                                <form>
                                    <StyledNativeTextField
                                        fullWidth
                                        placeholder="Enter a city, airport, or address in FL"
                                        label="Where"
                                        id="bootstrap-input"
                                        InputProps={{
                                            disableUnderline: true
                                        }}
                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                    />
                                </form>
                                <StyledDateContainer>
                                    <StyledDateContainerItemOne>
                                        <StyledDateForm noValidate fullWidth>
                                            <StyledTextField
                                                id="fromTextField"
                                                label="From"
                                                type="date"
                                                defaultValue="2017-05-24"
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                        </StyledDateForm>
                                    </StyledDateContainerItemOne>
                                    <StyledDateContainerItemTwo>
                                        <StyledDateForm noValidate fullWidth>
                                            <StyledTextField
                                                id="untilTextField"
                                                label="Until"
                                                type="date"
                                                defaultValue="2017-05-24"
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                        </StyledDateForm>
                                    </StyledDateContainerItemTwo>
                                </StyledDateContainer>
                                <StyledButtonContainer>
                                    <StyledButton onClick={this.handleSearch} >Search</StyledButton>
                                </StyledButtonContainer>
                            </StyledFormContainer>
                        </StyledLeftLayout>
                    </Grid>
                    <StyledGrid item xs={12} sm={12} md={6}>
                        <StyledContainer>
                        </StyledContainer>
                    </StyledGrid>
                </Grid>
            </React.Fragment>
        );
    }
};

export default InitialPage;