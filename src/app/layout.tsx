import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import GravityParticles from "../components/GravityParticles";
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
  title: "CryptoBrains",
  description: "CryptoBrains",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative bg-black text-white min-h-screen">
        <GravityParticles />
        {children}
      </body>
    </html>
  );
}
