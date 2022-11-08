import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import Headersocial from './Headersocial'


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hola yo soy </h5>
        <h1>Kevin Morris </h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <Headersocial />

        <div className='me'>
          <img src={ME} alt='me'></img>
        </div>

        <a href='#contact' className='scroll_down'></a>

      </div>
    </header>
  )
}

export default Header