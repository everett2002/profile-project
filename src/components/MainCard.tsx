import { Container, Heading, HStack, Center, useColorModeValue } from '@chakra-ui/react'
import { FaYoutube, FaGithub, FaLinkedin} from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import Links from './Links'

const MainCard = () => {
  const headingSize = { base: "6xl", md: "7xl"};
    const color = useColorModeValue('gray.800', 'white')

  return (
    <Container flexDirection='column'>
        <Heading fontSize={headingSize}  color={color} paddingBottom={2}><Center>Everett Ho</Center></Heading>
        <HStack justifyContent='space-evenly'>
            <Links icon={FaYoutube} color={color} site='https://www.youtube.com/channel/UCpeziOPFz7X6op_0NUN48Pg'></Links>
            <Links icon={FaGithub} color={color} site='https://github.com/everett2002'></Links>
            <Links icon={GrMail} color={color} site='mailto:everettho2002@gmail.com'></Links>
            <Links icon={FaLinkedin} color={color} site='https://www.linkedin.com/in/everett-ho-ab97b219b/'></Links>
        </HStack>
    </Container>
  )
}

export default MainCard