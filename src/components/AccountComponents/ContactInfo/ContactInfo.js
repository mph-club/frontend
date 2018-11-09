import React from 'react';
import { StyledStepsContainer, StyledEmailWrapper } from './styles';
import Typography from '@material-ui/core/Typography';
import TextButton from '../../UI/Buttons/TextButton/TextButton';
import { palette, space } from '../../../theme';
import { Divider } from '@material-ui/core';
import Title from '../../UI/CustomTypography/Title/Title';

const ContactInfo = () => {

    return (
        <React.Fragment>
            <Title component="p" style={{ marginBottom: `${space[3]}`}}>EMAIL</Title>
            <StyledStepsContainer>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <StyledEmailWrapper 
                        variant="title" 
                        component="p" 
                    >
                        mikelong.corportation@gmail.com
                    </StyledEmailWrapper>
                </div>
                <div>
                    <TextButton color={palette.green}>Change</TextButton>
                </div>
            </StyledStepsContainer>
            <Divider />
            <Title component="p" style={{ marginBottom: `${space[3]}`, marginTop: `${space[4]}`}}>PHONE NUMBER</Title>
            <StyledStepsContainer>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="title" component="p" style={{fontWeight: 400}}>786-897-2343</Typography>
                </div>
                <div>
                    <TextButton color={palette.green}>Change</TextButton>
                </div>
            </StyledStepsContainer>
            <Divider />
            <StyledStepsContainer>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: `${space[3]}` }}>
                    <Typography variant="title" component="p" style={{ fontWeight: 400 }}>Password</Typography>
                </div>
                <div style={{marginTop: `${space[3]}`}}>
                    <TextButton color={palette.green}>Change</TextButton>
                </div>
            </StyledStepsContainer>
            <Divider />
        </React.Fragment>
    );
}

export default ContactInfo