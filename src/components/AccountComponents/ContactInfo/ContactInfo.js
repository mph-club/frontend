import React from 'react';
import { StyledStepsContainer } from './styles';
import Typography from '@material-ui/core/Typography';
import TextButton from '../../UI/Buttons/TextButton/TextButton';
import { palette, space } from '../../../theme';
import { Divider } from '@material-ui/core';

const ContactInfo = () => {

    return (
        <React.Fragment>
            <Typography variant="subheading" component="p" style={{ fontWeight: 400, color: palette.grey02, marginTop: space[2] }}>EMAIL</Typography>
            <StyledStepsContainer>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="body1" component="p" style={{ fontWeight: 400 }}>mikelong.corportation@gmail.com</Typography>
                </div>
                <div>
                    <TextButton color={palette.green}>Change</TextButton>
                </div>
            </StyledStepsContainer>
            <Divider />
            <Typography variant="subheading" component="p" style={{ fontWeight: 400, color: palette.grey02, marginTop: space[2] }}>PHONE NUMBER</Typography>
            <StyledStepsContainer>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="body1" component="p" style={{ fontWeight: 400 }}>786 897-2343</Typography>
                </div>
                <div>
                    <TextButton color={palette.green}>Change</TextButton>
                </div>
            </StyledStepsContainer>
            <Divider />
            <Typography variant="subheading" component="p" style={{ fontWeight: 400, color: palette.grey02, marginTop: space[2] }}>PASSWORD</Typography>
            <StyledStepsContainer>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="body1" component="p" style={{ fontWeight: 400 }}>*********</Typography>
                </div>
                <div>
                    <TextButton color={palette.green}>Change</TextButton>
                </div>
            </StyledStepsContainer>
            <Divider />
        </React.Fragment>
    );
}

export default ContactInfo