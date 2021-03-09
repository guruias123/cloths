
import Footer from './components/Footer'
import {BrowserRouter,Route} from 'react-router-dom'

import Header from './components/Header';
import Home from './components/Home'
import React, { Component } from 'react';
import Contact from './components/Contact';
import About from './components/About';
import PantApi from './components/Api/PantApi'
import ShirtApi from './components/Api/ShirtApi'

import CartScreen from './components/CartScreen'
import OrderScreen from './components/OrderScreen'
import PantSub from './components/SubScreen/PantSub';
import ShirtSub from './components/SubScreen/ShirtSub';

const Routing =()=>{
  return(
           <BrowserRouter>
                  <Header />
                  <Route exact path='/' component={Home}/>
                  <Route exact path='/contact' component={Contact}/>
                  <Route exact path='/about' component={About}/>
                  <Route exact path="/home" component={ShirtApi}/>
                  <Route exact path="/home1" component={PantApi}/>
                  <Route  path="/home/product/:id"  component={PantSub}/>
                  <Route  path='/home1/pant/:id' component={ShirtSub}/>
                  
                  <Route path="/carts" component={CartScreen}/>
                  <Route path='/orders' component={OrderScreen}/>
                  <Footer />                  
            </BrowserRouter>
  )
}
export default Routing