import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import TextButton from '../../UI/Buttons/TextButton/TextButton';
import { palette } from '../../../theme';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { payoutData } from './payoutData';
import Payout from './Payouts/Payouts';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    indicator: {
        color: palette.green
    }
})

class TransactionHistory extends Component {

    state = {
        value: 0
    }

    handleChange = (_, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props

        let content = null

        switch (this.state.value) {
            case 0:
                content = <React.Fragment>
                    <Typography variant="body2" component="p" style={{ marginTop: '16px' }}>Payout Account</Typography>
                    <Typography variant="body2" component="p">*******2339</Typography>
                    <TextButton color={palette.green} style={{ marginBottom: '16px' }}>Change your account payout</TextButton>

                    {payoutData.map((item, index) => {
                        return (
                            <React.Fragment key={index}>
                                <Typography variant="body2" component="p" style={{ marginTop: '16px' }}>{item.date}</Typography>
                                {
                                    item.payouts.map((el, index) => {
                                        return (
                                            <Payout
                                                key={index}
                                                userName={el.userName}
                                                carMake={el.carMake}
                                                carYear={el.carYear}
                                                amount={el.amount}
                                                status={el.status}
                                                cardNumber={el.paymentAccount}
                                            />
                                        );
                                    })
                                }
                            </React.Fragment>
                        );
                    })}
                </React.Fragment>
                break;
            case 1:
                content = <React.Fragment>
                    {payoutData.map((item, index) => {
                        return (
                            <React.Fragment key={index}>
                                <Typography variant="body2" component="p" style={{ marginTop: '16px' }}>{item.date}</Typography>
                                {
                                    item.payouts.map((el, index) => {
                                        return (
                                            <Payout
                                                key={index}
                                                userName={el.userName}
                                                carMake={el.carMake}
                                                carYear={el.carYear}
                                                amount={el.amount}
                                                status={el.status}
                                                cardNumber={el.paymentAccount}
                                            />
                                        );
                                    })
                                }
                            </React.Fragment>
                        );
                    })}
                </React.Fragment>
                break;
            default:
                break;
        }
        return (
            <React.Fragment>
                <Tabs
                    value={this.state.value}
                    onChange={this.handleChange}
                    className={classes.indicator}
                >
                    <Tab label="UPCOMING PAYOUTS" />
                    <Tab label="COMPLETED PAYOUTS" />
                </Tabs>
                {content}
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(TransactionHistory)