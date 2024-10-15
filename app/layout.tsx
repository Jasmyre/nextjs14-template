import React from "react";

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const BASE_URL =
  process.env.Base_URL ?? "err:Envronment_Variable_Is_Not_Defined";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  keywords: ["put", "some", "keywords", "here"],
  title: {
    default: "Title",
    template: "%s | Title",
  },
  description:
    "Define a description here",
  openGraph: {
    title: "Title",
    url: new URL(BASE_URL),
    images: [
      {
        url: "/image.png",
        width: 1200,
        height: 630,
        alt: "Thumbnail image for " + process.env.BASE_URL,
      },
    ],
    description:
      "Define a description here",
  },
  other: {
    "google-site-verification": "Z_jFqVnsRqmwaQwrIPd9ey7fdRY4tunPiojllRX0yI0",
  },
};

console.log(BASE_URL);

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
