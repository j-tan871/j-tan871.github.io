import {
  Box,
  Heading,
  Text,
  useColorMode, 
  Image, 
  Link, 
  Flex, 
  UnorderedList, 
  OrderedList,
  ListItem, 
  Stack, 
  Grid, 
  GridItem,
  Center
} from '@chakra-ui/react';
const Iterative = () => {
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
      <Heading as='h1' pb={{ base: 1, md: 2, lg: 3}} mt={20}>Iterative Design for Pursuit</Heading>
      <Text
      fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
      color={ colorMode === 'dark' ? 'gray.400' : 'gray.800'}
    >
      Designing a user interface for Pursuit, a YCombinator startup
    </Text>
    <Box maxW='xl' py={5}>
      <Image src={process.env.PUBLIC_URL + '/Iterative_Card.png'}/>
    </Box>

    <Heading size='lg' as='h2' pb={{ base: 1, md: 2, lg: 3}}>Background</Heading>
    <Flex wrap='wrap' pb={5}>
      <Box minW='sm' maxW='5xl' pr={5}>
        <Text py={2}>Pursuit is a YCombinator startup whose goal is to create a marketplace for lodging and guided outdoor experiences in rugged and beautiful natural locations. I worked on designing an 
        interactive mobile interface using Figma with a team of 3 other students, solely based on the description of the startup.</Text>
      </Box>
    </Flex>

    <Heading size='lg' as='h2' pb={{ base: 1, md: 2, lg: 3}}>Objective</Heading>
    <Text pb={2}>Our aim was to: </Text>
    <UnorderedList pb={{ base: 5, lg: 10}}>
      <ListItem><Text as='b'>Mock up a solution to the startup's concept</Text> by creating low-fidelity and high-fidelity prototypes</ListItem>
      <ListItem>Modify the interface based on <Text as='b'>peer feedback</Text></ListItem>
      <ListItem>Further improve the interface by<Text as='b'> conducting user testing on a final revised prototype</Text></ListItem>
    </UnorderedList>

    <Heading size='lg' as='h2' pb={{ base: 1, md: 2, lg: 3}}>Sketching and Wireframing</Heading>
    
    <Heading size='md' as='h3' pb={{ base: 1, md: 2, lg: 3}}>Sketching</Heading>
    <Text pb={2}>We created 4 different possible designs for Pursuit. In these sketches, we are designing interfaces such as home screen, browsing for experiences or bookings, a screen for an individual experience or booking, help page, etc. in different design settings.</Text>
    <Grid templateRows='repeat(2, 1fr)' templateColumns='repeat(2, 1fr)' maxW='4xl'>
      <GridItem rowSpan={1} colSpan={1}>
        <Center as='b'>Sketch 1</Center>
        <Image src={process.env.PUBLIC_URL + '/sketch1.png'}/>
      </GridItem>
      <GridItem rowSpan={1} colSpan={1}>
        <Center as='b'>Sketch 2</Center>
        <Image src={process.env.PUBLIC_URL + '/sketch2.png'}/>
      </GridItem>
      <GridItem rowSpan={1} colSpan={1}>
        <Center as='b'>Sketch 3</Center>
        <Image src={process.env.PUBLIC_URL + '/sketch3.png'}/>
      </GridItem>
      <GridItem rowSpan={1} colSpan={1}>
        <Center as='b'>Sketch 4</Center>
        <Image src={process.env.PUBLIC_URL + '/sketch4.png'}/>
      </GridItem>
      
    </Grid>

    <Heading size='md' as='h3' pb={{ base: 1, md: 2, lg: 3}}>Low Fidelity Prototypes</Heading>
    <Text>Based on the above sketches, we made 5 low-fidelity prototypes:</Text>
    <Image src={process.env.PUBLIC_URL + '/lowfi.png'} maxW={{base: '100%', lg: '4xl'}}/>

    <Heading size='md' as='h3' pb={{ base: 1, md: 2, lg: 3}}>High Fidelity Prototypes</Heading>
    <Text>Once we finished our lo-fi wireframes, we then developed a high fidelity Figma prototype.</Text>
    <Image src={process.env.PUBLIC_URL + '/hi-fi.png'} maxW={{base: '100%', lg: '4xl'}}/>
    <Text pb={2}>Below is a short demonstration of our prototype in use: </Text>
    <Image pb={5} src={process.env.PUBLIC_URL + '/hi-fi-gif.gif'} h='20rem'/>
    
    <Heading size='lg' as='h2' pt={{ base: 5, lg: 10}} pb={{ base: 1, md: 2, lg: 3}}>Critiques and Modifications</Heading>
    <Text>We received critiques from other students in our studio section based on the high fidelity prototypes. Below is a summary of the critiques, and the modifications we made:</Text>
    <Image pb={5} src={process.env.PUBLIC_URL + '/critique-table.PNG'} maxW={{base: '100%', lg: '4xl'}} />

    <Text>Then, we created a new set of prototypes.</Text>
    <Image pb={5} src={process.env.PUBLIC_URL + '/updated_hifi.png'} maxW={{base: '100%', lg: '4xl'}} />
    
    <Text>Below is a video demonstration of the revised prototypes:</Text>
    <Image pb={5} src={process.env.PUBLIC_URL + '/revised-prototype.gif'} h='20rem'/>

    <Heading size='lg' as='h2' pt={{ base: 5, lg: 10}} pb={{ base: 1, md: 2, lg: 3}}>User Testing and Analysis of Results</Heading>
    <Text pb={2}>With the newly redesigned mockup, we tasked three test agents with using the Pursuit prototype to browse available guided outdoor experiences before booking a specific experience.</Text>

    <Text pb={2}>Test agents were given the following context before they began using the prototype:</Text>
    <Text pb={2} pl={2}>Pursuit is a marketplace for finding and booking outdoor lodging and guided experiences. Imagine you are looking to book a guided outdoor experience using the Pursuit mobile app.</Text>
    <Text pb={2} pl={2}>Note that you will be interacting with a mockup made through prototyping software, rather than an actual mobile app. Not all buttons are clickable and input fields are not interactive. However, everything you need to complete the specified task has been built and can be reached by navigating through the app.</Text>
    <Text pb={5} pl={2}>Please think out loud as you perform the specified task.</Text>

    <Text>Then, test agents were given the following tasks:</Text>
    <OrderedList pl={2} pb={5}>
      <ListItem>From the landing page, in your own words, what do you think you can do using this app?</ListItem>
      <ListItem>Browse the available guided outdoor experiences</ListItem>
      <ListItem>Book the Catskills mountain hike.</ListItem>
      <ListItem>After completing the booking, review the details of your Catskills mountain hike booking.</ListItem>
      <ListItem>Try navigating back to the home page at some point while performing the tasks.</ListItem>
    </OrderedList>

    <Text pb={2}>For tasks 2-5, test agents were prompted to answer whether they were succesful at the task (Yes/No) and to rate the difficulty of the task (on a five-point scale from very difficult to very easy).</Text>

    <Text pb={2}>Lastly, test agents were given the following short-answer questions:</Text>
    <UnorderedList pb={5}>
      <ListItem>How easy or difficult was it for you to complete the specified tasks?</ListItem>
      <ListItem>What were points of confusion for you while using the app, if any?</ListItem>
      <ListItem>Describe your experience navigating between pages on the app.</ListItem>
      <ListItem>Please feel free to share any other feedback you have regarding the app, including likes and dislikes.</ListItem>
    </UnorderedList>

    <Heading size='md' as='h3' pb={{ base: 1, md: 2, lg: 3}}>Results and Analysis</Heading>
    <Text pb={2}>We received the results of our user testing, which indicated that test agents were able to succesfully complete all tasks but also highlighted areas for improvement.</Text>
    <Text pb={2}>Videos of agents completing our test can be accessed at the following links: User 1, User 2, User 3. GIFs of selected portions of the user testing are included below:</Text>
    <Flex pb={5}>
      <Image src={process.env.PUBLIC_URL + '/user1.gif'} pr={2} h='20rem'/>
      <Image src={process.env.PUBLIC_URL + '/user1.gif'} pr={2} h='20rem'/>
      <Image src={process.env.PUBLIC_URL + '/user1.gif'} h='20rem'/>
    </Flex>

    <Text pb={2}>From reviewing the user testing sessions, we obtained the following takeaways:</Text>
    <UnorderedList pb={5}>
      <ListItem>All users successfully completed the overarching task of browsing outdoor experiences and then booking the Catskills mountain hike with ease. Referring to the numbered tasks above, the success rate for 2 and 3 was 100% with all testers rating the task as "Very Easy".</ListItem>
      <ListItem>Users understood the back arrow and home button navigation well (with 100% success on task 5 and all testers rating it "Very Easy").</ListItem>
      <ListItem>Each tester misunderstood the bottom navigation bar, with general confusion on the meanings of the icons. For example, one user interpreted the tent icon as a button for booking experiences, when in reality, it is for booking lodging.</ListItem>
      <ListItem>While working on task 4, one user was frustrated that there was no page for reviewing already-booked lodging and experiences.</ListItem>
      <ListItem>Testers appreciated the visual design of the app, particularly the large photos, but some desired additional photos for each experience.</ListItem>
    </UnorderedList>

    <Text pb={2}>We were happy to see user success on the given tasks! We were surprised by the confusion on the bottom navigation bar but grateful to have identified areas for improvement from the user testing. If we were to iterate on our designs once more, we would:</Text>
    <UnorderedList pb={5}>
      <ListItem>Choose more clear icons for the bottom navigation bar as well as include text describing what each icon navigates to</ListItem>
      <ListItem>Add in a page for viewing already-booked lodging and experiences</ListItem>
      <ListItem>Add more photos for each experience</ListItem>
    </UnorderedList>
  
    <Heading size='lg' as='h2' pt={{ base: 5, lg: 10}} pb={{ base: 1, md: 2, lg: 3}}>Conclusion</Heading>
    <Text pb={2}>In this project, we went through the full design progress and iterated on our design based on various feedback. During this process, we learned:</Text>
    <OrderedList pb={5}>
      <ListItem><Text as='b'>User testing and feedback is important!</Text> Through critiques and user testing, we discovered places our design could be improved that we had not noticed before.</ListItem>
      <ListItem>Designing for mobile applications requires greater consideration of things such as <Text as='b'>accessibility</Text> (e.g. larger font and button tap sizes) to improve usability.</ListItem>
    </OrderedList>
  </Box>
    </Center>
  )
}

export default Iterative;