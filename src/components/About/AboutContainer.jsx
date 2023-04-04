import React, { useEffect } from 'react'
import "./About.css"
import styled from 'styled-components';
import About from "./About"
import useIsMobile from "../../hooks/useIsMobile.ts";
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutMainContainer = styled.div`
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5vh;
  font-family: 'Ubuntu', sans-serif;

  h2{
    font-size: 2.5rem;
    font-weight: 600;
    font-weight: bold;
    margin-bottom: 10vh;

    @media (min-width: 768px){
      margin-bottom: 10vh;
    }

  }
`

function AboutContainer() {

  const isMobile = useIsMobile();
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <AboutMainContainer>
      <h2 data-aos="fade-down" id='aboutMobile'>Qué hacemos</h2>
      <About 
        clase="AboutText plataformasDescription"
        animation="fade-left"
        img="plataformas.webp"
        title="Plataformas Digitales"
        description1="Contamos historias usando datos y los reflejamos de manera accesible, clara y pedagógica a través de plataformas web."
      />
      {isMobile ?
        <About
        clase="AboutText investigacionDescription"
        animation="fade-right"
        img="investigacion.webp"
        title="Investigación"
        description1="Desde una perspectiva interdisciplinaria, contribuimos a la generación de conocimiento y acompañamos procesos de investigación a través del análisis de datos."
        description2="Y generación de informes, generación de nuevos conocimientos. Diferentes perspectivas metodológicas."
        />
        :
        <About
        clase="AboutText investigacionDescription"
        animation="fade-right"
        img="investigacion.webp"
        title="Investigación"
        description1="Desde una perspectiva interdisciplinaria, contribuimos a la generación de conocimiento y acompañamos procesos de investigación a través del análisis de datos."
        /*description2="Y generación de informes, generación de nuevos conocimientos. Diferentes perspectivas metodológicas."*/
        flexDirection="row-reverse"
        reverseText = "flex-end"
        textAlign = "end"
        />
        }
      <About
        clase="formacionesDescripcion"
        animation="fade-left"
        img="formaciones.webp"
        title="Formaciones"
        description1="Acercamos a la comunidad herramientas tecnológicas y metodologías múltiples para integrar y potenciar conocimientos."
        /*description2="Brindamos herramientas tecnológicas para personas y organizaciones interesadas en ampliar sus conocimientos en temáticas sociales."*/
        /*description3="Brindamos herramientas tecnológicas para integrar conocimientos en temáticas sociales a través del análisis y visualización de datos."*/
      />
      <div className='separador' id='projects'></div>
    </AboutMainContainer>
  )
}

export default AboutContainer