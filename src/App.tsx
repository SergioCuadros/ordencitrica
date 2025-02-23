// src/App.tsx
import React from 'react';
import styled from 'styled-components';
import Aurora from './components/AuroraBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cards from './components/Cards'
import CardsBlue from './components/CardsBlue';

const Container = styled.div`
  position: relative;
  z-index: 1;
  padding: 20px;
  color: white;
  text-align: center;
`;

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Aurora />
      <Hero />
      <CardsBlue />
      {/* <Cards /> */}
      <Container>
        <h1>orden</h1>
      </Container>
    </>
  );
};

export default App;