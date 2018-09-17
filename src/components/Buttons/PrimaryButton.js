import React from 'react';
import Button from '@material-ui/core/Button';
import classes from './PrimaryButton.css';

const StyledPrimaryButton = (props) => {
    return (
        <Button className={classes.styledPrimaryButton}>
            {props.children}
        </Button>
    );
};

export default StyledPrimaryButton