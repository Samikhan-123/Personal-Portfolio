import React from 'react';
const Login = () => {
  return (
    <div className="contact-form">
      <h2>Contact Me</h2>
      <div className="login-box">
        <form>
          <div className="user-box">
            <input type="text" name="" required />
            <label>Your Name</label>
          </div>
          <div className="user-box">
            <input type="text" name="" required />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input type="text" name="" required />
            <label>Subject</label>
          </div>
          <div className="user-box">
            <textarea className='area' placeholder='Type Your Message Here' required />
            <label className='message-label' >Message</label>
          </div>
          <center>
            <button type='submit' className='submit'>
              SEND
              <span></span>
            </button>
          </center>
        </form>
      </div>
    </div>
  );
};

export default Login;
