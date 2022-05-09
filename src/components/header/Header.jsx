import React from 'react'
import './header.css'
import CTA from './CTA'
import Nate_Grad from '../../assets/Nate_Grad_cropped.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Nathaniel Loken</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={Nate_Grad} alt='me' />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>

  )
}

export default Header
