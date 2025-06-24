import { Box, Heading } from "@chakra-ui/react"
import { FrontPage } from "@/components/FrontPage"
import { HomePageTabs } from "@/components/HomePageTabs"
import BlogHome from "@/components/BlogHome"

function App() {
  return (
    <Box className="App" minH="100vh" position={'relative'}>
      <FrontPage />
      <Box position={'relative'} m={{ base: 2, md: 4 }}>
        <HomePageTabs />
      </Box>
      <Box display={'block'} m={{ base: 2, md: 4 }}>
        <Heading mt={4} p={2} size={'3xl'} color={'#5d93fe'} >Latest Blog Posts on Career, Education & Government Jobs</Heading>
        <BlogHome />
      </Box>
    </Box>
  )
}

export default App 