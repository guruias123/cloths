import {React, Component} from 'react'
import PantScreen from '../Screens/PantScreen'


const panturl ="https://amazon1543.herokuapp.com/pants"

class PantApi extends Component{
      constructor(){
            super()
                  this.state={
                        
                        pants:''
                  }
            
      }
      componentDidMount(){
            fetch(panturl,{method:'GET'}).then((res)=>res.json()).then((data)=>this.setState({pants:data}))

      }
      render(){
           
            return(
                  <>
               
                <PantScreen pants={this.state.pants}/>
                
                </>
            )
            }
}

export default PantApi;