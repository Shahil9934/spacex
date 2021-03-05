import React,{Component, Fragment} from 'react';
import {Redirect} from 'react-router-dom';
import './UserLogin.css';

class UserLogin extends Component{
    state = {
          login : '',
          password : null,
          isLogedIn : false
          }

      handleLogin = (event) => {
        event.preventDefault();
        if(this.state.login ){
          this.setState({isLogedIn:true})
         }
       }

         render(){
         if(this.state.isLogedIn === true){
             return <Redirect to ='/Dashboard'/>;
          }
        return(
        <Fragment>
        <div className = 'userLogin'>
         <h1 className = 'container'>Login</h1>
         <input type = 'text' placeholder = 'Login' value ={this.state.login} onChange = {(event) => this.setState({login:event.target.value})} />
         <input type = 'password' placeholder = 'Password' value ={this.state.password} onChange = {(event) => this.setState({password:event.target.value})} />
           <button  onClick = {this.handleLogin}>Login</button>
          </div>
      </Fragment>
    )
  }
}

export default UserLogin;