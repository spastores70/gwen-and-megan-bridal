import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gwen & Megan Bridal | Wedding Style, Dresses & Inspiration",
  description:
    "Discover wedding dresses, bridesmaid colors, mother-of-the-bride looks, and bridal inspiration curated by Gwen & Megan Bridal.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/brand/gwen-megan-monogram.png",
    shortcut: "/brand/gwen-megan-monogram.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
