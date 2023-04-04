import React,{ useEffect } from 'react'
import ParticlesBg from 'particles-bg'
import styled from 'styled-components';
import useIsMobile from "../../hooks/useIsMobile.ts";
import "./Header.css"

const HeaderContainer = styled.header`
  display: flex;
  font-family: "Ubuntu", sans-serif;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  width: 100%;
  color: white;
  height: 90vh;
`

const HeaderTitleContainer = styled.div`
  width: 100%;
  height: fit-content;
  margin-top: 75px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px){
    margin-top: 30px;
  }

  @media (min-width: 1400px){
    width: 1200px;
    height: 500px;
    margin-top: 100px;
  }

  h2{
    font-size: 5rem;

    @media (min-width: 768px){
      font-size: 160px;
    }

    @media (min-width: 1400px){
      font-size: 15rem;
    }

    @media (min-width: 1600px){
      font-size: 20rem;
    }
  }

  span{
    color: #00b380;
  }
`

const HeaderTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: fit-content;
  text-align: center;
  font-size: 15px;

  @media (min-width: 768px){
    width: 90%;
    font-size: 18px;
    }

  @media (min-width: 1600px){
    width: 50%;
    font-size: 22px;
  }
`

const HeaderTextTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  font-weight: 300;
  text-align: center;
  margin-bottom: 10px;

    @media (min-width: 768px){
      width: 70%
    }

  b{
    font-weight: 400;
    font-size: 22px;

    @media (min-width: 768px){
      font-size: 24px;
    }
  }

  p{
    margin: 0;
  }

  ul{
    margin: 0;
  }
`

const HeaderTextBot = styled.div`
  width: 90%;
  font-weight: 300;
  color: white;

  @media (min-width: 1200px){
    width: 900px;  
  }
`

const HeaderSpace = styled.div`
  height: 10%;
`

function Header() {
  const isMobile = useIsMobile();

  useEffect(() => {
    document.title = `Reflejar`;
  }, []);

  return (
    <HeaderContainer>
      <HeaderTitleContainer>
        <h2>refle<span>j</span>ar</h2>
      </HeaderTitleContainer>
      <HeaderTextContainer>
        <HeaderTextTop>
          <b>Contamos historias a través del análisis de datos</b>
          <p>para</p>
          <div className='containerPara'>
            <ul>
              <li className='li1'>acercarlos a la comunidad.</li>
              <li className='li2'>la toma de conciencia.</li>
              <li className='li3'>la toma de decisiones.</li>
              <li className='li4'>la incidencia política.</li>
            </ul>      
          </div>
        </HeaderTextTop>
      </HeaderTextContainer>
      <div className="headerSpace" id='about'></div>
      {isMobile ? <ParticlesBg type="cobweb" color="#00b380" num={0} bg={true} /> : <ParticlesBg type="cobweb" color="#00b380" num={200} bg={true} />}
      
    </HeaderContainer>
  )
}

export default Header