import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import './PantSub.css'



const url = 'https://amazon1543.herokuapp.com/pants/'
const carturl = 'https://amazon1543.herokuapp.com/cart'
class PantSub extends Component{
      
      constructor(){
            super()
            this.state={
                  shirts1:'',
                  keyword:'',
                  name : '',
                  image : '',
                  cost : '',
                  login : "",
                  
                  cart :{
                        keyword1:'',
                        name1 : '',
                        image1 : '',
                        cost1 : '',
                        login1 : '',
                        authname: '',
                        authimg :'',
                  }
            }
      }
      handleSubmit = () => {
            console.log(this.state)
            fetch(carturl,
                {
                    method:'POST',
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify(this.state.cart)
                })
                .then(this.props.history.push('/cart'))
        }
     
      componentDidMount(){

            console.log(this.props.match.params.id)
            console.log('wwwwwww',this.state.cart.login1)
            const id = this.props.match.params.id;
            console.log(`${url}${id}`)
            fetch(`${url}${id}`,{method:'GET'}).then((res)=>res.json()).then((data)=>this.setState({shirts1:data}))
          
      }
      handleChange = (event) => {
            console.log(event.target.value)
            const qty = event.target.value
            this.setState({keyword:qty})
          var name=this.state.shirts1[0].name
          var venky = sessionStorage.getItem('name')
          var venky1 = sessionStorage.getItem('name1')
            console.log(venky)
            console.log(venky1)
          console.log('trrrrttrgrgtgrhrr',this.state.shirts1[0].name)
            this.setState({cart:{keyword1:event.target.value,
            name1 :name,
            image1 : this.state.shirts1[0].image,
            cost1 : this.state.shirts1[0].cost,
            login1 : venky,
            authname : venky1        
            }})
           
        }
        handleImg=(img)=>{
            this.setState({image:img})
     
            console.log('??????',img)
            
            
        }
        handleName=(value)=>{
              this.setState({name:value})
              
              
        }
      pant = (data)=>{
            if(data){
                 return(
                        data.map((product)=>{
                              
                              return(
                                    <React.Fragment>
                                    <div className='back-to-result'>
                                          <Link  to='/home1/:id'>Back to result</Link>
                                    </div>
                                    <div className='details'>
                                          <div className='details-image' >
                                            
                                                <img style={{height:'20%'}} src={product.image}    onLoad={()=>{this.handleImg(product.image)}} />
                                          </div>
                                          <div className='details-info' >
                                                <ul>
                                                     <li >
                                                           
                                                             <h4 onLoad={()=>{this.handleName(product.name)}}>{product.name} </h4>  
                                                           
                                                         
                                                      </li> 
                                                
                                                      <li>
                                                           <b>${product.cost}  </b> 
                                                      </li>
                                                      <li>
                                                            {product.rating} stars ({product.numReviews} Reviews)
                                                      </li>
                                                      <li>
                                                            Description:
                                                            <div>
                                                                  {product.description}
                                                            </div>
                                                      </li>
                                                </ul>
                                          
                                          </div>
                                          <div className='details-action'>
                                                   <ul>
                                                         <li>
                                                               Price:${product.cost}
                                                         </li>
                                                         <li>
                                                               Status:{product.status}
                                                         </li>
                                                         <li>
                                                               Qty: <input type='text' onChange={this.handleChange} ></input>
                                                         </li>
                                                         <li >
                                                               <Link to="/carts"><button className='button' onClick={this.handleSubmit}>Add to Cart</button></Link>
                                                         </li>
                                                   </ul>   
                                                </div>
                                    </div>
                              </React.Fragment>
                              )
                        })
                 )
                 
            }else{
                  return(
                      <img src='/images/loader.gif' style={{height:'320px', width:'420px',marginTop:'2%'}} />
                      
                  )
            }
      }
      
      render(){
            
           
            return(
                        <>
                        
                        {this.pant(this.state.shirts1)}
                        
                        </>
            )
      }
}

export default PantSub;