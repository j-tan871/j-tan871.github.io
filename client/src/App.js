import React from 'react';

import { ChakraProvider, Center, Box } from '@chakra-ui/react';

import Navigation from './components/Navigation';
import About from './components/About';
import Work from './components/Work';
import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Center style={{ transition: "background-color 200ms linear"}}>
        <Box w={{ base: '100%', xl: '8xl'}}>
        <Navigation />
        <About />
        <Work/>
        </Box>
      </Center>
    </ChakraProvider>
  );
}

export default App;
