import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    DialogWrapper:{
        padding: 70,
        textAlign: 'center'
    },
    headers:{
        textAlign: 'center',
        fontWeight: 700,
        background: '#5c94bd',
        paddingBottom: 20,
        color: 'white',
      },
      bullet: {
        width: '100%',
        lineHeight: '220%',
        background: '#5c94bd',
        color: 'white',
        fontSize: 15,
      },
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
  
  return (
    <div >
    <Typography style={{textAlign:'center', marginTop:15, color:' #00ACC1'}} onClick={handleClickOpen}>forgoten password?</Typography>
      <Dialog 
        open={open} 
        onClose={handleClose} 
        aria-labelledby="form-dialog-title"
        className={classes.DialogWrapper}
        >
        <DialogTitle id="form-dialog-title" className={classes.headers} >Forgoten Password!</DialogTitle>
        <DialogContent>
          <DialogContentText style={{paddingTop:25}}>
            Please enter your Email to reset your password
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} className={classes.bullet}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      </div>
  );
}