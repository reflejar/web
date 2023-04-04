import React, { useEffect } from 'react'
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column-reverse;
  align-items: center;
  height: fit-content;
  width: 100%;
  margin-bottom: 10vh;

  @media (min-width: 768px){
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
    width: 70%;
    margin-bottom: 0;
  }

  @media (min-width: 1400px){
    margin-bottom: 10vh;
  }
`

const AboutImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 300px;

  @media (min-width: 768px){
    height: 300px;
    width: 65%;
  }

  @media (min-width: 1400px){
    height: 600px;
    width: 65%;
  }
  `

const AboutImg = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`

const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  font-weight: 300;
  line-height: 27px;
  width: 90%;

  height: fit-content;
  justify-content: center;

  @media (min-width: 768px){
    height: fit-content;
    width: 400px;
  }

  @media (min-width: 1400px){
    height: fit-content;
    width: 400px;
  }
`

const AboutTextTitle = styled.div`
h3{
  font-size: 25px;
  line-height: 20px;
  font-weight: 500;

  
  @media (min-width: 768px){
    font-size: 20px;
    line-height: 25px;
  }

  @media (min-width: 1400px){
    font-size: 25px;
    line-height: 25px;
  }
}

`

const AboutTextDescripcion = styled.div`
  font-size: 18px;

  @media (min-width: 768px){
    font-size: 15px;
    line-height: 18px;
  }

  @media (min-width: 1400px){
    font-size: 20px;
    line-height: 25px;
  }


`

function About(props) {

  let { img, title, description1, description2, description3, flexDirection, reverseText, textAlign, animation, clase } = props
  
  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <AboutSection data-aos="fade-up"
    data-aos-offset="300"
    data-aos-duration="500" style={{flexDirection}}>
        <AboutImgContainer>
          <AboutImg style={{backgroundImage: `url(images/${img})`}}/>
        </AboutImgContainer>
        <AboutText className={clase} style={{alignItems: `${reverseText}`, textAlign: `${textAlign}`}}>
          <AboutTextTitle>
            <h3>{title}</h3>
          </AboutTextTitle>
          <AboutTextDescripcion>
            <p>{description1}</p>
            <p>{description2}</p>
            <p>{description3}</p>
          </AboutTextDescripcion> 
        </AboutText>
      </AboutSection>
  )
}

export default About