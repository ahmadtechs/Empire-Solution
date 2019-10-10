import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { textAlign } from '@material-ui/system';
import axios from 'axios';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    height: 400
  },
  title: {
    background: '#00ACC1',
    height: 30,
    borderRadius: 5,
    color: 'white',
    textAlign: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 24,
    fontWeight: 700,
    fontFamily: 'Roboto, Calibri'

  },
  buttons:{
    background: 'rgb(64, 81, 179)',
    color: 'white',
    borderRadius: 0,
    marginTop: 6,
    marginLeft: 3
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
    <CardContent>
    <div className={classes.title}>
    <Typography className={classes.title} fullwidth>
    Project Reviews
    </Typography>
    </div>
    </CardContent>
    <CardActions>
    <Button size="small" className={classes.buttons}>More Enquiry</Button>
    </CardActions>
    </Card>
  );
}
