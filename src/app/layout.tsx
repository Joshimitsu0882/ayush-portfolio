import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ayush Joshi | Product · Delivery · Strategy",
  description: "Portfolio of Ayush Joshi - Product Thinker, Delivery Executor, Strategy Translator.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased mobile-first`}
      >
        {children}
      </body>
    </html>
  );
}
