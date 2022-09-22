import React from 'react'
import './App.css'
import {MdShoppingBasket} from 'react-icons/md'
import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useStatevalue } from './StateCart'
import { initialstate } from './Reducer'

function Header() {
    const [{basket}] = useStatevalue();
    
  return (
    <div className='header'>
        <Link to="/">
        <div >
            <img className='logoimage' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='name'></img>
        </div>
        </Link>
        <div className='header-search'>
            <input className='Search-box' type="text"></input>
           <div className='searchlogo1'>
           <FaSearch className='searchlogo'/>
        </div>
        </div>
        <div className='More-info'>
            <span className='smallfont'>Hello Guest</span>
            <span className='bold-size'>Sign In</span>
        </div>
        <div className='More-info'>
            <span className='smallfont'>Returns</span>
            <span  className='bold-size'> &Orders</span>
        </div>
        <div className='More-info'>
            <span className='smallfont'>Your</span>
            <span  className='bold-size'>Prime</span>
        </div>
        <Link to="/checkout">
        <div className='header-shopping basket'>
            <MdShoppingBasket className='shoppingbasket' style={{color:'white'}}/>
            
        </div>
        </Link>
        <span className='cartvalue' style={{color:'orange'}}>{ basket?.length }</span>
       
    </div>
  )
}

export default Header
