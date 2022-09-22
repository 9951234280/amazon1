import React from 'react'
import './Checout.css'
import { initialstate } from './Reducer'
function Checkouthome({title,price,image,rating}) {
  return (
    
    <div >
        <div className='cartdetails'>
         <img src={image} alt=''></img>
         <div className='details'>
            <h3>{title}</h3>
            <strong>${price}</strong>
            <div className='product-rating'>
       {
        Array(rating)
        .fill()
        .map((_,i)=>(
            <p>🌟</p>
        ))
       }
      </div>
      <button >Remove from basket</button>
         </div>
      </div>
    </div>
      
  )
}

export default Checkouthome
