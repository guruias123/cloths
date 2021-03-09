import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'
import './App1.css'
export class App1 extends Component {

          constructor(){
              super()
              this.state={
                User:''
              }
          }
          
       
        
  responseGoogle=(response)=>{
    console.log(response);
    console.log(response.profileObj);
    console.log('>>>>>>',response.googleId);
    console.log('>>>>>',response.profileObj.name)
    this.setState({User:response.profileObj})
       sessionStorage.setItem('name',response.googleId)
       
      }
       
  render() {
    if(this.state.User==''){
      return (
        <div style={{height:'0px',width:'30px',borderRadius:'30%',marginRight:'50px',marginBottom:'30px',marginTop:'0px'}}>
          <GoogleLogin 
          // 664272560437-bv5m7ds2tkc5mau9fbu6mg9kt9uaqh1o.apps.googleusercontent.com
          clientId="664272560437-6609p3ccson4trdnnp6u6uqdq0poef0i.apps.googleusercontent.com"
          buttonText ="Login" 
          onSuccess={this.responseGoogle} 
          onFailure={this.responseGoogle}
          
          cookiePolicy={'single_host_origin'}/>
         </div>
      )
    }else{

      return(
        <React.Fragment>
           <img style={{height:'30px',width:'30px',borderRadius:'50%'}} src={this.state.User.imageUrl}/>
        </React.Fragment>
      )
    }
   
  }
}

export default App1