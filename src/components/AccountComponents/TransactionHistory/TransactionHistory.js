import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import TextButton from '../../UI/Buttons/TextButton/TextButton';
import { palette, space } from '../../../theme';
import Tabs from '@material-ui/core/Tabs';
import { payoutData } from './payoutData';
import Payout from './Payouts/Payouts';
import { withStyles } from '@material-ui/core/styles';
import {StyledTab} from './styles';

const styles = theme => ({
    root: {
        color: palette.green
    },
    tabsIndicator: {
        backgroundColor: palette.green
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
                    <Typography variant="title" component="p" style={{ marginTop: `${space[4]}`, marginBottom: `${space[2]}` }}>Payout Account</Typography>
                    <Typography variant="body2" component="p">****2345</Typography>
                    <TextButton color={palette.green} style={{ marginBottom: '16px' }}>Change your payout account</TextButton>

                    {payoutData.map((item, index) => {
                        return (
                            <React.Fragment key={index}>
                                <Typography variant="headline" component="p" style={{ marginTop: space[4], marginBottom: `-${space[3]}`}}>{item.date}</Typography>
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
                                <Typography variant="headline" component="p" style={{ marginTop: '16px' }}>{item.date}</Typography>
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
                    classes={{ indicator: classes.tabsIndicator, root: classes.root }}
                >
                    <StyledTab label="UPCOMING PAYOUTS" />
                    <StyledTab label="COMPLETED PAYOUTS" />
                </Tabs>
                {content}
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(TransactionHistory)