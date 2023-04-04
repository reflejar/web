import React, { useEffect } from "react";
import Personal from "./Personal";
import "./Personal.css";
import styled from "styled-components";
import "../About/About.css";
import AOS from "aos";
import "aos/dist/aos.css";


const PersonalMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  margin: auto;
  width: 90%;

  @media (min-width: 768px){
    width: 60vw;
  }
`

const PersonalTextTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-size: 20px;

h2{
  font-size: 2.5rem;
  line-height: 20px;
  font-weight: 500;
  margin-bottom: 50px;
}

p{
  width: 90%;

  @media (min-width: 768px){
    width: 500px;
  }

  @media (min-width: 1200px){
    width: 900px;
  }
}
`

const PersonalBottomContainer = styled.div`
  margin-top: 10vh;
  display: flex;
  align-self: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: fit-content;
  margin-bottom: 10vh;

  @media (min-width: 768px){
    margin-top: 10vh;
    gap: 60px;
  }

  @media (min-width: 768px){
    margin-top: 10vh;
    gap: 80px;
  }
`

const Separador = styled.div`
  align-self: center;
  width: 50%;
  height: 10px;
  border-bottom: 1px solid #d9d9d9;
`


function PersonalContainer() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <PersonalMainContainer data-aos="fade-up" data-aos-duration="1000"  id='personalMobile'>
      <PersonalTextTop>
        <h2>Quiénes somos</h2>
        <p>
          Somos un grupo interdisciplinario con experiencia en desarrollo de software, ciencias de datos, docencia, investigación social y trabajo colectivo y en red.
        </p>
        <p>
          Nuestro trabajo está atravesado por el aprendizaje constante, el cuidado, el respeto, la colaboración  y el compromiso con los entornos que habitamos.</p>
        <p>
          Con el surgimiento de las nuevas tecnologías y con el enorme volumen de datos generados creemos fundamental su análisis y visualización para entender y visibilizar realidades.
        </p>
        <p>
        Por eso ponemos a disposición nuestro conocimiento técnico para asesorar a organizaciones, investigadores y la comunidad en general en el proceso de recolección, visualización y análisis de datos para construir capacidades en conjunto.
        </p>
      </PersonalTextTop>
      <PersonalBottomContainer>
          <Personal img="card1.jpg" title="Pili Salaberría" paragraph="Feminista. Especialista en gestionar cosas y planificar escenarios posibles. Economista también."/>
          <Personal img="card2.jpg" title="Agu Collomb" paragraph="Economista y Científico de Datos. Agradecido del blues y la literatura."/>
          <Personal img="card3.jpg" title="Simón Lisandro Ayala" paragraph="Aficionado a la carpintería. Me doy maña para geolocalizar cosas. Fan de los juegos de mesa. Cientista de Datos. Economista también."/>
          <Personal img="card4.jpg" title="Pano Valdez" paragraph="Hacker de cabeza; músico y actor de corazón. Antropólogo en potencia. Me gusta la complejidad y el caos. Siempre ututo."/>
          <Personal img="card5.jpg" title="Mati Cena Trebucq" paragraph="Ecologista. Antiespecista. Docente. Agroecología como forma de vida. Economista en deconstrucción."/>
          <Personal img="card6.jpg" title="Caro Trogliero" paragraph="Obsesionada con la resolución de problemas. Fanática de la multiplicidad de realidades que nos habitan. Feminista. Ashtangui. Cientista de Datos. Economista."/>
      </PersonalBottomContainer>
      <Separador/>
    </PersonalMainContainer>
  );
}

export default PersonalContainer;
