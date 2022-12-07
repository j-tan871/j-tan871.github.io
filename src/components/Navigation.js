import React from 'react';

import {
  Text,
  HStack,
  Flex,
  Link,
  Spacer,
  useBreakpointValue,
  Button,
  Tooltip,
  useColorMode
} from '@chakra-ui/react';

import {
  SunIcon,
  MoonIcon
} from '@chakra-ui/icons';

import {
  Link as Link1, 
  useLocation
} from 'react-router-dom';

const Navigation = (props) => {
  const isDesktop = useBreakpointValue({ base: false, lg: true })

  const { colorMode, toggleColorMode } = useColorMode();

  const location = useLocation().pathname;

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0, 
      left: 0, 
      behavior: 'smooth'
    })
  }

  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - 120,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Flex
      direction={{ base: 'column', lg: 'row' }}
      px={{ base: 2, md: 5, lg: 10 }}
      py={{ base: 1, md: 2, lg: 3 }}
      position='fixed'
      zIndex={20}
      backdropFilter="blur(5px)"
      w={'100%'}
      // w={{ base: '100%', lg: '6xl' }}
    >
      <Link1 to='/' onClick={handleScrollTop}>
        <Link>
          <Text
            bgGradient='linear(to-r, #7928CA, #FF0080)'
            bgClip='text'
            fontSize={{ base: '5xl', md: '5xl', lg: '6xl' }}
            fontWeight='extrabold'
          >
            [name]
          </Text>
        </Link>
      </Link1>
      <Spacer
        style={{ display: isDesktop ? 'flex' : 'none' }}
      />
      <HStack>
        <Link1 to='/#projects' style={{ display: location === '/' ? 'flex' : 'none'}}>
          <Link 
            fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }} 
            pr={{ base: 1, md: 2, lg: 3 }} 
            color={colorMode === 'dark' ? 'white' : 'gray.800'}
            onClick={() => {handleScroll(props.projectsRef)}}
          >
            Projects
          </Link>
        </Link1>
        <Link1 to='/#experience' style={{ display: location === '/' ? 'flex' : 'none'}}>
        <Link 
          fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }} 
          pr={{ base: 1, md: 2, lg: 3 }} 
          color={colorMode === 'dark' ? 'white' : 'gray.800'}
          onClick={() => {handleScroll(props.experienceRef)}}
          >
            Experience
          </Link>
        </Link1>
        <Link1 to='/#contact' style={{ display: location === '/' ? 'flex' : 'none'}}>
          <Link 
            fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }} 
            pr={{ base: 1, md: 2, lg: 3 }} 
            color={colorMode === 'dark' ? 'white' : 'gray.800'}
            onClick={() => {handleScroll(props.contactRef)}}
          >
            Contact
          </Link>
        </Link1>
        <Tooltip label={colorMode === 'dark' ? 'Click for light mode' : 'Click for dark mode'}>
          <Button
            variant='ghost'
            colorScheme='gray'
            onClick={toggleColorMode}
          >
            <SunIcon
              style={{ display: colorMode === 'dark' ? 'block' : 'none' }}
              boxSize={{ base: 4, md: 6, lg: 7 }}
              color={colorMode === 'dark' ? 'gray.400' : 'gray.800'}
            />
            <MoonIcon
              style={{ display: colorMode === 'dark' ? 'none' : 'block' }}
              boxSize={{ base: 4, md: 6, lg: 7 }}
              color={colorMode === 'dark' ? 'gray.400' : 'gray.800'}
            />
          </Button>
        </Tooltip>
      </HStack>
    </Flex>);
}

export default Navigation;