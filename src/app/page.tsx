import { Box, Heading } from "@chakra-ui/react"
// import './App.css'
import { FrontPage } from "@/components/FrontPage"
import { HomePageTabs } from "@/components/HomePageTabs"
import BlogHome from "@/components/BlogHome"
import { Navbar } from "@/components/NavBar"
import Footer from "@/components/Footer"

function App() {
  return (
    <Box className="App" minH="100vh" position={'relative'} p={2}>
      <Navbar />
      <FrontPage />
      <Box position={'relative'}>
        <HomePageTabs />
      </Box>
      <Box display={'block'} widows={'full'}>
        <Heading mt={4} p={2} size={'3xl'} color={'#5d93fe'} >Latest Blogs</Heading>
        <BlogHome />
      </Box>
      <Footer />
    </Box>
  )
}

export default App 