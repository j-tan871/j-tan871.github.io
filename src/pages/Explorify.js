import {
  Box,
  Text,
  Heading,
  Image,
  useColorMode
} from '@chakra-ui/react';

const Explorify = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      px={{ base: 2, md: 5, lg: 10 }}
      py={{ base: 2, md: 5, lg: 5 }}
      // width={{ lg: '66%'}}
      mt={{ base: 14, lg: 20 }}
      minW='sm' maxW='5xl'
    >
      <Heading as='h1' pb={{ base: 1, md: 2, lg: 3 }} mt={20}>Explorify</Heading>
      <Text
        fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
        color={colorMode === 'dark' ? 'gray.400' : 'gray.800'}
      >
        Developing a web application that ranks and recommends an artist's songs based on a user's Spotify profile.
      </Text>
      <Box maxW='xl' py={5}>
        <Image src={process.env.PUBLIC_URL + '/Explorify_Card.png'} />
      </Box>

      <Heading size='lg' as='h2' pb={{ base: 1, md: 2, lg: 3 }}>Background</Heading>
      <Heading size='lg' as='h2' pb={{ base: 1, md: 2, lg: 3 }}>Objective</Heading>
      <Heading size='lg' as='h2' pb={{ base: 1, md: 2, lg: 3 }}>Research</Heading>
      <Heading size='lg' as='h2' pb={{ base: 1, md: 2, lg: 3 }}>Design Iterations</Heading>
      <Heading size='lg' as='h2' pb={{ base: 1, md: 2, lg: 3 }}>Implementation</Heading>
      <Heading size='lg' as='h2' pb={{ base: 1, md: 2, lg: 3 }}>Conclusion</Heading>
    </Box>

  )
}

export default Explorify;