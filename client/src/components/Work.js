import {
  Box, 
  Text, 
  Heading, 
  Grid, 
  GridItem, 
  useColorMode
} from '@chakra-ui/react';

import ProjectCard from './ProjectCard';

const Work = () => {
  return (
    <Box 
      px={{ base: 2, md: 5, lg: 10}} 
      py={{ base: 2, md: 5, lg: 10}}
      >
      <Heading as='h1' pb={{ base: 1, md: 2, lg: 3}}>Work</Heading>
      <Grid templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)'}} gap={4}>
        <GridItem rowSpan={1} colSpan={{ base: 2, md: 1 }}>
          <ProjectCard />
        </GridItem>
        <GridItem rowSpan={1} colSpan={{ base: 2, md: 1 }}>
          <ProjectCard />
        </GridItem>
        <GridItem rowSpan={1} colSpan={{ base: 2, md: 1 }}>
          <ProjectCard />
        </GridItem>
        <GridItem rowSpan={1} colSpan={{ base: 2, md: 1 }}>
          <ProjectCard />
        </GridItem>
      </Grid>
    </Box>
  )
}

export default Work;