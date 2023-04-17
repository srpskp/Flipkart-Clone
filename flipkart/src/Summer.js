import React from 'react'
import Ele_head from './Component/Ele_head'
import Ele_price from './Component/Ele_price'
import Ele_expo from './Component/Ele_expo'
import Img1 from '../src/r71.jpeg'
import Img2 from '../src/r72.jpeg'
import Img3 from '../src/r73.jpeg'
import Img4 from '../src/r74.jpeg'
import Img5 from '../src/r75.jpeg'
import Img6 from '../src/r76.jpeg'
import Img7 from '../src/r77.jpeg'

export default function Summer() {
  return (
    <>
        <div className="bestofElectronic_Contianer">
        <div className="bestofElectronic_list">
          <div className="BestofElectronic_item">
            <div className="bestofElectronic_bigText">Shop for a Cool Summer</div>
            <a className="viewAllBtn">View All</a>
            {/* <div className="bestofElectronicmoreOption">
              <img src={Img} />
            </div> */}
          </div>


          <div className="section-4-list">
            <div className="section-4-item">
            <div className="section-4-item_1">
              <img src={Img1} />
              </div>
                <Ele_head header='Hardware Tapes' />
                  <Ele_price price='Min. 50% Off'/>
                    <Ele_expo expo=''/>
              {/* <div className="section-4-item-head">Plain Cases & Covers</div>
              <div className="section-4-item-price">Under ₹169</div>
              <div className="section-4-item-explore">For All Top Models</div> */}
            </div>
            <div className="section-4-item">
            <div className="section-4-item_1 ">
             {/* <div style={{height:'200px',width:'200px',textAlign:'center',position: 'relative', margin: ' auto'}}> */}
              <img src={Img2} />
              </div>
             <Ele_head header='Water Bottles' />
                  <Ele_price price='Min. 50% Off'/>
                    <Ele_expo expo=''/>
             
            </div>
            <div className="section-4-item">
            <div className="section-4-item_1">

              <img src={Img3} />
            </div>
              <Ele_head header=' Solar Light Sets' />
                  <Ele_price price='Min. 50% Off'/>
                    <Ele_expo expo=''/>
            
            </div>
            <div className="section-4-item">
              <div className="section-4-item_1">
              <img src={Img4} />

              </div>

              <Ele_head header='Hand Juicers' />
                  <Ele_price price='Min. 50% Off'/>
                    <Ele_expo expo=''/>
            </div>
            <div className="section-4-item">
            <div className="section-4-item_1">
              <img src={Img5} />  
              </div> 
              <Ele_head header='Sunscreen' />
                  <Ele_price price='Min. 50% Off'/>
                    <Ele_expo expo=''/>                   
            
            </div>
            <div className="section-4-item">
            <div className="section-4-item_1">
              <img src={Img6} />
              </div>
              <Ele_head header='Fans' />
                  <Ele_price price='Min. 50% Off'/>
                    <Ele_expo expo=''/>    
              
            </div>
            <div className="section-4-item">
            <div className="section-4-item_1">
              <img src={Img7} />
              </div>
              <Ele_head header='Jugs' />
                  <Ele_price price='Min. 50% Off'/>
                    <Ele_expo expo=''/>    
            </div>
          </div>


          {/* <div className="bestofElctronic_product_item">
                   
                </div> */}


        </div>
      </div> 
    </>
  )
}
