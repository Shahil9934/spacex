import React, {Component, Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import './Dashboard.css'

class Dashboard extends Component{
render(){
return(
        <Fragment>
        <div className = 'container' >
        <header  className ='Dashboard ul'>
        <nav>
        <ul>
        <li><NavLink  to = '/Home'>Home</NavLink> </li>
        <li><NavLink  to = '/Hanger'>Hangar</NavLink> </li>      
        </ul>
        </nav>
        </header>
        </div>
        
        </Fragment>
   )
  }
}

export default Dashboard;