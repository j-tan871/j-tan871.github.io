import About from '../components/About';
import Work from '../components/Work';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

const Home = (props) => {
  return <>
    <About />
    <Work projectsRef={props.projectsRef}/>
    <Experience experienceRef={props.experienceRef}/>
    <Contact contactRef={props.contactRef}/>
  </>
}

export default Home;