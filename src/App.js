import React, { Component } from 'react'
import Chat from './Chat'
import Login from './Login'
import Register from './Register'
import notfound from './404'
import List from './Admin'
import Update from './Update'
import Dashboard from './Dashboard'
import AllGroup from './AllGroup'
import CreateGroup from './CreateGroup'
import AdminDashboard from './AdminDashboard'
import AdminUpdateForm from './AdminUpdateForm'
import UserDashboard from './UserDashboard'
import Lists from './List'
import demo from './demo'
import ContactForm from './ContactForm';
import Manage from './Manage'
import countDown from './countDown';


import {
BrowserRouter as Router, 
Route,
Switch,
Redirect } from "react-router-dom"

export default class App extends Component {
    render() {
        return (
           
           <Router>
               <Switch>

               <Route exact path="/Login" component={Login} />
               <Route exact path="/Chat/:group/:id/:user/" component={Chat} />
               <Route exact path="/404" component={notfound} />
               <Route exact path="/Register" component={Register} />
               <Route exact path="/Admin" component={List} />
               <Route exact path="/List" component={Lists} />
               <Route exact path="/Update/" component={Update} />
               <Route exact path="/Dashboard" component={Dashboard} />
               <Route exact path="/AllGroup" component={AllGroup} />
               <Route exact path="/CreateGroup" component={CreateGroup} />
               <Route exact path="/countDown" component={countDown} />
               <Route exact path="/ContactForm" component={ContactForm} />
               <Route exact path="/Manage/:id/:gname" component={Manage} />
               <Route exact path="/AdminDashboard" component={AdminDashboard} />
               <Route exact path="/UserDashboard" component={UserDashboard} />
               <Route exact path="/AdminUpdateForm" component={AdminUpdateForm} />
               <Route exact path="/demo" component={demo} />
               <Redirect to="/Login"/>
               </Switch>
           </Router>
           
        )
    }
}
