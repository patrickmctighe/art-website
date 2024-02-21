import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Art Site",
  description: "A site for art",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen w-screen  bg-gradient-to-r from-emerald-50 to-emerald-500">

      <header className="flex justify-around items-center h-20 glass ">
        <Image src="/logoArt.png" alt="logo" width={200} height={300}/>
        <nav className="flex justify-between items-center gap-10">
<Link className="btn btn-active btn-ghost"href="/">About</Link>
<Link className="btn btn-active btn-ghost" href="/art">Art</Link>
<Link className="btn btn-active btn-ghost" href="/contact">Contact</Link>
        </nav>
        </header >
        <div className="h-4/5 w-full flex items-center justify-center">
        {children}
        </div>
        </body>
  
    </html>
  );
}
