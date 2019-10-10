import React from 'react';
import { Grid, Paper, Typography, List} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AppsIcon from '@material-ui/icons/Apps';
import Fab from '@material-ui/core/Fab';
import StarBorder from '@material-ui/icons/StarBorder';
import EditIcon from '@material-ui/icons/Edit';
import routes from '../ViewRouters/Routes'
import {BrowserRouter, Route, Link} from 'react-router-dom';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';

const styles={ 
  root:{
    paddingTop: 40
  },
    paneOne: {
        paddingTop:35, 
        marginTop:5, 
        height: "535px",
        background: '#5c94bd',
        color: '#00ACC1 ',
    },
    TxtColor:{
      color: 'white',
      listStyle: 'none'
    },
    icons:{
      color: 'white'
    },
    iconsList:{
      color: 'white',
      marginRight: 15,
    },
    fab: {
      position : 'fixed',
      bottom : "20px",
      right: "20px",
      background: '#5c94bd'
    },
    links:{
      textDecoration: 'none'
    }
}

export default function Index() {

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

    return(  
  <Grid container>
  <BrowserRouter>
  <Grid item sm={3} xs={4} lg={2} >
  <Paper style={styles.paneOne} square="true">

  <List component="ul" >
  <Link to="/started" style={styles.links}><ListItem>
  <AppsIcon style={styles.iconsList}>AccessibleForward</AppsIcon>
  <ListItemText primary="Get Started" style={styles.TxtColor} />
  </ListItem></Link>

  <Link to="/notice" style={styles.links}><ListItem>
  <AppsIcon style={styles.iconsList}/>
  <ListItemText primary="Notice" style={styles.TxtColor}/>
  </ListItem></Link>
  
  <Link to="/team" style={styles.links}><ListItem>
  <AppsIcon style={styles.iconsList}/>
  <ListItemText primary="Team Members" style={styles.TxtColor}/>
  </ListItem></Link>
  <hr/>

  <ListItem button onClick={handleClick}>
  <AppsIcon style={styles.iconsList}/>
  <ListItemText primary="Developer" style={styles.TxtColor}/>
  {open ? <ExpandMore style={styles.TxtColor}/> :  <ExpandLess style={styles.TxtColor}/>}
  </ListItem>

  
  <Collapse in={open} timeout="auto" unmountOnExit>
  <Link to="/team" style={styles.links}><ListItem>
  <StarBorder style={styles.iconsList}/>
  <ListItemText primary="Front Developer" style={styles.TxtColor}/>
  </ListItem></Link>

  <Link to="/team" style={styles.links}><ListItem>
  <StarBorder style={styles.iconsList}/>
  <ListItemText primary="Back Developer" style={styles.TxtColor}/>
  </ListItem></Link>
  
  <Link to="/team" style={styles.links}><ListItem>
  <StarBorder style={styles.iconsList}/>
  <ListItemText primary="Full Stack" style={styles.TxtColor}/>
  </ListItem></Link>
  </Collapse>
  
  </List>
  </Paper>
  </Grid>

  <Grid item sm={8} xs={8} lg={10}>
  {routes.map((route) => (
  <Route 
    key={route.path}
    path={route.path}
    component={route.sidebar}
  />
  )
  )}
  

  <Fab color="primary" aria-label="add" style={styles.fab}>
  <EditIcon />
  </Fab>
  </Grid>
  </BrowserRouter>
  </Grid>

    );
  }
