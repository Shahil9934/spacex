import React,{Component}from 'react';
import UserLogin from './components/UserLogin/UserLogin';
import Dashboard from './components/Dashboard/Dashboard';
import { BrowserRouter, Route } from 'react-router-dom';
import Hanger from './components/Hanger/Hanger';
import Home from './components/Home/Home';
import './App.css';

class App extends Component{
   render(){
    return(
      <BrowserRouter>    
      <Route exact path="/" component={UserLogin} />
      <Route path="/Dashboard" component={Dashboard} /> 
      <Route path="/Hanger" component={Hanger} /> 
       <Route path="/Home" component={Home} />    
      </BrowserRouter>
   )
  }
}
export default App;
