import React, { useState, useEffect } from 'react';
import styles from './BotaoUp.module.css';

const BotaoUp = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {showButton && (
       <button className={styles.btn_subir} onClick={scrollToTop}>
  <span className={styles.arrow}></span>
</button>
      )}
    </>
  );
};

export default BotaoUp;