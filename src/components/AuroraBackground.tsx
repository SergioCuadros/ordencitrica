// src/components/AuroraBackground.tsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AuroraBackground = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="%2355307d" fill-opacity="1" d="M0,96L48,133.3C96,171,192,245,288,245.3C384,245,480,171,576,165.3C672,160,768,224,864,213.3C960,203,1056,117,1152,74.7C1248,32,1344,32,1392,32L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>');
background-size: cover;
background-repeat: no-repeat;

  z-index: -1;
`;

const Aurora: React.FC = () => {
  return (
    <AuroraBackground
      animate={{
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        repeatType: 'mirror',
      }}
    />
  );
};

export default Aurora;