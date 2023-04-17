import React from 'react'
import '../src/Electronics.css'
import Img from '../src/r4_1.jpg'
import Img1 from '../src/r41.jpeg'
import Img2 from '../src/r42.jpeg'
import Img3 from '../src/r43.jpeg'
import Img4 from '../src/r441.jpeg'
import Img5 from '../src/r45.jpeg'
import Img6 from '../src/r46.jpeg'
import Img7 from '../src/r47.jpeg'
import Ele_head from './Component/Ele_head'
import Ele_price from './Component/Ele_price'
import Ele_expo from './Component/Ele_expo'

export default function Electronics() {
  return (
    <>
      <div className="bestofElectronic_Contianer">
        <div className="bestofElectronic_list">
          <div className="BestofElectronic_item">
            <div className="bestofElectronic_bigText">Best of Electronics</div>
            <a className="viewAllBtn">VIEW ALL</a>
            <div className="bestofElectronicmoreOption">
              <img src={Img} />
            </div>
          </div>


          <div className="section-4-list">
            <div className="section-4-item">
            <div className="section-4-item_1">
              <img src={Img1} />
              </div>
                <Ele_head header='Plain Cases & Covers' />
                  <Ele_price price='Under ₹169'/>
                    <Ele_expo expo='For All Top Models'/>
              {/* <div className="section-4-item-head">Plain Cases & Covers</div>
              <div className="section-4-item-price">Under ₹169</div>
              <div className="section-4-item-explore">For All Top Models</div> */}
            </div>
            <div className="section-4-item">
            <div className="section-4-item_1 ">
             {/* <div style={{height:'200px',width:'200px',textAlign:'center',position: 'relative', margin: ' auto'}}> */}
              <img src={Img2} />
              </div>
             <Ele_head header='Top Mirrorless Cameras' />
                  <Ele_price price='Shop Now!'/>
                    <Ele_expo expo='Canon, Sony, Fujifilm...'/>
             
            </div>
            <div className="section-4-item">
            <div className="section-4-item_1">

              <img src={Img3} />
            </div>
              <Ele_head header='Printers' />
                  <Ele_price price='From ₹3999'/>
                    <Ele_expo expo='HP'/>
            
            </div>
            <div className="section-4-item">
              <div className="section-4-item_1">
              <img src={Img4} />

              </div>

              <Ele_head header='Projectors' />
                  <Ele_price price='From ₹9999'/>
                    <Ele_expo expo='ZEBRONICS'/>
            </div>
            <div className="section-4-item">
            <div className="section-4-item_1">
              <img src={Img5} />  
              </div> 
              <Ele_head header='Premium PowerBanks' />
                  <Ele_price price='Shop Now'/>
                    <Ele_expo expo='Mi, realme & more'/>                   
            
            </div>
            <div className="section-4-item">
            <div className="section-4-item_1">
              <img src={Img6} />
              </div>
              <Ele_head header='Monitors' />
                  <Ele_price price='From ₹9999'/>
                    <Ele_expo expo='SAMSUNG'/>    
              
            </div>
            <div className="section-4-item">
            <div className="section-4-item_1">
              <img src={Img7} />
              </div>
              <Ele_head header='Monitors' />
                  <Ele_price price='From ₹9999'/>
                    <Ele_expo expo='SAMSUNG'/>    
            </div>
          </div>


          {/* <div className="bestofElctronic_product_item">
                   
                </div> */}


        </div>
      </div>





















      {/* <div className='row4'>
      <div className='r1'>
      <div className='r2'>
      <div className='r3'>
      <div className='r4'>
      <h2 class="_2cAig-">Best of Electronics</h2>
      <button className='view'>VIEW ALL</button>
      </div>
      </div>
      </div>
      </div>
      </div> */}
    </>
  )
}
