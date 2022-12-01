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

const Navigation = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true })

  const { colorMode, toggleColorMode } = useColorMode();
  
  return (
  <Stack 
  direction={{ base: 'column', lg: 'row'}}
  px={{ base: 2, md: 5, lg: 10}}
  py={{ base: 1, md: 2, lg: 5}}>
    <Text
      bgGradient='linear(to-r, #7928CA, #FF0080)'
      bgClip='text'
      fontSize={{ base: '2xl', md: '5xl', lg: '7xl' }}
      fontWeight='extrabold'
    >
      Portfolio
    </Text>
    <Spacer 
      style={{ display: isDesktop ? 'block' : 'none'}}
    />
    <HStack>
      <Link fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }} pr={{ base: 1, md: 2, lg: 3}}>About</Link>
      <Link fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }} pr={{ base: 1, md: 2, lg: 3}}>Projects</Link>
      <Link fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }} pr={{ base: 1, md: 2, lg: 3}}>Contact</Link>
      <Tooltip label={ colorMode === 'dark' ? 'Click for light mode' : 'Click for dark mode'}>
      <Button 
        variant='ghost'
        colorScheme='gray'
        onClick={toggleColorMode}
        >
        <SunIcon 
          style={{ display: colorMode === 'dark' ? 'block' : 'none'}}
          boxSize={{base: 4, md: 6, lg: 7}} 
        />
        <MoonIcon 
          style={{ display: colorMode === 'dark' ? 'none' : 'block'}}
          boxSize={{base: 4, md: 6, lg: 7}} 
        />
      </Button>
      </Tooltip>
    </HStack>
  </Stack>);
}

export default Navigation;