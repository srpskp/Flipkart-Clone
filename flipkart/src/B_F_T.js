import React from 'react'
import Img from '../src/row2.jpg'
import Ele_head from './Component/Ele_head'
import Ele_price from './Component/Ele_price'
import Ele_expo from './Component/Ele_expo'
import Img1 from '../src/r51.jpeg'
import Img2 from '../src/r52.jpeg'
import Img3 from '../src/r53.jpeg'
import Img4 from '../src/r54.jpeg'
import Img5 from '../src/r55.jpeg'
import Img6 from '../src/r56.jpeg'
import Img7 from '../src/r57.jpeg'

export default function B_F_T() {
  return (
    <>
<div className="bestofElectronic_Contianer">
        <div className="bestofElectronic_list">
          <div className="BestofElectronic_item">
            <div className="bestofElectronic_bigText">Buty,Food & more</div>
            <a className="viewAllBtn">View All</a>
            <div className="bestofElectronicmoreOption">
              <img src={Img} />
            </div>
          </div>


          <div className="section-4-list">
            <div className="section-4-item">
            <div className="section-4-item_1">
              <img src={Img1} />
              </div>
                <Ele_head header='Baby Bathing Accessories' />
                  <Ele_price price='Under ₹599'/>
                    <Ele_expo expo='Baby Bath Tubs & More'/>
              {/* <div className="section-4-item-head">Plain Cases & Covers</div>
              <div className="section-4-item-price">Under ₹169</div>
              <div className="section-4-item-explore">For All Top Models</div> */}
            </div>
            <div className="section-4-item">
            <div className="section-4-item_1 ">
             {/* <div style={{height:'200px',width:'200px',textAlign:'center',position: 'relative', margin: ' auto'}}> */}
              <img src={Img2} />
              </div>
             <Ele_head header='Gym Essentials' />
                  <Ele_price price='From ₹139'/>
                    <Ele_expo expo='Shop Now'/>
             
            </div>
            <div className="section-4-item">
            <div className="section-4-item_1">

              <img src={Img3} />
            </div>
              <Ele_head header='Rider Helmets' />
                  <Ele_price price='From 699'/>
                    <Ele_expo expo='Vega, Steelbird, HRX and More'/>
            
            </div>
            <div className="section-4-item">
              <div className="section-4-item_1">
              <img src={Img4} />

              </div>

              <Ele_head header='Soft Toys' />
                  <Ele_price price='Upto 70% Off'/>
                    <Ele_expo expo='Stuffed Toys, Plush Toys & more'/>
            </div>
            <div className="section-4-item">
            <div className="section-4-item_1">
              <img src={Img5} />  
              </div> 
              <Ele_head header='Microphones' />
                  <Ele_price price='Up to 70% off'/>
                    <Ele_expo expo='Explore Now!'/>                   
            
            </div>
            <div className="section-4-item">
            <div className="section-4-item_1">
              <img src={Img6} />
              </div>
              <Ele_head header='Non-Geared Cycles' />
                  <Ele_price price='Up to 40% Off'/>
                    <Ele_expo expo='Hercules, Hero & More'/>    
              
            </div>
            <div className="section-4-item">
            <div className="section-4-item_1">
              <img src={Img7} />
              </div>
              <Ele_head header='Coffee Powder' />
                  <Ele_price price='Upto 80% Off'/>
                    <Ele_expo expo='Nescafe, Continental & More'/>    
            </div>
          </div>


          {/* <div className="bestofElctronic_product_item">
                   
                </div> */}


        </div>
      </div>
    </>
  )
}
