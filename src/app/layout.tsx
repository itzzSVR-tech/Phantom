import type { Metadata } from "next";
import { Nova_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const novaMono = Nova_Mono({
  variable: "--font-nova-mono",
  subsets: ["latin"],
  weight: '400'
})

export const metadata: Metadata = {
  title: "Phantom 👻",
  description: "A Self Destructing Private Chat Room",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${novaMono.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
