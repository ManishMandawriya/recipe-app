import React from 'react'
import { NavLink } from 'react-router-dom'
import './food.css'
const Cake = () => {
  return (
    <div className='food'>
    <div>
    <NavLink to=""><img className='cake1' src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80" alt="" /> </NavLink>
    
    
    </div>


    {/* <img src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80" alt="Cake" /> */}

    </div>
      )
}

export default Cake