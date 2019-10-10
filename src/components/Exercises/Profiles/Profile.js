import React, {Component} from 'react';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import '../../Exercises/Announcements/EventStyles.css'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { withStyles } from '@material-ui/core';

const Styles = theme => ({
  openDrawer:{
    marginLeft: "auto",
    marginRight: -11,
},
AccountCircleIcon:{
  fontSize: 36
},
profilePix:{
    width: 130,
    height: 130,
    borderRadius: 100,
    background: 'rgb(64, 81, 179)',
    paddingTop: 35,
    marginTop: 80
},
userimg:{
    'max-width': '100%',
    'max-height': '100%'
},
list:{
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
  flexDirection: 'column', 
  width: 250
},
Cancel:{
  background: 'rgb(64, 81, 179)',
  height: 60,
},
Cancels:{
  background: 'rgb(64, 81, 179)',
  color: 'white',
  fontSize: 36,
  fontWeight: 900,
  marginLeft: 15,
  marginTop: 15
},
button: {
  margin: 10,
},
input: {
  display: 'none',
},
rightIcon: {
  marginLeft: 10
  // marginLeft: theme.spacing(1),
},
details:{
alignItems: 'center',
justifyContent: 'center',
display: 'flex',
flexDirection: 'column',
textAlign: 'left',
},

});

class Profile extends Component {
  constructor(props){
    super(props);
    this.state={
      profilePix: []

    }
  }

handleChange = () =>{
  
}

  render(){
    const {classes} = this.props;
   const toggleDrawer = (side, open) => event => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
        this.setState({ ...this.state, [side]: open });
      };
    const sideList = side => (
      <div
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
      >
      <div>
      <div 
      className={classes.Cancel}>
      <ChevronLeftIcon 
      className={classes.Cancels} 
      onClose={toggleDrawer('right', true)} 
      >
      ChevronLeft
      </ChevronLeftIcon>
      </div>

      <div className={classes.list}>
      <div className={classes.profilePix} 
      id="UserPix">
      
      </div>

      <input
      accept="image/*"
      id="inputUserPix"
      className={classes.input}
      id="text-button-file"
      multiple
      type="file"
    />
    <label htmlFor="text-button-file">
      <Button 
      variant="contained" 
      color="default" 
      component="span" 
      className={classes.button}>
        Upload
      <CloudUploadIcon className={classes.rightIcon} />
      </Button>
    </label>
    
      <div className={classes.details}>
      <Typography >Ahmad Hussein</Typography>
      <Typography >Computer Science 300L</Typography>
      <Typography >Senior Web Developer</Typography>
      </div>
      </div>
      </div>
      </div>
      );
      
      return (
        <div className={classes.openDrawer} >
        <IconButton onClick={toggleDrawer('right', true)} color="inherit" >
          <AccountCircleIcon className={classes.AccountCircleIcon}/>
        </IconButton>
        <Drawer anchor="right" open={this.state.right}>
        {sideList('right')}
        </Drawer>
        </div>
      );
  } 
}
export default withStyles(Styles)(Profile)