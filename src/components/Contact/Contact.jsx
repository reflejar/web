import React, { useEffect } from 'react'
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactSection = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: fit-content;
  width: 100%;
  gap: 30px;
  margin-bottom: 10vh;
  margin-top: 10vh;

  @media (min-width: 768px){
    flex-direction: row;
    width: 70vw;
    gap: 50px;
  }
`

const ContactImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
`

const ContactImg = styled.div`
  width: 200px;
  height: 200px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('./images/contact.webp');

  @media (min-width: 768px){
    width: 330px;
    height: 330px;
  }

  @media (min-width: 1400px){
    width: 500px;
    height: 500px;
  }
`

const ContactText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  flex-direction: column;
  background-color: #fff;
  font-weight: 300;
  line-height: 27px;

  @media (min-width: 768px){
    align-items: flex-start;
  }
`

const ContactTextTitle = styled.div`
  h3{
    font-size: 2.5rem;
    line-height: 20px;
    font-weight: 500;
    margin-bottom: 50px;
  }
`

const ContactTextDescription = styled.div`
  font-size: 20px;
  width: 90%;
  text-align: center;

  @media (min-width: 768px){
    width: 400px;
    text-align: start;
  }

  b{
    font-weight: 500;
  }

  p{
    margin-top: 30px;
  }
`

const ContactButton = styled.button`
  width: 300px;
  margin-top: 5vh;
  background-color: #662483;
  color: white;
  padding: 15px;
  border-radius: 25px;
  font-size: 30px;
  border: none;

  &:hover{
    background-color: #470f4c;
  }

  &:active{
    background-color: #795688;
  }
`





function Contact(props) {

  let { animation } = props
  
  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <ContactSection data-aos="fade"
    data-aos-offset="300"
    data-aos-duration="500" id='contactMobile'>
        <ContactImgContainer>
          <ContactImg/>
        </ContactImgContainer>
        <ContactText>
            <ContactTextTitle>
                <h3>Contacto</h3>
            </ContactTextTitle>
            <ContactTextDescription>
              <b>Si tenes datos y queres contar una historia, ¡escribinos!</b>
            </ContactTextDescription>
            <ContactButton>CTA</ContactButton>
        </ContactText>
      </ContactSection>
  )
}

export default Contact