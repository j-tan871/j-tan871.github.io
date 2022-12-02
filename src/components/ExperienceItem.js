import {
  Text,
  Box,
  Image,
  Card, 
  CardBody, 
  useColorMode,
} from '@chakra-ui/react'
const ExperienceItem = (props) => {
  const { colorMode, setColorMode } = useColorMode();

  return (
    <Box py={3}>
      <Card 
        direction='row' 
        align='start' 
        variant='unstyled'
      >
        <Image
          objectFit='contain'
          w={{ base: '100px'}}
          src={process.env.PUBLIC_URL + props.src}
          alt='Caffe Latte'
          pr={5}
        />
        <CardBody>
          <Text as='b'>{props.title}</Text>
          <br />
          <Text as='i'>{props.company}</Text>
          <Text>{props.date}</Text>
          <Text pb={2}></Text>
          {
            props.description.map((bullet, idx) => {
              return (
                <Text 
                  key={idx}
                  color={ colorMode === 'light' ? 'black' : 'gray.400'}
                >
                  {bullet}
                </Text>
              )
            })
          }
        </CardBody>
      </Card>
    </Box>
  )
}

export default ExperienceItem;