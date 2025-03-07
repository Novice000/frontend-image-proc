import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Image compressor and background remover",
  description: "Compress Image and  Remove background from image",
};

const queryclient = new QueryClient();
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-50 text-gray-900 antialiased flex flex-col min-h-screen`}
      >
        <Header/>
        {children}
        <Toaster className="bg-white text-greeen" />
        <Footer/>
      </body>
    </html>
  );
}
