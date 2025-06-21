import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ChakraUIProvider } from "@/lib/providers/chakra-provider";

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
          {children}
        </ChakraUIProvider>
      </body>
    </html>
  );
}
