'use client'
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full bg-[#EAE8DC]" lang="en">
      <body className={`flex-col min-h-screen`} suppressHydrationWarning ={true}>
        <main className="w-full flex-grow m-auto">
            {children}
        </main>

      </body>
    </div>
  );
}