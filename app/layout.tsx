import type { Metadata } from "next";
import { Cormorant_Garamond, Poppins } from "next/font/google";
import "./globals.css";
import LayoutWithSidebar from "./LayoutWithSidebar";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant-garamond",
  weight: ["400", "500", "600"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Virtual Aviator Hub: Your All-in-One Aviation Learning Platform",
  description:
    "Discover over 180 expertly curated aviation topics. From beginner basics to advanced techniques in flight simulation and real-world aviation, Virtual Aviator Hub is your ultimate learning platform.",
  keywords:
    "aviation learning, flight simulation, pilot training, beginner aviation, advanced flight techniques, ATC communication, autopilot systems, weather dynamics",
  openGraph: {
    title: "Virtual Aviator Hub",
    description:
      "Master aviation and flight simulation with Virtual Aviator Hub. Access clear, expert-guided content for all skill levels.",
    url: "https://www.virtualaviatorhub.com",
    images: [
      {
        url: "/path-to-your-open-graph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Virtual Aviator Hub - Your Ultimate Aviation Learning Platform",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Virtual Aviator Hub",
    description:
      "Master aviation and flight simulation with Virtual Aviator Hub. Access clear, expert-guided content for all skill levels.",
    images: [
      {
        url: "/path-to-your-twitter-image.jpg",
        width: 800,
        height: 418,
        alt: "Virtual Aviator Hub - Your Ultimate Aviation Learning Platform",
      },
    ],
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
        className={`${cormorantGaramond.variable} ${poppins.variable} bg-neutral-100 antialiased`}
      >
        <LayoutWithSidebar>{children}</LayoutWithSidebar>
      </body>
    </html>
  );
}
