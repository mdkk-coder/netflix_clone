import React from 'react';
import "./SignUp.css";
import { Netflix,Eye } from '../assets/SVG';
const SignUp=()=>{
    return (
        <div className='container'>
          <img className= 'plogo'src={Netflix} alt=''/>
          <div className='card'>
            <h4 className='text'>Sign In</h4>           
            <input className='textBox'type='Email' placeholder='Email or phone number' name='email'/>
            <input className='textBox' id='t' type='Password' placeholder='Password' name='password'/>
            <button className= 'eye'>
              <img  src= {Eye} alt=''/>
            </button>
            <button className='btn'>Sign In</button>
          
            <input className='check' type='checkbox' name='check' />
            <div className='checkContainer'>
            <label for='check' className='checktxt'>Remember me</label>

            </div>
            <div className='btnCont'>
            <a href='url' className='help'>Need help?</a>
            </div>
            <div className='signup'>
              <h6 className='txt'>New to Netflix?</h6>
              <a href='url' className='signuplink'>Sign up now</a>
            </div>
            <p className='securitydesc'>This page is protected by Google reCAPTCHA to</p>
            <p className='securitydesc2'>ensure you're not a bot.</p>
            <div className='learnmore'>
            <a href='url' className='learnmore'>Learn more.</a>
            </div>
         
          </div>
          <div className='bottomcard'>
         <div className='contact'>Questions? Call <a className='cno'href='url'>000-800-919-1694</a></div>
          <div className='qa'>
              <a className='det'href='url'>FAQ</a>
              <a className='det'href='url'>Help Centre</a>
              <a className='det'href='url'>Terms of use</a>
              <a className='det'href='url'>Privacy</a>
          </div>
         <div className='qa2'>
              <a className='det1'href='url'>Cookie Preferences</a>
              <a className='det2'href='url'>Corporate Information</a>
              </div>
          </div> 
        </div>
    )
}
export default SignUp;
