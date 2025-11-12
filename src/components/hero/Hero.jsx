import React from 'react'
import profile from '../../assets/profile1.png'
import './Hero.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Hero() {
  return (
    <div id='home' className='hero'>
        <img src={profile} alt="" width={200}/>
        <h1><span>I'm Oussama Etamini,</span> web developer based in Morocco.</h1>
        <p>I'm a web devoleper from casablanca, Morocco with one year of experience in miltipe compaies like CIMR and AGO IT Solution.</p>
        <div className="hero-action">
        <AnchorLink className='anchor-link' offset={50} href='#contact'><div className="hero-connect">Connect With Me</div></AnchorLink>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero