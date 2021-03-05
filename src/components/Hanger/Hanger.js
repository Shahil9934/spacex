import React,{Component, Fragment} from 'react';
import './Hanger.css';
import axios from 'axios';

class Hanger extends Component{
    state = {
     description : []
    }

    componentDidMount(){
        axios.get('https://api.spacexdata.com/v3/rockets')
        .then(response => {     
            console.log(response.data)
            this.setState({description:response.data})
        });
    }
   render(){
    console.log(this.state.description)
   return(
       <Fragment>
       <div className = 'cointainer'>
          <div className ='cut-text'>
          <h1>SpaceX missions</h1>
          </div>
          <div className = 'Status'><h3>Mission's status</h3></div>
           <diV className = 'column'>
           <h5> Total flights : 118</h5> 
           <h5>Succesfull flights : 113</h5>
           <h5>Failures : 5</h5>
           <h5>Upcoming flights: 14</h5>
           </diV>
         
          <h3 className = 'text'>Hanger</h3> 
            {this.state.description.map(des =>(
            
            <div className ='Hanger'>
            <h5>{des.rocket_name}</h5>       
              First flight :{des.first_flight}<br/>
             {des.description}<br/>
             Height (m):{des.height.meters}<br/>
             Diameter (m):{des.diameter.meters}<br/>
             Mass (kg):{des.mass.kg}<br/>
             Cost per launch ($):{des.cost_per_launch}<br/>
             <a href="https://en.wikipedia.org/wiki/Falcon_1"> Read more in Wikipedia</a>
           
            </div>
        ))}
      </div>
       
       
       </Fragment>

    )
  }
}
export default Hanger;