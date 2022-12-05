import React from 'react';
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
  Center
} from '@chakra-ui/react';

const ResponsiveRedesign = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Center>
      <Box
        px={{ base: 2, md: 5, lg: 10 }}
        py={{ base: 2, md: 5, lg: 5 }}
        // width={{ lg: '66%'}}
        mt={{ base: 14, lg: 20 }}
        minW='sm' maxW='5xl'
      >
        <Heading as='h1' pb={{ base: 1, md: 2, lg: 3 }} mt={20}>Responsive Redesign</Heading>
        <Text
          fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
          color={colorMode === 'dark' ? 'gray.400' : 'gray.800'}
        >
          Redesigning, prototyping, and implementing a responsive website for Cheng Du Taste.
        </Text>
        <Box maxW='xl' py={5}>
          <Image src={process.env.PUBLIC_URL + '/Responsive_Card.png'} />
        </Box>

        <Heading size='lg' as='h2' pb={{ base: 1, md: 2, lg: 3 }}>Background</Heading>
        <Flex wrap='wrap' pb={5}>
          <Box minW='sm' maxW='md' pr={5}>
            <Text py={2}>Cheng Du Taste is a Sichuanese restaurant in Providence, Rhode Island. Customers can order from the restaurant on the website, or they can order by phone or third-party food delivery apps.</Text>
            <Text py={2}>I chose to redesign Cheng Du Taste's website because I found it hard to use last year, and ended up ordering from the restaurant using Uber Eats rather than the restaurant's website. I wanted to improve the design so that potential customers have a better experience using the site.</Text>
            <Text py={2}>The link to Cheng Du Taste's website can be found <Link target="_blank" rel="noopener noreferrer" href='https://chengdutasteonline.com/'><Text as='u'>here</Text>.</Link></Text>
          </Box>
          <Box minW='sm' maxW='md'>
            <Image src={process.env.PUBLIC_URL + '/original_chengdu.PNG'} />
          </Box>
        </Flex>

        <Heading size='lg' as='h2' pb={{ base: 1, md: 2, lg: 3 }}>Objective</Heading>
        <Text pb={2}>My aim was to: </Text>
        <UnorderedList pb={{ base: 5, lg: 10 }}>
          <ListItem><Text as='b'>Analyze and identify flaws</Text> in the Cheng Du Taste website</ListItem>
          <ListItem>Create <Text as='b'>low-fidelity</Text> and <Text as='b'>high-fidelity</Text> prototypes for a variety of screen sizes</ListItem>
          <ListItem>Build a <Text as='b'>responsive website</Text> based on the prototypes</ListItem>
        </UnorderedList>

        <Heading size='lg' as='h2' pb={{ base: 1, md: 2, lg: 3 }}>Identifying Usability Problems</Heading>

        <Heading size='md' as='h3' pb={{ base: 1, md: 2, lg: 3 }}>Usability</Heading>
        <Text pb={2}>I found many usability problems on the home page:</Text>
        <UnorderedList pb={{ base: 5, lg: 10 }}>
          <ListItem>There is <Text as='b'>no feedback</Text> when pressing buttons</ListItem>
          <ListItem>I often expect the button to close a popup to be on the top, but it is on the bottom</ListItem>
          <ListItem>On the mobile site, the popup covers the order online button, which can be confusing for the user</ListItem>
          <ListItem>It's <Text as='b'>hard to read the popup</Text> since it's not completely opaque against the background, and has white text on a red background</ListItem>
          <ListItem>The <Text as='b'>map doesn't show where the restaurant is</Text>, since there is no pin for the location</ListItem>
          <ListItem>When you hover over some of the photos, the label just says "Photo" and does not have a specific image description</ListItem>
          <ListItem><Text as='b'>Having three separate pages is unnecessary</Text>; the content on the gallery and directions page is already on the home page</ListItem>
        </UnorderedList>

        <Heading size='md' as='h3' pb={{ base: 1, md: 2, lg: 3 }}>Accessibility</Heading>
        <Text pb={2}>I used WebAIM WAVE to detect potential accessibility problems on the current website. These were the accessibility problems that it found:</Text>
        <UnorderedList pb={5}>
          <ListItem>The website has <Text as='b'>very little alt text</Text> for images, even though the site itself has a lot of image content</ListItem>
          <ListItem>There is <Text as='b'>very low contrast</Text> between the text and the background</ListItem>
        </UnorderedList>
        <Text pb={{ base: 5, lg: 10 }}>Generally, I agreed with the problems detected. Alternative text and sufficient contrast are very important to make websites accessible, especially for viewers who may use screen readers and/or have limited eyesight.</Text>

        <Heading size='lg' as='h2' pb={{ base: 1, md: 2, lg: 3 }}>Visual Redesign</Heading>

        <Heading size='md' as='h3' pb={{ base: 1, md: 2, lg: 3 }}>Low Fidelity Prototypes</Heading>
        <Text pb={2}>I used Balsamiq to create 3 wireframes for each type screen size (mobile, tablet, and desktop). For the low-fidelity prototypes, I wanted to focus on the usability problems that I found. The major changes that I made were:</Text>
        <UnorderedList pb={5}>
          <ListItem><Text as='b'>Making website to be a single page website rather than multi page.</Text>This optimizes the experience for mobile users who are used to scrolling, and minimizes repeated information.</ListItem>
          <ListItem><Text as='b'>Making the navbar fixed at the top, where selecting the link scrolls to the corresponding page position. </Text>This allows users, especially those on a laptop, to navigate the page smoothly.</ListItem>
          <ListItem><Text as='b'>Adding labels to the images in the image gallery.</Text>This allows users to learn what dish each image shows.</ListItem>
          <ListItem><Text as='b'>Putting the important information, like the phone number and address on the splash page.</Text>Users should not have to scroll to find important information.</ListItem>
          <ListItem><Text as='b'>Removing the popup from the website. </Text>The modal was more confusing and helpful, and putting the important information in the home page made more sense.</ListItem>
          <ListItem><Text as='b'>Fixing the embedded map to show the restaurant location correctly.</Text></ListItem>
        </UnorderedList>
        <Text pb={2}>Other usability/accessibility issues, such as button feedback, labels, alt text, and aria labels were focused on in the high-fidelity prototypes.</Text>
        <Image
          src={process.env.PUBLIC_URL + '/responsive_lofi.png'}
          maxW='100%'
        />

        <Heading size='md' as='h3' pb={{ base: 1, md: 2, lg: 3 }}>Style Guide</Heading>
        <Text pb={2}>I created a visual design style guide to show the colors, typography, and reusable component states.</Text>
        <Image
          src={process.env.PUBLIC_URL + '/responsive_style_guide.png'}
          maxW={{ base: '100%', xl: '2xl' }} />

        <Heading size='md' as='h3' py={{ base: 1, md: 2, lg: 3 }}>High Fidelity Prototypes</Heading>
        <Text pb={2}>Next, I created high fidelity prototypes for each screen size. The flexbox, padding, margins, and components like buttons and the navbar were mostly configured using Bootstrap classes.</Text>
        <Stack w='100%' direction='row' align='start'>
          <Image maxW='sm' objectFit='contain' src={process.env.PUBLIC_URL + '/responsive_web.png'} />
          <Image maxW='sm' objectFit='contain' src={process.env.PUBLIC_URL + '/responsive_tablet.png'} />
          <Image maxW='3xs' objectFit='contain' src={process.env.PUBLIC_URL + '/responsive_mobile.png'} />
        </Stack>

        <Heading size='lg' as='h2' pt={{ base: 5, lg: 10 }} pb={{ base: 1, md: 2, lg: 3 }}>Responsive Redesign</Heading>
        <Text pb={2}>Finally, I created the page using HTML and CSS. The website follows the high fidelity prototypes to ensure that the website is usable and accessible. In addition to the changes made in the low fidelity prototype, all images have alt text, and the navbar has aria labels. Additionally, to line up more with the physics aspect of a user's conceptual model, I added smooth scrolling to the navbar.</Text>
        <Text pb={2}>The URL to the page is <Link>https://unemployedpangolin015.github.io/responsive-redesign/</Link>.</Text>

        <Heading size='lg' as='h2' pt={{ base: 5, lg: 10 }} pb={{ base: 1, md: 2, lg: 3 }}>Conclusion</Heading>
        <OrderedList pb={5}>
          <ListItem><Text as='b'>Simplicity in both layout and font</Text> is very important for helping users navigate a website.</ListItem>
          <ListItem>CSS Libraries like <Text as='b'>Bootstrap allow for faster iteration</Text></ListItem>
          <ListItem><Text as='b'>Formalizing the style</Text> before creating high fidelity prototypes allows for better consideration of how <Text pb={2}>component state should change to help the user.</Text></ListItem>
        </OrderedList>
      </Box>
    </Center>
  )
}

export default ResponsiveRedesign;