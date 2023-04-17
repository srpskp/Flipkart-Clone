import React from 'react'
import '../src/Login.css'

export default function Login() {
  return (
    <>
    <div className='main'>
      <div className='container'>
        <div className='left'>
            <h1 className='heading'>Login</h1>
            <p className='heading_desc'>
                Get access to your Orders,<br/>Whishlist and Recommendations
            </p>
        </div>
        <div className='right'>
            <div className='input-group'>
                {/* <div> */}
                {/* <span>+91</span> */}
               <input className='input' type='text' placeholder='__'/>
              <label className='label'>Enter Email/Mobile Number</label>
                <div className='line'></div>
                {/* </div> */}
            </div>
            {/* <div className='input-group'>
                 <label className='label'>Enter Password</label>
                
                <input className='input' type='password' placeholder='Enter Password'/>
                <div className='line'></div>
               
                <a href='' className='link'>Forgot?</a>
            </div> */}
            <p className='pera'>By continuing, you agree to Flipkart's <a href=''>Terms of Use</a>
             and <a herf=' '>Privacy Policy.</a></p>
             {/* <button className='btn'>Login</button> */}
             <button className='btn'>Request OTP</button>
             {/* <p className='pera pera--or'>OR</p>
             <button className='btn btn--white'>Request OTP</button>
               <div className='bottom'> */}

             <a href='' className='link--bottom'>New to Flipkart? Create an account</a>
               </div>
        </div>
      </div>
      {/* </div> */}
    </>
  )
}
