import React, {Component} from 'react'
import { Card,CardContent } from '@material-ui/core'
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AssessmentIcon from '@material-ui/icons/Assessment';
import IconButton from '@material-ui/core/IconButton';
import moment from 'react-moment';
import '../../Assets/Styles/PagesStyle.scss'

export default class GetStarted extends Component {
    state={
    date : '2019-10-09',
    format : 'LTS',
    result : moment(date).format(format)
    }

    render(){
    return(
    <div className="startedWraper">
    <div>
    <h1 className="welcome">
     Get Started
    </h1>
    <h4 className="titile">FOUND BY 2019/2020 SESSION TO PROMOTE THE STUDENTS DEVELOPMENT SKILLS</h4>
    <div className="startedCard">
    <Card className="cards">
    <CardContent>
    <IconButton className="iconsB">
    <AssignmentLateIcon className="icons"/>
    </IconButton>
    <h2>Learn</h2>
    </CardContent>
    </Card>
    <Card className="cards">
    <CardContent>
    <IconButton className="iconsB">
    <AssignmentIndIcon className="icons"/>
    </IconButton>
    <h2>Build</h2>
    </CardContent>
    </Card>
    <Card className="cards">
    <CardContent>
    <IconButton className="iconsB">
    <AssessmentIcon className="icons"/>
    </IconButton>
    <h2>Teach</h2>
    </CardContent>
    </Card>
    </div>
    <div className="times">
    <h1>
    {this.state.result}
    </h1>
    </div>
    </div>
    </div>
  )
}
}