import {
  Box,
  Flex, 
  Link, 
  Text
} from '@chakra-ui/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = (props) => {
  return (
    <Box 
      ref={props.contactRef} 
      px={{ base: 2, md: 5, lg: 10}} 
      py={{ base: 2, md: 5, lg: 10}}
      pt={{ base: 4, md: 10, lg: 20}}
    >
      <Flex align='center' justify='center' direction={{ base: 'column', md: 'row'}}>
        <Link href='https://github.com/unemployedpangolin015'>
          <Flex align='center' justify='center' px={3} py={1}>
            <FontAwesomeIcon icon={faGithub} />
            <Text pl={2}>unemployedpangolin015</Text>
          </Flex>
        </Link>
        <Link href='https://linkedin.com/'>
          <Flex align='center' justify='center' px={3} py={1}>
            <FontAwesomeIcon icon={faLinkedin} className='h-7 w-7 mr-3' />
            <Text pl={2}>[linkedin username]</Text>
          </Flex>
        </Link>
        <Link href='mailto:jeff_huang@brown.edu'>
          <Flex align='center' justify='center' px={3} py={1}>
            <FontAwesomeIcon icon={faEnvelope} className='h-7 w-7 mr-3' />
            <Text pl={2}>[email]</Text>
          </Flex>
        </Link>
      </Flex>
    </Box>
  )
};

export default Contact;