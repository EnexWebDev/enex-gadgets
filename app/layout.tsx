import React from "react";
import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import { Inter } from "next/font/google";
import "./globals.css";
import WhatsAppFloat from "@/components/whatsapp-float";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ENEX GADGETS - Your Trusted Gadget Plug in Lagos",
  description:
    "Buy, sell, swap, and repair gadgets at ENEX GADGETS. Located in Computer Village, Ikeja, Lagos. Fast, affordable, and reliable service.",
  generator: 'v0.app'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}