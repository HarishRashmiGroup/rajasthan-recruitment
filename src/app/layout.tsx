import type { Metadata } from "next";
import "./globals.css";
import { ChakraUIProvider } from "@/lib/providers/chakra-provider";
import { Navbar } from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Box } from "@chakra-ui/react";


export const metadata: Metadata = {
  title: "Rajasthan Recruitment",
  icons: {
    icon: '/favicon.ico'
  },
  description: "Stay updated with the latest Rajasthan government job vacancies, exam results, admit cards, and answer keys. Your one-stop portal for accurate and timely recruitment updates across Rajasthan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ChakraUIProvider>
          <Box w="full" display="flex" justifyContent="center">
            <Box
              maxW="1600px"
              w="full"
              minH="100vh"
              display="flex"
              flexDirection="column"
              boxShadow="0px 8px 1000px #DEE9FF"
            >
              <Box flex="1" >
                <Navbar />
                {children}
              </Box>
              <Footer />
            </Box>
          </Box>
        </ChakraUIProvider>
      </body>
    </html>
  );
}
