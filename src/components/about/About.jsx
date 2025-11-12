import React from 'react'
import profile2 from '../../assets/profile2.jpg'
import '../about/About.css'


function About() {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src="" alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile2} alt="" width={350}/>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I'm an experienced Full Stack Developer with over a year of professional expertise in the throughout my career. I have had the prilege of collaborating, contributing to their success and growth.</p>
                    <p>My passion for full stack development is not only reflected in my extensive experience but also in the enthusiasm and dedication i bring to each project.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS & Tailwind</p><hr style={{width:'60%'}}/></div>
                    <div className="about-skill"><p>JavaScript & React JS</p><hr style={{width:'40%'}}/></div>
                    <div className="about-skill"><p>PHP & Laravel</p><hr style={{width:'45%'}}/></div>
                    <div className="about-skill"><p>MySQL & MongoDB</p><hr style={{width:'20%'}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>1+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>5+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>2+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About