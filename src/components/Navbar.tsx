import { HStack , Button, Spacer, Heading } from "@chakra-ui/react"
import ColorModeSwitch from "./ColorModeSwitch"


const Navbar = () => {

  return (
    <HStack padding={5}>
    <Heading size='md'>./everettho</Heading>
    <Spacer></Spacer>
    {/* <Button colorScheme='gray' variant='ghost'>
    Projects
    </Button> */}

    <ColorModeSwitch ></ColorModeSwitch>
    
  </HStack>
  )
}

export default Navbar