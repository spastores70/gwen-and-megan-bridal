import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://gwen-megan-bridal.spastores70.chatgpt.site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Gwen & Megan Bridal | Wedding Style, Dresses & Inspiration",
  description:
    "Discover wedding dresses, bridesmaid colors, mother-of-the-bride looks, and bridal inspiration curated by Gwen & Megan Bridal.",
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Gwen & Megan Bridal",
    title: "Gwen & Megan Bridal | Wedding Style, Dresses & Inspiration",
    description:
      "Discover wedding dresses, bridesmaid colors, mother-of-the-bride looks, and bridal inspiration curated by Gwen & Megan Bridal.",
    images: [
      {
        url: "/women/hero-bride.png",
        width: 1693,
        height: 929,
        alt: "Elegant bridal fashion curated by Gwen & Megan Bridal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gwen & Megan Bridal | Wedding Style, Dresses & Inspiration",
    description:
      "Discover wedding dresses, bridesmaid colors, mother-of-the-bride looks, and bridal inspiration curated by Gwen & Megan Bridal.",
    images: ["/women/hero-bride.png"],
  },
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
        <Script
          src="https://www.anrdoezrs.net/am/101845352/include/allCj/generate/onLoad/sid/7994525/impressions/page/am.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
