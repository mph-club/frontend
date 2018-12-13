import React from 'react';
import { connect } from 'react-redux'

import UserSummary from './UserSummary/UserSummary';
import Divider from '@material-ui/core/Divider';

import {
    FooterContainer
} from './styles';
import Footer from '../Navigation/Footer/Footer';

const UserDetails = () => {
    return (
        <React.Fragment>
            <UserSummary />
            <Divider />
            <Divider />
            <FooterContainer>
                <Footer/>
            </FooterContainer>
        </React.Fragment>
    );
}

const mapStateToProps = state => {
    return {

    }
}

export default connect(mapStateToProps)(UserDetails)