import React from 'react'
import {Route, useParams, Routes, Link, parsePath } from 'react-router-dom'
import Offers from './Offers'

export default function ProductDetails() {
    const { id } = useParams()
   const { path } = parsePath()
 


  return (
    <div className='content'>
        <div className='product'>
            <div className='image'>
                <img src="https://via.placeholder.com/520x460" alt="" />
            </div>
            <div className='details'>
                <h2>Product -{id}</h2>
                <p>The useRouteMatch hook attempts to match the current URL in the same way that a Route would. Its mostly useful for getting access to the match data without actually rendering a Route.The useRouteMatch hook attempts to match the current URL in the same way that a Route would. Its mostly useful for getting access to the match data without actually rendering a Route.The useRouteMatch hook attempts to match the current URL in the same way that a Route would. Its mostly useful for getting access to the match data without actually rendering a Route.</p>
            </div>
        </div>
        <Link to="/about/offers">Offers</Link>
            <Routes>
            <Route path={`${path}/offers`} element={<Offers/>}/>
            </Routes>
    </div> 
  )
}

