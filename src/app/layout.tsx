import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ChakraUIProvider } from "@/lib/providers/chakra-provider";
import { Navbar } from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Box } from "@chakra-ui/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rajasthan Recruitment",
  icons: {
    icon: '/rr.png'
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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
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
              <Box flex="1">
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
