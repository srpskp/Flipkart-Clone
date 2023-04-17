import React from 'react'
// import '../src/Electronics.css'

export default function Ele_head(props) {
  return (
    <>
      {/* <div className="section-4-item">
              <img src={Img1} /> */}
              <div className="section-4-item-head">{props.header}</div>
              {/* <div className="section-4-item-price">Under ₹169</div>
              <div className="section-4-item-explore">For All Top Models</div> */}
            {/* </div>  */}
    </>
  )
}
