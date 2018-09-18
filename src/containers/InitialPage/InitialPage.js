import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import { StyledPrimaryButton, } from '../../components/Buttons/styles';
import { StyledGrid, 
         StyledContainer, 
         StyledLeftLayout, 
         StyledTitle, 
         StyledTitleSpan,
         StyledForm,
         StyledInputLabel,
         StyledDateContainer,
         StyledDateContainerItemOne,
         StyledDateContainerItemTwo,
         StyledButtoContainer,
         StyledNativeTextField,
         StyledNativeSelect } from './styles';


const InitialPage = () => {
    return (
        <React.Fragment>
            <Grid container spacing={0}>
            <Grid item xs={12} sm={12} md={6}>
                <StyledLeftLayout>
                    <div>
                        <StyledTitle>Search and <StyledTitleSpan>rent</StyledTitleSpan> thousands of high end vehicles in all of Florida.</StyledTitle>
                    </div>
                    <StyledForm>
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
                                <FormControl fullWidth>
                                    <StyledInputLabel shrink htmlFor="age-label-placeholder">
                                        From
                                    </StyledInputLabel>
                                    <StyledNativeSelect
                                        input={<Input name="age" id="age-label-placeholder"/>}
                                        displayEmpty
                                        name="age"
                                    >
                                        <option value="">mm/dd/yy</option>
                                        <option value={10}>Ten</option>
                                        <option value={20}>Twenty</option>
                                        <option value={30}>Thirty</option>
                                    </StyledNativeSelect>
                                </FormControl>
                            </StyledDateContainerItemOne>
                            <StyledDateContainerItemTwo>
                                <FormControl fullWidth>
                                    <StyledInputLabel shrink htmlFor="age-label-placeholder">
                                        Until
                                    </StyledInputLabel>
                                    <StyledNativeSelect
                                        input={<Input name="age" id="age-label-placeholder" />}
                                        displayEmpty
                                        name="age"
                                    >
                                        <option value="">mm/dd/yy</option>
                                        <option value={10}>Ten</option>
                                        <option value={20}>Twenty</option>
                                        <option value={30}>Thirty</option>
                                    </StyledNativeSelect>
                                </FormControl>
                            </StyledDateContainerItemTwo>
                        </StyledDateContainer>
                        <StyledButtoContainer>
                            <StyledPrimaryButton>Search</StyledPrimaryButton>
                        </StyledButtoContainer>
                    </StyledForm>
                </StyledLeftLayout>
            </Grid>
                <StyledGrid item xs={12} sm={12} md={6}>
                    <StyledContainer>
                    </StyledContainer>
                </StyledGrid>
            </Grid>
        </React.Fragment>
    );
};


InitialPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default InitialPage;