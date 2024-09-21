import React from 'react'
import "./signup.css"
import signup from  "../assets/nonoo.jpeg"
function SignUp() {
  return (
      <div className='signup'>
        <div className='signupImage'>
            <img src={signup} alt="" srcset="" />
        </div>
        <div className='signupForm'>
          <div className='one'>
            <h2>Sign up</h2>
            <p>Let's get you all sit up so you can access your personal account. </p>
             <div className='inputs' >
                  <div class="input-container">
                    <label>First Name</label>
                    <input type="text" name='first-name' />
                  </div>
                   <div class="input-container">
                    <label>Last Name</label>
                    <input type="text" name='Last-name' />
                  </div>

                  
            </div>
        <div className='inputs' >
                  <div class="input-container">
                    <label>Email</label>
                    <input type="text" name='email' />
                  </div>
                   <div class="input-container">
                    <label>Phone Number</label>
                    <input type="number" name='phone-number' />
                  </div>

                  
        </div>
        
            <div className='pass' >
                 <label >Password</label> 
                <input type="password"  name='password'/>
                  
            </div>
            <div className='pass'>
                <label>Confirm Password</label>
                <input type="password"/>
            </div>
                  
              
              <div className='checkbox'>
                  <input type="checkbox" />
              <p>i agree to all the <span> terms</span> and <span> privacy policies</span></p>
        
              </div>
              <div className="button">
                  <button>create account</button>
                 
              </div>
              <p>already had an acoount? <span>signin</span></p>

              <h6>or signup with</h6>
              <div className='option'>
                  <div >google</div>
                  <div>fecbook</div>
                  <div>tiwtter</div>
              </div>
              
              
         </div>
      
      </div>
      </div>
  )
}

export default SignUp
