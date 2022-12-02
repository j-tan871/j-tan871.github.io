import {
  Box, 
  Text, 
  Heading, 
  Grid, 
  GridItem, 
  useColorMode, 
  Link, 
  Image
} from '@chakra-ui/react';

import { useState, useEffect } from 'react';

import ProjectCard from './ProjectCard';

const Work = () => {
  const projects = [
    {
      title: 'Explorify',
      tags: ['Passion Project', 'Web Development'],
      subtitle: `Developing a web application that ranks and recommends an artist's songs based on a user's Spotify Profile`,
      image: '/Explorify_Card.png',
      link: '/development',
    },
    {
      title: 'Party Safety App', 
      tags: ['Passion Project', 'Prototyping', 'App Development'], 
      subtitle: 'Prototyping and implementing a mobile app promoting party safety at Brown University',
      image: '/Party_Card.png',
      link: '/partysafety'
    },
    {
      title: 'Responsive Redesign', 
      tags: ['Class Project', 'Prototyping', 'Web Development'], 
      subtitle: 'Redesigning, prototyping, and implementing a responsive website for Cheng Du Taste',
      image: '/Responsive_Card.png', 
      link: '/responsive'
    }, 
    {
      title: 'Iterative', 
      tags: ['Class Project', 'Prototyping'], 
      subtitle: 'Designing a user interface for a Pursuit, a YCombinator startup',
      image: '/Iterative_Card.png',
      link: '/iterative'
    },
    {
      title: 'Development', 
      tags: ['Class Project', 'Web Development'], 
      subtitle: 'Developing a website that allows users to browse, filter, and sort a Pokedex',
      image: '/Development_Card.png',
      link: '/development'
    }, 
  ];

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true});

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box 
      px={{ base: 2, md: 5, lg: 10}} 
      py={{ base: 2, md: 5, lg: 10}}
      >
      {/* <Heading as='h1' pb={{ base: 1, md: 2, lg: 3}}>Work</Heading> */}
      <Grid align='stretch' templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)'}} gap={4}>
        {
          projects.map((project, idx) => {
            return <GridItem rowSpan={1} colSpan={{ base: 2, md: 1 }} key={idx}>
             <ProjectCard 
              title={project.title}
              tags={project.tags}
              subtitle={project.subtitle}
              image={project.image}
              link={project.link}
             />
            </GridItem>
          })
        }
      </Grid>
      {/* {scrollPosition > 500 && (<Link href='/#top'>
            <Box position='fixed'
                bottom='20px'
                right={['16px', '84px']}
                zIndex={1}
            >
                <Image src='images/icons/top.svg'
                    w='60px'
                    h='60px'
                />
            </Box>
        </Link>)} */}
    </Box>
  )
}

export default Work;