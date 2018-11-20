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
    StyledDateContainer,
    StyledDateContainerItemOne,
    StyledDateContainerItemTwo,
    StyledButtonContainer
} from './styles';
import Footer from '../../components/Navigation/Footer/Footer';
import InputTextField from '../../components/UI/FormElements/InputTextField/InputTextField';
import SelectTextField from '../../components/UI/FormElements/SelectTextField/SelectTextField';
import { space } from '../../theme';


class InitialPage extends Component {

    handleSearch = () => {
        this.props.history.push('/filter')
    }

    render() {
        return (
            <React.Fragment>
                <Grid container spacing={0} style={{marginTop: space[4]}}>
                    <Grid item xs={12} sm={12} md={6}>
                        <StyledLeftLayout>
                            <div>
                                <StyledTitle>Search and <StyledTitleSpan>book</StyledTitleSpan> from a variety cars in all of Florida.</StyledTitle>
                            </div>
                            <StyledFormContainer>
                                <form>
                                    <InputTextField
                                        fullWidth
                                        id="outlined-full-width"
                                        placeholder="Enter a city, airport, or address in FL"
                                        label="Where"
                                        variant="outlined"
                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                    />
                                <StyledDateContainer>
                                    <StyledDateContainerItemOne>
                                        <SelectTextField
                                            fullWidth
                                            id="fromTextField"
                                            label="Trip start"
                                            type="date"
                                            defaultValue="2017-05-24"
                                            variant="outlined"
                                            margin="normal"
                                        />
                                    </StyledDateContainerItemOne>
                                    <StyledDateContainerItemTwo>
                                        <SelectTextField
                                            fullWidth
                                            id="untilTextField"
                                            label="Trip end"
                                            type="date"
                                            defaultValue="2017-05-24"
                                            variant="outlined"
                                            margin="normal"
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