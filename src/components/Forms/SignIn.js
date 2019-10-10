import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import '@material-ui/icons';
import ForgotenPaswd from './ForgotenPaswd';
import SignUp from './SignUp';
import styles from '../../Assets/Styles/styles'

    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regNoRegex = /(^[A-Z]{1}[0-9]{2}CS[0-9]{5}$)/i;

    const initialState ={
            emial: "",
            regNo: "",
            emailError: "",
            regNoError: ""
    }
    
class SignIn extends Component {
    state = initialState

    handleChange = e => {
    const isCheckbox = e.target.type === "checkbox";
    this.setState({ 
        [e.target.id]: isCheckbox
        ? e.target.checked
        : e.target.value
    })
    }

    // form validator
    validate = () => {
       let emailError = "";
       let regNoError =  "";
       
       if((this.state.emial || this.state.password) === null){
           emailError = 'Required';
           regNoError = 'Required';
       }
       
       if(!emailRegex.test(this.state.email)){
        emailError = 'Provide valid Email Address';
       }
       if(!regNoRegex.test(this.state.regNo)){
        regNoError = "Please valid Registration No.";
       }

       if(emailError || regNoError){
           this.setState({ emailError, regNoError });
           return false;
       }
           return true;
    };

    handleClick = (e) => {
        e.preventDefault();
        const isValid = this.validate();
        if (isValid){
        window.location = "/Home" 
        this.setState({initialState})
        }  
    }

    render() {
    const { classes } = this.props;

    return (
    <div className = { classes.wrappers } >
    <Card className = { classes.card } >
    <CardContent >
    <Typography variant = "h5"
    className = { classes.headers } >
    Welcome !
    </Typography>
    <form >
    <TextField 
    id = "email"
    type = "email"
    label = "Email"
    className = { classes.textField }
    margin = "normal"
    variant = "outlined"
    value = { this.state.email }
    onChange = { this.handleChange }
    /> 
    <div className={classes.error}>{this.state.emailError}</div>
    <TextField 
    id = "regNo"
    type = "password"
    label = "Registration Number"
    className = { classes.textField }
    margin = "normal"
    variant = "outlined"
    value = { this.state.password }
    onChange = { this.handleChange }
    /> 
    <div className={classes.error}>{this.state.regNoError}</div>
    </form> 
    </CardContent> 
    <Button onClick = { this.handleClick }
    variant = "contained"
    className = { classes.bullet }
    fullWidth
    required >
    Sign in 
    </Button> 
    <ForgotenPaswd/>
    <SignUp / >
    </Card>   
    </div>
    );
    }
}
SignIn.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(SignIn)