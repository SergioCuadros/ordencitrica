// src/components/Hero.tsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import  LogoMain  from '../assets/logo/ordencitrica_logo_main.png';

// Estilos del Hero
const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem;
  background: transparent;
  color: white;
  min-height: 80vh;
  position: relative;
  overflow: hidden;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
`;

const HeroContent = styled.div`
  max-width: 100%;
  z-index: 2;

  @media (min-width: 768px) {
    max-width: 50%;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-family: 'Comic Sans MS', cursive, sans-serif;
  color: white;

  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

const HeroDescription = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: white;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const HeroButton = styled(motion.button)`
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  background-color: #6b5b95;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f98500;
  }

  @media (min-width: 768px) {
    padding: 1rem 2rem;
    font-size: 1.2rem;
  }
`;

const HeroIllustration = styled(motion.div)`
  width: 100%;
  height: 100px;
  background: url(${LogoMain}) no-repeat center center/contain;
  z-index: 1;
  margin-top: 2rem;

  @media (min-width: 768px) {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 40%;
    height: 100%;
    margin-top: 0;
  }
`;

// Animaciones de Framer Motion
const titleAnimation = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const descriptionAnimation = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.5 } },
};

const buttonAnimation = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 1 } },
};

const illustrationAnimation = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.5 } },
};

const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle
          initial="hidden"
          animate="visible"
          variants={titleAnimation}
        >
          ¡ORDEN CITRICA!
        </HeroTitle>
        <HeroDescription
          initial="hidden"
          animate="visible"
          variants={descriptionAnimation}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, impedit ab soluta tenetur optio hic, aliquid, recusandae aperiam neque veritatis tempore placeat ex natus! Alias nulla sint soluta quia voluptas?
        </HeroDescription>
        <HeroButton
          initial="hidden"
          animate="visible"
          variants={buttonAnimation}
        >
          ¡vISTA NUESTRO CANAL TODO QLERO!
        </HeroButton>
      </HeroContent>
      <HeroIllustration
        initial="hidden"
        animate="visible"
        variants={illustrationAnimation}
      />
    </HeroContainer>
  );
};

export default Hero;