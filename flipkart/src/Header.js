import React from 'react'
import Logo from '../src/flipkart.png'
import Plus from '../src/plus.png'
import { FaSistrix,FaAngleDown,FaShoppingCart } from "react-icons/fa";
import '../src/Header.css'
import { Link } from 'react-router-dom';
import Items from './Items';

export default function Header() {
  return (
    <div className='header'>
        <div className='header_1'>
            <img src={Logo} />

            <div className='header_1_1'>
                <span className='explore'>Explore</span>
                <span className='plus'>Plus</span>
                <span className='img'><img src={Plus} /></span>
            </div>
        </div>
       {/* <div className='header_second'> */}
        <div className='header_2'>
            <input placeholder='Search for products,brands and more' type="text"/>
            <FaSistrix className='search'/>
        </div>
        <div className='header_3'>
            <button><Link to='login'>Login</Link></button>
        </div>
        <div className='header_6'>
            <span>Become a Seller</span>
        </div>
        <div className='header_4'>
            <span>More</span>
            <FaAngleDown className='icon'/>
        </div>
        <div className='header_5'>
            <FaShoppingCart className='icon'/>
            <p>Cart</p>
        </div>
        {/* </div>  */}
    </div>
    // <Items/>
  )
}
