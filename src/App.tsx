import './App.css'
import { Grid, GridItem, Center, Container, Spacer, Heading, Stack, Box  } from '@chakra-ui/react'
import Navbar from './components/Navbar.tsx'
// import TabCard from './components/TabCard.tsx'
import MainCard from './components/MainCard.tsx'
import { FaCopyright } from 'react-icons/fa'

function App() {

  return <>
    <Grid templateAreas={{
      base: `"nav" "main"`
    }} h='80vh'>
        <GridItem area="nav">
          <Navbar/>
        </GridItem>
        <GridItem area="main" h='1fr'>
        <Center color='white'>
          <MainCard></MainCard>
        </Center>
        </GridItem>
    </Grid>
    <Spacer h={'20vh'}/>
    <Container h={'5vh'}>
      <Center>
      <Heading fontSize='1rem' display={'inline'}>
      Everett Ho
      </Heading>  
      <Box mx={1} />
      <FaCopyright />
      </Center>  
    </Container>
    </>
  
}

export default App
