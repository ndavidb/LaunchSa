import "@mantine/core/styles.css";
import React from "react";
import {Inter} from "next/font/google"

import {
  MantineProvider,
  ColorSchemeScript,
  mantineHtmlProps,
} from "@mantine/core";
import { theme } from "../theme";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

export const metadata = {
  title: "Launch Online SA",
  description: "I am using Mantine with Next.js!",
};

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body className={inter.className}>
        <MantineProvider theme={theme}>
          <Header />
          {children}
          <Footer />
          </MantineProvider>
      </body>
    </html>
  );
}
