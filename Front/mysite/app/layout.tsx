'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full bg-[#EAE8DC]" lang="en">
      <body className={`flex-col min-h-screen`} suppressHydrationWarning ={true}>
          

        <main className="w-full flex-grow m-auto">
            {children}
        </main>

      </body>
    </html>
  );
}