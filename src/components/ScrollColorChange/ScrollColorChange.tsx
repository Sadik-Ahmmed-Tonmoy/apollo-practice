import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const ScrollColorChange = () => {
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const red = Math.min(255, scrollY);
    const green = Math.max(0, Math.min(255, scrollY - 255));
    const backgroundColor = `rgb(${red}, ${green}, 0)`;

    controls.start({ backgroundColor });
  }, [scrollY, controls]);

  return (
    <motion.div
      initial={{ backgroundColor: 'red' }}
      animate={controls}
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>Your Content Goes Here</h1>
    </motion.div>
  );
};

export default ScrollColorChange;
