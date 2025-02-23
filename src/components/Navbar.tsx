// src/components/Navbar.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import LogoNav from '../assets/logo/ordencitrica_logo_simple.png'

// Estilos del Navbar

const Nav = styled.nav`
  background: linear-gradient(45deg,rgb(82, 0, 150),rgb(82, 0, 150));
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Logo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  cursor: pointer;
`;

const Menu = styled.ul<{ $isOpen: boolean }>`
  list-style: none;
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    top: 60px;
    right: ${({ $isOpen }) => ($isOpen ? '0' : '-100%')};
    background: linear-gradient(45deg, #f98500, #4f2e75);
    width: 100%;
    height: calc(100vh - 60px);
    transition: right 0.3s ease-in-out;
    padding: 0rem;
    margin: 0;
  }
`;

const MenuItem = styled(motion.li)`
  color: white;
  cursor: pointer;
  font-size: 1.6rem;
  &:hover {
    color: #f6d365;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }

  div {
    width: 25px;
    height: 3px;
    background: white;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  }
`;

// Animaciones de Framer Motion
const logoAnimation = {
  hover: { scale: 1.1, rotate: [0, 10, -10, 0] },
  tap: { scale: 0.9 },
};

const menuItemAnimation = {
  hover: { scale: 1.1, color: '#f6d365' },
  tap: { scale: 0.9 },
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      {/* Logo con animación */}
      <Logo
      whileHover="hover"
      whileTap="tap"
      variants={logoAnimation}
    >
      <img src={LogoNav} alt="Logo" style={{ width: "220px", height: "150px", marginRight: "10px" }} />
    </Logo>

      {/* Menú Hamburguesa */}
      <Hamburger onClick={toggleMenu}>
        <div style={{ transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
        <div style={{ opacity: isOpen ? 0 : 1 }} />
        <div style={{ transform: isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
      </Hamburger>

      {/* Menú de navegación */}
      <Menu $isOpen={isOpen}>
        <MenuItem
          whileHover="hover"
          whileTap="tap"
          variants={menuItemAnimation}
        >
          Inicio
        </MenuItem>
        <MenuItem
          whileHover="hover"
          whileTap="tap"
          variants={menuItemAnimation}
        >
          Sobre Nosotros
        </MenuItem>
        <MenuItem
          whileHover="hover"
          whileTap="tap"
          variants={menuItemAnimation}
        >
          Contacto
        </MenuItem>
      </Menu>
    </Nav>
  );
};

export default Navbar;