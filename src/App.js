import './App.css';
import NavBar from "./components/NavBar/NavBar"
import Divisor from "./components/NavBar/Divisor"
import Header from "./components/Header/Header"
import AboutContainer from "./components/About/AboutContainer"
import Projects from './components/Projects/ProjectsContainer';
import PersonalContainer from './components/Personal/PersonalContainer';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
    <NavBar/>
      <Divisor/>
      <Header/>
      <AboutContainer/>
      <Projects/>
      <PersonalContainer/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
