import {
  Box,
  Text,
  Heading,
  Image,
  useColorMode, 
  Center, 
  AspectRatio,
  UnorderedList,
  ListItem,
  Link,
} from '@chakra-ui/react';

const Development = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Center>
      <Box
      px={{ base: 2, md: 5, lg: 10}} 
      py={{ base: 2, md: 5, lg: 5}}
      // width={{ lg: '66%'}}
      mt={{ base: 14, lg: 20}}
      minW='sm' maxW='5xl'
      >
      <Heading as='h1' pb={{ base: 1, md: 2, lg: 3 }} mt={20}>Development</Heading>
      <Text
        fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
        color={colorMode === 'dark' ? 'gray.400' : 'gray.800'}
      >
        Developing a website that allows users to browse, filter, and sort a Pokedex.
      </Text>
      <Box maxW='xl' py={5}>
        <Image src={process.env.PUBLIC_URL + '/Development_Card.png'} />
      </Box>

      <Heading size='lg' as='h2' pb={{ base: 1, md: 2, lg: 3 }}>Background</Heading>
      <Text pb={5}>Pokemon are animals in the video game series Pokemon, first released in 1996. Every Pokemon has a name, and can be categorized by one or more types. In the game, players can battle and catch other Pokemon, and all Pokemon encountered gets stored in a Pokedex, a catalog that provides information on different species of Pokemon.</Text> 
      
      <Heading size='lg' as='h2' pb={{ base: 1, md: 2, lg: 3 }}>Objective</Heading>
      <Text pb={2}>My goal was to develop a web application that represents a basic Pokedex, with the following features:</Text>
      <UnorderedList pb={5} pl={{ base: 2, md: 3, lg: 5 }}>
        <ListItem>View information about various Pokemon, including name, picture, HP, and type</ListItem>
        <ListItem>Filter Pokemon by type and favorites</ListItem>
        <ListItem>Sort Pokemon by name and HP</ListItem>
        <ListItem>Add Pokemon to a Favorites list and view the sum of the HP</ListItem>
      </UnorderedList>
      <Heading size='lg' as='h2' pb={{ base: 1, md: 2, lg: 3 }}>Research</Heading>
      <Text pb={5}>Currently, the <Link href='https://www.pokemon.com/us/pokedex'>official Pokemon website </Link> 
        has a Pokedex page where users can browse and search for Pokemon by name, type, weakness, size, and other characteristics.
        However, there is not a way for users to bookmark Pokemon that they want to reference in the future. I decided to make a website that 
        has a "favorites" feature to solve this need.  
      </Text>
  
      <Heading size='lg' as='h2' pb={{ base: 1, md: 2, lg: 3 }}>Design Process</Heading>
      <Text pb={5}>Because of the simplicity of the website and my plan to use a component library, I only created low-fidelity prototypes to flesh out the basic layout of the page.</Text>
      <Image src={process.env.PUBLIC_URL + '/Pokedex_lofi.png'} />
      <Heading size='lg' as='h2' pb={{ base: 1, md: 2, lg: 3 }}>Implementation</Heading>
      <Text pb={2}>I implemented the website using React and Chakra UI. Some challenges I faced were:</Text>
      <UnorderedList pl={{ base: 2, md: 3, lg: 5}} pb={5}>
        <ListItem>Using an unfamiliar component library</ListItem>
        <ListItem>Learning how to pass the data through state</ListItem>
        <ListItem>Implmenting the filter and sort feature for multiple filters and sort keys</ListItem>
      </UnorderedList>

      <Text pb={5}>Below is a screen recording of the finished website. The URL of the website can be found <Link href='https://unemployedpangolin015.github.io/cs1300-development/'>here.</Link></Text>
      <Image pb={5} src={process.env.PUBLIC_URL + '/developmentgif.gif'} />

      <Heading size='lg' as='h2' pb={{ base: 1, md: 2, lg: 3 }}>Conclusion</Heading>
      <Text pb={2}>Overall, I learned a lot from designing and developing the website. These are my takeaways:</Text>
      <UnorderedList pl={{ base: 2, md: 3, lg: 5}}>
        <ListItem>Using a component library like Chakra UI allows developers to reduce effort on styling, allowing them to focus on implementation rather than minute style details.</ListItem>
        <ListItem>React props and hooks for state allow for the modification and transfer of data between components.</ListItem>
      </UnorderedList>
    </Box>
    </Center>
  )
}

export default Development;