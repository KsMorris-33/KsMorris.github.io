import React from 'react'
import './footer.css'
import {GrFacebook} from 'react-icons/gr'
import {SiTwitter} from 'react-icons/si'

const Footer = () => {
  return (
    <footer>
      <a href="" className="footer__logo"></a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portafolio">Portafolio</a></li>
        <li><a href="#testimonios">Testimonios</a></li>
        <li><a href="#contact">Contacto</a></li>

      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><GrFacebook /></a>
        <a href="https://twitter.com"><SiTwitter /></a>
        
      </div>

      <div className="footer__copyright">
        <small> KsMorris. All rights reserved</small>
      </div>


    </footer>
  )
}

export default Footer