import React from 'react';

import { ChakraProvider, Center, Box } from '@chakra-ui/react';
import { Routes, Route, Outlet, Link } from "react-router-dom";

import Navigation from './components/Navigation';
import Home from './pages/Home';
import ResponsiveRedesign from './pages/ResponsiveRedesign';
import Iterative from './pages/Iterative';
import PartySafety from './pages/PartySafety';
import Development from './pages/Development';
import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Center style={{ transition: "background-color 200ms linear"}}>
        <Box w={{ base: '100%', xl: '8xl'}}>
        <Navigation />
        <Routes>
          <Route path='responsive' element={<ResponsiveRedesign />} />
          <Route path='iterative' element={<Iterative />} />
          <Route path='partysafety' element={<PartySafety />} />
          <Route path='development' element={<Development />} />
          <Route path='/' element={<Home />}/>
        </Routes>
        </Box>
      </Center>
    </ChakraProvider>
  );
}

export default App;
