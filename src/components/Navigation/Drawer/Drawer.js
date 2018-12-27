import React from 'react'
import { connect } from 'react-redux';
import * as actions from './../../../store/actions/index';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const RightDrawer = (props) => {
    return (
        <Drawer 
            anchor="right" 
            open={props.openDrawer} 
            onClose={() => props.onOpenDrawer(false)}
        >
            <List>
                <ListItem button key='listYourVehicle'>
                    <ListItemText primary='List Your Vehicle' />
                </ListItem>
                <Divider/>
                <ListItem button key='signIn'>
                    <ListItemText primary='Sign In' />
                </ListItem>
                <Divider/>
                <ListItem button key='createAccout'>
                    <ListItemText primary='Create Account' />
                </ListItem>
            </List>
        </Drawer>
    );
}

const mapStateToProps = state => {
    return {
        openDrawer: state.auth.openDrawer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onOpenDrawer: (open) => { dispatch(actions.openNavDrawer(open)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RightDrawer)