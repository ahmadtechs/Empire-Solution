import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from "@material-ui/core/IconButton";
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { height } from '@material-ui/system';

const useStyles = makeStyles({
    DialogWrapper:{
        padding: 70,
        textAlign: 'center'
    },
    headers:{
        textAlign: 'center',
        background: '#5c94bd',
        paddingBottom: 20,
        color: 'white',
      },
      bullet: {
        color: '#5c94bd',
        fontSize: 15,
        textTransform: 'capitalize',
        marginLeft: 10,
        height: '50px',
        '&:hover':{
          background: '#5c94bd',
          color: 'white'
        }
      },
      buttons:{
        background: '#5c94bd',
        color: 'white'
      }
  });

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleClick() {
    window.location="/"
  }
  
  return (
    <div >
    <Button className={classes.bullet} onClick={handleClickOpen}>Signout</Button>
      <Dialog 
        open={open} 
        aria-labelledby="form-dialog-title"
        className={classes.DialogWrapper}
        >
        <DialogTitle id="form-dialog-title" className={classes.headers} >Confirm Logout</DialogTitle>
        <DialogContent>
          <DialogContentText style={{paddingTop:25}}>
            Are you sure of Signing out?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <IconButton className={classes.buttons}>
          <CancelIcon onClick={handleClose} />
        </IconButton>
        <IconButton className={classes.buttons}>
          <CheckCircleIcon onClick={handleClick}/>
        </IconButton>
        </DialogActions>
      </Dialog>
      </div>
  );
}