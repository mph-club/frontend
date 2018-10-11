import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { StyledButton, } from '../../components/UI/Buttons/PrimaryButton/styles';
import {
    StyledGrid,
    StyledContainer,
    StyledLeftLayout,
    StyledTitle,
    StyledTitleSpan,
    StyledFormContainer,
    StyledTextField,
    StyledDateContainer,
    StyledDateContainerItemOne,
    StyledDateContainerItemTwo,
    StyledButtonContainer,
    StyledNativeTextField
} from './styles';
import Footer from '../../components/Navigation/Footer/Footer';


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
                                <StyledDateContainer>
                                    <StyledDateContainerItemOne>
                                            <StyledTextField
                                                id="fromTextField"
                                                label="From"
                                                type="date"
                                                defaultValue="2017-05-24"
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                    </StyledDateContainerItemOne>
                                    <StyledDateContainerItemTwo>
                                            <StyledTextField
                                                id="untilTextField"
                                                label="Until"
                                                type="date"
                                                defaultValue="2017-05-24"
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                    </StyledDateContainerItemTwo>
                                </StyledDateContainer>
                                <StyledButtonContainer>
                                    <StyledButton onClick={this.handleSearch} >Search</StyledButton>
                                </StyledButtonContainer>
                                </form>
                            </StyledFormContainer>
                        </StyledLeftLayout>
                    </Grid>
                    <StyledGrid item xs={12} sm={12} md={6}>
                        <StyledContainer>
                        </StyledContainer>
                    </StyledGrid>
                </Grid>
                <Footer/>
            </React.Fragment>
        );
    }
};

export default InitialPage;