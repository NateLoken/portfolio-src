import React from "react";
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';


const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com/in/nathaniel-loken-321b551b8/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
      <a href="https://github.com/NateLoken" target="_blank" rel="noreferrer"><FaGithub /></a>
    </div>
  )
}

export default HeaderSocials
