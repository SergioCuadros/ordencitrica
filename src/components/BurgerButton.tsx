import styled from "styled-components";

interface BurgerButtonProps {
    clicked: boolean;
    handleClick: () => void;
  }
export const BurgerButton: React.FC<BurgerButtonProps> = ({clicked, handleClick}) => {
  return (

    <Burger>
    <div onClick={handleClick} 
          className={`icon nav-icon-1 ${clicked ? 'open' : ''}`}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
    </Burger>

  )
}

const Burger = styled.div`
    .nav-icon-1{
  width: 30px;
  height: 30px;
  position: relative;
  transition: .1s;
  margin: 10px 10px;
  cursor: pointer;
  display: inline-block;
}
.nav-icon-1 span{
  width: 5px;
  height: 5px;
  background-color: #fff;
  display: block;
  border-radius: 50%;
  position: absolute;

}
.nav-icon-1:hover span{
  transform: scale(1.2);
  transition: 350ms cubic-bezier(.8, .5, .2, 1.4);
}
.nav-icon-1 span:nth-child(1){
  left: 0;
  top: 0;
}
.nav-icon-1 span:nth-child(2){
  left: 12px;
  top: 0;
}
.nav-icon-1 span:nth-child(3){
  right: 0;
  top: 0;
}
.nav-icon-1 span:nth-child(4){
  left: 0;
  top: 12px;
}
.nav-icon-1 span:nth-child(5){
  position: absolute;
  left: 12px;
  top: 12px;
}
.nav-icon-1 span:nth-child(6){
  right: 0px;
  top: 12px;
}
.nav-icon-1 span:nth-child(7){
  left: 0px;
  bottom: 0px;
}
.nav-icon-1 span:nth-child(8){
  position: absolute;
  left: 12px;
  bottom: 0px;
}
.nav-icon-1 span:nth-child(9){
  right: 0px;
  bottom: 0px;
}
.nav-icon-1.open{
  transform: rotate(180deg);
  cursor: pointer;
  transition: .2s cubic-bezier(.8, .5, .2, 1.4);
}
.nav-icon-1.open span{
  border-radius: 50%;
  transition-delay: 200ms;
  transition: .5s cubic-bezier(.8, .5, .2, 1.4);
}
.nav-icon-1.open span:nth-child(2) {
  left: 6px;
  top: 6px;
}
.nav-icon-1.open span:nth-child(4) {
  left: 6px;
  top: 18px;
}
.nav-icon-1.open span:nth-child(6) {
  right: 6px;
  top: 6px;
}
.nav-icon-1.open span:nth-child(8) {
  left: 18px;
  bottom: 6px;
}

`
