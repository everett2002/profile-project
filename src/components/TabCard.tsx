import { Tab, Tabs, TabList, TabPanel, TabPanels } from '@chakra-ui/react'

const TabCard = () => {
  return (
    <Tabs variant={'enclosed'} bg={'whiteAlpha.50'}>
        <TabList>
            <Tab>One</Tab>
            <Tab>Two</Tab>
        </TabList>
        <TabPanels>
            <TabPanel>
                <p>One!</p>
            </TabPanel>
            <TabPanel>
                <p>Two!</p>
            </TabPanel>
            <TabPanel>
                <p>Three!</p>
            </TabPanel>
        </TabPanels>
    </Tabs>
  )
}

export default TabCard