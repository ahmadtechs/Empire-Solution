import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './EventStyles.css'

class EventsDemo extends Component {
    
    render(){
        return (
            <div>
            <Card className="cards">
            <CardContent>
            <div className="title">
            <Typography className="title" color="textSecondary" gutterBottom>
                Events
            </Typography>
            </div>
            <Button className="buttons">
                Upcoming
            </Button>
            <Button className="buttons">
                Past
            </Button>
            </CardContent>
            <CardActions>
            <Button size="small" className="buttons">More Enquiry</Button>
            </CardActions>
            </Card>
            </div>
          );
    }
}
export default EventsDemo;