import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saptaloka Digital",
  description: "Lead your business to digital transformation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div
          className="w-full h-full bg-repeat-y bg-cover"
          style={{ backgroundImage: "url(/bg.png)" }}
        >
          <div className="w-full h-full absolute">{children}</div>
          <Navbar />
        </div>
      </body>
    </html>
  );
}
