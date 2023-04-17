import React from 'react'
import '../src/Items.css'
import Item1 from '../src/img1.png'
import Item2 from '../src/img2.png'
import Item3 from '../src/img3.png'
import Item4 from '../src/img4.png'
import Item5 from '../src/img5.jpg'
import Item6 from '../src/img6.png'
import Item7 from '../src/img7.png'
import Item8 from '../src/img8.png'
import Item9 from '../src/img9.png'
import Item10 from '../src/img10.png'
import Title from './Title'
import { FaAngleDown } from "react-icons/fa";


export default function Items() {
  return (
    <>
      <div className='h_2'>
        <div className='row'>
            <div className='box'>
                <div className='card'>
                    <div className='card_img'>  
                       <img src={Item1}/>
                    </div>
                    <span  className='title'><Title name='Grocery' /></span> 
                     {/* <div className='title'>Grocery</div> */}
                </div>
                <div className='card'>
                    <div className='card_img'>  
                       <img src={Item2}/>
                    </div>
                    <span  className='title'><Title name='Mobiles' /></span> 
                     {/* <div className='title'>Grocery</div> */}
                </div>
                <div className='card'>
                    <div className='card_img'>  
                       <img src={Item3}/>
                    </div>
                   <span  className='title'><Title name='Fashion'  /> <FaAngleDown /> </span>
                     {/* <div className='title'>Grocery</div> */}
                </div>
                <div className='card'>
                    <div className='card_img'>  
                       <img src={Item4}/>
                    </div>
                    <span  className='title'><Title name='Electronics' /><FaAngleDown /></span> 
                     {/* <div className='title'>Grocery</div> */}
                </div>
                <div className='card'>
                    <div className='card_img'>  
                       <img src={Item5}/>
                    </div>
                    <span  className='title'><Title name='Home' /><FaAngleDown /></span> 
                     {/* <div className='title'>Grocery</div> */}
                </div>
                <div className='card'>
                    <div className='card_img'>  
                       <img src={Item6}/>
                    </div>
                    <span  className='title'><Title name='Appliances' /></span>
                     {/* <div className='title'>Grocery</div> */}
                </div>
                <div className='card'>
                    <div className='card_img'>  
                       <img src={Item7}/>
                    </div>
                    <span  className='title'><Title name='Travel' /></span>
                     {/* <div className='title'>Grocery</div> */}
                </div>
                <div className='card'>
                    <div className='card_img'>  
                       <img src={Item8}/>
                    </div>
                    <span  className='title'><Title name='Top Offers' /></span>
                     {/* <div className='title'>Grocery</div> */}
                </div>
                <div className='card'>
                    <div className='card_img'>  
                       <img src={Item9}/>
                    </div>
                    <span  className='title'><Title name='Beauty,Toys & More' /><FaAngleDown /></span>
                     {/* <div className='title'>Grocery</div> */}
                </div>
                <div className='card'>
                    <div className='card_img'>  
                       <img src={Item10}/>
                    </div>
                    <span  className='title'><Title name='Two Wheelers' /><FaAngleDown /></span>
                     {/* <div className='title'>Grocery</div> */}
                </div>
               
            </div>
        </div>
      </div>
    </>
  )
}
