import { extendTheme} from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'Work Sans', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  initialColorMode: 'dark',
  useSystemColorMode: true,
  styles: {
    global: {
      body: {
        transitionProperty: "all",
        transitionDuration: "normal"
      }
    }
  },
  config: {
    disableTransitionOnChange: false
  }
})

export default theme
