import {
  Text, 
  Heading,
  Box, 
  useColorMode,
} from '@chakra-ui/react';

const About = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box 
      px={{ base: 2, md: 5, lg: 10}} 
      py={{ base: 2, md: 5, lg: 5}}
      width={{ lg: '66%'}}
      mt={{ base: 5, md: 10, lg: 20}}
      >
      <Heading as='h1' pb={{ base: 1, md: 2, lg: 3}} mt={20}>Hi, I'm [name]!</Heading>
      <Text
        fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
        color={ colorMode === 'dark' ? 'gray.400' : 'gray.800'}
      >
        Student studying [concentration] at Brown. Previous SWE intern @ [company], [company].
        Looking for software engineering roles in [industry].
      </Text>
    </Box>
  )
}

export default About;