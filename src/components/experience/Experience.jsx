import React from 'react'
import './experience.css'
import {SiCheckmarx} from 'react-icons/si'

const Experience = () => {
  return (
    <section id='experience'>
    <h5>Mi experiencia</h5>
    <h2>Mis tecnologias</h2>

    <div className="container experience__container">
      <div className="experience__frontend">
        <h3> Desarrollo frontend</h3>
        <div className='experience__content'>
          <article className='experience__details'> 
          <SiCheckmarx className='experience__details-icon'/>
          <div>
            <h4>HTML</h4>
            <small className='text-light'>Avanzado</small>
          </div>          
          </article>
          <article className='experience__details'> 
          <SiCheckmarx className='experience__details-icon'/>
          <div>
            <h4>CSS</h4>
            <small className='text-light'>Intermedia</small>
          </div>
          </article>
          <article className='experience__details'> 
          <SiCheckmarx className='experience__details-icon'/>
          <div>
            <h4>JavaScript</h4>
            <small className='text-light'>Intermedia</small>
          </div>
          </article>
          <article className='experience__details'> 
          <SiCheckmarx className='experience__details-icon'/>
          <div>
            <h4>Bootstrap</h4>
            <small className='text-light'>Basica</small>
          </div>
          </article>
          <article className='experience__details'> 
          <SiCheckmarx className='experience__details-icon'/>
          <div>
            <h4>React</h4>
            <small className='text-light'>Intermedia</small>
          </div>
          </article>          
        </div>        
      </div>

      <div >
        <h3>Desarrollo Backend</h3>
      
      <div className='experience__content'>
      <article className='experience__details'> 
          <SiCheckmarx className='experience__details-icon'/>
          <div>
            <h4>Node.js</h4>
            <small className='text-light'>Basico</small>
          </div>
          </article>
          <article className='experience__details'> 
          <SiCheckmarx className='experience__details-icon'/>
          <div>
            <h4>PHP</h4>
            <small className='text-light'>Intermedia</small>
          </div>
          </article>
          <article className='experience__details'> 
          <SiCheckmarx className='experience__details-icon'/>
          <div>
            <h4>MongoDB</h4>
            <small className='text-light'>Intermedia</small>
          </div>
          </article>
          <article className='experience__details'> 
          <SiCheckmarx className='experience__details-icon'/>
          <div>
            <h4>MySQL</h4>
            <small className='text-light'>Basica</small>
          </div>
          </article>
          <article className='experience__details'> 
          <SiCheckmarx className='experience__details-icon'/>
          <div>
            <h4>AWS Amazon Web Services</h4>
            <small className='text-light'>Intermedia</small>
          </div>
          </article>
      </div>
      
        
        


      </div>
    </div>
      </section>
  )
}

export default Experience