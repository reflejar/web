import React from 'react'
import Project from "./Project"
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProyectsMainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 10vh;
  width: 100%;
  height: fit-content;
  font-family: 'Ubuntu', sans-serif;
  margin-bottom: 75px;

  @media (min-width: 768px){
    min-height: 100vh;
  }

  h2{
    font-size: 2.5rem;
    font-weight: 600;
    text-align: center;
    color: #1D1D1B;
    margin-bottom: 10vh;

  @media (min-width: 768px){
    margin-bottom: 10vh;
  }
  }
`

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 90%;
  height: fit-content;
  gap: 75px;

  @media (min-width: 768px){
    margin-bottom: 10vh;
    flex-direction: row;
    width: 70vw;
    height: fit-content;
    gap: 0;
  }
`

const Separador = styled.div`
  width: 50%;
  height: 10px;
  border-bottom: 1px solid #d9d9d9;

  @media (max-width: 767px){
    margin-top: 50px;
  }
`




function Projects() {
  return (
    <ProyectsMainContainer>
      <h2 data-aos="fade-down">Proyectos</h2>
      <ProjectsContainer>
        <Project
          title="PIS"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi maiores nostrum vel dolore, nihil debitis repellendus sint laboriosam iste. Quam."/>
        <Project
          title="MLF"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi maiores nostrum vel dolore, nihil debitis repellendus sint laboriosam iste. Quam."/>
        <Project
          title="PYEPH"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi maiores nostrum vel dolore, nihil debitis repellendus sint laboriosam iste. Quam."/>
      </ProjectsContainer>
      <Separador id="quienesSomos"/>
    </ProyectsMainContainer>
  )
}

export default Projects