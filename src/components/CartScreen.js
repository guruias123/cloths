import React,{Component} from 'react'
import {Route,Link} from 'react-router-dom'
import './CartScreen.css'

const url='https://amazon1543.herokuapp.com/cart1?login1='
const CartUrl='https://amazon1543.herokuapp.com/removeItem'
class CartScreen extends Component{
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
                                                <div className ='price'><h2 style={{fontSize:'800%'}}>Price : ${item.cost1}   <Link to='/orders'><button style={{marginLeft:'46%',backgroundColor:'green',color:'white',}}>Proceed to checkout</button></Link></h2></div>
                                                <div className='authname'><h2 style={{fontSize:'800%'}}>Qty : {item.keyword1} <button style={{marginLeft:'50%',backgroundColor:'red',color:'white',}}  onClick={()=>this.handle1submit(item._id)}>remove</button></h2></div>                                                
                                                <div className='price'><h2 style={{fontSize:'800%'}}>total price : ${this.product(item.keyword1,item.cost1)} </h2></div>  
                                                
                                    </div>
                                    </div>
                                    </>                           
                              )
                        })
                  )
            }else{
                  return(
                        <>
                       <img src='/images/loader.gif' style={{height:'320px', width:'420px',marginTop:'2%'}}/>
                        {/* <p style={{marginLeft:'80%', marginTop:'.5%'}}><Route exact path='/' component={App1}/></p> */}
                        </>
                  )
            }
      }
      render(){
            
           
            return(
                        <>
                        
                        <h1 style={{font:'status-bar',fontSize:'200%',color:'white',backgroundColor:'#203840',width:'100%'}}>Your Carts</h1>
                        {this.cart(this.state.carts)}
                        </>
            )
      }
      
}

export default CartScreen;