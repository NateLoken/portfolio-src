import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Nathaniel Loken</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://facebook.com/nate.loken'><FaFacebookF /></a>
        <a href='https://instagram.com/nate_loken/'><FiInstagram /></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Nathaniel Loken. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
