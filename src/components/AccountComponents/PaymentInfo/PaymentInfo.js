import React, {Component} from 'react';
import { StyledStepsContainer } from './styles';
import Typography from '@material-ui/core/Typography';
import TextButton from '../../UI/Buttons/TextButton/TextButton';
import { palette, space } from '../../../theme';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Divider } from '@material-ui/core';

class PaymentInfo extends Component {

    state = {
        value: 0
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        return (
            <React.Fragment>
                <Tabs value={this.state.value} onChange={this.handleChange}>
                    <Tab label="UPCOMING PAYOUTS" />
                    <Tab label="COMPLETED PAYOUTS" />
                </Tabs>
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
}

export default PaymentInfo