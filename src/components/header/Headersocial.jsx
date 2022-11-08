import React from 'react';
import { SiLinkedin } from 'react-icons/si';
import { GoMarkGithub } from 'react-icons/go';
import { FaTwitter } from 'react-icons/fa';

const Headersocial = () => {
  return (
    <div className="header__social">
      <a
        href="https://linkedin.com/kevin-s-morris-reyes-347117204/"
        target="_blank"
        rel="noreferrer"
      >
        <SiLinkedin />
      </a>
      <a href="https://github.com/KsMorris-33" target="_blank" rel="noreferrer">
        <GoMarkGithub />
      </a>
      <a
        href="https://twitter.com/Unusual_Dev"
        target="_blank"
        rel="noreferrer"
      >
        <FaTwitter />
      </a>
    </div>
  );
};

export default Headersocial;
