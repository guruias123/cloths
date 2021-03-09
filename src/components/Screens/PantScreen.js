
import {Link} from 'react-router-dom'
import './PantScreen.css'

const PantScreen=(props)=>{
  
  const pant=({pants})=>{
    if(pants){
  return(
      pants.map((item)=>{
        return(
          <>
          <div className='col-sm-4'>
          <ul className="products">
         
              <li>
                <div className="product">
                    <Link to={'/home1/pant/' + item._id}><img className="product-image" src={item.image} alt="product"/></Link>
                    
                    <div className="product-name">
                    <Link to={'/home1/pant/' + item._id}>{item.name}</Link></div>
                    <div className="product-brand">{item.brand}</div>
                    <div className="product-price">${item.cost}</div>
                    <div className="product-rating">{item.rating}Stars ({item.numReviews})Reviews</div>
                </div>
            </li> 
          
        </ul>
        </div>
        </>
  )
      })
  )
    }  
    else{
      return(
        <img src='/images/loader.gif' style={{height:'320px', width:'420px',marginTop:'2%'}} />
        
    )
    }  
}
    return(
      <>
        {pant(props)}
      </>
    )
  
}

export default PantScreen;

