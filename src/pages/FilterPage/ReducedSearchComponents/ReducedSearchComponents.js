import React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import StyledPrimaryButton from '../../../components/UI/Buttons/PrimaryButton/PrimaryButton';

import {
    StyledForm
} from './styles';

const ReducedSearchComponents = (props) => {

    const hours = [{
        value: '6',
        label: '6:00 am'
    }, {
        value: '7',
        label: '7:00 am'
    }, {
        value: '8',
        label: '8:00 am'
    }, {
        value: '9',
        label: '9:00 am'
    }, {
        value: '10',
        label: '10:00 am'
    }, {
        value: '11',
        label: '11:00 am'
    }, {
        value: '12',
        label: '12:00 m'
    }, {
        value: '13',
        label: '1:00 pm'
    }, {
        value: '14',
        label: '2:00 pm'
    }, {
        value: '15',
        label: '3:00 pm'
    }, {
        value: '16',
        label: '4:00 pm'
    }, {
        value: '17',
        label: '5:00 pm'
    }, {
        value: '18',
        label: '6:00 pm'
    }, {
        value: '19',
        label: '7:00 pm'
    }, {
        value: '20',
        label: '8:00 pm'
    }];

    return (
        <React.Fragment>
            <StyledForm>
                <div style={{ display: 'block' }}>
                    <Typography variant="body1" component="p">Where</Typography>
                    <TextField
                        id="searchPage-search"
                        type="search"
                        placeholder="Enter a city in FL"
                        InputProps={{
                            disableUnderline: true
                        }}
                        style={{ width: '200px' }}
                    />
                </div>
                <div style={{ display: 'block' }}>
                    <Typography variant="body1" component="p">Pickup</Typography>
                    <div style={{ display: 'flex' }}>
                        <TextField
                            id="searchPage-fromTextField"
                            type="date"
                            defaultValue="2017-05-24"
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
                    </div>

                </div>
                <div style={{ display: 'block' }}>
                    <Typography variant="body1" component="p">Return</Typography>
                    <div style={{ display: 'flex' }}>
                        <TextField
                            id="searchPage-fromTextField"
                            type="date"
                            defaultValue="2017-05-24"
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
                    </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <StyledPrimaryButton type="submit">Search</StyledPrimaryButton>
                </div>
                <Divider />
            </StyledForm>
        </React.Fragment>
    );
}

export default ReducedSearchComponents
