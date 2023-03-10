"use client";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { hotjar } from "react-hotjar";
import { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import theme from "@/theme";

export default function RootLayout({ children }) {
  useEffect(() => {
    hotjar.initialize(process.env.NEXT_PUBLIC_HJID, process.env.NEXT_PUBLIC_HJSV);
  }, []);

  return (
    <>
      <GoogleAnalytics trackPageViews />
      <html lang="en">
        {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
        <head />
        <body>
          <ChakraProvider theme={theme}>
            <Navbar />
            {children}
            <Footer />
          </ChakraProvider>
        </body>
      </html>
    </>
  );
}
