import React from 'react';
import './contact.css';
import { GoMail } from 'react-icons/go';
import { SiMessenger } from 'react-icons/si';
import { ImWhatsapp } from 'react-icons/im';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_ux9yicy',
      'template_7ci8a6e',
      form.current,
      'ufe1qN5RU5KrcGIaT'
    );

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contactame </h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <GoMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>kevin_u3@hotmail.com</h5>
            <a href="mailto:kevin_u3@hotmail.com">Enviar mensaje</a>
          </article>

          <article className="contact__option">
            <SiMessenger className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>kevin_u3@hotmail.com</h5>
            <a href="https://m.me/U3nivek" target="_blank" rel="noreferrer">
              Enviar mensaje
            </a>
          </article>
          <article className="contact__option">
            <ImWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+57 311-291-0424</h5>
            <a
              href="https://api.whatsapp.com/send?phone+573112910424"
              target="_blank"
              rel="noreferrer"
            >
              Enviar mensaje
            </a>
          </article>
        </div>

        {/* HASTA AQUI OPCIONES DE CONTACTO */}

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Nombre completo"
            required
          />
          <input type="email" placeholder="correo de contacto" required />
          <textarea
            name="message"
            cols="7"
            placeholder="Tu mensaje"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
