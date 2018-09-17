import React from 'react';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import TextField from '@material-ui/core/TextField';
import classes from './InitialPage.css';

const InitialPage = () => {
    return (
        <React.Fragment>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={12} md={6}>
                    <div className={classes.letfLayout}>
                        <div>
                            <div>
                                <h1 className={classes.title}>Search and <span className={classes.span}>rent</span> thousands of high end vehicles in all of Florida.</h1>
                            </div>
                            <form className={classes.form}>
                                <TextField
                                    fullWidth
                                    className = {classes.NativeTextField}
                                    placeholder="Enter a city, airport, or address in FL"
                                    label="Where"
                                    id="bootstrap-input"

                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                />

                                <div style={{display: 'flex'}}>
                                    <div className={classes.DateContainer}>
                                        <FormControl fullWidth>
                                            <InputLabel className={classes.inputLabel} shrink htmlFor="age-label-placeholder">From</InputLabel>
                                            <NativeSelect
                                                input={<Input name="age" id="age-label-placeholder" />}
                                                className={classes.NativeSelect}
                                                displayEmpty
                                                name="age"
                                            >
                                                <option value="">mm/dd/yy</option>
                                                <option value={10}>Ten</option>
                                                <option value={20}>Twenty</option>
                                                <option value={30}>Thirty</option>
                                            </NativeSelect>
                                        </FormControl>
                                    </div>
                                    <div className={[classes.DateContainer,classes.DateContainerTwo].join(' ')}>
                                        <FormControl fullWidth>
                                            <InputLabel className={classes.inputLabel} shrink htmlFor="age-label-placeholder">Until</InputLabel>
                                            <NativeSelect
                                                input={<Input name="age" id="age-label-placeholder" />}
                                                className={classes.NativeSelect}
                                                displayEmpty
                                                name="age"
                                            >
                                                <option value="">mm/dd/yy</option>
                                                <option value={10}>Ten</option>
                                                <option value={20}>Twenty</option>
                                                <option value={30}>Thirty</option>
                                            </NativeSelect>
                                        </FormControl>
                                    </div>
                                </div>
                                <div className={classes.buttonContainer}>
                                    <PrimaryButton>Search</PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </Grid>
                <Grid className ={classes.imageGridContainer} item xs={12} sm={12} md={6}>
                    <div className={classes.imageContainer}/>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default InitialPage;