import React, {Component} from 'react'
import ShirtScreen from '../Screens/ShirtScreen';






const url ="https://amazon1543.herokuapp.com/shirts"

class ShirtApi extends Component{
      constructor(){
            super()
                  this.state={
                        shirts:'',
                        
                  }
            
      }
      componentDidMount(){
            fetch(url,{method:'GET'}).then((res)=>res.json()).then((data)=>this.setState({shirts:data}))

      }
      render(){
           
            return(
                  <>
                <ShirtScreen shirts={this.state.shirts}/>
                
                </>
            )
            }
}

export default ShirtApi;