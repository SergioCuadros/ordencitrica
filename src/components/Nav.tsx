import {useState} from "react";
import styled from "styled-components";
import { BurgerButton } from "./BurgerButton";
import { motion } from "framer-motion";
import Logo from "../assets/logo/ordencitrica_logo_simple.png";

const Nav = () => {
    const [clicked, setClicked] = useState<boolean>(false);
    const handleClick = () => {
        setClicked(!clicked)
    }


    return (
        <Navbar>
            <ImgLogo 
                whileHover="hover" 
                whileTap="tap" 
                variants={logoAnimation}>
                <img src={Logo} alt="Logo Orden citrica" />
              
            </ImgLogo>

            <div className={`links ${clicked ? 'active' : ''}`}>
                <a onClick={handleClick} href="#H">Inicio</a>
                <a onClick={handleClick} href="#H">Hola</a>
                <a onClick={handleClick} href="#H">Que mamada es esta?</a>
                <a onClick={handleClick} href="#H">Uh? neta sigues aqui?</a>
            </div>

            <div className="burger">
             <BurgerButton clicked = {clicked} handleClick = {handleClick}/>
            </div>
            <BgDiv className={`initial ${ clicked ? 'active' : ''}`}></BgDiv>
        </Navbar>
    );
};

export default Nav;

const Navbar = styled.nav`
  background-color: #55307d;
  padding: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }

  .links{
    position:absolute;
    top: -1700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
        color: white;
        font-size: 2rem;
        display:block;
    }
    @media(min-width: 768px) {
        position: initial;
        margin: 0;
        a{
            font-size: 1rem;
            display: inline;
        }
    }
  }

  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a{
        color: white;
        font-size: 2rem;
        margin-top: 1rem;
    }
  }
  .burger{
    @media(min-width: 768px) {
        display: none;
    }
  }
`;

const ImgLogo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  cursor: pointer;

  img {
    width: 100px; /* Ajusta el tamaño según sea necesario */
    height: auto;
  }


`;

const logoAnimation = {
    hover: { scale: 1.1, rotate: [0, 10, -10, 0] },
    tap: { scale: 0.9 },
};

const BgDiv = styled.div`
    position: absolute;
    background-color: #55307d;
    top: -1000px;
    left: -1000px;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: all .6s ease;
    &.active{
        border-radius: 0 0 80% 0;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
    }
`