import React from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {ImUser} from 'react-icons/im'
import {GiWhiteBook} from 'react-icons/gi'
import {MdMiscellaneousServices} from 'react-icons/md'
import {MdContactMail} from 'react-icons/md'
import { useState } from 'react'



const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FaHome/> </a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><ImUser/> </a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><GiWhiteBook/> </a>
      <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdMiscellaneousServices/> </a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdContactMail/> </a>
      
    </nav>
  )
}

export default Nav