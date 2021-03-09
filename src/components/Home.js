import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'
const Home =()=>{
    return(
        <React.Fragment>
            
    
    <div id="myCarousel" className="carousel slide" data-ride="carousel">
      
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
  
      
      <div className="carousel-inner">
        <div className="item active">
             <Link to='/home'><img src="http://bangaknitwear.com/blog/wp-content/uploads/2018/09/Rellin-T-shirt-Banner.jpg" alt="Shirts" style={{width:'85%',height:'100%'}}/></Link>
        </div>
  
        <div className="item">
         <Link to='/home1'> <img src="https://www.arlisman.com/wp-content/uploads/2019/02/Pants-Series-Banner.jpg" alt="Pants" style={{width:'72.5%',height:'100%'}}/></Link>
        </div>
      
        <div className="item">
          <Link to='/home'><img src="https://s3-ap-southeast-1.amazonaws.com/sailor-prod/images/thumbs/0000556.jpeg" alt="Shirts" style={{width:'88%',height:'100%'}}/></Link>
        </div>
        
      </div>
      
      <a className="left carousel-control" href="#myCarousel" data-slide="prev">
        <span className="glyphicon glyphicon-chevron-left"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="right carousel-control" href="#myCarousel" data-slide="next">
        <span className="glyphicon glyphicon-chevron-right"></span>
        <span classNameName="sr-only">Next</span>
      </a>
    </div>
  
  
        <h2 style={{marginLeft:'40%'}}>YOUR SHOPPING ITEMS</h2>
        <div className='col-sm-4'>
        
        <div className='img1'>
                <Link to='/home'><img className='img2' src='/images/d1.jpg' style={{width:'290px', height:'436px'}}/></Link>
                <div className="desc">Branded Shirts</div>
        </div>
        </div>
        <div className='col-sm-4'>
            <div className='img1'>
                <Link to='/home1'><img className='img2' src='http://cdn.shopify.com/s/files/1/0231/8024/7118/products/Me-002020_Approach_Pant_Me-01011_Shadow_Grey_grande.png?v=1585664778' style={{width:'300px', height:'436px'}}/></Link>
                <div className="desc">Branded Pants</div>
            </div>
          </div>
        </React.Fragment>
    )
}

export default Home