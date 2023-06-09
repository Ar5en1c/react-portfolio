import React, { useState } from 'react';
import './nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { RiToolsFill } from 'react-icons/ri';
import { MdWorkHistory } from 'react-icons/md';
import { BiMessageSquareDetail } from 'react-icons/bi';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  const handleNavClick = (nav) => {
    setActiveNav(nav);
  };

  return (
    <nav>
      <a href="#" className={activeNav === '#' ? 'active' : ''} onClick={() => handleNavClick('#')}><AiOutlineHome/></a>
      <a href="#about" className={activeNav === '#about' ? 'active' : ''} onClick={() => handleNavClick('#about')}><AiOutlineUser/></a>
      <a href="#skills" className={activeNav === '#experience' ? 'active' : ''} onClick={() => handleNavClick('#experience')}><RiToolsFill/></a>
      <a href="#experience" className={activeNav === '#services' ? 'active' : ''} onClick={() => handleNavClick('#services')}><MdWorkHistory/></a>
      <a href="#contact" className={activeNav === '#contact' ? 'active' : ''} onClick={() => handleNavClick('#contact')}><BiMessageSquareDetail/></a>
    </nav>
  );
};

export default Nav
