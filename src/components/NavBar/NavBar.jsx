import React, { useState } from 'react'
import "./NavBar.css"
import styled from 'styled-components';
import useIsMobile from "../../hooks/useIsMobile.ts";
import useBodyScrollLock from '../../hooks/useBodyScrollLock';

const NavBarContainer = styled.nav`
  position: fixed;
  font-family: 'Ubuntu', sans-serif;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 10vh;
  background-color: #662483;
  z-index: 50;
`

const NavBarTitleContainer = styled.div`
  display: flex;
  width: 300px;
  height: 100%;

  @media (min-width: 1400px){
    width: 400px;
  }
`

const NavBarTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  width: 100%;
  margin: 0;
  padding: 0;
  line-height: 0;
  color: white;

  h1{
    animation-name: appear;
    animation-duration: 1s;
    font-size: 30px;

    @media (min-width: 992px){
      font-size: 40px;
    }

    @media (min-width: 1400px){
      font-size: 45px;
    }

    @media (min-width: 1600px){
      font-size: 55px;
    }

    span{
      color: #00b380;
    }
  }
`

const NavBarLinks = styled.div`
  display: flex;
  height: 100%;
  

  ul{
    display: flex;
    gap: 25px;
    width: 100%;
    height: 100%;
    justify-content: space-evenly;
    align-items: center;
    margin: 0;
    white-space: nowrap;  
    margin-right: 25px;

  li{
    border-top: 1vh solid rgba(0, 0, 0, 0);
  border-bottom: 1vh solid rgba(0, 0, 0, 0);
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-decoration: none;
  list-style: none;
  transition: 0.3s;

  &:hover{
    border-top: 1vh solid white;
  }

  a{
    display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: white;
  font-size: 20px;
  font-weight: 700;
  height: 100%;
  width: 100%;

    @media (min-width: 1300px){
      font-size: 1.5rem;
    }
  }
  }
  }
`

const NavMobileIcon = styled.div`
  position: fixed;
  right: 10px;
  top: 10px;
  background-color: #ffffff76;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-image: url("./images/menu-icon.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 70%;
  z-index: 99;
`

const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  position: fixed;
  width: 100vw;
  height: 400px;
  background-color: #662483;
  z-index: 100;
  padding-top: 10px;
`

const LinksContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  font-size: 25px;
  
  a{
    font-family: "Ubuntu", sans-serif;
    text-decoration: none;
    color: white;
    font-weight: 400;
  }
`



function NavBar() {
  const [isLocked, toggle] = useBodyScrollLock();
  const [isActive, setIsActive] = useState(false)
  const isMobile = useIsMobile();
  const [scroll, setScroll] = useState(false);
  const changeClass=()=>{
    const scrollValue=document.documentElement.scrollTop;
    if(scrollValue>500)
    {
      setScroll(true);
    }
    else{
      setScroll(false);
    }
  }

  function hangleToggle(){
    setIsActive(!isActive)
    toggle()
  }

  window.addEventListener('scroll', changeClass);
  return (
    <>
    {isMobile ?
    <>
      <NavMobileIcon onClick={(e) => hangleToggle()}/>
      {isActive && 
      <Dropdown>
        <NavBarTitle>
          <h1>refle<span>j</span>ar</h1>
        </NavBarTitle>
        <LinksContainer>
          <a href="#aboutMobile" onClick={(e) => hangleToggle()}>Qué Hacemos</a>
          <a href="#projects" onClick={(e) => hangleToggle()}>Proyectos</a>
          <a href="#quienesSomos" onClick={(e) => hangleToggle()}>Quiénes somos</a>
          <a href="#contactMobile" onClick={(e) => hangleToggle()}>Contacto</a>
        </LinksContainer>
      </Dropdown>}
    </>
    :
    <NavBarContainer>
      <NavBarTitleContainer>
        <NavBarTitle>
          <div className={scroll ?"none":"navBarIcon"}></div>
          <h1 className={scroll ?"":"none"}>refle<span>j</span>ar</h1>
        </NavBarTitle>
      </NavBarTitleContainer>
      <NavBarLinks>
        <ul>
          <li>
            <a href="#about">Qué hacemos</a>
          </li>
          <li>
            <a href="#projects">Proyectos</a>
          </li>
          <li>
            <a href="#quienesSomos">Quienes somos</a>
          </li>
          <li>
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
      </NavBarLinks>
    </NavBarContainer>
  }
    </>
  )
}

export default NavBar