import React, { useEffect } from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'

import './order.css'


const Order = () => {
    return (
        <>
    <h1 id='tit'>A Moments of Delivered on Time.</h1>

        <div class="container">
  <div class="row">
    <div class="col-sm">
    <div className='div1'>
    <img src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80" className="cakes" alt="Cakes..." />
    
   <NavLink to="/order/cake" className="food2">Cakes</NavLink>
   <p className='cakep'>Cake is one of the most popular sweets. It is served on most special occasions such as weddings, birthdays, anniversaries, and holidays.</p>
</div>
    </div>

    <div class="col-sm">
      
<div className='div2'>
    <img src="https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='fastfood' alt="Fast Food" />
    
    <NavLink to="/order/fastfood" className="food2">Fast Food</NavLink>
    <p className='fastfoodp'>The idea behind fast food is great - people want convenience.</p>
</div>
    </div>

    <div class="col-sm">
    <div className='div3'>
    <img src="https://www.blueosa.com/wp-content/uploads/2020/07/Matar-Paneer-Peas-and-Cooked-Cottage-Cheese.jpg" className='fastfood' alt="Fast Food" />
    
    <NavLink to="/order/indian-food" className="food2">Indian Food</NavLink>
    <p className='indianp'>Taking tandoori to the next level.</p>
</div>
    </div>
  </div>
</div>



    </>
  )
}

export default Order