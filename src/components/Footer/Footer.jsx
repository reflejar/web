import React from 'react'
import "./Footer.css"
import styled from 'styled-components';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #00B380;
  height: 8vh;
  width: 100%;
`

const FooterIcons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;

  @media (min-width: 768px){
    padding-right: 20px;
    justify-content: flex-end;
    gap: 20px;
  }

  a{
    color: #662483;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  background-color: #fff;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  transition: 0.2s;

  &:hover{
    color: white;
  background-color: #662483;
  transform: scale(1.2);
  }
  }
`

function Footer() {
  return (
    <FooterContainer>
      <FooterIcons>
        <a href="#"><FaYoutube/></a>
        <a href="#"><FaInstagram/></a>
        <a href="#"><FaFacebookF/></a>
        <a href="#"><FaTwitter/></a>
        <a href="#"><FaLinkedinIn/></a>
      </FooterIcons>
    </FooterContainer>
  )
}

export default Footer