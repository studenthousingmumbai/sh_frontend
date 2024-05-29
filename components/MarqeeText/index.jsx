import React from 'react';
import styles from './style.module.css'; 

const Marquee = ({ text, marqueeOpen, setMarqueeOpen, speed = 10 }) => {
  return (
    <div className={styles.marquee}>
      <div
        className={styles.marqueeCloseButton}
        onClick={() => {
          setMarqueeOpen(!marqueeOpen)
        }}
      >
        X
      </div>
      <div className={styles.marqueeContent} style={{ animationDuration: `${speed}s` }}>
        {text}
      </div>
    </div>
  );
};

export default Marquee; 