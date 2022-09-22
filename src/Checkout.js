import React from 'react'
import Checkouthome from './Checkouthome'
import './Checout.css'
import { useStatevalue } from './StateCart'
function Checkout() {
  const[{basket}]=useStatevalue()
  return (
    <div className='cart'>
      <div>
        <div className='flex'>
      <div className='imagediv'>
        <img className='checkout-image' src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' alt=''></img>
      <h1>Shoppping basket</h1>
      </div>
      <div className='price-details'>
       <p>Sub Total({basket?.length} items):<strong>$ price</strong></p>
       <div className='pric'>
       <input type='checkbox' style={{color:"blue"}}></input>
       <p style={{margin:"0 0 0 5px"}}>This order Contains a gift</p>
       </div>
       <button>Procced to Checkout</button>
     </div>
      </div>
      <div className='checkingcart'>
   {basket?.map((item)=>(
    
     <Checkouthome
     id={item.id}
     title={item.title}
     price={item.price}
     rating={item.rating}
     image={item.image}
     />
     
     
   ))
   

   }
      

   
   
     </div>
     </div>
    
    </div>
  )
}

export default Checkout
