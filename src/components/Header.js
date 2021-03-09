import {Route,Link} from 'react-router-dom'
import './Header.css'
import App1 from './App1'
const Header =()=>{
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open")
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }
    return(
        <nav class="navbar navbar-inverse" style={{backgroundColor:'#203840'}}>
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>   
              <span class="icon-bar"></span>                      
            </button>
            <a class="navbar-brand" href="/">Bandaru</a>
          </div>
          <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav">
              <li ><a href="/">Home</a></li>
              
              <li><a href="/about">About</a></li>
              <li><Link to="/contact">Contact</Link></li>
              <li onClick={openMenu}>Items</li>
            </ul>
            
            <ul class="nav navbar-nav navbar-right">
              <li style={{ marginTop:'0%'}}><a href="/"><p ><Route  path='/' component={App1}/></p> </a></li>
              <li><a href="/carts"> Cart</a></li>
            </ul>
          </div>
        </div>
      </nav>
      
        
    )
}

export default Header;