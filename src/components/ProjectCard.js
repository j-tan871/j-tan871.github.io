import {
  Card,
  CardBody,
  Text,
  Heading,
  Stack,
  Image, 
  Tag, 
  useColorMode, 
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';

import { useState } from 'react';

const ProjectCard = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const tagColor = {
    'Class Project': 'blue', 
    'Prototyping': 'purple', 
    'Web Development': 'pink', 
    'Iterative Design': 'teal',
    'Passion Project': 'green',
    'App Development': 'red',
  };

  return (
    <Link to={props.link}>
      <Card 
    boxShadow='2xl' 
    bgColor={ colorMode === 'dark' ? 'gray.800' : 'white'}
    borderRadius='0'
    style={{
      position: 'relative',
      top: hover ? '-10px' : '0px',
      transition: 'top ease 0.2s',
      height: '100%'
    }}
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave} >
      <CardBody>
        <Stack mt='6' spacing='3'>
          <Image src={process.env.PUBLIC_URL + props.image} />
          <Heading size='lg' as='h2'>{props.title}</Heading>
          <Stack wrap='wrap' direction='row' isInline align='start' justify='start' shouldWrapChildren>
            {
              props.tags.map((tag, idx) => {
                return (
                  <Tag 
                    key={idx} 
                    size={{ base: 'sm', md: 'md', lg: 'lg'}} 
                    variant={ colorMode === 'dark' ? 'outline' : 'solid'} 
                    colorScheme={tagColor[tag]}>
                    {tag}
                  </Tag>
                )})
            }
          </Stack>
          <Text fontSize={{ base: 'md', md: 'lg', lg: 'lg' }} color={ colorMode === 'dark' ? 'gray.400' : 'gray.800'}>
            {props.subtitle}
          </Text>
        </Stack>
      </CardBody>
    </Card >
    </Link>
  )
}

export default ProjectCard;