import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Kuldeep Singh</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/kuldeep.ponia.16/" target='_blank' rel="noreferrer"><FaFacebookF/></a>
        <a href="https://www.instagram.com/kuldeep_ponia/" target='_blank' rel="noreferrer"><FiInstagram/></a>
        <a href="https://twitter.com" target='_blank' rel="noreferrer"><IoLogoTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Kuldeep Singh. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer