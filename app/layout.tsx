import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/header";

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Image compressor and background remover",
  description: "Compress Image and  Remove background from image",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-50 text-gray-900 antialiased flex flex-col h-screen`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
