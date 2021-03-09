import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './CartScreen.css'
const url='https://amazon1543.herokuapp.com/cart1?login1='
const CartUrl='https://amazon1543.herokuapp.com/removeItem'
class OrderScreen extends Component{
      constructor(){
            super()
            this.state={
                  carts:''
            }
      }
      componentDidMount(){
            
            
            var GID=sessionStorage.getItem('name');
            fetch(`${url}${GID}`,{method:'GET'}).then((res)=>res.json()).then((data)=>this.setState({carts:data}))
           
      }
      product=(one,two)=>{
            
            return (one*two)
      }
      handle1submit=(ID)=>{
            const myobj={
                  _id:ID
            } 
            console.log(ID)
            fetch(CartUrl,{
            method:'DELETE',
            headers:{
                  'Content-Type':'application/json'
            },
            body:JSON.stringify(myobj)
            
            }) 
      }
      
     
       
      cart = (data)=>{
            if(data){
                  return(
                        data.map(item=>{
                              return(
                                    <>
                                    
                                    <div className='col-sm-12'>
                                    <div className='cart'>
                                                <img className='img' src={item.image1}/>
                                                <div className='name'><h1 style={{fontSize:'800%'}}>{item.name1}</h1></div>
                                                <div className ='price'><h2 style={{fontSize:'800%'}}>Price : ${item.cost1}</h2></div>
                                                <div className='authname'><h2 style={{fontSize:'800%'}}>Qty : {item.keyword1} <button style={{marginLeft:'50%',backgroundColor:'red',color:'white',}}  onClick={()=>this.handle1submit(item._id)}>cancel</button></h2></div>                                                
                                                <div className='price'><h2 style={{fontSize:'800%'}}>total price : ${this.product(item.keyword1,item.cost1)} </h2></div>  
                                                
                                    </div>
                                    </div>
                                    </>                           
                              )
                        })
                  )
            }else{
                  return(
                      <img src='/images/loader.gif' style={{height:'320px', width:'420px',marginTop:'2%'}}/>
                      
                  )
            }
      }
      render(){
            
           
            return(
                        <>
                        <p style={{marginTop:'1%'}}><Link to='/carts' >Back to result</Link></p>
                        <h1 style={{font:'status-bar',fontSize:'200%',color:'white',backgroundColor:'#203840',width:'100%'}}>Your Order</h1>
                        {this.cart(this.state.carts)}
                        
                        </>
            )
      }
      
}

export default OrderScreen;