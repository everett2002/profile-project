// theme.ts

// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'dark'
}

// 3. extend the theme
const theme = extendTheme({ 
  config,
  fontSizes: {
    "6xl": "4.5rem",
    "7xl": "6rem", // Define your custom font size here
  },
 })

export default theme