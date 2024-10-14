

import React from "react";

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import FollowCursor from "../components/FollowCursur";

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

export const metadata: Metadata = {
  metadataBase: new URL(String (process.env.BASE_URL)),
  keywords: [
    "search4movies",
    "search for movies",
    "search 4 movies",
    "jasmyre search4movies",
  ],
  title: {
    default: "Search4Movies",
    template: "%s | Search4Movies",
  },
  description:
    "Your Ultimate Movie Discovery Tool. Search for movies, explore genres, read reviews, and discover new favorites with just a few clicks. the go-to platform for all your movie searching needs.",
  openGraph: {
	title: "Title",
	url: new URL(String (process.env.BASE_URL)),
    images: [
      {
        url: "/image.png",
        width: 1200,
        height: 630,
        alt: "Thumbnail image for " + process.env.BASE_URL,
      },
    ],
    description:
      "Your Ultimate Movie Discovery Tool. Search for movies, explore genres, read reviews, and discover new favorites with just a few clicks. the go-to platform for all your movie searching needs.",
  },
  other: {
    "google-site-verification": "Z_jFqVnsRqmwaQwrIPd9ey7fdRY4tunPiojllRX0yI0",
  },
};

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
          <FollowCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
