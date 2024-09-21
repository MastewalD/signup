import React from 'react'
import image from "../assets/nonoo.jpeg"
import "./signin.css"
function SignIn() {
  return (
    <div className='login'>
    
      <div className='loginForm'>
        <div className='log'>
          <h2>Login</h2>
          <p>login in to access your account!</p>
          <input type="text" />
          <input type="text" />
          <input type="checkbox" />
          <input type="" className='button' />
          <p>don't have an account ?<span>signup</span></p>
          <p>or login with</p>
          <div className="other">
            <div className="google">google</div>
            <div className="tiwtter">twitter</div>
            <div className="facebook">facebook</div>
          </div>
          </div>
      </div>
      <div className="loginimage">
        <img src={image} />
     
      </div>
    </div>
  )
}

export default SignIn
