import React from 'react'
import Ele_head from './Component/Ele_head'
import Ele_price from './Component/Ele_price'
import Ele_expo from './Component/Ele_expo'
import Img1 from '../src/r61.jpeg'
import Img2 from '../src/r62.jpeg'
import Img3 from '../src/r63.jpeg'
import Img4 from '../src/r64.jpeg'
import Img5 from '../src/r65.jpeg'
import Img6 from '../src/r66.jpeg'
import Img7 from '../src/r67.jpeg'

export default function Holi() {
    return (
        <>
            <div className="bestofElectronic_Contianer">
                <div className="bestofElectronic_list">
                    <div className="BestofElectronic_item">
                        <div className="bestofElectronic_bigText">Holi Essentials,Curated for you</div>
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
                            <Ele_head header="Men's Ethnic Sets" />
                            <Ele_price price='Min. 50% Off' />
                            <Ele_expo expo='' />
                            {/* <div className="section-4-item-head">Plain Cases & Covers</div>
              <div className="section-4-item-price">Under ₹169</div>
              <div className="section-4-item-explore">For All Top Models</div> */}
                        </div>
                        <div className="section-4-item">
                            {/* <div className="section-4-item_1 ">
                                <img src={Img2} />
                            </div>
                            <Ele_head header="Men's T-shirts" />
                            <Ele_price price='Extra ₹289 off' />
                            <Ele_expo expo='' /> */}

                            <div className="section-4-item_1">
                                <img src={Img7} />
                            </div>
                            <Ele_head header='Rangoli Powder' />
                            <Ele_price price='Min. 50% Off' />
                            <Ele_expo expo='' />

                        </div>
                        <div className="section-4-item">
                            <div className="section-4-item_1">

                                <img src={Img3} />
                            </div>
                            <Ele_head header='Casual Shoes' />
                            <Ele_price price='Min. 70% Off' />
                            <Ele_expo expo='' />

                        </div>
                        <div className="section-4-item">
                            <div className="section-4-item_1">
                                <img src={Img4} />

                            </div>

                            <Ele_head header='Sweets And Mixes' />
                            <Ele_price price='Min. 50% Off' />
                            <Ele_expo expo='' />
                        </div>
                        <div className="section-4-item">
                            <div className="section-4-item_1">
                                <img src={Img5} />
                            </div>
                            <Ele_head header='Toran' />
                            <Ele_price price='Min. 50% Off' />
                            <Ele_expo expo='' />

                        </div>
                        <div className="section-4-item">
                            <div className="section-4-item_1">
                                <img src={Img6} />
                            </div>
                            <Ele_head header='Garlands' />
                            <Ele_price price='Min. 50% Off' />
                            <Ele_expo expo='' />

                        </div>
                        <div className="section-4-item">

                        <div className="section-4-item_1 ">
                                <img src={Img2} />
                            </div>
                            <Ele_head header="Men's T-shirts" />
                            <Ele_price price='Extra ₹289 off' />
                            <Ele_expo expo='' />
                            {/* <div className="section-4-item_1">
                                <img src={Img7} />
                            </div>
                            <Ele_head header='Rangoli Powder' />
                            <Ele_price price='Min. 50% Off' />
                            <Ele_expo expo='' /> */}
                        </div>
                    </div>


                    {/* <div className="bestofElctronic_product_item">
                   
                </div> */}


                </div>
            </div>
        </>
    )
}
