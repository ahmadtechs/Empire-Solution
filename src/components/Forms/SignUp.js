import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    DialogWrapper:{
        textAlign: 'center',
        width: 500,
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
        lineHeight: '200%',
        background: '#5c94bd',
        color: 'white',
        fontSize: 15,
      },
      textField: {
        width : 225,
        marginLeft:3
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
    <div>
    <Typography style={{textAlign:'center', marginTop:15, color:' #00ACC1'}} onClick={handleClickOpen}>Don't have an account?</Typography>
      <Dialog 
        open={open} 
        onClose={handleClose} 
        aria-labelledby="form-dialog-title"
        >
        <DialogTitle id="form-dialog-title" className={classes.headers} >Create New Account</DialogTitle>
        <DialogContent 
        className={classes.DialogWrapper}>
          <form>
          <TextField
             type="text"
             label="Name"
             defaultValue="Full name"
             className={classes.textField}
             margin="normal"
             variant="outlined"
           />
           <TextField
             type="email"
             label="Email"
             defaultValue="Email Address"
             className={classes.textField}
             margin="normal"
             variant="outlined"
           />
           <TextField
             type="password"
             label="Password"
             defaultValue="Full name"
             className={classes.textField}
             margin="normal"
             variant="outlined"
           />
           <TextField
             type="tel"
             label="Phone"
             defaultValue="+234"
             className={classes.textField}
             margin="normal"
             variant="outlined"
           />
           <TextField
             type="text"
             label="Address"
             defaultValue="Residential Address"
             className={classes.textField}
             margin="normal"
             variant="outlined"
           />
           <TextField
             type="text"
             label="Skills"
             defaultValue="Developer, Designer, Writer"
             className={classes.textField}
             margin="normal"
             variant="outlined"
           />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} className={classes.bullet}> 
            Sign up
          </Button>
        </DialogActions>
      </Dialog>
      </div>
  );
}