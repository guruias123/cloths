import {Link} from 'react-router-dom'


const ShirtScreen=(props)=>{
  
  const shirt=({shirts})=>{
    if(shirts){
      
  return(
      
      shirts.map((item)=>{

        return(
          <>
          <div className='col-sm-4'>
          <ul className="products">
         
              <li>
                <div className="product">
                    <Link to={'/home/product/' + item._id}><img className="product-image" src={item.image} alt="product"/></Link>
                    
                    <div className="product-name">
                    <Link to={'/home/product/' + item._id}>{item.name}</Link></div>
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
        <img src='/images/loader.gif' height='320px' width='420px' />
        
    )
    }  
}
    return(
      <>
        
        {shirt(props)}
      </>
    )
  
}

export default ShirtScreen;