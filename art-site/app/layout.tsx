import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
      <body className={inter.className}>

      <header className="flex justify-around items-center h-9 ">
        <h1>Jim McTighe</h1>
        <nav className="flex justify-between items-center gap-10">
<Link href="/">About</Link>
<Link href="/art">Art</Link>
<Link href="/contact">Contact</Link>
        </nav>
        </header>
        {children}
        
        </body>
  
    </html>
  );
}
