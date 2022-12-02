import React, { useRef } from 'react';

import { ChakraProvider, Center, Box, Button} from '@chakra-ui/react';
import { Routes, Route } from "react-router-dom";
import { ArrowUpIcon } from '@chakra-ui/icons'


import Navigation from './components/Navigation';
import Home from './pages/Home';
import ResponsiveRedesign from './pages/ResponsiveRedesign';
import Iterative from './pages/Iterative';
import PartySafety from './pages/PartySafety';
import Development from './pages/Development';
import theme from './theme';

function App() {
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0, 
      left: 0, 
      behavior: 'smooth'
    })
  }

  return (
    <ChakraProvider theme={theme}>
      <Center style={{ transition: "background-color 200ms linear"}}>
        <Box w={{ base: '100%', xl: '8xl'}}>
          <Navigation projectsRef={projectsRef} experienceRef={experienceRef} contactRef={contactRef} />
          <Routes>
            <Route path='responsive' element={<ResponsiveRedesign />} />
            <Route path='iterative' element={<Iterative />} />
            <Route path='partysafety' element={<PartySafety />} />
            <Route path='development' element={<Development />} />
            <Route path='/' element={<Home projectsRef={projectsRef} experienceRef={experienceRef} contactRef={contactRef} />}/>
          </Routes>
          <Button 
            colorScheme='black' 
            onClick={handleScrollTop} 
            variant='outline'
            size='sm'
            position='fixed'
            bottom='20px'
            right='20px'
            zIndex={20}
            rightIcon={<ArrowUpIcon />}>
              Scroll to Top
          </Button>
        </Box>
      </Center>
    </ChakraProvider>
  );
}

export default App;
