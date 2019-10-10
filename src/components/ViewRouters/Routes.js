import React, { Component } from 'react'
import GetStarted from '../Exercises/GetStarted'
import Notice from '../Exercises/Announcements/Notice'
import TeamMember from '../Exercises/TeamMember'



const routes = [
    {
        path: '/started',
        sidebar:  () => <GetStarted/>
    },
    {
        path: '/notice',
        sidebar:  () => <Notice/>
    },
    {
        path: '/team',
        sidebar:  () => <TeamMember/>
    }
]

export default routes;
