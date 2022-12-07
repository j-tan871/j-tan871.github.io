import {
  Box,
  Center,
  Text,
  Heading,
  Image,
  UnorderedList,
  ListItem,
  AspectRatio,
  useColorMode
} from '@chakra-ui/react';

const PartySafety = () => {
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
      <Heading as='h1' pb={{ base: 1, md: 2, lg: 3 }} mt={20}>Party Safety App</Heading>
      <Text
        fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
        color={colorMode === 'dark' ? 'gray.400' : 'gray.800'}
      >
        Prototyping and implementing a mobile app promoting party safety at Brown University.
      </Text>
      <Box maxW='xl' py={5}>
        <Image src={process.env.PUBLIC_URL + '/Party_Card.png'} />
      </Box>

      <Heading size='lg' as='h2' pb={{ base: 1, md: 2, lg: 3 }}>Background</Heading>
      <Text pb={2}>Party safety has become increasingly important on college campuses. 
      According to a 2019 Association of American Universities survey, 13% of college and graduate students report nonconsensual sexual contact. Parties can often be unsafe due to the use of alcohol.</Text> 
      
      <Text pb={5}>My project team at Full Stack at Brown received a request from clients to create a mobile application that allows users to view safety ratings and rate the safety of different locations so that they can make an informed decision about whether to attend a party. I worked as a fullstack engineer and designer along with two other students.</Text>
      
      <Heading size='lg' as='h2' pb={{ base: 1, md: 2, lg: 3 }}>Objective</Heading>
      <Text pb={2}>Our goal was to develop a mobile application with the following features:</Text>
      <UnorderedList pb={5} pl={{ base: 2, md: 3, lg: 5 }}>
        <ListItem>Search for dorm rooms and clubs</ListItem>
        <ListItem>View current and historical safety ratings</ListItem>
        <ListItem>Rate the safety of dorm rooms of clubs</ListItem>
      </UnorderedList>
      <Heading size='lg' as='h2' pb={{ base: 1, md: 2, lg: 3 }}>Research</Heading>
      <Text pb={2}>We looked to see if there are any existing applications that promote party safety on university campuses. 
      Currently, there are general safety apps like Walksafe, which shows crime hotspots, and Life360, which helps users share their location history.
      We felt that although those apps can help with safety, no app currently allows students to view safety ratings of specific dorms and organizations on campus.
      </Text>
      
      <Text pb={2}>Based on conversations with the client, we developed specifications for the mobile application.</Text>
      <AspectRatio ratio={3 / 4}>
        <iframe title='spec' allowFullScreen src="https://docs.google.com/document/d/e/2PACX-1vQr1UZtDpkwCZ67UPksO5Btdc1EwbsEujLJLakdYd2Xc1EJ8zGWwqvZu6HEcapk_Z86TJEj0RWcd838/pub?embedded=true"></iframe>
      </AspectRatio>
  
      <Heading size='lg' as='h2' pb={{ base: 1, md: 2, lg: 3 }}>Design Process</Heading>
      
      <Heading size='md' as='h3' pb={{ base: 1, md: 2, lg: 3 }}>Information Architecture</Heading>
      <Text pb={2}>First, we designed the information architecture to decide the flow of each page.</Text>
      <Image pb={5} src={colorMode === 'dark' ? process.env.PUBLIC_URL + '/party_information_architecture.png' : process.env.PUBLIC_URL + '/party_information_architecture_light.png'}/>
      
      <Text pb={2}>Then, we created low-fidelity prototypes to determine the layout of each page.</Text>
      <Image pb={5} src={process.env.PUBLIC_URL + '/party_lofi.png'} />
      
      <Text pb={2}>We then received feedback from our clients. Below is a summary of changes that were made. Finally, we created high-fidelity prototypes.</Text>
      <Image pb={5} src={process.env.PUBLIC_URL + '/party_hifi.png'} />
      <Heading size='lg' as='h2' pb={{ base: 1, md: 2, lg: 3 }}>Implementation</Heading>
      <Text pb={2}>Then, we worked on implementing the mobile application. 
        We used React Native for the frontend, and Node/Express and MariaDB for the backend. We decided to use React Native because we would be able to code the Android and iOS version of the application all at once. 
        We decided to use Node/Express since we could code it in JavaScript, and MariaDB because we wanted to store the data in a relational database.</Text>
      
      <Text pb={5}>A screen recording of the mobile application can be found here: </Text>
      <Image pb={5} src={process.env.PUBLIC_URL + '/partygif.gif'} />
      <Heading size='lg' as='h2' pb={{ base: 1, md: 2, lg: 3 }}>Conclusion</Heading>
      <Text pb={2}>Overall, I learned a lot from developing the mobile app. I did not have any app development or design experience, so it was very rewarding to go through the entire process of ideating and developing a product. I learned to: </Text>
      <UnorderedList pl={{ base: 2, md: 3, lg: 5}}>
        <ListItem>Work with a team to develop a product</ListItem>
        <ListItem>Develop a product from start to finish, including writing product specifications, designing prototypes, database modeling, and implementation</ListItem>
        <ListItem>Communicate with clients in order to receieve feedback</ListItem>
      </UnorderedList>
    </Box>
    </Center>
  )
}

export default PartySafety;