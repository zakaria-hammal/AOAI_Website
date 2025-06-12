import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AOAI",
  description: "The Algerian Olympiad in Artificial Intelignece selects the Algerian students who represent Algeria in the international high school AI competitions as IOAI",
  keywords: "AI, IOAI, Artificial Intelignece, Python, Mathematics, Olympiad, Algeria"
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
        <Suspense fallback={< Loading />}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
