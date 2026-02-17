import React from 'react'
import profile from '../../assets/profile1.png'
import resume from '../../assets/Etamini_Oussama_CV.pdf'
import './Hero.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Hero() {
  const handleResumeClick = () => {
    // Open resume PDF in a new tab
    window.open(resume, '_blank');
  };

  return (
    <div id='home' className='hero'>
        <img src={profile} alt="" width={200}/>
        <h1><span>I'm Oussama Etamini,</span> web developer based in Morocco.</h1>
        <p>I am a full-stack web developer with hands-on experience building real industrial applications, including an inventory management system used in a factory environment. I focus on clean, scalable code and effective problem-solving using React, Laravel, and MySQL.</p>
        <div className="hero-action">
        <AnchorLink className='anchor-link' offset={50} href='#mywork'><div className="hero-connect">View Projects</div></AnchorLink>
            <div className="hero-resume" onClick={handleResumeClick} style={{ cursor: 'pointer' }}>My Resume</div>
        </div>
    </div>
  )
}

export default Hero