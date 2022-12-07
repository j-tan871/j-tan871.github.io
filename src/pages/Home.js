import { Box, Center } from '@chakra-ui/react';

import About from '../components/About';
import Work from '../components/Work';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

const Home = (props) => {
  return <Center>
    <Box w={{ base: '100%', lg: '6xl', xl: '8xl'}}>
      <About />
      <Work projectsRef={props.projectsRef}/>
      <Experience experienceRef={props.experienceRef}/>
      <Contact contactRef={props.contactRef}/>
    </Box>
  </Center>
}

export default Home;