import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import loader from '../../Assets/images/loaders.gif';

const useStyles = makeStyles(theme => ({
    wraper:{
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
    },
  progress: {
    margin: theme.spacing(2),
  },
}));

export default function Loader() {
  const classes = useStyles();

  return (
    <div className={classes.wraper}>
    <img src={loader} alt="Loading..."/>
    </div>
  );
}