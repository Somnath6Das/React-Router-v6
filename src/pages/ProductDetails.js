import React from 'react'
import {Route, useParams, Routes } from 'react-router-dom'
import Offers from './Offers'

export default function ProductDetails() {
    const { id } = useParams()

 


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
        <Routes>
               {/* http://localhost:3000/products/:id/offers */}
            <Route path="offers" element={<Offers />} />
        </Routes>

    </div> 
  )
}

