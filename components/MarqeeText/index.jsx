import React from 'react';
import styles from './style.module.css'; 

const Marquee = ({ text, speed = 10 }) => {
  return (
    <div className={styles.marquee}>
      <div className={styles.marqueeContent} style={{ animationDuration: `${speed}s` }}>
        {text}
      </div>
    </div>
  );
};

export default Marquee; 