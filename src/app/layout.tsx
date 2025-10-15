import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vegas All Nite - Premier VIP Concierge & Nightlife Service",
  description: "Experience Las Vegas like a true insider with Vegas All Nite. VIP access to nightclubs, dayclubs, bachelor parties, and exclusive experiences. 24/7 concierge service.",
  keywords: ["Vegas VIP", "Las Vegas nightlife", "VIP concierge", "nightclub access", "bachelor party", "bachelorette party", "Vegas packages"],
  openGraph: {
    title: "Vegas All Nite - Premier VIP Concierge Service",
    description: "Your gateway to exclusive Las Vegas experiences",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
        <Analytics />
      </body>
    </html>
  );
}
