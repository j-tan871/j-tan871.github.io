import { useState, useEffect } from 'react';

import About from '../components/About';
import Work from '../components/Work';
import Experience from '../components/Experience';

const Home = () => {
  return <>
    <About />
    <Work />
    <Experience />
  </>
}

export default Home;