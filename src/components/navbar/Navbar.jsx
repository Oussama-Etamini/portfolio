import React, { useRef, useState } from 'react'
import './Navbar.css';
import logo from '../../assets/logo.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Navbar() {
  const [menu, setMenu] = useState("Home");
  const menuRef = useRef();

  const openClick = () => {
    menuRef.current.style.right = "0";
  }
  const closeClick = () => {
    menuRef.current.style.right = "-350px";
  }
  return (
    <div className='navbar'>
      <img src={logo} alt="" width={115} />
      <i onClick={openClick} class="fa-solid fa-bars" id='menu-icon'></i>
      <ul ref={menuRef} className='nav-menu'>
      <i onClick={closeClick} class="fa-solid fa-xmark" id='close-icon'></i>
        <li onClick={() => setMenu("Home")}><AnchorLink className='anchor-link' offset={50} href='#home'><p style={{ color: menu === "Home" ? "orange" : "white" }}>Home</p></AnchorLink></li>
        <li onClick={() => setMenu("About")}><AnchorLink className='anchor-link' offset={50} href='#about'><p style={{ color: menu === "About" ? "orange" : "white" }}>About</p></AnchorLink></li>
        <li onClick={() => setMenu("Services")}><AnchorLink className='anchor-link' offset={50} href='#services'><p style={{ color: menu === "Services" ? "orange" : "white" }}>Services</p></AnchorLink></li>
        <li onClick={() => setMenu("Portfolio")}><AnchorLink className='anchor-link' offset={50} href='#mywork'><p style={{ color: menu === "Portfolio" ? "orange" : "white" }}>Portfolio</p></AnchorLink></li>
        <li onClick={() => setMenu("Contact")}><AnchorLink className='anchor-link' offset={50} href='#contact'><p style={{ color: menu === "Contact" ? "orange" : "white" }}>Contact</p></AnchorLink></li>
      </ul>
      <AnchorLink className='anchor-link' offset={50} href='#contact'><div className="nav-connect">Connect With Me</div></AnchorLink>
    </div>
  )
}

export default Navbar