import type { Metadata } from "next";
import { ChakraUIProvider } from "@/lib/providers/chakra-provider";
import { Navbar } from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Box } from "@chakra-ui/react";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Rajasthan Recruitment",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Rajasthan Recruitment",
    description: "Your portal for Rajasthan government jobs.",
    url: "https://rajasthanrecruitment.in",
    siteName: "Rajasthan Recruitment",
    images: [
      {
        url: "https://rajasthanrecruitment.in/logo.png",
        width: 1200,
        height: 630,
        alt: "Rajasthan Recruitment Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajasthan Recruitment",
    description: "Latest government jobs in Rajasthan.",
    images: ["https://rajasthanrecruitment.in/logo.png"],
  },
  description:
    "Stay updated with the latest Rajasthan government job vacancies, exam results, admit cards, and answer keys. Your one-stop portal for accurate and timely recruitment updates across Rajasthan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <Script id="organization-logo" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Rajasthan Recruitment",
            url: "https://rajasthanrecruitment.in",
            logo: "https://rajasthanrecruitment.in/logo.png",
          })}
        </Script>
        <meta
          name="google-adsense-account"
          content="ca-pub-3383607348636418"
        ></meta>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3383607348636418"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-3383607348636418"
          data-ad-slot="4947860603"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
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
