import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import localfont from "next/font/local";
import { ClerkProvider } from '@clerk/nextjs'
import { CartProvider } from "@/components/context/CartContext";

export const metadata: Metadata = {
  title: "Nike Website",
  description: "This is the Nike Ecommerce Website",
};

const helvetica = localfont({
  src: [
    {
      path: "./fonts/Helvetica.otf",
      weight: "600",
    },
  ],
  variable: "--font-helvetica",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${helvetica.variable} antialiased`}>
        
        <ClerkProvider>
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
          </CartProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}