import {
  Text, 
  Heading,
  Box, 
  useColorMode,
  Link,
} from '@chakra-ui/react';

const About = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box 
      px={{ base: 2, md: 5, lg: 10}} 
      py={{ base: 2, md: 5, lg: 5}}
      width={{ lg: '66%'}}
      mt={{ base: 14, lg: 20}}
      >
      <Heading as='h1' pb={{ base: 1, md: 2, lg: 3}} mt={20}>Hi, I'm [name]!</Heading>
      <Text
        fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
        color={ colorMode === 'dark' ? 'gray.400' : 'gray.800'}
      >
        Senior studying Computer Science at {' '}
        <Text as='b' color={colorMode === 'light' ? 'red.600' : 'red.200'}>
          <Link target="_blank" rel="noopener noreferrer" href='https://cs.brown.edu/'>
              Brown
          </Link> 
        </Text>. Incoming SWE @{' '}
        <Text as='b' color={colorMode === 'light' ? 'purple.600' : 'purple.200'}>
          <Link target="_blank" rel="noopener noreferrer" href='https://stripe.com/'>
              Stripe
          </Link>
        </Text>
        . Previous SWE intern @{' '} 
        <Text as='b' color={colorMode === 'light' ? 'purple.600' : 'purple.200'}>
          <Link target="_blank" rel="noopener noreferrer" href='https://stripe.com/'>
              Stripe
          </Link>
        </Text>,{' '}
        <Text as='b' color={colorMode === 'light' ? 'orange.500' : 'orange.200'}>
          <Link target="_blank" rel="noopener noreferrer" href='https://amazon.com/'>
              Amazon
          </Link>
        </Text>. 
      </Text>
    </Box>
  )
}

export default About;