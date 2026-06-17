import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ChatWidget from "@/components/ChatWidget"; // <-- 1. IMPORT CHAT WIDGET DI SINI

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Sekalian kita ubah judul tab browsernya biar keren!
export const metadata: Metadata = {
  title: "Riyan Sandi | Command Center",
  description: "Portfolio of Riyan Sandi Prayoga - AI Engineer & Full-Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <ChatWidget /> {/* <-- 2. LETAKKAN CHAT WIDGET DI SINI */}
      </body>
    </html>
  );
}