import React, {Component,Fragment} from 'react';
import axios from 'axios';
import './Home.css';
class Home extends Component{
     state = {
      details :[]
     }

  componentDidMount(){
    axios.get('https://api.spacexdata.com/v3/launches')
    .then(response => {
      const updateddata = response.data.slice(30,40)
      this.setState({details:updateddata })
      console.log(response.data)
    });
  }
render(){
return(
    <Fragment>
    <div className = 'cointainer'>
    { this.state.details.map(det =>(
      <div className ='Home'>
      <img src = {det.links.mission_patch_small} alt ='' className= 'round-img'/>
      {det.details }
     </div> 
    ))}
    </div>
    </Fragment>
   )
  }
}
export default Home;