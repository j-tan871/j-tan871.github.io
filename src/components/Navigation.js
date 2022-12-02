import React, { useState } from 'react';

import {
  Text, 
  Stack, 
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
  Link as Link1
} from 'react-router-dom';

const Navigation = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true })

  const { colorMode, toggleColorMode } = useColorMode();
  
  return (
  <Stack 
  direction={{ base: 'row'}}
  px={{ base: 2, md: 5, lg: 10}}
  py={{ base: 1, md: 2, lg: 3}}
  position='fixed'
  zIndex={20}
  backdropFilter="blur(5px)"
  width='100%'
  >
    <Link1 to='/'>
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
      style={{ display: isDesktop ? 'block' : 'none'}}
    />
    <HStack>
      {/* <Link fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }} pr={{ base: 1, md: 2, lg: 3}} color={ colorMode === 'dark' ? 'white' : 'gray.800'}>About</Link>
      <Link fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }} pr={{ base: 1, md: 2, lg: 3}} color={ colorMode === 'dark' ? 'white' : 'gray.800'}>Projects</Link>
      <Link fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }} pr={{ base: 1, md: 2, lg: 3}} color={ colorMode === 'dark' ? 'white' : 'gray.800'}>Contact</Link> */}
      <Tooltip label={ colorMode === 'dark' ? 'Click for light mode' : 'Click for dark mode'}>
      <Button 
        variant='ghost'
        colorScheme='gray'
        onClick={toggleColorMode}
        >
        <SunIcon 
          style={{ display: colorMode === 'dark' ? 'block' : 'none'}}
          boxSize={{base: 4, md: 6, lg: 7}} 
          color={ colorMode === 'dark' ? 'gray.400' : 'gray.800'}
        />
        <MoonIcon 
          style={{ display: colorMode === 'dark' ? 'none' : 'block'}}
          boxSize={{base: 4, md: 6, lg: 7}} 
          color={ colorMode === 'dark' ? 'gray.400' : 'gray.800'}
        />
      </Button>
      </Tooltip>
    </HStack>
  </Stack>);
}

export default Navigation;