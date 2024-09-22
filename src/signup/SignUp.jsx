import React from 'react'
import "./signup.css"
import signup from  "../assets/nonoo.jpeg"
function SignUp() {
  return (
    <div className='parent'>

      <div className="image">
        <img src={signup} alt="signup image" />
      </div>
      <div className="signupForm">
        <h2>Sign up</h2>
        <p>Let's get you all steup so you can access your personal accout.</p>
        <div className="inputs">
          <div className="style">
           
            <div className='small'>
              <div className="all">
                 <div className='label_input'>
              <label>First Name</label>
              <input type="text" />  
            </div>
            <div className='label_input'>
              <label>Last Name</label>
              <input type="text" />
            </div>
           </div>
              <div className='all'>
                  <div className='label_input'>
              <label >Email</label>
               <input type="text" />
            </div>
            <div className='label_input'>
              <label >Phone Number</label>
              <input type="text" />
            </div>
           </div>
            </div>

             
            <div className="large">
             <div className='label_input'>
              <label >Password</label>
              <input type="text" />
            </div>

            <div className='label_input'>
              <label>Confirm Password</label>
              <input type="text" />
            </div>

            </div>
          
          </div>
          
          <div className="checkbox">
             <input className='on' type="checkbox" />
          <p>i agree to all the <span>Terms</span>and <span>Privacy Policies</span></p>
          </div>
          
          <button className='button'>signUp</button>
          <div className='center'>
              <p>Already have an account? <span>Login</span></p>
          --------------------or Sign up with---------------------
          </div>
          <div className="option">
            <div className="facebook">facebook</div>
            <div className="google">google</div>
            <div className="apple">apple</div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default SignUp
