import React from 'react';
import './portafolio.css';
import IMG1 from '../../assets/portfolio1.jpg';

const Portafolio = () => {
  return (
    <section id="portafolio">
      <h5>Ultimos proyectos</h5>
      <h2>Portafolio</h2>

      <div className="container portafolio__container">
        <article className="portafolio__item">
          <div className="portafolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Ecoomerce</h3>
          <div className="portafolio__item-cta">
            <a
              href="https://github.com/KsMorris-33/XueStore"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://xuetech.onrender.com/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portafolio;
