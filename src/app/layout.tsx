import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Box } from "@mui/material";
import MuiThemeProvider from "@/components/mui-theme-provider";

import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Cortado: Order Ticket",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      translate="no"
      // className={`${geistSans.variable} ${geistMono.variable}`}
      // style={{
      //   fontFamily: "var(--font-geist-sans), Arial, Helvetica, sans-serif",
      // }}
    >
      <head>
        <meta name="google" content="notranslate" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="language" content="English" />
      </head>
      <body style={{ fontFamily: "inherit" }}>
        <MuiThemeProvider>
          <Box
            component={"main"}
            style={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
              // fontFamily: "var(--font-geist-sans), sans-serif",
            }}
          >
            <Header />
            <Box sx={{ flex: 1 }}>{children}</Box>
            <Footer />
          </Box>
        </MuiThemeProvider>
      </body>
    </html>
  );
}
