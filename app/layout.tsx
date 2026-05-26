import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/_ui/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "pk holdings",
  description: "pk holdings is a technology company that specializes in developing innovative solutions for various industries. With a focus on cutting-edge technologies such as artificial intelligence, blockchain, and cloud computing, pk holdings aims to revolutionize the way businesses operate and enhance their efficiency. The company is committed to delivering high-quality products and services that meet the evolving needs of its clients, while also fostering a culture of creativity and collaboration among its team members.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} h-full antialiased`}
    >
      <Navbar/>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
