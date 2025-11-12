import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css';
import logo from '../../assets/logo.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Navbar(props) {
  const [menu, setMenu] = useState("Home");
  const [navlinkColor, setNavlinkColor] = useState("white");
  const menuRef = useRef();

  const openClick = () => {
    menuRef.current.style.right = "0";
  }
  const closeClick = () => {
    menuRef.current.style.right = "-350px";
  }

  // theme state and persistence
  const [theme, setTheme] = useState(() => {
    try {      
      return localStorage.getItem('theme') || 'dark';      
    } catch {
      return 'dark';
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    setNavlinkColor(theme === 'dark' ? 'white' : 'black');
    if (theme === 'dark') root.classList.add('dark');
    
    else root.classList.remove('dark');
    try { localStorage.setItem('theme', theme); } catch {}
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  return (
    <>
    {/* theme toggle fixed on top-right */}
    <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle theme"
        title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
    >
        <span className="icon" aria-hidden>{theme === 'dark' ? '🌙' : '☀️'}</span>
    </button>

    <div className='navbar'>
      <img src={logo} alt="" width={115} />
      <i onClick={openClick} class="fa-solid fa-bars" id='menu-icon'></i>
      <ul ref={menuRef} className='nav-menu'>
      <i onClick={closeClick} class="fa-solid fa-xmark" id='close-icon'></i>
        <li onClick={() => setMenu("Home")}><AnchorLink className='anchor-link' offset={50} href='#home'><p style={{ color: menu === "Home" ? "orange" : navlinkColor }}>Home</p></AnchorLink></li>
        <li onClick={() => setMenu("About")}><AnchorLink className='anchor-link' offset={50} href='#about'><p style={{ color: menu === "About" ? "orange" : navlinkColor }}>About</p></AnchorLink></li>
        <li onClick={() => setMenu("Services")}><AnchorLink className='anchor-link' offset={50} href='#services'><p style={{ color: menu === "Services" ? "orange" : navlinkColor }}>Services</p></AnchorLink></li>
        <li onClick={() => setMenu("Portfolio")}><AnchorLink className='anchor-link' offset={50} href='#mywork'><p style={{ color: menu === "Portfolio" ? "orange" : navlinkColor }}>Portfolio</p></AnchorLink></li>
        <li onClick={() => setMenu("Contact")}><AnchorLink className='anchor-link' offset={50} href='#contact'><p style={{ color: menu === "Contact" ? "orange" : navlinkColor }}>Contact</p></AnchorLink></li>
      </ul>
      <AnchorLink className='anchor-link' offset={50} href='#contact'><div className="nav-connect">Connect With Me</div></AnchorLink>
    </div>
    </>
  )
}

export default Navbar