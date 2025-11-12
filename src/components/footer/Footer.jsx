import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/logo.png'

function Footer() {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" width={100}/>
                <p>I am a web depeloper from, Morocco with one year of experience in compaines like CIMR and AGO IT Solution.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                <i class="fa-regular fa-user" style={{ fontSize: '15px' }}></i>
                <input type="text" placeholder='Enter your email'/>
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <div className="footer-bottom-left">&copy; Oussama Etamini. All rights reserved.</div>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer