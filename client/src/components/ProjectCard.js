import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Heading,
  Stack,
  Divider,
  ButtonGroup,
  Button,
  Image, 
  Tag, 
  HStack,
  useColorMode
} from '@chakra-ui/react';

import { useState } from 'react';

const ProjectCard = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <Card 
    boxShadow='2xl' 
    bgColor={ colorMode === 'dark' ? 'gray.800' : 'white'}
    borderRadius='0'
    style={{
      position: 'relative',
      top: hover ? '-10px' : '0px',
      transition: 'top ease 0.2s',
    }}
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave} >
      <CardBody>
        <Stack mt='6' spacing='3'>
          <Image src='redesign.PNG' />
          <Heading size='lg' as='h2'>Responsive Redesign</Heading>
          <HStack>
            <Tag size='lg' variant={ colorMode === 'dark' ? 'outline' : 'solid'} colorScheme='blue'>
              Class Project
            </Tag>
            <Tag size='lg' variant={ colorMode === 'dark' ? 'outline' : 'solid'} colorScheme='purple'>
              Iterative Design
            </Tag>
            <Tag size='lg' variant={ colorMode === 'dark' ? 'outline' : 'solid'} colorScheme='pink'>
              Prototyping
            </Tag>
          </HStack>
          <Text fontSize={{ base: 'md', md: 'lg', lg: 'xl' }} color={ colorMode === 'dark' ? 'gray.400' : 'gray.800'}>
            Identifying flaws and redesigning an existing website for Cheng Du Taste
          </Text>
        </Stack>
      </CardBody>
    </Card >
  )
}

export default ProjectCard;