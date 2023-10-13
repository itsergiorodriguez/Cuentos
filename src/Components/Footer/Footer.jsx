import React, { useState } from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.socialLinks}>
      <a href="https://github.com/itsergiorodriguez" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/sergio-martin-rodriguez-pro" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a
          href="#"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
          className={isHovered ? styles.hovered : ''}
        >
          {isClicked ? 'it.sergiorodriguez@gmail.com' : 'Correo'}
        </a>
        {isClicked && <div className={styles.emailDetail}>it.sergiorodriguez@gmail.com</div>}
      </div>
    </footer>
  );
};

export default Footer;
