import React from 'react';
import './about.css';
import ME from '../../assets/me-about.jpg';
import { TbAward } from 'react-icons/tb';
import { IoIosPeople } from 'react-icons/io';
import { AiFillFolderOpen } from 'react-icons/ai';

const About = () => {
  return (
    <section id="about">
      <h5>Conoce más</h5>
      <h2>Sobre mi </h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <TbAward className="about__icon" />
              <h5> Experiencia</h5>
              <small> 2+ Años </small>
            </article>

            <article className="about__card">
              <IoIosPeople className="about__icon" />
              <h5> clientes</h5>
              <small> Creciente base de clientes </small>
            </article>

            <article className="about__card">
              <AiFillFolderOpen className="about__icon" />
              <h5> Proyectos</h5>
              <small> 10+ Proyectos culminados </small>
            </article>
          </div>

          <p></p>

          <a href="#contact" className="btn btn-primary">
            Contactame
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
