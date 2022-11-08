import React from 'react'
import './services.css'
import {FcCheckmark} from 'react-icons/fc'


const Services = () => {
  return (
    <section id='services' className="service__list">
      <h5>Lo que ofrezco</h5>
      <h2>Servicios</h2>

      <div className="container services__container">
        <article className='service'>      
          <ul className="service__list">
          <div>
            <h3>Diseño UI/UX</h3>
          </div>
          <li>
            <FcCheckmark className='service__list-icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <FcCheckmark className='service__list-icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            </li>
            <li>
              <FcCheckmark className='service__list-icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            </li>
            <li>
              <FcCheckmark className='service__list-icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            </li>
            <li>
              <FcCheckmark className='service__list-icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            </li>
            <li>
              <FcCheckmark className='service__list-icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            </li>
          </ul>
        </article>

{/************* FINAL LISTA UI/UX *****************/}

<article className='service'>
          <div>
            <h3>Diseño web</h3>
          </div>

          <ul className="service__list">
            <li>
              <FcCheckmark className='service__list-icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            </li>
            <li>
              <FcCheckmark className='service__list-icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            </li>
            <li>
              <FcCheckmark className='service__list-icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <FcCheckmark className='service__list-icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <FcCheckmark className='service__list-icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <FcCheckmark className='service__list-icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            </li>
          </ul>
        </article>


{/*********** FIN LISTA DESARROLLO WEB ***********/}

<article className='service'>
          <div>
            <h3>Creacion de contenido</h3>
          </div>

          <ul className="service__list">
            <li>
              <FcCheckmark className='service__list-icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <FcCheckmark className='service__list-icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <FcCheckmark className='service__list-icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            </li>
            <li>
              <FcCheckmark className='service__list-icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            </li>
            <li>
              <FcCheckmark className='service__list-icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            </li>
            <li>
              <FcCheckmark className='service__list-icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            </li>
          </ul>
        </article>
        </div>        
    </section>
  )
}

export default Services

