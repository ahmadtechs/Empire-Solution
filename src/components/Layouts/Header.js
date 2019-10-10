import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import {AppBar,Toolbar,Typography} from '@material-ui/core';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import { fontWeight } from '@material-ui/system';
import Profile from '../Exercises/Profiles/Profile'
import Logout from '../Forms/LogOut'

const styles = theme => ({
    bodys:{
        background: 'white',
        color: '#5c94bd'
    },
    homeLogo:{
        fontSize: 36,
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    compName:{
        paddingTop: 15,
    },
})

class Header extends Component {
    render() {
    const { classes } = this.props;

    return (
    <AppBar position="static" >
    <Toolbar className={classes.bodys}>
    <AccountBalanceIcon className={classes.homeLogo}>AccountBalance</AccountBalanceIcon>
    <Typography variant="subtitle1" className={classes.compName}>
    Empires Solution
    </Typography>
    <Profile/>
    <Logout/>
    </Toolbar>
    </AppBar>
    );
    }
}
export default withStyles(styles)(Header)