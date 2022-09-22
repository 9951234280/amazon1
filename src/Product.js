
import React from 'react'
import './product.css'
import { useStatevalue } from './StateCart'
function Product({id,title,price,image,rating}) {
  const [{basket}, dispatch] = useStatevalue();
  console.log(basket)
  
const addtobasket=()=>{
 
         dispatch({
          type:'add',
          item:{
          id:id,
          title:title,
          price:price,
          image:image,
          rating:rating,
         
          },
         });
  }
  return (
    <div className='Products'>
      <div product-info>
        <p>{title}</p>
      </div>
      <div className='product-price'>
        <p>$</p>
        <strong>{price}</strong>
      </div>
      <div className='product-rating'>
       {
        Array(rating)
        .fill()
        .map((_,i)=>(
            <p>🌟</p>
        ))
       }
      </div>
    
      <div className='product-image'>
        <img src={image} alt=''></img>
      </div>
      <button className='product-button' onClick={addtobasket} key={id} >Add to Basket</button>
    </div>
  )
}

export default Product
