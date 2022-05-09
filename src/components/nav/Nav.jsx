import React, { useState } from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a className={activeNav === '#' ? 'active': ''} onClick={() => setActiveNav('#')} href='#' ><AiOutlineHome /></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a className={activeNav === '#experience' ? 'active': ''} onClick={() => setActiveNav('#experience')} href='#experience'><BiBook /></a>
      <a className={activeNav === '#contact' ? 'active': ''} onClick={() => setActiveNav('#contact')} href='#contact'><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav
